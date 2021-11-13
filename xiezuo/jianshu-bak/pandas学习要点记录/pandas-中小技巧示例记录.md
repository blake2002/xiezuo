

```python
import pandas as pd
import numpy as np
```

### pandas 中小技巧示例记录


```python
df=pd.read_csv('data/nba_stats.csv')
df.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-a0154d608dc064d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 找出每列最大值，最小值


```python
df.max()
```




    Year                    2017
    Player    Zydrunas Ilgauskas
    Pos                    SG-SF
    Age                       44
    Tm                       WSB
    MP                      3638
    FT                       833
    TRB                     1530
    AST                     1164
    STL                      301
    BLK                      456
    TOV                      464
    PF                       386
    PTS                     3041
    dtype: object




```python
df.min()
```




    Year            1978
    Player    A.C. Green
    Pos                C
    Age               18
    Tm               ATL
    MP                 0
    FT                 0
    TRB                0
    AST                0
    STL                0
    BLK                0
    TOV                0
    PF                 0
    PTS                0
    dtype: object



+ boolean 条件选择STL列最大值


```python
df.loc[df['STL']==df['STL'].max()]
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-616ad48cf39e4749.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ 设置Player为index，并选择数值列


```python
df_num=df.set_index('Player').select_dtypes('number')
df_num.head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-0582f4744404fc1f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




+ idxmax 最大值对应的index值


```python
idx=df_num.idxmax()
```


```python
idx
```




    Year        Ivica Zubac
    Age        Kevin Willis
    MP       Truck Robinson
    FT      Michael Jordan*
    TRB      Dennis Rodman*
    AST      John Stockton*
    STL     Alvin Robertson
    BLK          Mark Eaton
    TOV        James Harden
    PF       Darryl Dawkins
    PTS     Michael Jordan*
    dtype: object




```python
df_num.loc[idx].head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-4a8d0f84530c8719.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




**这里有个问题需要注意，如下**


```python
cond1= df_num['Age'] > 19
```


```python
cond1.head()
```




    Player
    Ivica Zubac     False
    Gerald Green     True
    Danny Green      True
    Jerian Grant     True
    Jerami Grant     True
    Name: Age, dtype: bool




```python
type(cond1)
```




    pandas.core.series.Series




```python
df_num.loc[cond1].head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-79a33af71e06cfab.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
all(df_num.index == cond1.index)
```




    True




```python
cond1.index+'1'
```




    Index(['Ivica Zubac1', 'Gerald Green1', 'Danny Green1', 'Jerian Grant1',
           'Jerami Grant1', 'Jerami Grant1', 'Jerami Grant1', 'Treveon Graham1',
           'Marcin Gortat1', 'Eric Gordon1',
           ...
           'Louie Nelson1', 'Willie Norwood1', 'Willie Norwood1', 'Sonny Parker1',
           'Mark Olberding1', 'Eddie Owens1', 'Tom Owens1', 'Joe Pace1',
           'Robert Parish*1', 'Willie Norwood1'],
          dtype='object', length=19645)




```python

```


```python
cond2=pd.Series(cond1.values,index=cond1.index+'1')
```


```python
cond2
```




    Ivica Zubac1         False
    Gerald Green1         True
    Danny Green1          True
    Jerian Grant1         True
    Jerami Grant1         True
    Jerami Grant1         True
    Jerami Grant1         True
    Treveon Graham1       True
    Marcin Gortat1        True
    Eric Gordon1          True
    Aaron Gordon1         True
    Archie Goodwin1       True
    Archie Goodwin1       True
    Archie Goodwin1       True
    Rudy Gobert1          True
    Manu Ginobili1        True
    Taj Gibson1           True
    Draymond Green1       True
    JaMychal Green1       True
    Spencer Hawes1        True
    Jeff Green1           True
    Andrew Harrison1      True
    Aaron Harrison1       True
    Tobias Harris1        True
    Manny Harris1         True
    Joe Harris1           True
    Gary Harris1          True
    Devin Harris1         True
    Montrezl Harrell1     True
    Justin Harper1        True
                         ...  
    Kevin Restani1        True
    Kevin Restani1        True
    Anthony Roberts1      True
    Tony Robertson1       True
    Truck Robinson1       True
    Bill Robinzine1       True
    Glenn Mosley1         True
    Ben Poquette1         True
    Dave Robisch1         True
    Curtis Perry1         True
    Norm Nixon1           True
    Billy Paultz1         True
    Calvin Murphy*1       True
    Bob Nash1             True
    Swen Nater1           True
    Lloyd Neal1           True
    Louie Nelson1         True
    Louie Nelson1         True
    Johnny Neumann1       True
    Mike Newlin1          True
    Louie Nelson1         True
    Willie Norwood1       True
    Willie Norwood1       True
    Sonny Parker1         True
    Mark Olberding1       True
    Eddie Owens1          True
    Tom Owens1            True
    Joe Pace1             True
    Robert Parish*1       True
    Willie Norwood1       True
    Length: 19645, dtype: bool




