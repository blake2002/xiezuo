近来工作上一直在搞将c#程序移植到linux平台，进行的还比较顺利，由于主要工作是做后台服务开发，所以后续使用c#在linux平台上开发相关的服务，所以这里进行一些相关性研究，并记录下来，以备后期温习。也希望能够给那些跟我遇到同样工作性质的朋友一点思路。鄙人知识有限，如有错误请帮忙指出，以便改正。
## 1. 开发环境
+ 操作系统：deepin15.3 
+ 开发工具：mono、monodevelop （安装方法 请参看 我的[《使用mono开发linux下winform程序》](http://www.jianshu.com/p/81218b18f406)这篇文章，此处不在累述）
+ 第三方库：
   * [Topshelf](http://www.jianshu.com/p/81218b18f406):github 开源windows服务开发组件
   * log4net
   * topshelf.linux 将windows服务适应linux系统组件
## 2.开发步骤
+ 新建一个控制台程序
![MonoDevelop_004.png](http://upload-images.jianshu.io/upload_images/1691484-9ef42e684eea3cde.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![MonoDevelop_005.png](http://upload-images.jianshu.io/upload_images/1691484-30308b62f6dd4667.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

+  项目设置
项目右键->option->运行->常规 取消运行与外部控制台
否则不能跟踪调试。
![MyFirstService - Program.cs - MonoDevelop_006.png](http://upload-images.jianshu.io/upload_images/1691484-dfe1347dd606a7a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![工程选项 - MyFirstService_007.png](http://upload-images.jianshu.io/upload_images/1691484-535f9edba92a74b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

+ 使用Nuget安装topshelf，log4net第三方库
+ 代码

```csharp
		HostFactory.Run (service => {
		service.Service<BizService> (biz => {
			biz.ConstructUsing (() => new BizService ()); // 服务业务类
			biz.WhenStarted (b => b.Start ()).WhenStopped (b => b.Stop ());
		});
               service.UseLinuxIfAvailable ();// linux
		service.UseLog4Net ("log4net.config", true);
		service.RunAsLocalSystem ().SetDescription ("my first linux service");
		service.SetDisplayName ("MyFirstService");
		service.SetServiceName ("firstlinuxservice");
	});

//
public class BizService
{
	LogWriter log = null;

	public BizService ()
	{
		log = HostLogger.Get<BizService> ();
	}

	public void Start ()
	{
		log.Debug ("MyFirstService is starting.");

		Dictionary<string,List<KeyValuePair<string,string>>> featureTagDict = new Dictionary<string, List<KeyValuePair<string, string>>> () { {"leo1",new List<KeyValuePair<string,string>> () {
					new KeyValuePair<string,string> ("leo11", "haha"),
					new KeyValuePair<string,string> ("leo12", "haha2"),
				}
			}, {"leo2",new List<KeyValuePair<string,string>> () {
					new KeyValuePair<string,string> ("leo21", "hehe"),
					new KeyValuePair<string,string> ("leo22", "hehe2"),
				}
			},

		};

		JobManager.AddJob (() => {
			log.DebugFormat ("myfirstservice is running {0}", DateTime.Now.ToString ("yyyyMMddHHmmss"));

		}, 
			(s) => s.ToRunEvery (1).Seconds ());
	}

	public void Stop ()
	{
		log.Debug ("MyFirstService is stoping.");
	}
}
```
+ 调试运行 运行 如图


![选区_008.png](http://upload-images.jianshu.io/upload_images/1691484-98b8dae986821ed7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

+ 非调试运行 如图

![文件管理器_009.png](http://upload-images.jianshu.io/upload_images/1691484-d9e8fc6bf88f9d36.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![选区_010.png](http://upload-images.jianshu.io/upload_images/1691484-6efe61e5f2c9989b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![选区_012.png](http://upload-images.jianshu.io/upload_images/1691484-733bab6286de094a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Ok 这篇到这，后续讲述部署成linux服务[《C#开发linux服务初探2》](http://www.jianshu.com/p/c90c0e84a921)
