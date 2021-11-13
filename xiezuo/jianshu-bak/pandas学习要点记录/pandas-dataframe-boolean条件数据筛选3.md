

```python
import pandas as pd
import numpy as np
from tabulate import tabulate
```

## pandas dataframe boolean条件数据筛选3


```python
df=pd.read_csv('data/stackoverflow_qa.csv')
dd=df.head()
print(tabulate(dd,headers=df.columns,tablefmt='pipe'))
```

    |    |      id | creationdate        |   score |   viewcount | title                                                                               |   answercount |   commentcount |   favoritecount | quest_name     |   quest_rep | ans_name        |   ans_rep |
    |---:|--------:|:--------------------|--------:|------------:|:------------------------------------------------------------------------------------|--------------:|---------------:|----------------:|:---------------|------------:|:----------------|----------:|
    |  0 | 5486226 | 2011-03-30 12:26:50 |       4 |        2113 | Rolling median in python                                                            |             3 |              4 |               1 | yueerhu        |         125 | Mike Pennington |     26995 |
    |  1 | 5515021 | 2011-04-01 14:50:44 |       8 |        7015 | Compute a compounded return series in Python                                        |             3 |              6 |               7 | Jason Strimpel |        3301 | Mike Pennington |     26995 |
    |  2 | 5558607 | 2011-04-05 21:13:50 |       2 |        7392 | Sort a pandas DataMatrix in ascending order                                         |             2 |              0 |               1 | Jason Strimpel |        3301 | Wes McKinney    |     43310 |
    |  3 | 6467832 | 2011-06-24 12:31:45 |       9 |       13056 | How to get the correlation between two timeseries using Pandas                      |             1 |              0 |               7 | user814005     |         117 | Wes McKinney    |     43310 |
    |  4 | 7577546 | 2011-09-28 01:58:38 |       9 |        2488 | Using pandas, how do I subsample a large DataFrame by group in an efficient manner? |             1 |              0 |               5 | Uri Laserson   |         958 | HYRY            |     54137 |


+ 列与列之间的比较形成的筛选条件 
    - 筛选出 answercount > score 的数据 如下


```python
dd=df.loc[df['answercount']>df['score']].head()
print(tabulate(dd,headers=df.columns,tablefmt='pipe'))
```

    |    |       id | creationdate        |   score |   viewcount | title                                                                    |   answercount |   commentcount |   favoritecount | quest_name       |   quest_rep | ans_name               |   ans_rep |
    |---:|---------:|:--------------------|--------:|------------:|:-------------------------------------------------------------------------|--------------:|---------------:|----------------:|:-----------------|------------:|:-----------------------|----------:|
    | 10 |  8273092 | 2011-11-25 18:39:02 |       1 |        2333 | python: pandas install errors                                            |             2 |              0 |             nan | codingknob       |        2279 | codingknob             |      2279 |
    | 46 |  9927711 | 2012-03-29 14:42:42 |       1 |        1659 | Reading csv in python pandas and handling bad values                     |             3 |              0 |               2 | Dave31415        |         914 | eumiro                 |    104313 |
    | 54 | 10003171 | 2012-04-03 23:59:41 |       1 |         404 | What is an efficient way in pandas to do summaryBy(...,full.dimension=T) |             2 |              1 |             nan | LmW.             |         486 | Wes McKinney           |     43310 |
    | 59 | 10027719 | 2012-04-05 11:28:00 |       0 |         500 | Installing Pandas with Python 2.5 on Windows                             |             1 |              0 |             nan | JamesS           |         191 | Wes McKinney           |     43310 |
    | 77 | 10393447 | 2012-05-01 04:12:13 |       0 |         130 | Scope gotcha when dynamically adding methods in a loop                   |             2 |              0 |             nan | Chris Billington |         424 | Ignacio Vazquez-Abrams |    513959 |


+ iloc 中不能使用类似 df['answercount'] >2 的条件 来看一下原因


```python
s = df['answercount'] >2 
```


```python
s.head()
```




    0     True
    1     True
    2    False
    3    False
    4    False
    Name: answercount, dtype: bool




```python
type(s)
```




    pandas.core.series.Series



