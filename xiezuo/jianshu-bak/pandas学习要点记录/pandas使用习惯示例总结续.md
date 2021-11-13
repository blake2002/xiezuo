

```python
import pandas as pd
import numpy as np

```

## pandas使用习惯总结续


```python
df = pd.read_csv('data/sample_data.csv',index_col=0)
foo_s=df[['food','score']]
foo_s
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-5421ecea64c43156.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 修改food列为steak，lamb的值


```python
foo_s.loc[foo_s['food'].isin(['Steak','Lamb']),'score']=99
foo_s
```

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py:543: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: http://pandas.pydata.org/pandas-docs/stable/indexing.html#indexing-view-versus-copy
      self.obj[item] = s
    




![image.png](https://upload-images.jianshu.io/upload_images/1691484-01f18a9903368580.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-a297726fd3161e8a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



**此中情况最好使用copy**


```python
food_score = df[['food','score']].copy()
```


```python
food_score.loc[food_score['food'].isin(['Steak','Lamb']),'score']=100
food_score
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-428425f0e2d8fd77.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ .ix都用。iloc，.loc代替
+ .query 当clomun的那么有空格时，不能运行


```python
df.query('age > 30')
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-97414908494e8a8b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df.loc[df['age']>30]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-7610eb7eae18220b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df2=df.copy()
```


```python
df2=df2.rename(columns={'food':'favor food'})
df2
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-53fde199363afc80.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
df2.query('favor food =="Steak"')
```


    Traceback (most recent call last):
    

      File "E:\software\anaconda3\lib\site-packages\IPython\core\interactiveshell.py", line 2961, in run_code
        exec(code_obj, self.user_global_ns, self.user_ns)
    

      File "<ipython-input-19-3be4a208753a>", line 1, in <module>
        df2.query('favor food =="Steak"')
    

      File "E:\software\anaconda3\lib\site-packages\pandas\core\frame.py", line 2847, in query
        res = self.eval(expr, **kwargs)
    

      File "E:\software\anaconda3\lib\site-packages\pandas\core\frame.py", line 2962, in eval
        return _eval(expr, inplace=inplace, **kwargs)
    

      File "E:\software\anaconda3\lib\site-packages\pandas\core\computation\eval.py", line 291, in eval
        truediv=truediv)
    

      File "E:\software\anaconda3\lib\site-packages\pandas\core\computation\expr.py", line 739, in __init__
        self.terms = self.parse()
    

      File "E:\software\anaconda3\lib\site-packages\pandas\core\computation\expr.py", line 756, in parse
        return self._visitor.visit(self.expr)
    

      File "E:\software\anaconda3\lib\site-packages\pandas\core\computation\expr.py", line 317, in visit
        raise e
    

      File "E:\software\anaconda3\lib\site-packages\pandas\core\computation\expr.py", line 311, in visit
        node = ast.fix_missing_locations(ast.parse(clean))
    

      File "E:\software\anaconda3\lib\ast.py", line 35, in parse
        return compile(source, filename, mode, PyCF_ONLY_AST)
    

      File "<unknown>", line 1
        favor food =="Steak"
                 ^
    SyntaxError: invalid syntax
    


+ 使用+, -, *, /, <, >, <=, >=, ==, != 减少使用dd, sub, mul, div, lt, gt, le, ge, eq, ne，除非要更改默认的axis


```python
college = pd.read_csv('data/college.csv',index_col='INSTNM')
pd.options.display.max_columns = 100
college.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-228874e220b2bd8c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
c_ugds=college.loc[:,'UGDS_WHITE':'UGDS_UNKN']
c_ugds.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-84fc324273480007.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
race_mean=c_ugds.mean()
race_mean.head()
```




    UGDS_WHITE    0.510207
    UGDS_BLACK    0.189997
    UGDS_HISP     0.161635
    UGDS_ASIAN    0.033544
    UGDS_AIAN     0.013813
    dtype: float64




```python
diff=c_ugds - race_mean
```


```python
diff.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-7667aa12c062a7c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
race_school=c_ugds.min(axis='columns')
race_school.head()
```




    INSTNM
    Alabama A & M University               0.0000
    University of Alabama at Birmingham    0.0007
    Amridge University                     0.0000
    University of Alabama in Huntsville    0.0002
    Alabama State University               0.0006
    dtype: float64




```python
(c_ugds - race_school).head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-65a0275b072835cb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**看，都是Nan，需要改变axis，如下**


```python
c_ugds.sub(race_school,axis='index').head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-45583eb638cd0c42.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**在需要具体制定axis时使用sub，add，gt等**
使用DataFrame/Series示例


```python
sum(college['UGDS'])
```




    nan




```python
college['UGDS'].sum()
```




    16200904.0



**上例中为什么一个是nan，那是因为该列中有nan值，如果没有nan值，那么结果一样**如下


```python
ugds=college['UGDS'].dropna()
ugds.head()
```




    INSTNM
    Alabama A & M University                4206.0
    University of Alabama at Birmingham    11383.0
    Amridge University                       291.0
    University of Alabama in Huntsville     5451.0
    Alabama State University                4811.0
    Name: UGDS, dtype: float64




