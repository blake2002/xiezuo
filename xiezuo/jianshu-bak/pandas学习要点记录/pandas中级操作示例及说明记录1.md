

```python
import pandas as pd
import numpy as np
```

## pandas中级操作示例及说明记录1


```python
df = pd.DataFrame(np.random.random(size=(5,3)))
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-2f0658560bcc1136.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 计算每行（即所有列）的mean值


```python
df.mean(axis=1)
```




    0    0.572173
    1    0.479974
    2    0.477806
    3    0.363091
    4    0.405757
    dtype: float64



+ 计算列（即所有行）的mean值


```python
df.mean(axis=0)
```




    0    0.337337
    1    0.622558
    2    0.419385
    dtype: float64




```python
df.mean()
```




    0    0.337337
    1    0.622558
    2    0.419385
    dtype: float64



+ 计算每个值与每行mean值得差值


```python
df.sub(df.mean(axis=1),axis=0)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-9b29428b8bee1770.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 计算每个值与列mean的差值


```python
df.sub(df.mean(axis=0),axis=1)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-1fbe460e9673c359.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df - df.mean()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-91088b7a0f4aa774.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df1= pd.DataFrame(np.random.random(size=(5,10)),columns=list('abcdefghij'))
```


```python
df1
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-c071fef062e26ecf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 找出每列之和的最小值的那个索引是什么


```python
c_sum=df1.sum()
c_sum
```




    a    2.796738
    b    2.830435
    c    2.623558
    d    2.759947
    e    2.784368
    f    1.488181
    g    1.545570
    h    2.799605
    i    3.820820
    j    2.985348
    dtype: float64




```python
c_sum.idxmin()
```




    'f'




```python
df1.sum().idxmin()
```




    'f'



+ 找出df中不重复行的几种方式
   1. 使用drop_duplicates() -删掉重复的
   keep : {'first', 'last', False}, default 'first'
    - ``first`` : Drop duplicates except for the first occurrence.
    - ``last`` : Drop duplicates except for the last occurrence.
    - False : Drop all duplicates.


```python
unique_rows=df.drop_duplicates(keep=False)
unique_rows
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-db75b7cd5ef7d55f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




```python
len(unique_rows)
```




    5



2. duplicated(keep=False) -找到重复的
    keep : {'first', 'last', False}, default 'first'
    - ``first`` : Mark duplicates as ``True`` except for the
      first occurrence.
    - ``last`` : Mark duplicates as ``True`` except for the
      last occurrence.
    - False : Mark all duplicates as ``True``.


```python
len(df) - df.duplicated(keep=False).sum()
```




    5




```python
df3=pd.DataFrame(np.random.randint(1,100,size=(5,10)))
```


```python
np.random.choice(df3.columns,5,replace=False)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-4a4690218c0cb80c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




```python
for i in range(5):
    df3.loc[i,np.random.choice(df3.columns,5,replace=False)]=np.nan
```


```python
df3
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-b849c5d1c6d271a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 找出第3个为Nan的列 


```python
df3.isnull()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-ef88c24c961d5986.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df3.isnull().cumsum(axis=1)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-6961aacb1ddc9edb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
(df3.isnull().cumsum(axis=1) ==3)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-46b21f0163a501d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
(df3.isnull().cumsum(axis=1) ==3).idxmax(axis=1)
```




    0    4
    1    2
    2    4
    3    2
    4    5
    dtype: int64



+ 上例实现说明：
    1. df3.isnull() 先判断是否为nan
    2. df3.isnull().cumsum(axis=1) 横向累加
    3. df3.isnull().cumsum(axis=1) ==3 判断第一个等于3的就是要找的
    4. (df3.isnull().cumsum(axis=1) ==3).idxmax(axis=1) 横向找到第一个最大值对应的列索引


```python
df = pd.DataFrame({'grps': list('aaabbcaabcccbbc'), 
                   'vals': [12,345,3,1,45,14,4,52,54,23,235,21,57,3,87]})
```


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-3ef3542d7bdbcefd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 按grps分组，计算三个最大值的和


```python
df.groupby('grps')['vals']
```

    <pandas.core.groupby.groupby.SeriesGroupBy object at 0x0000000009648DD8>
    


```python
df.groupby('grps')['vals'].nlargest(3)
```




    grps    
    a     1     345
          7      52
          0      12
    b     12     57
          8      54
          4      45
    c     10    235
          14     87
          9      23
    Name: vals, dtype: int64




```python
df.groupby('grps')['vals'].nlargest(3).sum(level=0)
```




    grps
    a    409
    b    156
    c    345
    Name: vals, dtype: int64




```python
b=np.random.randint(101,201,size=100)
df4=pd.DataFrame({'A':range(1,101),'B':  b})
```


```python
df4.head(20)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-d12204227a11a876.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 按A分段分组 类似（0,10],(10,20]...这种分组，计算B列的相关对应的和 


```python
ct_group=pd.cut(df4['A'],np.arange(0,101,10))
ct_group
```




    0       (0, 10]
    1       (0, 10]
    2       (0, 10]
    3       (0, 10]
    4       (0, 10]
    5       (0, 10]
    6       (0, 10]
    7       (0, 10]
    8       (0, 10]
    9       (0, 10]
    10     (10, 20]
    11     (10, 20]
    12     (10, 20]
    13     (10, 20]
    14     (10, 20]
    15     (10, 20]
    16     (10, 20]
    17     (10, 20]
    18     (10, 20]
    19     (10, 20]
    20     (20, 30]
    21     (20, 30]
    22     (20, 30]
    23     (20, 30]
    24     (20, 30]
    25     (20, 30]
    26     (20, 30]
    27     (20, 30]
    28     (20, 30]
    29     (20, 30]
            ...    
    70     (70, 80]
    71     (70, 80]
    72     (70, 80]
    73     (70, 80]
    74     (70, 80]
    75     (70, 80]
    76     (70, 80]
    77     (70, 80]
    78     (70, 80]
    79     (70, 80]
    80     (80, 90]
    81     (80, 90]
    82     (80, 90]
    83     (80, 90]
    84     (80, 90]
    85     (80, 90]
    86     (80, 90]
    87     (80, 90]
    88     (80, 90]
    89     (80, 90]
    90    (90, 100]
    91    (90, 100]
    92    (90, 100]
    93    (90, 100]
    94    (90, 100]
    95    (90, 100]
    96    (90, 100]
    97    (90, 100]
    98    (90, 100]
    99    (90, 100]
    Name: A, Length: 100, dtype: category
    Categories (10, interval[int64]): [(0, 10] < (10, 20] < (20, 30] < (30, 40] ... (60, 70] < (70, 80] < (80, 90] < (90, 100]]




```python
df4.groupby(ct_group)['B'].sum()
```




    A
    (0, 10]      1448
    (10, 20]     1451
    (20, 30]     1378
    (30, 40]     1580
    (40, 50]     1546
    (50, 60]     1462
    (60, 70]     1531
    (70, 80]     1405
    (80, 90]     1509
    (90, 100]    1541
    Name: B, dtype: int32





