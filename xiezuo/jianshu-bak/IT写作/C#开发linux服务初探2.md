承接上文[《C#开发linux服务初探1》](http://www.jianshu.com/p/9e926696a751)，本篇记录将c#程序，部署成linux服务程序。
+ 1下载 [anyexec](https://linuxdot.net/down/anyexec-1.2-linux_x64.tar.gz) (该包可以使得开发的服务部署在没有任何mono环境下运行)解压 里边有 2个文件夹app、runtime和any
可执行文件。
![选区_014.png](http://upload-images.jianshu.io/upload_images/1691484-5d91857cfed26c53.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
+ 2将开发的控制台程序放在app目录下，这里以MyFirstService 为例，如图
![选区_015.png](http://upload-images.jianshu.io/upload_images/1691484-95cdd09a8d3bb120.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
+ 3 将any可执行文件改成与开发的运行程序名字一直，不包括exe扩展名，如图
![选区_016.png](http://upload-images.jianshu.io/upload_images/1691484-344c4af95bc248e8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![选区_017.png](http://upload-images.jianshu.io/upload_images/1691484-b04d5caca3c89244.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
测试一下 如图


![选区_018.png](http://upload-images.jianshu.io/upload_images/1691484-b067f145356d6929.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

下面看一下runtime目录 anyexec/runtime/lib/mono/gac


![选区_019.png](http://upload-images.jianshu.io/upload_images/1691484-13d9bdcf140df100.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
这里是程序所依赖的mono库。如果你的程序还依赖其他的，但是这里没有，那么你可以在mono库里，找到放在这里。
+ 4.下边介绍将程序部署成服务
1). [supervisor](http://supervisord.org/introduction.html)是用python写的一个进程管理工具，用来启动，重启，关闭进程。至于下载安装，大家暂时先百度，后续单独研究发文。这里先介绍部署步骤。
> cd /etc/supervisor/conf.d/
>sudo touch MyFirst.conf 
>sudo gedit MyFirst.conf 

配置如下
```
[program:MyFirstService]
directory=/home/administrator/demo/anyexec
command=/home/administrator/demo/anyexec/MyFirstService
user=administrator
process_name=%(program_name)s_%(process_num)02d
priority=1                    ;数字越高，优先级越高
numprocs=1                    ; 启动几个进程
autostart=true                ; 随着supervisord的启动而启动
autorestart=false              ; 自动重启。。当然要选上了
startretries=10               ; 启动失败时的最多重试次数
exitcodes=0                   ; 正常退出代码（是说退出代码是这个时就不再重启了吗？待确定）
stopsignal=KILL               ; 用来杀死进程的信号
stopwaitsecs=10               ; 发送SIGKILL前的等待时间
redirect_stderr=true          ; 重定向stderr到stdout
stdout_logfile=/home/administrator/log/supervisor.log

```
>sudo /etc/init.d/supervisor start


![选区_020.png](http://upload-images.jianshu.io/upload_images/1691484-aec2882537473ece.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

ok 这篇到这，后续讲服务提供对外调用接口，见[C#开发linux服务初探3](http://www.jianshu.com/p/2ff22339ddc8)