```python
sum(ugds)
```




    16200904.0




```python
ugds.sum()
```




    16200904.0




```python
%timeit sum(ugds)
```

    558 µs ± 54.2 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)
    


```python
%timeit ugds.sum()
```

    285 µs ± 16.7 µs per loop (mean ± std. dev. of 7 runs, 1000 loops each)
    

**python内置函数与pandas内置函数，在操作dataframe，series有巨大的性能差距**

+ apply示例性能对比


```python
%timeit -n 5 c_ugds.apply(lambda x:x.max())
```

    5.96 ms ± 2.77 ms per loop (mean ± std. dev. of 7 runs, 5 loops each)
    


```python
%timeit -n 5 c_ugds.max()
```

    2.7 ms ± 358 µs per loop (mean ± std. dev. of 7 runs, 5 loops each)
    


```python
%timeit -n 5 c_ugds.apply(lambda x:x.max(),axis='columns')
```

    1.46 s ± 129 ms per loop (mean ± std. dev. of 7 runs, 5 loops each)
    


```python
%timeit -n 5 c_ugds.max(axis='columns')
```

    2.87 ms ± 383 µs per loop (mean ± std. dev. of 7 runs, 5 loops each)
    

**后两个性能明显有巨大差异**
当没有pandas内置函数能达到需求时，使用apply


```python
earnings_debt = college[['MD_EARN_WNE_P10', 'GRAD_DEBT_MDN_SUPP']]
earnings_debt.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-10587fd121aa9156.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
earnings_debt.dtypes
```




    MD_EARN_WNE_P10       object
    GRAD_DEBT_MDN_SUPP    object
    dtype: object




```python
earnings_debt.astype('float')
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-49-66a0075d85a0> in <module>()
    ----> 1 earnings_debt.astype('float')
    

    E:\software\anaconda3\lib\site-packages\pandas\util\_decorators.py in wrapper(*args, **kwargs)
        176                 else:
        177                     kwargs[new_arg_name] = new_arg_value
    --> 178             return func(*args, **kwargs)
        179         return wrapper
        180     return _deprecate_kwarg
    

    E:\software\anaconda3\lib\site-packages\pandas\core\generic.py in astype(self, dtype, copy, errors, **kwargs)
       4999             # else, only a single dtype is given
       5000             new_data = self._data.astype(dtype=dtype, copy=copy, errors=errors,
    -> 5001                                          **kwargs)
       5002             return self._constructor(new_data).__finalize__(self)
       5003 
    

    E:\software\anaconda3\lib\site-packages\pandas\core\internals.py in astype(self, dtype, **kwargs)
       3712 
       3713     def astype(self, dtype, **kwargs):
    -> 3714         return self.apply('astype', dtype=dtype, **kwargs)
       3715 
       3716     def convert(self, **kwargs):
    

    E:\software\anaconda3\lib\site-packages\pandas\core\internals.py in apply(self, f, axes, filter, do_integrity_check, consolidate, **kwargs)
       3579 
       3580             kwargs['mgr'] = self
    -> 3581             applied = getattr(b, f)(**kwargs)
       3582             result_blocks = _extend_blocks(applied, result_blocks)
       3583 
    

    E:\software\anaconda3\lib\site-packages\pandas\core\internals.py in astype(self, dtype, copy, errors, values, **kwargs)
        573     def astype(self, dtype, copy=False, errors='raise', values=None, **kwargs):
        574         return self._astype(dtype, copy=copy, errors=errors, values=values,
    --> 575                             **kwargs)
        576 
        577     def _astype(self, dtype, copy=False, errors='raise', values=None,
    

    E:\software\anaconda3\lib\site-packages\pandas\core\internals.py in _astype(self, dtype, copy, errors, values, klass, mgr, **kwargs)
        662 
        663                 # _astype_nansafe works fine with 1-d only
    --> 664                 values = astype_nansafe(values.ravel(), dtype, copy=True)
        665                 values = values.reshape(self.shape)
        666 
    

    E:\software\anaconda3\lib\site-packages\pandas\core\dtypes\cast.py in astype_nansafe(arr, dtype, copy)
        728 
        729     if copy:
    --> 730         return arr.astype(dtype, copy=True)
        731     return arr.view(dtype)
        732 
    

    ValueError: could not convert string to float: 'PrivacySuppressed'



```python
pd.to_numeric(earnings_debt)
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-50-ea781e156878> in <module>()
    ----> 1 pd.to_numeric(earnings_debt)
    

    E:\software\anaconda3\lib\site-packages\pandas\core\tools\numeric.py in to_numeric(arg, errors, downcast)
        118         values = np.array([arg], dtype='O')
        119     elif getattr(arg, 'ndim', 1) > 1:
    --> 120         raise TypeError('arg must be a list, tuple, 1-d array, or Series')
        121     else:
        122         values = arg
    

    TypeError: arg must be a list, tuple, 1-d array, or Series


**如上述情况，现有函数达不到数据类型转换的效果，使用apply**


