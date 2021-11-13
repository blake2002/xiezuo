

```python
import pandas as pd
import numpy as np
from tabulate import tabulate
```

## pandas 给dataframe 赋值操作1


```python
df = pd.read_csv('data/employee_sample.csv',index_col=0)
print(tabulate(df,headers=df.columns,tablefmt='simple'))
```

              GENDER    RACE    DEPARTMENT            YEARS EXPERIENCE    SALARY
    --------  --------  ------  ------------------  ------------------  --------
    Tom       Male      White   Engineering                         23    107962
    Niko      Male      Black   Engineering                          1     30347
    Penelope  Female    White   Engineering                         12     60258
    Aria      Female    Black   Engineering                          8     43618
    Sofia     Female    Black   Parks & Recreation                  23     26125
    Dean      Male      Black   Parks & Recreation                   3     33592
    Zach      Male      White   Parks & Recreation                   4     37565


+ 给dataframe 加1列 如下

1. 给df增加score列并使用单个值给该列赋值


```python
df['score'] =100
```


```python
print(tabulate(df,headers=df.columns,tablefmt='simple'))
```

              GENDER    RACE    DEPARTMENT            YEARS EXPERIENCE    SALARY    score
    --------  --------  ------  ------------------  ------------------  --------  -------
    Tom       Male      White   Engineering                         23    107962      100
    Niko      Male      Black   Engineering                          1     30347      100
    Penelope  Female    White   Engineering                         12     60258      100
    Aria      Female    Black   Engineering                          8     43618      100
    Sofia     Female    Black   Parks & Recreation                  23     26125      100
    Dean      Male      Black   Parks & Recreation                   3     33592      100
    Zach      Male      White   Parks & Recreation                   4     37565      100


2. 使用np.array给df增加rate列并赋值


```python
rates = np.round(np.random.rand(7),2)
rates
```




    array([0.69, 0.16, 0.9 , 0.21, 0.25, 0.5 , 0.09])




```python
df['rate']=rates
```


```python
print(tabulate(df,headers=df.columns,tablefmt='simple'))
```

              GENDER    RACE    DEPARTMENT            YEARS EXPERIENCE    SALARY    score    rate
    --------  --------  ------  ------------------  ------------------  --------  -------  ------
    Tom       Male      White   Engineering                         23    107962      100    0.69
    Niko      Male      Black   Engineering                          1     30347      100    0.16
    Penelope  Female    White   Engineering                         12     60258      100    0.9
    Aria      Female    Black   Engineering                          8     43618      100    0.21
    Sofia     Female    Black   Parks & Recreation                  23     26125      100    0.25
    Dean      Male      Black   Parks & Recreation                   3     33592      100    0.5
    Zach      Male      White   Parks & Recreation                   4     37565      100    0.09


3. 同上


```python
score = np.random.randint(0,100,len(df))
```


```python
score
```




    array([60, 20, 84, 34, 71,  0,  0])




```python
df['score']=score
```


```python
print(tabulate(df,headers=df.columns,tablefmt='simple'))
```

              GENDER    RACE    DEPARTMENT            YEARS EXPERIENCE    SALARY    score    rate
    --------  --------  ------  ------------------  ------------------  --------  -------  ------
    Tom       Male      White   Engineering                         23    107962       60    0.69
    Niko      Male      Black   Engineering                          1     30347       20    0.16
    Penelope  Female    White   Engineering                         12     60258       84    0.9
    Aria      Female    Black   Engineering                          8     43618       34    0.21
    Sofia     Female    Black   Parks & Recreation                  23     26125       71    0.25
    Dean      Male      Black   Parks & Recreation                   3     33592        0    0.5
    Zach      Male      White   Parks & Recreation                   4     37565        0    0.09


4. 使用list列表给df增加floor列，并且赋值


```python
floor=[10,2,3,4,9,2,4]
df['floor']=floor
print(tabulate(df,headers=df.columns,tablefmt='simple'))
```

              GENDER    RACE    DEPARTMENT            YEARS EXPERIENCE    SALARY    score    rate    floor
    --------  --------  ------  ------------------  ------------------  --------  -------  ------  -------
    Tom       Male      White   Engineering                         23    107962       60    0.69       10
    Niko      Male      Black   Engineering                          1     30347       20    0.16        2
    Penelope  Female    White   Engineering                         12     60258       84    0.9         3
    Aria      Female    Black   Engineering                          8     43618       34    0.21        4
    Sofia     Female    Black   Parks & Recreation                  23     26125       71    0.25        9
    Dean      Male      Black   Parks & Recreation                   3     33592        0    0.5         2
    Zach      Male      White   Parks & Recreation                   4     37565        0    0.09        4


5. 使用Series给df增加lastname列，并且赋值


```python
last_name = pd.Series(['Smith', 'Jones', 'Williams', 'Green', 'Brown', 'Simpson', 'Peters'])
last_name
```




    0       Smith
    1       Jones
    2    Williams
    3       Green
    4       Brown
    5     Simpson
    6      Peters
    dtype: object




```python
df['lastname']=last_name
print(tabulate(df,headers=df.columns,tablefmt='simple'))
```

              GENDER    RACE    DEPARTMENT            YEARS EXPERIENCE    SALARY    score    rate    floor    lastname
    --------  --------  ------  ------------------  ------------------  --------  -------  ------  -------  ----------
    Tom       Male      White   Engineering                         23    107962       60    0.69       10         nan
    Niko      Male      Black   Engineering                          1     30347       20    0.16        2         nan
    Penelope  Female    White   Engineering                         12     60258       84    0.9         3         nan
    Aria      Female    Black   Engineering                          8     43618       34    0.21        4         nan
    Sofia     Female    Black   Parks & Recreation                  23     26125       71    0.25        9         nan
    Dean      Male      Black   Parks & Recreation                   3     33592        0    0.5         2         nan
    Zach      Male      White   Parks & Recreation                   4     37565        0    0.09        4         nan


**为啥上个例子lastname的值都是Nan？原因是index不匹配**


```python
last_name.index
```




    RangeIndex(start=0, stop=7, step=1)




```python
df.index
```




    Index(['Tom', 'Niko', 'Penelope', 'Aria', 'Sofia', 'Dean', 'Zach'], dtype='object')



**index一个是数值，一个是字符串，现在搞成一样的**


```python
last_name=pd.Series(last_name.values,index=df.index)
```


```python
last_name
```




    Tom            Smith
    Niko           Jones
    Penelope    Williams
    Aria           Green
    Sofia          Brown
    Dean         Simpson
    Zach          Peters
    dtype: object




```python
df['lastname']=last_name
print(tabulate(df,headers=df.columns,tablefmt='simple'))
```

              GENDER    RACE    DEPARTMENT            YEARS EXPERIENCE    SALARY    score    rate    floor  lastname
    --------  --------  ------  ------------------  ------------------  --------  -------  ------  -------  ----------
    Tom       Male      White   Engineering                         23    107962       60    0.69       10  Smith
    Niko      Male      Black   Engineering                          1     30347       20    0.16        2  Jones
    Penelope  Female    White   Engineering                         12     60258       84    0.9         3  Williams
    Aria      Female    Black   Engineering                          8     43618       34    0.21        4  Green
    Sofia     Female    Black   Parks & Recreation                  23     26125       71    0.25        9  Brown
    Dean      Male      Black   Parks & Recreation                   3     33592        0    0.5         2  Simpson
    Zach      Male      White   Parks & Recreation                   4     37565        0    0.09        4  Peters



```python

```


```python

```


```python

```


```python

```


```python

```


```python

```


```python

```


```python

```