```python
df_num.loc[cond2].head()
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-38-7d880584d241> in <module>()
    ----> 1 df_num.loc[cond2].head()
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in __getitem__(self, key)
       1476 
       1477             maybe_callable = com._apply_if_callable(key, self.obj)
    -> 1478             return self._getitem_axis(maybe_callable, axis=axis)
       1479 
       1480     def _is_scalar_access(self, key):
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in _getitem_axis(self, key, axis)
       1866             return self._get_slice_axis(key, axis=axis)
       1867         elif com.is_bool_indexer(key):
    -> 1868             return self._getbool_axis(key, axis=axis)
       1869         elif is_list_like_indexer(key):
       1870 
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in _getbool_axis(self, key, axis)
       1491             axis = self.axis or 0
       1492         labels = self.obj._get_axis(axis)
    -> 1493         key = check_bool_indexer(labels, key)
       1494         inds, = key.nonzero()
       1495         try:
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in check_bool_indexer(ax, key)
       2351     result = key
       2352     if isinstance(key, ABCSeries) and not key.index.equals(ax):
    -> 2353         result = result.reindex(ax)
       2354         mask = isna(result._values)
       2355         if mask.any():
    

    E:\software\anaconda3\lib\site-packages\pandas\core\series.py in reindex(self, index, **kwargs)
       3323     @Appender(generic._shared_docs['reindex'] % _shared_doc_kwargs)
       3324     def reindex(self, index=None, **kwargs):
    -> 3325         return super(Series, self).reindex(index=index, **kwargs)
       3326 
       3327     def drop(self, labels=None, axis=0, index=None, columns=None,
    

    E:\software\anaconda3\lib\site-packages\pandas\core\generic.py in reindex(self, *args, **kwargs)
       3687         # perform the reindex on the axes
       3688         return self._reindex_axes(axes, level, limit, tolerance, method,
    -> 3689                                   fill_value, copy).__finalize__(self)
       3690 
       3691     def _reindex_axes(self, axes, level, limit, tolerance, method, fill_value,
    

    E:\software\anaconda3\lib\site-packages\pandas\core\generic.py in _reindex_axes(self, axes, level, limit, tolerance, method, fill_value, copy)
       3705             obj = obj._reindex_with_indexers({axis: [new_index, indexer]},
       3706                                              fill_value=fill_value,
    -> 3707                                              copy=copy, allow_dups=False)
       3708 
       3709         return obj
    

    E:\software\anaconda3\lib\site-packages\pandas\core\generic.py in _reindex_with_indexers(self, reindexers, fill_value, copy, allow_dups)
       3808                                                 fill_value=fill_value,
       3809                                                 allow_dups=allow_dups,
    -> 3810                                                 copy=copy)
       3811 
       3812         if copy and new_data is self._data:
    

    E:\software\anaconda3\lib\site-packages\pandas\core\internals.py in reindex_indexer(self, new_axis, indexer, axis, fill_value, allow_dups, copy)
       4412         # some axes don't allow reindexing with dups
       4413         if not allow_dups:
    -> 4414             self.axes[axis]._can_reindex(indexer)
       4415 
       4416         if axis >= self.ndim:
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexes\base.py in _can_reindex(self, indexer)
       3574         # trying to reindex on an axis with duplicates
       3575         if not self.is_unique and len(indexer):
    -> 3576             raise ValueError("cannot reindex from a duplicate axis")
       3577 
       3578     def reindex(self, target, method=None, level=None, limit=None,
    

    ValueError: cannot reindex from a duplicate axis



```python
all(cond2.index == df_num.index)
```




    False



**cond1的索引完全==df_num的索引，如果不相等，则报错**
**但是idx也是Series,索引不等于df_num的索引，但是loc却是能筛选出数据，why？**


```python
len(idx.index) == len(df_num.index)
```




    False




```python
df_num.loc[idx].head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-1f32e56134541adf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
a=pd.Series(idx.values,index=idx.index+'1')
a
```




    Year1        Ivica Zubac
    Age1        Kevin Willis
    MP1       Truck Robinson
    FT1      Michael Jordan*
    TRB1      Dennis Rodman*
    AST1      John Stockton*
    STL1     Alvin Robertson
    BLK1          Mark Eaton
    TOV1        James Harden
    PF1       Darryl Dawkins
    PTS1     Michael Jordan*
    dtype: object




```python
df_num.loc[a].head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-11c11f7ba1c64e22.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
aa=pd.Series(idx.values[:5],index=a.index[:5])
```


```python
aa
```




    Year1        Ivica Zubac
    Age1        Kevin Willis
    MP1       Truck Robinson
    FT1      Michael Jordan*
    TRB1      Dennis Rodman*
    dtype: object




```python
df_num.loc[aa].head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-5c8ecf418b5112d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)





```python
bb=pd.Series([True]*5,index=aa.index)
```


```python
bb
```




    Year1    True
    Age1     True
    MP1      True
    FT1      True
    TRB1     True
    dtype: bool