```python
earnings_debt=earnings_debt.apply(pd.to_numeric,errors='coerce')
earnings_debt.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-b75b2d61eeed111c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
earnings_debt.info()
```

    <class 'pandas.core.frame.DataFrame'>
    Index: 7535 entries, Alabama A & M University to Excel Learning Center-San Antonio South
    Data columns (total 2 columns):
    MD_EARN_WNE_P10       5591 non-null float64
    GRAD_DEBT_MDN_SUPP    5993 non-null float64
    dtypes: float64(2)
    memory usage: 496.6+ KB
    

+ group & agg示例用法


```python
state=college.groupby('STABBR').agg({'SATMTMID':'max'})
```


```python
state.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-b6aa6ea0449fd248.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
college.groupby('STABBR')['SATMTMID'].agg('max').head()
```




    STABBR
    AK    503.0
    AL    590.0
    AR    600.0
    AS      NaN
    AZ    580.0
    Name: SATMTMID, dtype: float64




```python
college.groupby('STABBR')['SATMTMID'].max().head()
```




    STABBR
    AK    503.0
    AL    590.0
    AR    600.0
    AS      NaN
    AZ    580.0
    Name: SATMTMID, dtype: float64




```python
college[['STABBR','SATMTMID']].groupby('STABBR').max().head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-e22949a7fec540e2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 多层次索引，搞成单层次，二维表的形式处理，更便捷


```python
col_stats = college.groupby(['STABBR', 'RELAFFIL']) \
                   .agg({'UGDS': ['min', 'max'], 
                        'SATMTMID': ['median', 'max']})
col_stats.head(10)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-f509c516476975a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
col_stats.columns = ['min ugds', 'max ugds', 'median satmtmid', 'max satmtmid']
col_stats = col_stats.reset_index()
col_stats.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-a7f6cf6781ae2575.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 在groupby中使用apply会有重大性能缺失，小心，示例


```python
def top5(s):
    s=s.sort_values(ascending=False)
    tp5_total=s.iloc[:5].sum()
    total=s.sum()
    return tp5_total/total
```


```python
college.groupby('STABBR').agg({'UGDS':top5}).head(10)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-d6245771ceb41757.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
%timeit college.groupby('STABBR').agg({'UGDS':top5})
```

    99 ms ± 3.61 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
    

+ 性能优化 如下不在top5函数中排序


```python
def top5_2(s):
    tp5_total=s.iloc[:5].sum()
    total=s.sum()
    return tp5_total/total
```


```python
college.sort_values('UGDS',ascending=False).groupby('STABBR').agg({'UGDS':top5_2}).head(10)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-7a6f4dff920cfa9e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
%timeit college.sort_values('UGDS',ascending=False).groupby('STABBR').agg({'UGDS':top5_2})
```

    53.2 ms ± 2.19 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
    

+ 使用pandas内置函数优化 如下


```python
top5=college.sort_values('UGDS',ascending=False).groupby('STABBR').head()
top5
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-978bb2eed2491ded.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




```python
top5_total=top5.groupby('STABBR').agg({'UGDS':'sum'})
top5_total.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-1535b84e93e89718.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
total=college.groupby('STABBR').agg({'UGDS':'sum'})
total.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-0e6ba74dd5b31ea9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
(top5_total / total).head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-67768068341d3745.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
%%timeit
college_top5 = college.sort_values('UGDS', ascending=False) \
                      .groupby('STABBR').head()
top5_total = college_top5.groupby('STABBR').agg({'UGDS': 'sum'})
total = college.groupby('STABBR').agg({'UGDS': 'sum'})
top5_total / total
```

    16.2 ms ± 4.02 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)
    

**由53.2 ms减少到了16.2 ms**

+ melt vs stack 示例


```python
movie = pd.read_csv('data/movie.csv')
movie.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-7d0546d70617d80e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
act1 = movie.melt(id_vars=['title'], 
                  value_vars=['actor1', 'actor2', 'actor3'], 
                  var_name='actor number',
                  value_name='actor name')
```


```python
act1.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-b6e55e2280859859.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
stacked = movie.set_index('title')[['actor1', 'actor2', 'actor3']].stack()
stacked.head()
```




    title                                           
    Avatar                                    actor1         CCH Pounder
                                              actor2    Joel David Moore
                                              actor3           Wes Studi
    Pirates of the Caribbean: At World's End  actor1         Johnny Depp
                                              actor2       Orlando Bloom
    dtype: object




```python
stacked.reset_index(name='actor name').head(10)
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-8ac19ad226b70e87.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
act1.pivot(index='title', columns='actor number', values='actor name').head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-25d7e019c01db5ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
stacked.unstack().head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-8edd7db7e7812637.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ pivot_table vs groupby then unstack


```python
emp = pd.read_csv('data/employee.csv')
emp.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-03ed2342fca9c700.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
emp.pivot_table(index='RACE', columns='GENDER', values='BASE_SALARY')
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-045f69eab8602778.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
race_gen_sal = emp.groupby(['RACE', 'GENDER']).agg({'BASE_SALARY': 'mean'})
race_gen_sal
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-d915cb8cf7416564.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
race_gen_sal.unstack('GENDER')
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-abd3542a2c0b5e77.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python

```


```python

```


```python

```


```python

```
