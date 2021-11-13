```python
import pandas as pd
import numpy as np
from tabulate import tabulate
```

## 使用boolean indexing 筛选数据


```python
df= pd.read_csv('data/stackoverflow_qa.csv')
df.head()
```



```
|    |      id | creationdate        |   score |   viewcount | title                                                                               |   answercount |   commentcount |   favoritecount | quest_name     |   quest_rep | ans_name        |   ans_rep |
|---:|--------:|:--------------------|--------:|------------:|:------------------------------------------------------------------------------------|--------------:|---------------:|----------------:|:---------------|------------:|:----------------|----------:|
|  0 | 5486226 | 2011-03-30 12:26:50 |       4 |        2113 | Rolling median in python                                                            |             3 |              4 |               1 | yueerhu        |         125 | Mike Pennington |     26995 |
|  1 | 5515021 | 2011-04-01 14:50:44 |       8 |        7015 | Compute a compounded return series in Python                                        |             3 |              6 |               7 | Jason Strimpel |        3301 | Mike Pennington |     26995 |
|  2 | 5558607 | 2011-04-05 21:13:50 |       2 |        7392 | Sort a pandas DataMatrix in ascending order                                         |             2 |              0 |               1 | Jason Strimpel |        3301 | Wes McKinney    |     43310 |
|  3 | 6467832 | 2011-06-24 12:31:45 |       9 |       13056 | How to get the correlation between two timeseries using Pandas                      |             1 |              0 |               7 | user814005     |         117 | Wes McKinney    |     43310 |
|  4 | 7577546 | 2011-09-28 01:58:38 |       9 |        2488 | Using pandas, how do I subsample a large DataFrame by group in an efficient manner? |             1 |              0 |               5 | Uri Laserson   |         958 | HYRY            |     54137 |
```


+ 单纯的 boolean

*  条件列表


```python
conditions= [True,False,False,True,False]
df.head(5).loc[conditions]
```



```
|    |      id | creationdate        |   score |   viewcount | title                                                          |   answercount |   commentcount |   favoritecount | quest_name   |   quest_rep | ans_name        |   ans_rep |
|---:|--------:|:--------------------|--------:|------------:|:---------------------------------------------------------------|--------------:|---------------:|----------------:|:-------------|------------:|:----------------|----------:|
|  0 | 5486226 | 2011-03-30 12:26:50 |       4 |        2113 | Rolling median in python                                       |             3 |              4 |               1 | yueerhu      |         125 | Mike Pennington |     26995 |
|  3 | 6467832 | 2011-06-24 12:31:45 |       9 |       13056 | How to get the correlation between two timeseries using Pandas |             1 |              0 |               7 | user814005   |         117 | Wes McKinney    |     43310 |
```


**说明：第0条，第3条为true，其他为false**


```python
df.head(5)[conditions]
```



```
|    |      id | creationdate        |   score |   viewcount | title                                                          |   answercount |   commentcount |   favoritecount | quest_name   |   quest_rep | ans_name        |   ans_rep |
|---:|--------:|:--------------------|--------:|------------:|:---------------------------------------------------------------|--------------:|---------------:|----------------:|:-------------|------------:|:----------------|----------:|
|  0 | 5486226 | 2011-03-30 12:26:50 |       4 |        2113 | Rolling median in python                                       |             3 |              4 |               1 | yueerhu      |         125 | Mike Pennington |     26995 |
|  3 | 6467832 | 2011-06-24 12:31:45 |       9 |       13056 | How to get the correlation between two timeseries using Pandas |             1 |              0 |               7 | user814005   |         117 | Wes McKinney    |     43310 |
```


**上例说明：这个很容易让人混淆，这是要选择列还是行，个人习惯尽量不用**

 * 条件Series


```python
s=pd.Series([True,False,False,True,False])
s
```




    0     True
    1    False
    2    False
    3     True
    4    False
    dtype: bool




```python
df.head(5).loc[s]
```



```
|    |      id | creationdate        |   score |   viewcount | title                                                          |   answercount |   commentcount |   favoritecount | quest_name   |   quest_rep | ans_name        |   ans_rep |
|---:|--------:|:--------------------|--------:|------------:|:---------------------------------------------------------------|--------------:|---------------:|----------------:|:-------------|------------:|:----------------|----------:|
|  0 | 5486226 | 2011-03-30 12:26:50 |       4 |        2113 | Rolling median in python                                       |             3 |              4 |               1 | yueerhu      |         125 | Mike Pennington |     26995 |
|  3 | 6467832 | 2011-06-24 12:31:45 |       9 |       13056 | How to get the correlation between two timeseries using Pandas |             1 |              0 |               7 | user814005   |         117 | Wes McKinney    |     43310 |
```


