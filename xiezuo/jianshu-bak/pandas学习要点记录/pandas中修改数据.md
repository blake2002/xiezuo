

```python
import pandas as pd
import numpy as np
```

## pandas中修改数据
### 有关副本相关内容示例及说明


```python
df=pd.read_csv('data/sample_data.csv',index_col=0)
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-a47302fea11f6c9a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df1=df[['state','food','age']]
df1
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-ef2ae20e8e94c8db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df1['age']=[10,23,43,56,67,12,42]
```

    E:\software\anaconda3\lib\site-packages\ipykernel_launcher.py:1: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: http://pandas.pydata.org/pandas-docs/stable/indexing.html#indexing-view-versus-copy
      """Entry point for launching an IPython kernel.
    


```python
df1
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-ac01fecc4e8de71b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-224e68baf6e750d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**说明：当对从原有数据集中选择子集时并对子集进行值的修改时，就会有副本的警告提示，并且修改的是副本，原值不动**

+ pandas中有is_copy()_is_view 来确定副本情况
查看df1的is_copy


```python
df1.is_copy()
```

    E:\software\anaconda3\lib\site-packages\ipykernel_launcher.py:1: FutureWarning: Attribute 'is_copy' is deprecated and will be removed in a future version.
      """Entry point for launching an IPython kernel.
    




![image.png](https://upload-images.jianshu.io/upload_images/1691484-a7168e3df7130d4d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ df1.is_copy返回的是原始值，也就是说df1是从df复制来的,如果不是副本，则返回None


+ 下面查看_is_view 返回


```python
df1._is_view
```




    False




```python
df._is_view
```




    False



+ df1,df都是不是视图，那么看看谁是视图呢？如下


```python
food=df['food']
```


```python
food.is_copy is None
```

    E:\software\anaconda3\lib\site-packages\ipykernel_launcher.py:1: FutureWarning: Attribute 'is_copy' is deprecated and will be removed in a future version.
      """Entry point for launching an IPython kernel.
    




    True




```python
food._is_view
```




    True



### 避免不明确，模棱两可或复杂的使用

1. 选择行只用索引操作，如


```python
df[1::2]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-7c08ed7e6f0dfb2f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df['Niko':'Dean']
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-b2b5eeab9350e966.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df_s=df.sort_index()
df_s
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-570b1ba6d2573603.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df_s['A':'D']
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-b373e67f784d1e47.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**以上这样的做法都可以实现需求，但是他模糊了，维护人不能见明知意，不提倡这样做,尽量使用.iloc和.loc**
**尽量用习惯用法，这样简单明了，维护方便，并且pandas非常灵活，很多方式也不便于记忆，所以使用只记忆习惯用法更方便**

### 总结
+ 习惯用法简单易读便于记忆
+ 使用类似df['Niko':'Dean']['age']=5 此类赋值，并不会修改df的值，而是中间生成的副本，副本值被修改了，正确方式df.loc['Niko':'Dean','age']=5
+ 类似这样df2=df此类赋值不会产生副本，而是df2,df两个变量同时指向同一个数据集
+ 类似df1=df[['food','age']]此类会产生副本
+ 要注意深浅复制
+ 避免诸如此类df[['food','age']]['age']的链式索引选择操作
+ 避免模糊不清的索引操作如df_s['A':'D']


```python

```
