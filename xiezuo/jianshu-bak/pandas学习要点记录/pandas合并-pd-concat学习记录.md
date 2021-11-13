```python
import pandas as pd
import numpy as np
```

## pandas合并-pd.concat学习记录
这里写了一个创建dataframe的函数


```python
def make_df(cols,ind):
    data = {c:[str(c)+str(i) for i in ind] for c in cols}
    return pd.DataFrame(data,ind)

```

+ Series的合并
1. 默认是行合并，即axis=0


```python
s1=pd.Series(['A','B','C'],index=[1,2,3])
s2=pd.Series(['D','E','F'],index=[4,5,6])
pd.concat([s1,s2])
```




    1    A
    2    B
    3    C
    4    D
    5    E
    6    F
    dtype: object



2. 看下axis=1,列合并的情况


```python
pd.concat([s1,s2],axis=1)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-53f7335b46c5666d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ DataFrame合并


```python
df1 = make_df('AB',[1,2])
df2 = make_df('AB',[3,4])
```


```python
df1
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-986772a3d9bb2d73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df2
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-c06a10eface29550.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




1. 默认行合并 axis=0


```python
pd.concat([df1,df2])
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-b5f456ac87746744.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




2. 列合并 axis=1


```python
pd.concat([df1,df2],axis=1)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-77e3a6a7ebad1b32.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df3=make_df('AB',[0,1])
df4=make_df('CD',[0,1])
```


```python
df3
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-d9ab8a09509667d6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df4
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-324d35356e2ee8b2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
pd.concat([df3,df4],axis=1)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-8e9a360cb26c2cfc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**说明，行合并，那么只有行索引一致，才能合并，列同理**
+ 忽略重复索引情况


```python
x=make_df('AB',[0,1])
y=make_df('AB',[2,3])
y.index=x.index
```


```python
x
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-73e564ea074dd18b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
y
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-f239f3a618f44794.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




```python
pd.concat([x,y])
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-fda9b5eb05867f22.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
pd.concat([x,y],ignore_index=True)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-352aa10b2fb4229e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
pd.concat([x,y],ignore_index=True,axis=1)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-d128e729bc49c846.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



下次继续

```python

```