**注意，series的index 要与被筛选的dataframe的index一致**
下面看例子


```python
s.index
```




    RangeIndex(start=0, stop=5, step=1)




```python
df.head(5).index
```




    RangeIndex(start=0, stop=5, step=1)



上边index是一致的,来看不一致的


```python
ss=pd.Series([True,False,False,True,False],index=[6,7,8,9,10])
ss
```




    6      True
    7     False
    8     False
    9      True
    10    False
    dtype: bool




```python
df.head(5).loc[ss]
```


    ---------------------------------------------------------------------------

    IndexingError                             Traceback (most recent call last)

    <ipython-input-11-a1fa0f97c715> in <module>()
    ----> 1 df.head(5).loc[ss]
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in __getitem__(self, key)
       1476 
       1477             maybe_callable = com._apply_if_callable(key, self.obj)
    -> 1478             return self._getitem_axis(maybe_callable, axis=axis)
       1479 
       1480     def _is_scalar_access(self, key):
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in _getitem_axis(self, key, axis)
       1866             return self._get_slice_axis(key, axis=axis)
       1867         elif com.is_bool_indexer(key):
    -> 1868             return self._getbool_axis(key, axis=axis)
       1869         elif is_list_like_indexer(key):
       1870 
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in _getbool_axis(self, key, axis)
       1491             axis = self.axis or 0
       1492         labels = self.obj._get_axis(axis)
    -> 1493         key = check_bool_indexer(labels, key)
       1494         inds, = key.nonzero()
       1495         try:
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in check_bool_indexer(ax, key)
       2354         mask = isna(result._values)
       2355         if mask.any():
    -> 2356             raise IndexingError('Unalignable boolean Series provided as '
       2357                                 'indexer (index of the boolean Series and of '
       2358                                 'the indexed object do not match')
    

    IndexingError: Unalignable boolean Series provided as indexer (index of the boolean Series and of the indexed object do not match


**报错，不匹配.所以尽量避免手写Series的index 可以 s=pd.Series([True,False,False,True,False],index=df.head(5).index) 代替**

 *  numpy arrays 条件


```python
a=np.array([True,False,False,True,False])
df.head(5).loc[a]
```



```
|    |      id | creationdate        |   score |   viewcount | title                                                          |   answercount |   commentcount |   favoritecount | quest_name   |   quest_rep | ans_name        |   ans_rep |
|---:|--------:|:--------------------|--------:|------------:|:---------------------------------------------------------------|--------------:|---------------:|----------------:|:-------------|------------:|:----------------|----------:|
|  0 | 5486226 | 2011-03-30 12:26:50 |       4 |        2113 | Rolling median in python                                       |             3 |              4 |               1 | yueerhu      |         125 | Mike Pennington |     26995 |
|  3 | 6467832 | 2011-06-24 12:31:45 |       9 |       13056 | How to get the correlation between two timeseries using Pandas |             1 |              0 |               7 | user814005   |         117 | Wes McKinney    |     43310 |
```


 * 使用不等式  > < >= <= == !=


```python
condit=df['score'] > 10
```


```python
condit.head()
```




    0    False
    1    False
    2    False
    3    False
    4    False
    Name: score, dtype: bool




```python
type(condit)
```




    pandas.core.series.Series




```python
df1=df.loc[condit]
df1.head()
```



```
|    |      id | creationdate        |   score |   viewcount | title                                                                  |   answercount |   commentcount |   favoritecount | quest_name     |   quest_rep | ans_name      |   ans_rep |
|---:|--------:|:--------------------|--------:|------------:|:-----------------------------------------------------------------------|--------------:|---------------:|----------------:|:---------------|------------:|:--------------|----------:|
|  6 | 7776679 | 2011-10-15 08:21:17 |      25 |       28159 | append two data frame with pandas                                      |             2 |              7 |               4 | Jean-Pat       |         882 | Wes McKinney  |     43310 |
|  8 | 7837722 | 2011-10-20 14:46:14 |     201 |      223746 | What is the most efficient way to loop through dataframes with pandas? |             8 |              3 |             115 | Muppet         |        1563 | Nick Crawford |      2779 |
| 14 | 8916302 | 2012-01-18 19:41:27 |      29 |       20614 | selecting across multiple columns with python pandas?                  |             3 |              0 |              14 | user248237dfsf |       19244 | Wes McKinney  |     43310 |
| 17 | 8991709 | 2012-01-24 17:59:53 |     136 |       16783 | Why are pandas merges in python faster than data.table merges in R?    |             3 |             16 |              60 | Zach           |       12484 | Matt Dowle    |     41275 |
| 24 | 9555635 | 2012-03-04 14:25:36 |      19 |        6604 | Open source Enthought Python alternative                               |             8 |              5 |               6 | tshauck        |        5957 | ogrisel       |     24990 |
```



```python
df.shape
```




    (56398, 12)




```python
df1.shape
```




    (1364, 12)



**本质上还是使用了相同index的Series进行条件筛选的**
使用链式方式 如下


```python
df.loc[df['score']>10].head()
```



```
|    |      id | creationdate        |   score |   viewcount | title                                                                  |   answercount |   commentcount |   favoritecount | quest_name     |   quest_rep | ans_name      |   ans_rep |
|---:|--------:|:--------------------|--------:|------------:|:-----------------------------------------------------------------------|--------------:|---------------:|----------------:|:---------------|------------:|:--------------|----------:|
|  6 | 7776679 | 2011-10-15 08:21:17 |      25 |       28159 | append two data frame with pandas                                      |             2 |              7 |               4 | Jean-Pat       |         882 | Wes McKinney  |     43310 |
|  8 | 7837722 | 2011-10-20 14:46:14 |     201 |      223746 | What is the most efficient way to loop through dataframes with pandas? |             8 |              3 |             115 | Muppet         |        1563 | Nick Crawford |      2779 |
| 14 | 8916302 | 2012-01-18 19:41:27 |      29 |       20614 | selecting across multiple columns with python pandas?                  |             3 |              0 |              14 | user248237dfsf |       19244 | Wes McKinney  |     43310 |
| 17 | 8991709 | 2012-01-24 17:59:53 |     136 |       16783 | Why are pandas merges in python faster than data.table merges in R?    |             3 |             16 |              60 | Zach           |       12484 | Matt Dowle    |     41275 |
| 24 | 9555635 | 2012-03-04 14:25:36 |      19 |        6604 | Open source Enthought Python alternative                               |             8 |              5 |               6 | tshauck        |        5957 | ogrisel       |     24990 |
```



```python
df.loc[df['ans_name']=='Scott Boston'].head()
```



```
|       |       id | creationdate        |   score |   viewcount | title                                                |   answercount |   commentcount |   favoritecount | quest_name   |   quest_rep | ans_name     |   ans_rep |
|------:|---------:|:--------------------|--------:|------------:|:-----------------------------------------------------|--------------:|---------------:|----------------:|:-------------|------------:|:-------------|----------:|
| 38161 | 43491342 | 2017-04-19 09:14:28 |       4 |         167 | Merging pandas dataframes based on nearest value(s)  |             1 |              0 |             nan | AkiRoss      |        3991 | Scott Boston |     23611 |
| 38178 | 43190850 | 2017-04-03 17:31:33 |       1 |         284 | Python Seaborn Plot ValueError                       |             2 |              3 |             nan | Ryan         |         545 | Scott Boston |     23611 |
| 38237 | 43176052 | 2017-04-03 03:21:12 |       2 |          39 | Convert an indexed pandas matrix to a flat dataframe |             2 |              0 |             nan | alvas        |       31923 | Scott Boston |     23611 |
| 38246 | 43209525 | 2017-04-04 14:03:17 |       5 |         131 | Pandas: Optimal way to MultiIndex columns            |             2 |              0 |               0 | sparc_spread |        5470 | Scott Boston |     23611 |
| 38275 | 43211893 | 2017-04-04 15:45:17 |       0 |          38 | How to calculate a index series for a event window   |             1 |              3 |             nan | zsljulius    |        1102 | Scott Boston |     23611 |
```



```python
df.loc[(df['ans_name']=='Scott Boston')&(df['score']>2)].head()
```



```
|       |       id | creationdate        |   score |   viewcount | title                                                               |   answercount |   commentcount |   favoritecount | quest_name       |   quest_rep | ans_name     |   ans_rep |
|------:|---------:|:--------------------|--------:|------------:|:--------------------------------------------------------------------|--------------:|---------------:|----------------:|:-----------------|------------:|:-------------|----------:|
| 38161 | 43491342 | 2017-04-19 09:14:28 |       4 |         167 | Merging pandas dataframes based on nearest value(s)                 |             1 |              0 |             nan | AkiRoss          |        3991 | Scott Boston |     23611 |
| 38246 | 43209525 | 2017-04-04 14:03:17 |       5 |         131 | Pandas: Optimal way to MultiIndex columns                           |             2 |              0 |               0 | sparc_spread     |        5470 | Scott Boston |     23611 |
| 38621 | 43240690 | 2017-04-05 20:07:29 |       3 |         210 | pandas data manipulation in python                                  |             2 |              0 |               1 | BigDataScientist |         360 | Scott Boston |     23611 |
| 38640 | 42870703 | 2017-03-18 05:06:22 |       5 |         125 | Simultaneous operation of groupby and resample on pandas dataframe? |             1 |              0 |               1 | S. Naribole      |          43 | Scott Boston |     23611 |
| 39223 | 42938535 | 2017-03-21 21:35:36 |       3 |         424 | python pandas resample count and sum                                |             2 |              0 |             nan | jeangelj         |         779 | Scott Boston |     23611 |
```



```python
df.loc[(df['ans_name']=='Scott Boston')|(df['score']<10)].head()
```



```
|    |      id | creationdate        |   score |   viewcount | title                                                                               |   answercount |   commentcount |   favoritecount | quest_name     |   quest_rep | ans_name        |   ans_rep |
|---:|--------:|:--------------------|--------:|------------:|:------------------------------------------------------------------------------------|--------------:|---------------:|----------------:|:---------------|------------:|:----------------|----------:|
|  0 | 5486226 | 2011-03-30 12:26:50 |       4 |        2113 | Rolling median in python                                                            |             3 |              4 |               1 | yueerhu        |         125 | Mike Pennington |     26995 |
|  1 | 5515021 | 2011-04-01 14:50:44 |       8 |        7015 | Compute a compounded return series in Python                                        |             3 |              6 |               7 | Jason Strimpel |        3301 | Mike Pennington |     26995 |
|  2 | 5558607 | 2011-04-05 21:13:50 |       2 |        7392 | Sort a pandas DataMatrix in ascending order                                         |             2 |              0 |               1 | Jason Strimpel |        3301 | Wes McKinney    |     43310 |
|  3 | 6467832 | 2011-06-24 12:31:45 |       9 |       13056 | How to get the correlation between two timeseries using Pandas                      |             1 |              0 |               7 | user814005     |         117 | Wes McKinney    |     43310 |
|  4 | 7577546 | 2011-09-28 01:58:38 |       9 |        2488 | Using pandas, how do I subsample a large DataFrame by group in an efficient manner? |             1 |              0 |               5 | Uri Laserson   |         958 | HYRY            |     54137 |
```





```python
df.loc[~((df['ans_name']=='Scott Boston')&(df['score']>2))].head()
```



```
|    |      id | creationdate        |   score |   viewcount | title                                                                               |   answercount |   commentcount |   favoritecount | quest_name     |   quest_rep | ans_name        |   ans_rep |
|---:|--------:|:--------------------|--------:|------------:|:------------------------------------------------------------------------------------|--------------:|---------------:|----------------:|:---------------|------------:|:----------------|----------:|
|  0 | 5486226 | 2011-03-30 12:26:50 |       4 |        2113 | Rolling median in python                                                            |             3 |              4 |               1 | yueerhu        |         125 | Mike Pennington |     26995 |
|  1 | 5515021 | 2011-04-01 14:50:44 |       8 |        7015 | Compute a compounded return series in Python                                        |             3 |              6 |               7 | Jason Strimpel |        3301 | Mike Pennington |     26995 |
|  2 | 5558607 | 2011-04-05 21:13:50 |       2 |        7392 | Sort a pandas DataMatrix in ascending order                                         |             2 |              0 |               1 | Jason Strimpel |        3301 | Wes McKinney    |     43310 |
|  3 | 6467832 | 2011-06-24 12:31:45 |       9 |       13056 | How to get the correlation between two timeseries using Pandas                      |             1 |              0 |               7 | user814005     |         117 | Wes McKinney    |     43310 |
|  4 | 7577546 | 2011-09-28 01:58:38 |       9 |        2488 | Using pandas, how do I subsample a large DataFrame by group in an efficient manner? |             1 |              0 |               5 | Uri Laserson   |         958 | HYRY            |     54137 |
```


**说明：&-与，|-或， ~ 非 都是位操作，所以每个条件都要带上（），类似(df['ans_name']=='Scott Boston')**


```html

```
