

```python
import pandas as pd
import numpy as np
```

## pandas使用总结
+ 尽量使用[]来选择单列，而非使用.属性的方式，不使用.属性的原因如下：
    * 如果column名字中有空格，代码不能运行
    * 如果column名字不唯一，代码也不能运行
+ 只使用字符串作为columns的名字
+ 避免使用链式索引,不要像这样df[df['a']>12]['b']=10,而应该这样df.loc[df['a']>10,'b']=10
+ 不要使用.ix这个方法，因为他已经过期了
+ 不要没原因的就使用.at和.iat,能避免就避免
+ 不要用query方法，用.loc,iloc来使用boolean条件筛选
+ 使用算数运算符来比较，不要用add，gt的产生副本的方法
+ 当DataFrame/Series中的方法能满足需求时，尽量使用它们提供的方法
    * 尽量避免使用python内置函数
    * 尽量避免使用apply方法
+ 不要在DataFrame/Series中存储复杂的类型，例如列表，dataframe，series
+ 遵循分组规则
    * df.groupby(['grouping', 'columns']).agg({'aggregating column': 'aggregating func'})
    * df.groupby(['grouping', 'columns'])['aggregating column'].aggregating_func()
+ 针对multi-level Index 有一个标准的处理方式
    * 统一处理成单层次
+ 在groupby时尽量避免使用apply，效率太慢了
+ melt/pivot vs stack/unstack 他们功能是等同的
**习惯用法列举：**


```python
df=pd.read_csv('data/sample_data.csv', index_col=0)
```


```python
df[['color', 'food', 'state']][['color', 'food']] # 不好
df.loc[df['age'] > 30, ['color', 'food']] #好
```


```python
# 好
rs = df['age'] > 30
cs = ['color', 'food']
df.loc[rs, cs]
```


```python
# 不好，不会赋值
df.loc[['Aaron', 'Dean']]['color'] = 'PURPLE'
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-f4c0bb1943c1330e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
# 好
rs = ['Aaron', 'Dean']
cs = 'color'
df.loc[rs, cs] = 'PURPLE'
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-d62f8835e0930f5c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





**待续。。。。**
