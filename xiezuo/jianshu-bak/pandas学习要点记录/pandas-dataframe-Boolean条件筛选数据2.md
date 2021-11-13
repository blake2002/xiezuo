## Boolean条件筛选数据2


```python
import pandas as pd
import numpy as np
from tabulate import tabulate
```


```python
df=pd.read_csv('data/stackoverflow_qa.csv')
print(tabulate(df.head(),headers=df.columns,tablefmt='simple'))
```

             id  creationdate           score    viewcount  title                                                                                  answercount    commentcount    favoritecount  quest_name        quest_rep  ans_name           ans_rep
    --  -------  -------------------  -------  -----------  -----------------------------------------------------------------------------------  -------------  --------------  ---------------  --------------  -----------  ---------------  ---------
     0  5486226  2011-03-30 12:26:50        4         2113  Rolling median in python                                                                         3               4                1  yueerhu                 125  Mike Pennington      26995
     1  5515021  2011-04-01 14:50:44        8         7015  Compute a compounded return series in Python                                                     3               6                7  Jason Strimpel         3301  Mike Pennington      26995
     2  5558607  2011-04-05 21:13:50        2         7392  Sort a pandas DataMatrix in ascending order                                                      2               0                1  Jason Strimpel         3301  Wes McKinney         43310
     3  6467832  2011-06-24 12:31:45        9        13056  How to get the correlation between two timeseries using Pandas                                   1               0                7  user814005              117  Wes McKinney         43310
     4  7577546  2011-09-28 01:58:38        9         2488  Using pandas, how do I subsample a large DataFrame by group in an efficient manner?              1               0                5  Uri Laserson            958  HYRY                 54137
    

+ 复杂的条件筛选
   - 条件1:score>=8 并且 ans_name 是以Mike开头
   - 条件2:answercount >=2 并且ans_name 是HYRY
   - 找出符合这两个条件的数据
   - 使用| 将条件1 和条件2 取并集 如下


```python
cond1=(df['score']>=8) &(df['ans_name'].str.startswith('Mike'))
cond2=(df['answercount']>=2) &(df['ans_name']=='HYRY')
cond3 =cond1 | cond2
aa=df.loc[cond3].head(10)
print(tabulate(aa,headers=df.columns,tablefmt='simple'))
```

                id  creationdate           score    viewcount  title                                                                                            answercount    commentcount    favoritecount  quest_name        quest_rep  ans_name           ans_rep
    ----  --------  -------------------  -------  -----------  ---------------------------------------------------------------------------------------------  -------------  --------------  ---------------  --------------  -----------  ---------------  ---------
       1   5515021  2011-04-01 14:50:44        8         7015  Compute a compounded return series in Python                                                               3               6                7  Jason Strimpel         3301  Mike Pennington      26995
     216  11619144  2012-07-23 19:26:32        0          613  Pandas xaxis auto-format issue                                                                             2               0              nan  joelhoro                379  HYRY                 54137
     722  13978682  2012-12-20 18:57:18        2         1382  Change Categorical Variable levels to What I provide/Combine levels two categorical variables              3               0              nan  Tom Bennett             574  HYRY                 54137
     932  15126679  2013-02-28 03:00:33        4         9115  Plot key count per unique value count in pandas                                                            2               0                1  monkut                22867  HYRY                 54137
     937  15581829  2013-03-23 00:16:32        6         9456  how to perform an inner or outer join of DataFrames with Pandas on non-simplistic criterion                2               0                6  zzzeek                41696  HYRY                 54137
     962  17778394  2013-07-22 00:31:30       16        11317  List Highest Correlation Pairs from a Large Correlation Matrix in Pandas?                                  4               0                3  Kyle Brandt            8282  HYRY                 54137
    1343  18070520  2013-08-06 01:42:47        1          536  pandas memory usage when reindexing                                                                        2               2              nan  Andrea Zonca           3904  HYRY                 54137
    1373  15856213  2013-04-06 21:28:12        5         1896  What is the equivalent to R's match() for python Pandas/numpy?                                             3               0                1  Solomon                 546  HYRY                 54137
    1549  17401197  2013-07-01 09:29:11        2         1255  How to speed up Pandas multilevel dataframe shift by group?                                                3               0              nan  bigbug                 7865  HYRY                 54137
    1589  15374261  2013-03-12 23:28:23        2         2087  pandas dataframe groupby a number of rows                                                                  2               0                1  seumas                  377  HYRY                 54137
    

+ isin的使用
    - 找出 ans_name 是Mike Pennington，Wes McKinney， HYRY 的数据 如下


