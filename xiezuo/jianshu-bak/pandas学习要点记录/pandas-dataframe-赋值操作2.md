

```python
import pandas as pd
import numpy as np

```

## pandas dataframe 赋值操作2


```python
df = pd.read_csv('data/employee_sample.csv',index_col=0)
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-0cf54b300d2f69fb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df['BONUS RATE'] = [.2, .1, .13, .15, .12, .3, .05]
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-4432595873ce0897.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




  + 根据salary 与bonusrate 计算bonus并且增加bonus列


```python
df['bonus']=df['SALARY']*df['BONUS RATE']
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-9f467c177497983b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 修改所有的bonus为10000
   - 方式1：


```python
df['bonus']=10000
```


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-6cf81b6b4e53f54e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





    - 方式2：


```python
df.loc[:,'bonus']=9999
```


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-0eda76a317e9681d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 修改YEARS EXPERIENCE数据类型


```python
df['YEARS EXPERIENCE'].dtype
```




    dtype('int64')




```python
df['YEARS EXPERIENCE']=df['YEARS EXPERIENCE'].astype('object')
```


```python
df['YEARS EXPERIENCE']
```




    Tom         23
    Niko         1
    Penelope    12
    Aria         8
    Sofia       23
    Dean         3
    Zach         4
    Name: YEARS EXPERIENCE, dtype: object




```python
df['YEARS EXPERIENCE'].dtype
```




    dtype('O')




```python
+ 给bonus列的['Niko', 'Penelope', 'Aria'] 赋值
```


```python
df.loc[['Niko', 'Penelope', 'Aria'],'bonus']=[2301,4563,6548]
```


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-04fd28ee5266e24c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 使用iloc 赋值


```python
df.iloc[3:6,3]=10
```


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-490fb2baf59d034b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.iloc[:,3]=33
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-6095a5f11d22cf86.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
+ 使用loc 筛选数据并修改其值
    - 修改DEPARTMENT列中等于Engineering，对应的bonus值
```


```python
df.loc[df['DEPARTMENT']=='Engineering','bonus']+=500
```


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-7fdf70d299725404.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




## Series 赋值操作


```python
s=df['SALARY'].copy()
s
```




    Tom         107962
    Niko         30347
    Penelope     60258
    Aria         43618
    Sofia        26125
    Dean         33592
    Zach         37565
    Name: SALARY, dtype: int64




```python
s.loc[['Tom','Niko','Aria']]=[99,123,321]
```


```python
s
```




    Tom            99
    Niko          123
    Penelope       33
    Aria          321
    Sofia       26125
    Dean        33592
    Zach        37565
    Name: SALARY, dtype: int64




```python
s.iloc[1:3]=33
```


```python
s
```




    Tom            99
    Niko           33
    Penelope       33
    Aria           99
    Sofia       26125
    Dean        33592
    Zach        37565
    Name: SALARY, dtype: int64




```python

```


```python

```
