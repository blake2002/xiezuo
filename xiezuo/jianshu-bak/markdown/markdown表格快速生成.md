# [markdown表格快速生成](https://www.cnblogs.com/naiij/p/9431936.html)

作者：[@naiij](https://www.cnblogs.com/naiij/)
本文为作者原创，转载请注明出处：[https://www.cnblogs.com/naiij/p/9431936.html](https://www.cnblogs.com/naiij/p/9431936.html)

* * *

markdown原生的表格支持很弱，不能合并单元格，不能调用css样式，于是画出来的表格就长得很奇怪。

所以这个时候就需要一些工具来快速制作一个表格。将表格转换成html的

然后在粘贴到markdown里面就是一个高效的好方法。

## 生成步骤

这里介绍一下我的操作步骤：

**1\. 快速绘制主要内容**

首先打开一个表格类应用，诸如[excel](https://www.office.com/launch/excel?ui=zh-CN&rs=NO&auth=2)，[google docs](https://docs.google.com/spreadsheets/u/0/)，[腾讯文档](https://docs.qq.com/desktop/templates-list.html?padtype=1)等等，然后将主要内容以及表格的框架快速打上去。

**2\. 将表格转成html**

这里使用一些在线生成代码工具，将表格转换成html代码，我使用的是[Tables Generator](http://www.tablesgenerator.com/)。

首先我们依次点击`File`、`Paste table data`将刚刚绘制好的表格粘贴过来。（第一步为什么不直接敲在这里，是因为它的快捷键支持太弱了，反观`excel`有各种方便的功能画一个表很快）然后可以在`Theme`里面选择你希望的样式，以及边框什么的。之后勾上`Compact mode`点击`Generate`就能生成代码了。

**3\. 将html代码粘贴到markdown中**

markdown支持html语法，所以直接粘贴就好了。
