

```python
import pandas as pd
import numpy as np
```

## pandas使用方法记录总结
### 基本操作记录
1. 查看pandas版本


```python
pd.__version__
```




    '0.23.4'



2. 查看pandas及相关库版本


```python
pd.show_versions()
```

    
    INSTALLED VERSIONS
    ------------------
    commit: None
    python: 3.7.0.final.0
    python-bits: 64
    OS: Windows
    OS-release: 2008ServerR2
    machine: AMD64
    processor: Intel64 Family 6 Model 60 Stepping 3, GenuineIntel
    byteorder: little
    LC_ALL: None
    LANG: None
    LOCALE: None.None
    
    pandas: 0.23.4
    pytest: 3.8.0
    pip: 18.1
    setuptools: 40.2.0
    Cython: 0.28.5
    numpy: 1.15.1
    scipy: 1.1.0
    pyarrow: None
    xarray: None
    IPython: 6.5.0
    sphinx: 1.7.9
    patsy: 0.5.0
    dateutil: 2.7.3
    pytz: 2018.5
    blosc: None
    bottleneck: 1.2.1
    tables: 3.4.4
    numexpr: 2.6.8
    feather: None
    matplotlib: 2.2.3
    openpyxl: 2.5.6
    xlrd: 1.1.0
    xlwt: 1.3.0
    xlsxwriter: 1.1.0
    lxml: 4.2.5
    bs4: 4.6.3
    html5lib: 1.0.1
    sqlalchemy: 1.2.11
    pymysql: None
    psycopg2: None
    jinja2: 2.10
    s3fs: None
    fastparquet: None
    pandas_gbq: None
    pandas_datareader: None
    


```python
data = {'animal': ['cat', 'cat', 'snake', 'dog', 'dog', 'cat', 'snake', 'cat', 'dog', 'dog'],
        'age': [2.5, 3, 0.5, np.nan, 5, 2, 4.5, np.nan, 7, 3],
        'visits': [1, 3, 2, 3, 2, 3, 1, 1, 2, 1],
        'priority': ['yes', 'yes', 'no', 'yes', 'no', 'no', 'no', 'yes', 'no', 'no']}

labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
```

3. 创建DataFrame及查看DataFrame数据及基本结构信息 


```python
df = pd.DataFrame(data,index=labels)
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-a6c7e5a94b68f2f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.info()
```

    <class 'pandas.core.frame.DataFrame'>
    Index: 10 entries, a to j
    Data columns (total 4 columns):
    animal      10 non-null object
    age         8 non-null float64
    visits      10 non-null int64
    priority    10 non-null object
    dtypes: float64(1), int64(1), object(2)
    memory usage: 400.0+ bytes
    


```python
df.describe()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-f5de420f850cb159.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




4. 返回前三行数据


```python
df.iloc[:3]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-fcc99de28baccffb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.head(3)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-c9bd872aa24de1f9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




5. 选择包含animal和age列的所有数据


```python
df.loc[:,['animal','age']]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-d8a241bb341f674f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df[['animal','age']]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-a83112e5e122c48d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




6. 选择3,4,6行及animal，age列


```python
df.loc[df.index[[3,4,6]],['animal','age']]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-4b36f125582199ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




7. 找出visits > 3的数据


```python
df.loc[df['visits']>=3]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-7466e4e21ee2c04e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




8. 找出为age== Nan的数据


```python
df.loc[df['age'].isnull()]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-ffd672a26c7b9348.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




9. 找出animal为cat并且age《3


```python
df.loc[(df['animal']=='cat')&(df['age']<3)]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-b0ad6b74245d58fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




10. 找出age在2，4之间的数据


```python
df.loc[df['age'].between(2,4)]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-08778fd6a0e754e0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




11. 修改f行age的值为1.5 


```python
df.loc['f','age']=1.5
```


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-98746fda62a288bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




12. 计算一下visits总量


```python
df['visits'].sum()
```




    19



13. 计算一下animal平均年龄


```python
df.groupby('animal').agg({'age':'mean'})
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-b40f89ebdbe30b95.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.groupby('animal')['age'].mean()
```




    animal
    cat      2.333333
    dog      5.000000
    snake    2.500000
    Name: age, dtype: float64



14. 添加一行


```python
df.loc['k']=[2.3,'dog','no',3]
```


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-b8fdfe414d339ade.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




15. 删除一行


```python
df=df.drop('k')
```


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-1bba2df7431c2570.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




16. 统计个animal的数量


```python
df.animal.value_counts()
```




    cat      4
    dog      4
    snake    2
    Name: animal, dtype: int64



17. age降序，visits升序排序


```python
df.sort_values(by=['age','visits'],ascending=[False,True])
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-5bb4f12a5718307c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




18. priorty 列值改成True|False


```python
df['priority']=df['priority'].map({'yes':True,'no':False})
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-a777c1a7de854d3c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




19. animal中将snake改成python


