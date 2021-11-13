

```python
import pandas as pd
import numpy as np

```

## DataFrame index 操作


```python
df= pd.read_csv('data/sample_data2.csv')
```


```python
df
```




|         | Names | state | color | food | age | height | score |  
|-------|-----------|-------|-------|--------|--------|-------|-----|
| 0 | Jane | NY | blue | Steak | 30 | 165 | 4.6 |
| 1 | Niko | TX | green | Lamb | 2 | 70 | 8.3 |
| 2 | Aaron | FL | red | Mango | 12 | 120 | 9.0 |
| 3 | Penelope | AL | white | Apple | 4 | 80 | 3.3 |
| 4 | Dean | AK | gray | Cheese | 32 | 180 | 1.8 |
| 5 | Christina | TX | black | Melon | 33 | 172 | 9.5 |
| 6 | Cornelia | TX | red | Beans | 69 | 150 | 2.2 |



上边df 使用的是默认的index，该索引为 RangeIndex 类型 如下


```python
df.index
```




    RangeIndex(start=0, stop=7, step=1)



+ 将dataframe 某一列设置为索引


```python
df2_index = df.set_index('Names')
```


```python
df2_index
```




|              | state | color | food | age | height | score |  
|-----------|-------|-------|--------|--------|-------|-----|
| Names |  |  |  |  |  |  |
| Jane | NY | blue | Steak | 30 | 165 | 4.6 |
| Niko | TX | green | Lamb | 2 | 70 | 8.3 |
| Aaron | FL | red | Mango | 12 | 120 | 9.0 |
| Penelope | AL | white | Apple | 4 | 80 | 3.3 |
| Dean | AK | gray | Cheese | 32 | 180 | 1.8 |
| Christina | TX | black | Melon | 33 | 172 | 9.5 |
| Cornelia | TX | red | Beans | 69 | 150 | 2.2 |




```python
df
```




  || Names | state | color | food | age | height | score |
|-------|-----------|-------|-------|--------|--------|-------|-----|
| 0 | Jane | NY | blue | Steak | 30 | 165 | 4.6 |
| 1 | Niko | TX | green | Lamb | 2 | 70 | 8.3 |
| 2 | Aaron | FL | red | Mango | 12 | 120 | 9.0 |
| 3 | Penelope | AL | white | Apple | 4 | 80 | 3.3 |
| 4 | Dean | AK | gray | Cheese | 32 | 180 | 1.8 |
| 5 | Christina | TX | black | Melon | 33 | 172 | 9.5 |
| 6 | Cornelia | TX | red | Beans | 69 | 150 | 2.2 |



**上边默认是返回个新的dataframe，原来的不变**


```python
df.set_index('Names',inplace=True)
```


```python
df
```




|| state | color | food | age | height | score |  
|-----------|-------|-------|--------|--------|-------|-----|
| Names |  |  |  |  |  |  |
| Jane | NY | blue | Steak | 30 | 165 | 4.6 |
| Niko | TX | green | Lamb | 2 | 70 | 8.3 |
| Aaron | FL | red | Mango | 12 | 120 | 9.0 |
| Penelope | AL | white | Apple | 4 | 80 | 3.3 |
| Dean | AK | gray | Cheese | 32 | 180 | 1.8 |
| Christina | TX | black | Melon | 33 | 172 | 9.5 |
| Cornelia | TX | red | Beans | 69 | 150 | 2.2 |



**在原来基础上修改inplace=True**

+ 下面查看行索引 index 的名字


```python
df.index.name
```




    'Names'



+ 查看行索引 内容值


```python
df.index
```




    Index(['Jane', 'Niko', 'Aaron', 'Penelope', 'Dean', 'Christina', 'Cornelia'], dtype='object', name='Names')



+ 重置行索引为默认索引，生成新的Dataframe


```python
df_rev=df.reset_index()
df_rev
```




|| Names | state | color | food | age | height | score |  
|-------|-----------|-------|-------|--------|--------|-------|-----|
| 0 | Jane | NY | blue | Steak | 30 | 165 | 4.6 |
| 1 | Niko | TX | green | Lamb | 2 | 70 | 8.3 |
| 2 | Aaron | FL | red | Mango | 12 | 120 | 9.0 |
| 3 | Penelope | AL | white | Apple | 4 | 80 | 3.3 |
| 4 | Dean | AK | gray | Cheese | 32 | 180 | 1.8 |
| 5 | Christina | TX | black | Melon | 33 | 172 | 9.5 |
| 6 | Cornelia | TX | red | Beans | 69 | 150 | 2.2 |



**将行索引还原成默认的，names还原成列**


```python
df
```




|| state | color | food | age | height | score |  
|-----------|-------|-------|--------|--------|-------|-----|
| Names |  |  |  |  |  |  |
| Jane | NY | blue | Steak | 30 | 165 | 4.6 |
| Niko | TX | green | Lamb | 2 | 70 | 8.3 |
| Aaron | FL | red | Mango | 12 | 120 | 9.0 |
| Penelope | AL | white | Apple | 4 | 80 | 3.3 |
| Dean | AK | gray | Cheese | 32 | 180 | 1.8 |
| Christina | TX | black | Melon | 33 | 172 | 9.5 |
| Cornelia | TX | red | Beans | 69 | 150 | 2.2 |



+ 在原来Df基础上修改


