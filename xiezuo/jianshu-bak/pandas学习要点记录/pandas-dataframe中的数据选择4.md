

```python
import pandas as pd
import numpy as np
```


```python
df= pd.read_csv('data/sample_data.csv',index_col=0)
df

	     state	color	food	age	height	score
Jane	  NY	blue	Steak	30	165	    4.6
Niko	  TX	green	Lamb	2	70	    8.3
Aaron	  FL	red	    Mango	12	120	    9.0
Penelope  AL	white	Apple	4	80	    3.3
Dean	  AK	gray	Cheese	32	180	    1.8
Christina  TX	black	Melon	33	172	    9.5
Cornelia	TX	red	    Beans	69	150	     2.2
```








### 对比


```python
df[2:6]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-08ee5e3e80da0905.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



**上边的例子选择了行数字索引2--6的数据**


```python
df['Jane':'Aaron']
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-e5b83ccddd5ae0eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**上边的例子选择了行Jane--Aaron的数据**


```python
df.iloc[2:6]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-7a1dd2392e89a204.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.loc['Jane':'Aaron']
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-65df456044dd3c3f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



**显然下边的用法更加清晰**
同理对比一下Series


```python
f=df['food']
```


```python
f
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
f[2:4]
```




    Aaron       Mango
    Penelope    Apple
    Name: food, dtype: object




```python
f.iloc[2:4]
```




    Aaron       Mango
    Penelope    Apple
    Name: food, dtype: object




```python
f['Niko':'Dean']
```




    Niko          Lamb
    Aaron        Mango
    Penelope     Apple
    Dean        Cheese
    Name: food, dtype: object




```python
f.loc['Niko':'Dean']
```




    Niko          Lamb
    Aaron        Mango
    Penelope     Apple
    Dean        Cheese
    Name: food, dtype: object




```python
f['Dean']
```




    'Cheese'




```python
f.loc['Dean']
```




    'Cheese'




```python
f[['Dean','Jane','Niko']]
```




    Dean    Cheese
    Jane     Steak
    Niko      Lamb
    Name: food, dtype: object




```python
f.loc[['Dean','Jane','Niko']]
```




    Dean    Cheese
    Jane     Steak
    Niko      Lamb
    Name: food, dtype: object



**说明pandas 是灵活的，但是为了记忆及使用方便，统一都使用iloc，loc**
默认情况下从csv读取数据生成的默认行索引


```python
df1=pd.read_csv('data/sample_data.csv')
```


```python
df1
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-bf3c90decc438611.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df1.index
```




    RangeIndex(start=0, stop=7, step=1)




```python
df1.loc[[1,3,5],['food','state']]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-d40ad7250b8c3250.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df1.iloc[[1,3,5],[3,1]]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-51ac9cad7f9e0e72.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**上边是使用名字索引，还是使用数字索引比较清晰，一看就知道，不用进行思考**


```python
df1.iloc[:3]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-b3fab97576ab29c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df1.loc[:3]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-7d2b936e8b8d8fa9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**注意上两个例子的区别，在进行切片选择是，iloc不包含最后一个，是[) 前闭后开区间， 而 loc 则是[] 闭区间**



