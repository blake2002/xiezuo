

```python
import pandas as pd
import numpy as np
```

## .iloc 选择定位数据


```python
df = pd.read_csv('data/sample_data.csv',index_col=0)
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-279545a5e13c238a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




####  **iloc基于数值索引选择数据**
选择索引为3的一行数据,对应的是行索引名称为Penelope的哪一行，返回的是Seires


```python
df.iloc[3]
```




    state        AL
    color     white
    food      Apple
    age           4
    height       80
    score       3.3
    Name: Penelope, dtype: object



**上边的例子是返回Series，下边的列子是返回DataFrame形式，如下**


```python
 df.iloc[[3]]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-49ba888a1b287a5b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



#### **选择多行**


```python
df.iloc[[5,3,2]]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-9d1b8677d703a0f8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




#### **切片选择多行**


```python
df.iloc[3:5]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-1e550d3f51677a54.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.iloc[2:]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-3c3de4a450c8828d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.iloc[1:4:2]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-d5decd3c1834e4cd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




####  **选择行列**

+ **多行多列**


```python
df.iloc[[2,5],[0,3]]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-fe5073fa1387690c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ **行切片，多列**


```python
df.iloc[1:5,[0,3,4]]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-618d2e02d116004f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ **行列切片选择**


```python
df.iloc[2:5,1:4]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-4d17cebc9900a51b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ **选择单元格**


```python
df.iloc[2,5]
```




    9.0



+ **选择所有行，1列，以series返回**


```python
df.iloc[:,5]
```




    Jane         4.6
    Niko         8.3
    Aaron        9.0
    Penelope     3.3
    Dean         1.8
    Christina    9.5
    Cornelia     2.2
    Name: score, dtype: float64



+ **选择所有行，1列以DataFrame返回**


```python
df.iloc[:,[5]]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-6f8f0c46afd9853e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ **选单行所有列，以series返回**


```python
df.iloc[1,:]
```




    state        TX
    color     green
    food       Lamb
    age           2
    height       70
    score       8.3
    Name: Niko, dtype: object



+ **选择单行所有列，以DataFrame返回**


```python
df.iloc[[1],:]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-e3c333e9f08c0ade.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**说明，pandas有.ix方法，在使用python进行数据分析第一版中有介绍，但是该该方法已经过时，尽量不要再用**

### Series 中通用 .iloc .loc


```python
s=df['food']
```


```python
s
```




    Jane          Steak
    Niko           Lamb
    Aaron         Mango
    Penelope      Apple
    Dean         Cheese
    Christina     Melon
    Cornelia      Beans
    Name: food, dtype: object




```python
type(s)
```




    pandas.core.series.Series



#### loc 使用


```python
s.loc['Dean']
```




    'Cheese'




```python
s.iloc[3]
```




    'Apple'




```python
s.loc[:]
```




    Jane          Steak
    Niko           Lamb
    Aaron         Mango
    Penelope      Apple
    Dean         Cheese
    Christina     Melon
    Cornelia      Beans
    Name: food, dtype: object




```python
s.loc['Niko':'Dean']
```




    Niko          Lamb
    Aaron        Mango
    Penelope     Apple
    Dean        Cheese
    Name: food, dtype: object




```python
s.loc['Dean':]
```




    Dean         Cheese
    Christina     Melon
    Cornelia      Beans
    Name: food, dtype: object




```python
s.loc[['Niko','Dean']]
```




    Niko      Lamb
    Dean    Cheese
    Name: food, dtype: object



#### iloc 使用


```python
s.iloc[2]
```




    'Mango'




```python
s.iloc[[2,3]]
```




    Aaron       Mango
    Penelope    Apple
    Name: food, dtype: object




```python
s.iloc[1:3]
```




    Niko      Lamb
    Aaron    Mango
    Name: food, dtype: object




```python
s.iloc[1:]
```




    Niko           Lamb
    Aaron         Mango
    Penelope      Apple
    Dean         Cheese
    Christina     Melon
    Cornelia      Beans
    Name: food, dtype: object




