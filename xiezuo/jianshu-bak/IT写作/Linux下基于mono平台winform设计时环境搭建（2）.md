接着 [Linux下基于mono平台winform设计时环境搭建（1）](http://www.jianshu.com/p/7a068975eb83) 来.
下边介绍另外一种编译方式，使用monodevelop开发工具编译。
1. 打开mwf-designer解决方案 如图

![2016-07-27_102746.png](http://upload-images.jianshu.io/upload_images/1691484-2b76bfb157ca9e6c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![2016-07-27_103320.png](http://upload-images.jianshu.io/upload_images/1691484-8980134625119db2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

我使用mono对应的framework 是4.5，所以 targetframework需要改下，改成如图

![2016-07-27_132130.png](http://upload-images.jianshu.io/upload_images/1691484-f9a3b76c3a0a91ee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![2016-07-27_133049.png](http://upload-images.jianshu.io/upload_images/1691484-30cfdea7e17c43c2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
改成


![2016-07-27_134003.png](http://upload-images.jianshu.io/upload_images/1691484-302828e4464eb08e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

修改基础编译错误，编译成功 如图


![2016-07-27_153904.png](http://upload-images.jianshu.io/upload_images/1691484-ced676ddd027a2b5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

弄好的代码我签入到我的github地址 https://github.com/blake2002/mono.winform.designer.git
有需要的自己去下载。
到此，环境搭建完毕，后续将介绍使用方法。今天到这里。