```python
df_num.loc[bb].head()
```


    ---------------------------------------------------------------------------

    IndexingError                             Traceback (most recent call last)

    <ipython-input-50-eb7dd4651ffc> in <module>()
    ----> 1 df_num.loc[bb].head()
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in __getitem__(self, key)
       1476 
       1477             maybe_callable = com._apply_if_callable(key, self.obj)
    -> 1478             return self._getitem_axis(maybe_callable, axis=axis)
       1479 
       1480     def _is_scalar_access(self, key):
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in _getitem_axis(self, key, axis)
       1866             return self._get_slice_axis(key, axis=axis)
       1867         elif com.is_bool_indexer(key):
    -> 1868             return self._getbool_axis(key, axis=axis)
       1869         elif is_list_like_indexer(key):
       1870 
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in _getbool_axis(self, key, axis)
       1491             axis = self.axis or 0
       1492         labels = self.obj._get_axis(axis)
    -> 1493         key = check_bool_indexer(labels, key)
       1494         inds, = key.nonzero()
       1495         try:
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in check_bool_indexer(ax, key)
       2354         mask = isna(result._values)
       2355         if mask.any():
    -> 2356             raise IndexingError('Unalignable boolean Series provided as '
       2357                                 'indexer (index of the boolean Series and of '
       2358                                 'the indexed object do not match')
    

    IndexingError: Unalignable boolean Series provided as indexer (index of the boolean Series and of the indexed object do not match



```python
cc= pd.Series(idx.values+'1',index=idx.values)
```


```python
cc
```




    Ivica Zubac            Ivica Zubac1
    Kevin Willis          Kevin Willis1
    Truck Robinson      Truck Robinson1
    Michael Jordan*    Michael Jordan*1
    Dennis Rodman*      Dennis Rodman*1
    John Stockton*      John Stockton*1
    Alvin Robertson    Alvin Robertson1
    Mark Eaton              Mark Eaton1
    James Harden          James Harden1
    Darryl Dawkins      Darryl Dawkins1
    Michael Jordan*    Michael Jordan*1
    dtype: object




```python
df_num.loc[cc].head()
```


    ---------------------------------------------------------------------------

    KeyError                                  Traceback (most recent call last)

    <ipython-input-54-74958a2d7d6d> in <module>()
    ----> 1 df_num.loc[cc].head()
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in __getitem__(self, key)
       1476 
       1477             maybe_callable = com._apply_if_callable(key, self.obj)
    -> 1478             return self._getitem_axis(maybe_callable, axis=axis)
       1479 
       1480     def _is_scalar_access(self, key):
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in _getitem_axis(self, key, axis)
       1899                     raise ValueError('Cannot index with multidimensional key')
       1900 
    -> 1901                 return self._getitem_iterable(key, axis=axis)
       1902 
       1903             # nested tuple slicing
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in _getitem_iterable(self, key, axis)
       1161                     result = self.obj._take(indexer[indexer != -1], axis=axis)
       1162 
    -> 1163                     self._validate_read_indexer(key, new_indexer, axis)
       1164                     result = result._reindex_with_indexers(
       1165                         {axis: [new_target, new_indexer]},
    

    E:\software\anaconda3\lib\site-packages\pandas\core\indexing.py in _validate_read_indexer(self, key, indexer, axis)
       1204                 raise KeyError(
       1205                     u"None of [{key}] are in the [{axis}]".format(
    -> 1206                         key=key, axis=self.obj._get_axis_name(axis)))
       1207 
       1208             # we skip the warning on Categorical/Interval
    

    KeyError: 'None of [Ivica Zubac            Ivica Zubac1\nKevin Willis          Kevin Willis1\nTruck Robinson      Truck Robinson1\nMichael Jordan*    Michael Jordan*1\nDennis Rodman*      Dennis Rodman*1\nJohn Stockton*      John Stockton*1\nAlvin Robertson    Alvin Robertson1\nMark Eaton              Mark Eaton1\nJames Harden          James Harden1\nDarryl Dawkins      Darryl Dawkins1\nMichael Jordan*    Michael Jordan*1\ndtype: object] are in the [index]'



```python
dd= pd.Series(idx.values,index=idx.values)
dd
```




    Ivica Zubac            Ivica Zubac
    Kevin Willis          Kevin Willis
    Truck Robinson      Truck Robinson
    Michael Jordan*    Michael Jordan*
    Dennis Rodman*      Dennis Rodman*
    John Stockton*      John Stockton*
    Alvin Robertson    Alvin Robertson
    Mark Eaton              Mark Eaton
    James Harden          James Harden
    Darryl Dawkins      Darryl Dawkins
    Michael Jordan*    Michael Jordan*
    dtype: object




```python
df_num.loc[dd].head()
```




![image.png](https://upload-images.jianshu.io/upload_images/1691484-cdce0fc659b4835b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




### loc Series 总结
+ boolean Series 条件筛选，Series索引要与df相同
+ 非boolean Series 条件筛选，Series的values 要有index 相同


```python

```


```python

```


```python

```