```python
df1=df.copy()
```


```python
df1['animal']=df1['animal'].replace('snake','python')
```


```python
df1
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-e46c8c646bac9c36.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-92c2e594ba774758.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df2=df.copy()
```


```python
df2.loc[df2['animal']=='snake','animal']='python'
```


```python
df2
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-404c6d4d75478cf9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-777c155816adfb9a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




20. 数据类型转换，将age，visits转换成数值类型


```python
df['age'] =pd.to_numeric(df['age'],errors='coerce')
```


```python
df['visits']=pd.to_numeric(df['visits'],errors='coerce')
```


```python
df.info()
```

    <class 'pandas.core.frame.DataFrame'>
    Index: 10 entries, a to j
    Data columns (total 4 columns):
    animal      10 non-null object
    age         8 non-null float64
    visits      10 non-null int64
    priority    10 non-null bool
    dtypes: bool(1), float64(1), int64(1), object(1)
    memory usage: 650.0+ bytes
    


```python
df2.info()
```

    <class 'pandas.core.frame.DataFrame'>
    Index: 10 entries, a to j
    Data columns (total 4 columns):
    animal      10 non-null object
    age         8 non-null object
    visits      10 non-null object
    priority    10 non-null bool
    dtypes: bool(1), object(3)
    memory usage: 650.0+ bytes
    


```python
df2['age']=df2[['age']].astype('float')
```


```python
df2['visits']=df2['visits'].astype('int')
```


```python
df2.info()
```

    <class 'pandas.core.frame.DataFrame'>
    Index: 10 entries, a to j
    Data columns (total 4 columns):
    animal      10 non-null object
    age         8 non-null float64
    visits      10 non-null int32
    priority    10 non-null bool
    dtypes: bool(1), float64(1), int32(1), object(1)
    memory usage: 610.0+ bytes
    

21. 选择所有数值列


```python
df.select_dtypes('number')
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-196b177c4fbb5339.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




22.数据透视 查询每种动物每个visits的平均年龄


```python
df.pivot_table(index='animal',columns='visits',values='age',aggfunc='mean')
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-f7f4dbae7f414bbf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




### 中级操作记录
+ shift函数的使用，该函数是对数据进行移动的操作


```python
df3=pd.DataFrame({'A': [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7],'B':[10, 20, 20, 30, 40, 50, 50, 50, 60, 70, 70]})
```

+ 默认向下移动1，内有数据补位的用Nan


```python
df3['A'].shift()
```




    0     NaN
    1     1.0
    2     2.0
    3     2.0
    4     3.0
    5     4.0
    6     5.0
    7     5.0
    8     5.0
    9     6.0
    10    7.0
    Name: A, dtype: float64




```python
df3['A'].shift(1)
```




    0     NaN
    1     1.0
    2     2.0
    3     2.0
    4     3.0
    5     4.0
    6     5.0
    7     5.0
    8     5.0
    9     6.0
    10    7.0
    Name: A, dtype: float64




```python
df3['A'].shift(2)
```




    0     NaN
    1     NaN
    2     1.0
    3     2.0
    4     2.0
    5     3.0
    6     4.0
    7     5.0
    8     5.0
    9     5.0
    10    6.0
    Name: A, dtype: float64



+ 向上移动


```python
df3['A'].shift(-1)
```




    0     2.0
    1     2.0
    2     3.0
    3     4.0
    4     5.0
    5     5.0
    6     5.0
    7     6.0
    8     7.0
    9     7.0
    10    NaN
    Name: A, dtype: float64



+ 左右移动


```python
df3.shift(-1,axis=1)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-f6a3903eafd110f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df3.shift(1,axis=1)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-0706cb1361f40859.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




DataFrame.shift(periods=1, freq=None, axis=0)
参数
+ periods：类型为int，表示移动的幅度，可以是正数，也可以是负数，默认值是1,1就表示移动一次，注意这里移动的都是数据，而索引是不移动的，移动之后没有对应值的，就赋值为NaN。
+ freq： DateOffset, timedelta, or time rule string，可选参数，默认值为None，只适用于时间序列，如果这个参数存在，那么会按照参数值移动时间索引，而数据值没有发生变化。例如现在有df1如下：


```python
df4=pd.DataFrame({'A': [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7],'B':[10, 20, 20, 30, 40, 50, 50, 50, 60, 70, 70]},index=pd.date_range('20190101','20190111'))
df4
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-ab5d9f25709fc437.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
import datetime
df4.shift(periods=1,freq=datetime.timedelta(2))
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-585b76ac0c126434.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df4.shift(periods=-1,freq=datetime.timedelta(2))
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-83d71dcf9ddd9ab7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 示例，找出df3,A中不重复的数据


```python
df3.loc[df3['A'].shift()!=df3['A']]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-aefe02a7945f2f6b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df3.drop_duplicates(subset='A')
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-eb9b72d94f6c1578.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df3
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-703a9eeb7c140539.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





