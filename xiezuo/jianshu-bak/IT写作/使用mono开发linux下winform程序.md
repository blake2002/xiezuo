近来工作上有个windows桌面程序的项目要移植到linux上。所以研究了一下。现在做下笔记。
  1.背景：C#开发的winform程序。
  2.目标：移植到linux上，达到跨平台的效果。
  3.使用技术：ubuntu+mono+libdgilus。
  这里借个demo，记录一下linux下开发winform程序的步骤。
  1.环境搭建
    a. 安装mono 
   
![2016-07-24_101457.jpg](http://upload-images.jianshu.io/upload_images/1691484-cfde0491aa68f357.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



![2016-07-24_101541.jpg](http://upload-images.jianshu.io/upload_images/1691484-f7cf0eefbf5a62e2.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    

![2016-07-24_102010.jpg](http://upload-images.jianshu.io/upload_images/1691484-2d73967f560da0b3.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

因为开发winform程序，在windows上绘图需要依赖gdi+，这里已经标出，
在linux下libgdiplus是其替代品。

![2016-07-24_102056.jpg](http://upload-images.jianshu.io/upload_images/1691484-6e66bc62ccefe130.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

  b .安装开发环境
 
![2016-07-24_102148.jpg](http://upload-images.jianshu.io/upload_images/1691484-de37448d3fcdc71c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

就此开发环境搭建完毕。
2.开发步骤
 新建解决方案， 这里选择了控制台程序。
![2016-07-24_102610.jpg](http://upload-images.jianshu.io/upload_images/1691484-d4606e62fce058e1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


选择保存路径
![2016-07-24_102639.jpg](http://upload-images.jianshu.io/upload_images/1691484-67934ecdcb522d49.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

选择要使用的类库，
![2016-07-24_102859.jpg](http://upload-images.jianshu.io/upload_images/1691484-34fb8c79165a06e8.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![2016-07-24_102935.jpg](http://upload-images.jianshu.io/upload_images/1691484-6ca56d72d21fa35f.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![2016-07-24_103010.jpg](http://upload-images.jianshu.io/upload_images/1691484-9d5c677fadfb2455.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

新建一个类，创建form。

![2016-07-24_103139.jpg](http://upload-images.jianshu.io/upload_images/1691484-37fea022985698f0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


在代码区，using 类库，继承Form
![2016-07-24_103239.jpg](http://upload-images.jianshu.io/upload_images/1691484-c74a73244b60f226.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



![2016-07-24_170920.jpg](http://upload-images.jianshu.io/upload_images/1691484-68d27b421e159869.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![2016-07-24_171843.jpg](http://upload-images.jianshu.io/upload_images/1691484-2bd66701a1f47584.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![2016-07-24_171747.jpg](http://upload-images.jianshu.io/upload_images/1691484-70e893515ba6d964.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

写码，完成，执行

![2016-07-24_163240.jpg](http://upload-images.jianshu.io/upload_images/1691484-7fb8b289977d8159.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

取消控制台输出。


![2016-07-24_163414.jpg](http://upload-images.jianshu.io/upload_images/1691484-e481db4f97b346af.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![2016-07-24_163720.jpg](http://upload-images.jianshu.io/upload_images/1691484-07876058478590bf.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

到此为止。目前还没有设计时，拖拽控件，接下来的文章会有讲到。