```python
df.reset_index(inplace=True)
```


```python
df
```




|| Names | state | color | food | age | height | score |  
|-------|-----------|-------|-------|--------|--------|-------|-----|
| 0 | Jane | NY | blue | Steak | 30 | 165 | 4.6 |
| 1 | Niko | TX | green | Lamb | 2 | 70 | 8.3 |
| 2 | Aaron | FL | red | Mango | 12 | 120 | 9.0 |
| 3 | Penelope | AL | white | Apple | 4 | 80 | 3.3 |
| 4 | Dean | AK | gray | Cheese | 32 | 180 | 1.8 |
| 5 | Christina | TX | black | Melon | 33 | 172 | 9.5 |
| 6 | Cornelia | TX | red | Beans | 69 | 150 | 2.2 |



+ 行索引重新命名


```python
df2_index
```




 || state | color | food | age | height | score | 
|-----------|-------|-------|--------|--------|-------|-----|
| Names |  |  |  |  |  |  |
| Jane | NY | blue | Steak | 30 | 165 | 4.6 |
| Niko | TX | green | Lamb | 2 | 70 | 8.3 |
| Aaron | FL | red | Mango | 12 | 120 | 9.0 |
| Penelope | AL | white | Apple | 4 | 80 | 3.3 |
| Dean | AK | gray | Cheese | 32 | 180 | 1.8 |
| Christina | TX | black | Melon | 33 | 172 | 9.5 |
| Cornelia | TX | red | Beans | 69 | 150 | 2.2 |



+ 给行索引重命名后后返回新的行索引


```python
df2_index.index.rename('AllNames')
```




    Index(['Jane', 'Niko', 'Aaron', 'Penelope', 'Dean', 'Christina', 'Cornelia'], dtype='object', name='AllNames')




```python
df2_index
```




|| state | color | food | age | height | score |  
|-----------|-------|-------|--------|--------|-------|-----|
| Names |  |  |  |  |  |  |
| Jane | NY | blue | Steak | 30 | 165 | 4.6 |
| Niko | TX | green | Lamb | 2 | 70 | 8.3 |
| Aaron | FL | red | Mango | 12 | 120 | 9.0 |
| Penelope | AL | white | Apple | 4 | 80 | 3.3 |
| Dean | AK | gray | Cheese | 32 | 180 | 1.8 |
| Christina | TX | black | Melon | 33 | 172 | 9.5 |
| Cornelia | TX | red | Beans | 69 | 150 | 2.2 |



+ 使用重命名后新生成的行索引，修改行索引


```python
df2_index.index = df2_index.index.rename('AllNames')
```


```python
df2_index
```




 || state | color | food | age | height | score | 
|-----------|-------|-------|--------|--------|-------|-----|
| AllNames |  |  |  |  |  |  |
| Jane | NY | blue | Steak | 30 | 165 | 4.6 |
| Niko | TX | green | Lamb | 2 | 70 | 8.3 |
| Aaron | FL | red | Mango | 12 | 120 | 9.0 |
| Penelope | AL | white | Apple | 4 | 80 | 3.3 |
| Dean | AK | gray | Cheese | 32 | 180 | 1.8 |
| Christina | TX | black | Melon | 33 | 172 | 9.5 |
| Cornelia | TX | red | Beans | 69 | 150 | 2.2 |



+ 修改行索引内容


```python
n_index=['Jane1','Niko1','Aaron1','Penelope1','Dean1','Christina1','Cornelia1']
```


```python
df2_index.index= n_index
```


```python
df2_index
```




|| state | color | food | age | height | score |  
|------------|-------|-------|--------|--------|-------|-----|
| Jane1 | NY | blue | Steak | 30 | 165 | 4.6 |
| Niko1 | TX | green | Lamb | 2 | 70 | 8.3 |
| Aaron1 | FL | red | Mango | 12 | 120 | 9.0 |
| Penelope1 | AL | white | Apple | 4 | 80 | 3.3 |
| Dean1 | AK | gray | Cheese | 32 | 180 | 1.8 |
| Christina1 | TX | black | Melon | 33 | 172 | 9.5 |
| Cornelia1 | TX | red | Beans | 69 | 150 | 2.2 |


+ 使用.属性的方式 访问列索引


```python
df2_index.score
```




    Jane1         4.6
    Niko1         8.3
    Aaron1        9.0
    Penelope1     3.3
    Dean1         1.8
    Christina1    9.5
    Cornelia1     2.2
    Name: score, dtype: float64




```python
df2_index.food
```




    Jane1          Steak
    Niko1           Lamb
    Aaron1         Mango
    Penelope1      Apple
    Dean1         Cheese
    Christina1     Melon
    Cornelia1      Beans
    Name: food, dtype: object




```python
df2_index.food.Niko1
```




    'Lamb'



**此方式访问可以点出对应的方法，方便**


```python
df2_index[['food','food','food']]
```



 || food | food | food | 
|------------|--------|--------|--------|
| Jane1 | Steak | Steak | Steak |
| Niko1 | Lamb | Lamb | Lamb |
| Aaron1 | Mango | Mango | Mango |
| Penelope1 | Apple | Apple | Apple |
| Dean1 | Cheese | Cheese | Cheese |
| Christina1 | Melon | Melon | Melon |
| Cornelia1 | Beans | Beans | Beans |