```python
aa=df.loc[df['ans_name'].isin(['Mike Pennington','Wes McKinney','HYRY'])].head()
print(tabulate(aa,headers=df.columns,tablefmt='simple'))
```

             id  creationdate           score    viewcount  title                                                                                  answercount    commentcount    favoritecount  quest_name        quest_rep  ans_name           ans_rep
    --  -------  -------------------  -------  -----------  -----------------------------------------------------------------------------------  -------------  --------------  ---------------  --------------  -----------  ---------------  ---------
     0  5486226  2011-03-30 12:26:50        4         2113  Rolling median in python                                                                         3               4                1  yueerhu                 125  Mike Pennington      26995
     1  5515021  2011-04-01 14:50:44        8         7015  Compute a compounded return series in Python                                                     3               6                7  Jason Strimpel         3301  Mike Pennington      26995
     2  5558607  2011-04-05 21:13:50        2         7392  Sort a pandas DataMatrix in ascending order                                                      2               0                1  Jason Strimpel         3301  Wes McKinney         43310
     3  6467832  2011-06-24 12:31:45        9        13056  How to get the correlation between two timeseries using Pandas                                   1               0                7  user814005              117  Wes McKinney         43310
     4  7577546  2011-09-28 01:58:38        9         2488  Using pandas, how do I subsample a large DataFrame by group in an efficient manner?              1               0                5  Uri Laserson            958  HYRY                 54137
    

 + 
    - 条件1： ans_name 是Wes McKinney， HYRY 的数据
    - 条件2： score=9
    - 找出符合条件1并且符合条件2的数据，如下


```python
aa=df.loc[df['ans_name'].isin(['Wes McKinney','HYRY']) & (df['score']==9)].head()
print(tabulate(aa,headers=df.columns,tablefmt='simple'))
```

               id  creationdate           score    viewcount  title                                                                                  answercount    commentcount    favoritecount  quest_name        quest_rep  ans_name        ans_rep
    ---  --------  -------------------  -------  -----------  -----------------------------------------------------------------------------------  -------------  --------------  ---------------  --------------  -----------  ------------  ---------
      3   6467832  2011-06-24 12:31:45        9        13056  How to get the correlation between two timeseries using Pandas                                   1               0                7  user814005              117  Wes McKinney      43310
      4   7577546  2011-09-28 01:58:38        9         2488  Using pandas, how do I subsample a large DataFrame by group in an efficient manner?              1               0                5  Uri Laserson            958  HYRY              54137
    140  11037895  2012-06-14 16:58:42        9         1144  How can I generalize my pandas data grouping to more than 3 dimensions?                          1               0                4  Tim Whitcomb           7432  Wes McKinney      43310
    457  12950024  2012-10-18 08:14:42        9         1070  Add a column with a groupby on a hierarchical dataframe                                          1               2                6  Rutger Kassies        21364  Wes McKinney      43310
    584  13419822  2012-11-16 15:43:15        9        12248  pandas dataframe, copy by value                                                                  1               0                4  Andrew                  248  Wes McKinney      43310
    

+ isnull 的使用
    - 找出ans_name 为null的数据 如下


```python
aa=df.loc[df.ans_name.isnull()].head()
print(tabulate(aa,headers=df.columns,tablefmt='simple'))
```

             id  creationdate           score    viewcount  title                                                                    answercount    commentcount    favoritecount  quest_name             quest_rep    ans_name    ans_rep
    --  -------  -------------------  -------  -----------  ---------------------------------------------------------------------  -------------  --------------  ---------------  -------------------  -----------  ----------  ---------
     5  7766400  2011-10-14 10:33:54        2          977  Pandas + Django + mod_wsgi + virtualenv                                            1               2                1  Evan Davey                   100         nan        nan
    11  8451327  2011-12-09 20:27:24        1         2435  Python map() function output into Pandas DataFrame                                 1               0                1  briant57                       6         nan        nan
    16  8966871  2012-01-23 03:21:00        0          287  Running Python/Numpy/Pandas on older secure computer                               0               3              nan  Casey                         16         nan        nan
    29  9641916  2012-03-09 22:36:52        7         5519  Python Pandas: can't find numpy.core.multiarray when importing pandas              4               2              nan  Dylan Cutler                  41         nan        nan
    30  9647656  2012-03-10 15:35:26        3          986  Pandas dataframe in mixed mode can't serialize to hdf5?                            1               0              nan  David van Coevorden           45         nan        nan
    

**说明：isnull和isna 方法等同，isna是isnull的别名**
## boolean条件选择在Series中的应用


```python
ss=df['commentcount']
ss.head()
```




    0    4
    1    6
    2    0
    3    0
    4    0
    Name: commentcount, dtype: int64



+ 找出commentcount>10的数据 如下


```python
cond=ss>10
cond.head()
```




    0    False
    1    False
    2    False
    3    False
    4    False
    Name: commentcount, dtype: bool




```python
ss[cond].head()
```




    17     16
    76     14
    566    11
    763    12
    781    19
    Name: commentcount, dtype: int64




```python
ss.loc[cond].head()
```




    17     16
    76     14
    566    11
    763    12
    781    19
    Name: commentcount, dtype: int64




```python
ss.loc[ss>10].head()
```




    17     16
    76     14
    566    11
    763    12
    781    19
    Name: commentcount, dtype: int64



+ 找出 commentcount>10 并且 <15的数据 如下


```python
ss.loc[(ss>10)&(ss<15)].head()
```




    76     14
    566    11
    763    12
    787    12
    837    13
    Name: commentcount, dtype: int64



+ between 的使用