**上列中df['answercount'] >2返回的Series类型，index跟loc使用的index是一致的，
而iloc使用的是下标索引**
看下效果,会报错


```python
df.iloc[s]
```


    ---------------------------------------------------------------------------

    NotImplementedError                       Traceback (most recent call last)

    <ipython-input-10-9ddb204bb531> in <module>()
    ----> 1 df.iloc[s]
    

    ~/anaconda3/lib/python3.7/site-packages/pandas/core/indexing.py in __getitem__(self, key)
       1476 
       1477             maybe_callable = com._apply_if_callable(key, self.obj)
    -> 1478             return self._getitem_axis(maybe_callable, axis=axis)
       1479 
       1480     def _is_scalar_access(self, key):


    ~/anaconda3/lib/python3.7/site-packages/pandas/core/indexing.py in _getitem_axis(self, key, axis)
       2084 
       2085         if com.is_bool_indexer(key):
    -> 2086             self._validate_key(key, axis)
       2087             return self._getbool_axis(key, axis=axis)
       2088 


    ~/anaconda3/lib/python3.7/site-packages/pandas/core/indexing.py in _validate_key(self, key, axis)
       1945             if hasattr(key, 'index') and isinstance(key.index, Index):
       1946                 if key.index.inferred_type == 'integer':
    -> 1947                     raise NotImplementedError("iLocation based boolean "
       1948                                               "indexing on an integer type "
       1949                                               "is not available")


    NotImplementedError: iLocation based boolean indexing on an integer type is not available


**可以只使用series的values，如下**


```python
s.values
```




    array([ True,  True, False, ..., False, False, False])




```python
dd=df.iloc[s.values].head()
print(tabulate(dd,headers=df.columns,tablefmt='pipe'))
```

    |    |      id | creationdate        |   score |   viewcount | title                                                                      |   answercount |   commentcount |   favoritecount | quest_name     |   quest_rep | ans_name        |   ans_rep |
    |---:|--------:|:--------------------|--------:|------------:|:---------------------------------------------------------------------------|--------------:|---------------:|----------------:|:---------------|------------:|:----------------|----------:|
    |  0 | 5486226 | 2011-03-30 12:26:50 |       4 |        2113 | Rolling median in python                                                   |             3 |              4 |               1 | yueerhu        |         125 | Mike Pennington |     26995 |
    |  1 | 5515021 | 2011-04-01 14:50:44 |       8 |        7015 | Compute a compounded return series in Python                               |             3 |              6 |               7 | Jason Strimpel |        3301 | Mike Pennington |     26995 |
    |  7 | 7813132 | 2011-10-18 20:16:12 |      10 |       18917 | Convert array of string (category) to array of int from a pandas dataframe |             3 |              0 |               6 | Jean-Pat       |         882 | Wes McKinney    |     43310 |
    |  8 | 7837722 | 2011-10-20 14:46:14 |     201 |      223746 | What is the most efficient way to loop through dataframes with pandas?     |             8 |              3 |             115 | Muppet         |        1563 | Nick Crawford   |      2779 |
    | 12 | 8842114 | 2012-01-12 20:52:41 |       8 |        4009 | How to apply slicing on pandas Series of strings                           |             3 |              2 |               1 | davidbrai      |         934 | Rob Wouters     |     10083 |



```python
dd=df.iloc[s.values,[1,3,4]].head()
print(tabulate(dd,headers=df.columns,tablefmt='pipe'))
```

    |   id | creationdate        |   score | viewcount                                                                  |
    |-----:|:--------------------|--------:|:---------------------------------------------------------------------------|
    |    0 | 2011-03-30 12:26:50 |    2113 | Rolling median in python                                                   |
    |    1 | 2011-04-01 14:50:44 |    7015 | Compute a compounded return series in Python                               |
    |    7 | 2011-10-18 20:16:12 |   18917 | Convert array of string (category) to array of int from a pandas dataframe |
    |    8 | 2011-10-20 14:46:14 |  223746 | What is the most efficient way to loop through dataframes with pandas?     |
    |   12 | 2012-01-12 20:52:41 |    4009 | How to apply slicing on pandas Series of strings                           |



```python

```


```python

```
