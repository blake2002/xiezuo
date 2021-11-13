

```python
import pandas as pd
import numpy as np
```

##  使用[], loc ,iloc 选择数据 

### 先看看 DataFrame 组成有哪些 ，如下：


```python

df=pd.read_csv('data/sample_data.csv',index_col=0)
df
```

![image.png](https://upload-images.jianshu.io/upload_images/1691484-d5d2129f767e7390.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
index = df.index
columns = df.columns
values = df.values
index
```




    Index(['Jane', 'Niko', 'Aaron', 'Penelope', 'Dean', 'Christina', 'Cornelia'], dtype='object')




```python
columns
```




    Index(['state', 'color', 'food', 'age', 'height', 'score'], dtype='object')




```python
values
```




    array([['NY', 'blue', 'Steak', 30, 165, 4.6],
           ['TX', 'green', 'Lamb', 2, 70, 8.3],
           ['FL', 'red', 'Mango', 12, 120, 9.0],
           ['AL', 'white', 'Apple', 4, 80, 3.3],
           ['AK', 'gray', 'Cheese', 32, 180, 1.8],
           ['TX', 'black', 'Melon', 33, 172, 9.5],
           ['TX', 'red', 'Beans', 69, 150, 2.2]], dtype=object)




```python
type(index)
```




    pandas.core.indexes.base.Index




```python
type(columns)
```




    pandas.core.indexes.base.Index




```python
type(values)
```




    numpy.ndarray



**DataFrame 有index -行索引，columns-列索引，values-数据（数组）组成。pandas 基于numpy库**

### 从DataFrame 每个列都是以Series 类型返回


```python
df['food']
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
type(df['food'])
```




    pandas.core.series.Series




```python
s=df['food']
```


```python
s.index
```




    Index(['Jane', 'Niko', 'Aaron', 'Penelope', 'Dean', 'Christina', 'Cornelia'], dtype='object')




```python
s.values
```




    array(['Steak', 'Lamb', 'Mango', 'Apple', 'Cheese', 'Melon', 'Beans'],
          dtype=object)



**Series 左边是Index与其对应DataFrame的index一致，右边是数据**

**注意：df['food'] 返回的Series 类型 df[['food']]返回的是DataFrame类型**


```python
dd= df[['food']]
```


```python
type(dd)
```




    pandas.core.frame.DataFrame



### 选择多个列


```python
df[['food','color','score']]
```




![![image.png](https://upload-images.jianshu.io/upload_images/1691484-ce0e87bfc9b7733c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**关注一下返回来的列的显示顺序**

## 总结 
1. 以上是根据列名字作为key 索引，选择列
2. df['food'] 以series 类型返回单列数据，df[['food']] 以DataFrame形式返回单列数据
3. 多选列 df[['food','color']]
4. 当然可以以df['Jane'] 返回行，但是尽量不这么用，因为会造成迷惑，不知道是选择的列还是行。
## .loc 选择行，列


```python
row = df.loc['Jane']
row
```




    state        NY
    color      blue
    food      Steak
    age          30
    height      165
    score       4.6
    Name: Jane, dtype: object




```python
type(row)
```




    pandas.core.series.Series



**以series返回单行,其中左边index为源DataFrame列名，右边为数据**
### 选择则多行 以DataFrame形式返回


```python
df.loc[['Jane','Niko']]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-8d9737b427fbabcc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




### 选择从Niko到Dean 这个范围的数据


```python
df.loc['Niko':'Dean']
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-d9e4f99b3a7dec48.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df
```

![image.png](https://upload-images.jianshu.io/upload_images/1691484-7391095c9f77fd9c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.loc['Jane':'Cornelia':2]
```


![image.png](https://upload-images.jianshu.io/upload_images/1691484-3b526245422d812a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**上一例是带步长的切片选择**
**注意这个切片闭区间，包括最后Cornelia**
对比python切片,python 中切片是[),前闭后开区间


```python
em=[1,2,3,4]
em[0:3]
```




    [1, 2, 3]