```python
ss.loc[ss.between(10,15)].head()
```




    76     14
    566    11
    763    12
    764    10
    787    12
    Name: commentcount, dtype: int64



## 条件筛选（选择行列）
+ 找出 viewcount>15000 的这'creationdate', 'viewcount', 'ans_name'列数据 如下


```python
aa=df.loc[df.viewcount>15000,['creationdate', 'viewcount', 'ans_name']].head()
print(tabulate(aa,headers=df.columns,tablefmt='simple'))
```

      id  creationdate           score  viewcount
    ----  -------------------  -------  -------------
       6  2011-10-15 08:21:17    28159  Wes McKinney
       7  2011-10-18 20:16:12    18917  Wes McKinney
       8  2011-10-20 14:46:14   223746  Nick Crawford
      14  2012-01-18 19:41:27    20614  Wes McKinney
      17  2012-01-24 17:59:53    16783  Matt Dowle
    

+ 找出favoritecount 在20-50之间，并且返回隔行数据 如下


```python
aa=df.loc[df.viewcount.between(20,50),::2].head()
print(tabulate(aa,headers=df.columns,tablefmt='simple'))
```

      id    creationdate    score  viewcount                                                                    title  answercount      commentcount
    ----  --------------  -------  -------------------------------------------------------------------------  -------  ---------------  ----------------
     866        14444916        1  Pandas obtain share from DataFrame                                               0  Manuel Zompetta  Zelazny7
     981        18280947        1  How to do multiple column conversions on a Pandas Row in a DF in one pass        1  dartdog          Jeff
    1049        17233635        1  Joining 2 dataframes on a specific column with IDs                               0  user7289         waitingkuo
    1086        15006145       -1  Is it possible to have a data frame in which cells contain lists?                2  Roman            nan
    1332        16303918        0  How to perform key-restricted broadcast-operate-update in Pandas?                0  kjo              Wouter Overmeire
    

## 条件选择列


```python
df.shape
```




    (56398, 12)



+ 列表条件： 共12列 ，隔列选择


```python
co=[True,False]*6
co
```




    [True, False, True, False, True, False, True, False, True, False, True, False]




```python
aa=df.loc[:,co].head()
print(tabulate(aa,headers=df.columns,tablefmt='simple'))
```

      id    creationdate    score  viewcount                                                                              title  answercount     commentcount
    ----  --------------  -------  -----------------------------------------------------------------------------------  -------  --------------  ---------------
       0         5486226        4  Rolling median in python                                                                   4  yueerhu         Mike Pennington
       1         5515021        8  Compute a compounded return series in Python                                               6  Jason Strimpel  Mike Pennington
       2         5558607        2  Sort a pandas DataMatrix in ascending order                                                0  Jason Strimpel  Wes McKinney
       3         6467832        9  How to get the correlation between two timeseries using Pandas                             0  user814005      Wes McKinney
       4         7577546        9  Using pandas, how do I subsample a large DataFrame by group in an efficient manner?        0  Uri Laserson    HYRY
    

+ 字典条件


```python
col={'score':True,'commentcount':True}
```


```python
aa=df.loc[:,col].head()
print(tabulate(aa,headers=df.columns,tablefmt='simple'))
```

      id    creationdate    score
    ----  --------------  -------
       0               4        4
       1               8        6
       2               2        0
       3               9        0
       4               9        0
    

+ 选择出viewcount>10000，隔列显示


```python
aa=df.loc[df.viewcount>10000,co].head()
print(tabulate(aa,headers=df.columns,tablefmt='simple'))
```

      id    creationdate    score  viewcount                                                                     title  answercount     commentcount
    ----  --------------  -------  --------------------------------------------------------------------------  -------  --------------  --------------
       3         6467832        9  How to get the correlation between two timeseries using Pandas                    0  user814005      Wes McKinney
       6         7776679       25  append two data frame with pandas                                                 7  Jean-Pat        Wes McKinney
       7         7813132       10  Convert array of string (category) to array of int from a pandas dataframe        0  Jean-Pat        Wes McKinney
       8         7837722      201  What is the most efficient way to loop through dataframes with pandas?            3  Muppet          Nick Crawford
      14         8916302       29  selecting across multiple columns with python pandas?                             0  user248237dfsf  Wes McKinney
    

+ 选择都是int64类型的所有列的数据


```python
aa=df.loc[:,df.dtypes == 'int64'].head()
print(tabulate(aa,headers=df.columns,tablefmt='simple'))
```

      id    creationdate    score    viewcount    title    answercount
    ----  --------------  -------  -----------  -------  -------------
       0     5.48623e+06        4         2113        3              4
       1     5.51502e+06        8         7015        3              6
       2     5.55861e+06        2         7392        2              0
       3     6.46783e+06        9        13056        1              0
       4     7.57755e+06        9         2488        1              0
    


```python
df.dtypes
```




    id                 int64
    creationdate      object
    score              int64
    viewcount          int64
    title             object
    answercount        int64
    commentcount       int64
    favoritecount    float64
    quest_name        object
    quest_rep        float64
    ans_name          object
    ans_rep          float64
    dtype: object
