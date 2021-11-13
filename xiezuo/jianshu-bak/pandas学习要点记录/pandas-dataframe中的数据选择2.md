

```python
import pandas as pd
import numpy as np
```

## 使用.loc 选择数据


```python
df=pd.read_csv('data/sample_data.csv',index_col=0)
df
```

![image.png](https://upload-images.jianshu.io/upload_images/1691484-55a9a01ab6d23449.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



## 类似切片范围选择
1. 行范围选择


```python
df.loc['Jane':'Dean']
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-65faceeb25fdf1ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.loc[:'Christina']
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-5c1ecc656d2b2add.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.loc[:'Christina':2]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-0826dc0e296f0b77.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.loc['Dean':]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-5e91492738cc8baf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




2. 使用.loc选择行，列数据
**.loc[rowindexes,columnindexes] 其中rowindexes为行索引名称数组，columnindexes为列名称数组列表，如果单行，单列可以省略[]方括号**
+ 选择两行['Niko','Dean']，一列'age'


```python
df.loc[['Niko','Dean'],'age']
```




    Niko     2
    Dean    32
    Name: age, dtype: int64



+ 选择一行一列即单元格Niko，age 对应的数据


```python
df.loc['Niko','age']
```




    2



+ 选择多行多列


```python
df.loc[['Niko','Dean'],['food','color']]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-9d46d0ddf5387075.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 选择所有行，两列


```python
df.loc[:,['food','color']]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-611556c272b5196c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 行步长为2即各行选择，2列


```python
df.loc[::2,['food','color']]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-2b50258735e06751.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 行步长为2，列步长为2


```python
df.loc[::2,::2]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-7e23f010db3f016f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 选择两行，所有列


```python
df.loc[['Niko','Dean'],:]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-8132c703d34b6e21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 选择两行，列从开头到age


```python
df.loc[['Niko','Dean'],:'age']
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-298db23e2e188ffc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 选择2行，列步长为2


```python
df.loc[['Niko','Dean'],::2]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-33540e1c7b2af96a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
rows=['Jane','Niko','Dean']
cols=['state','age','height']
df.loc[rows,cols]
```



![image.png](https://upload-images.jianshu.io/upload_images/1691484-fc1a7ca29585d04c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




### .loc 总结 
+ 只能使用index名（行列） 选择数据
+ 能选择行列数据
+ 即可以单个索引名称，也可多个，也可切片
+ .loc[rowindexnames ,columnindexnames] rowindexnames 行索引名称列表，columnindexnames 列索引名称列表



