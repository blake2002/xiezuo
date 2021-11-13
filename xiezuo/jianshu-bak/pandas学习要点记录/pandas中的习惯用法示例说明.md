

```python
import pandas as pd
import numpy as np
```

## pandas中的习惯用法示例说明


```python
df=pd.read_csv('data/sample_data.csv',index_col=0)
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-fe80cff3ae81dfd8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 选择列,单列，多列


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




```python
df[['age','color']]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-ac19b09b8f3b8db5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



+ 同时选择行列


```python
df.loc[['Niko','Penelope'],['height','age']]
```






![image.png](https://upload-images.jianshu.io/upload_images/1691484-885fd6d3326609ab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.iloc[[2,4],-2:]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-a84ed5ef79cb7403.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 根据条件筛选数据
    - 条件1:颜色是red，green
    - 条件2:height<80
    - 条件2:只选择score列
    符合条件的如下


```python
cri1=df['color'].isin(['red','green'])
cri2=df['height']<80
df.loc[(cri1|cri2),'score']
```




    Niko        8.3
    Aaron       9.0
    Cornelia    2.2
    Name: score, dtype: float64



+ 索引对齐
    *  使用Series给dataframe某列赋值时，要注意行索引一致，否则不是想要的结果
    *  Series 与Series运算时也是一样的


```python
aa=pd.Series(df['age'].values,index=['Jane1','Niko1','Aaron1','Penelope1','Dean1','Christina1','Cornelia1'])
```


```python
aa
```




    Jane1         30
    Niko1          2
    Aaron1        12
    Penelope1      4
    Dean1         32
    Christina1    33
    Cornelia1     69
    dtype: int64




```python
df['age1']=aa
```


```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-7735996f738a3217.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**看到上边结果了，索引不一致，没有匹配的，都为nan值**


```python
s=df['age']
```


```python
s+aa
```




    Aaron        NaN
    Aaron1       NaN
    Christina    NaN
    Christina1   NaN
    Cornelia     NaN
    Cornelia1    NaN
    Dean         NaN
    Dean1        NaN
    Jane         NaN
    Jane1        NaN
    Niko         NaN
    Niko1        NaN
    Penelope     NaN
    Penelope1    NaN
    dtype: float64




```python
s+s
```




    Jane          60
    Niko           4
    Aaron         24
    Penelope       8
    Dean          64
    Christina     66
    Cornelia     138
    Name: age, dtype: int64



**series索引不匹配，都是Nan；索引匹配则进行数值运算**

### pandas内置函数与python内置函数性能比较


```python
college=pd.read_csv('data/college.csv',index_col=0)
college.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-e20d5214c4ce5d73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
s=college.UGDS
```


```python
%timeit s.any() #pandas内置函数 any函数检查是否至少有一个为true的元素
```

    218 µs ± 11.2 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)
    


```python
%timeit any(s) #python 内置函数
```

    475 µs ± 40.9 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)
    


```python
%timeit s.all() #pandas内置函数 检查所有元素是否都为true
```

    204 µs ± 9.96 µs per loop (mean ± std. dev. of 7 runs, 10000 loops each)
    


```python
%timeit all(s) #python内置函数
```

    484 µs ± 22.8 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)
    

**明显pandas内置函数效率更高,不在列举，尽量使用pandas内置函数**
map vs apply


```python
n = 1000000 # 1 million
s = pd.Series(np.random.randint(1, 101, n))
```


```python
%timeit s.apply(lambda x: 'odd' if x % 2 else 'even')
```

    647 ms ± 102 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)
    


```python
%%timeit
d={i:'odd' if i % 2 else 'even' for i in range(1,101)}
s.map(d)
```

    55.9 ms ± 14.3 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
    


```python
%timeit s.mod(2).map({1:'odd',0:'even'})
```

    87.4 ms ± 6.56 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
    


```python
%%timeit
d={i:'odd' if i % 2 else 'even' for i in range(1,101)}
pd.Series([d[val] for val in s])
```

    334 ms ± 11.5 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)
    

**尽量使用pandas的map而非apply,尽量使用pandas内置函数**
+ 下面列一些方法替换apply


```python
df = pd.DataFrame(np.random.rand(100, 5), columns=['a', 'b', 'c', 'd', 'e'])
df.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-251c3dd5ed5599e9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.apply(np.cumsum).head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-75d3ef31f61d3470.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.cumsum().head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-bc356a8df9770b9c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.apply(lambda x:x.max()-x.min())
```




    a    0.986689
    b    0.982148
    c    0.943625
    d    0.997441
    e    0.981994
    dtype: float64




```python
df.max()-df.min()
```




    a    0.986689
    b    0.982148
    c    0.943625
    d    0.997441
    e    0.981994
    dtype: float64




```python
df = pd.DataFrame(np.random.randint(0, 20, (100000, 4)), 
                  columns=['x1', 'y1', 'x2', 'y2'])
df.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-fff7a7738b74ea17.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
def dist_calc(s):
    x_diff = (s['x1'] - s['x2']) ** 2
    y_diff = (s['y1'] - s['y2']) ** 2
    return np.sqrt(x_diff + y_diff).round(2)
```


```python
df['distance'] = df.apply(dist_calc, axis='columns')
df.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-bd8795cad426730c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
np.sqrt((df['x1']-df['x2'])**2+(df['y1']-df['y2'])**2).head()
```




    0     5.385165
    1    10.198039
    2    11.180340
    3    16.643317
    4    14.866069
    dtype: float64




```python
%timeit df.apply(dist_calc, axis='columns')
```

    15.1 s ± 591 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)
    


```python
%timeit np.sqrt((df['x1']-df['x2'])**2+(df['y1']-df['y2'])**2)
```

    12.7 ms ± 126 µs per loop (mean ± std. dev. of 7 runs, 100 loops each)
    

**时间效率上可见一斑**


```python

```


```python

```


```python

```
