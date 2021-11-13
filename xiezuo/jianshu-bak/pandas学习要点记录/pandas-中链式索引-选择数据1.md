

```python
import pandas as pd
import numpy as np
from tabulate import tabulate
```

## pandas 中链式索引 选择数据1


```python
df=pd.read_csv('data/sample_data.csv',index_col=0)
```


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-34d761de69bceb14.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 链式索引选择数据,示例1


```python
df[['food','age','color']]['age']
```




    Jane         30
    Niko          2
    Aaron        12
    Penelope      4
    Dean         32
    Christina    33
    Cornelia     69
    Name: age, dtype: int64



+链式索引选择数据,示例2


```python
df.loc[:,['food','color','age']]['age']
```




    Jane         30
    Niko          2
    Aaron        12
    Penelope      4
    Dean         32
    Christina    33
    Cornelia     69
    Name: age, dtype: int64



+ 链式索引选择数据,示例3


```python
df.loc[:,['food','color','age']].loc[:,'age']
```




    Jane         30
    Niko          2
    Aaron        12
    Penelope      4
    Dean         32
    Christina    33
    Cornelia     69
    Name: age, dtype: int64



+ 链式索引选择数据,示例4


```python
a=['food','color','age']
b=['age']
dd=df[a][b]
dd
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-66b343d612b8207a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**注意:上例返回的Dataframe,而不是Series**

+ 链式索引选择数据,示例5


```python
a=['Niko','Dean'],['food','color','age']
b=['age','color']
dd=df.loc[a][b]
dd
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-733db0d601b1b6e2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 链式索引选择数据,使用iloc,示例6


```python
df.iloc[2:5].iloc[:,-3:]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-ed25148da21faf4f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 链式索引选择数据,示例7


```python
df[df['age']>16]['score']
```




    Jane         4.6
    Dean         1.8
    Christina    9.5
    Cornelia     2.2
    Name: score, dtype: float64



**注意：以上示例都是非习惯用法，复杂度增加了不少**
下面演示习惯用法

+ 习惯用法1
选择1列，如下


```python
df['age']
```




    Jane         30
    Niko          2
    Aaron        12
    Penelope      4
    Dean         32
    Christina    33
    Cornelia     69
    Name: age, dtype: int64



+ 习惯用法2


```python
df.loc[['Niko','Cornelia'],['height','color']]
# df.loc[['Niko', 'Cornelia'], ['state', 'height', 'color']][['height', 'color']] -非习惯用法,尽量不用
```

+ 习惯用法3


```python
df.iloc[2:5,-3:] # 前行，后列
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-5339ae6b4630efd6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 习惯用法4


```python
df.loc['Niko':'Dean',['age','food']]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-608c8d95ee09c7ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



+ 习惯用法5


```python
df.loc[df['age']>16,'score']
```




    Jane         4.6
    Dean         1.8
    Christina    9.5
    Cornelia     2.2
    Name: score, dtype: float64



**链式索引调用不好的原因：**
**原因1：**
例如： df.loc[['Aaron', 'Dean', 'Christina']][['age', 'food']] 
这个要执行2个操作
1.df.loc[['Aaron', 'Dean', 'Christina']]
2.在1的基础上进行[['age', 'food']] 操作
执行2次
而
df.loc[['Aaron', 'Dean', 'Christina'], ['age', 'food']]
只执行1次
**原因2：**
产生副本，例子如下


```python
df[df['age'] > 10]['score'] = 99
```

    E:\software\anaconda3\lib\site-packages\ipykernel_launcher.py:1: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: http://pandas.pydata.org/pandas-docs/stable/indexing.html#indexing-view-versus-copy
      """Entry point for launching an IPython kernel.
    


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-c615f7975b8ba68e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**赋值没有效果，实际上发生了如下操作**


```python
df_tm=df[df['age']>10]
df_tm['score']=99
```

    E:\software\anaconda3\lib\site-packages\ipykernel_launcher.py:2: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: http://pandas.pydata.org/pandas-docs/stable/indexing.html#indexing-view-versus-copy
      
    


```python
df_tm
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-1599a1552c3d4584.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-16c8dddbef52a1b6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**实际上给副本赋值了
    正确方式 如下
**


```python
df.loc[df['age']>10,'score']=99
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-3a046e13f2c6594b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python

```


```python

```
