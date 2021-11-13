承接上文[《C#开发linux服务初探2》](http://www.jianshu.com/p/c90c0e84a921)，今天讲一下服务对外提供调用接口。
进来微软为了跨平台提出了OWIN新标准，如果不熟悉的可以问一下度娘，这里不在累述。本文使用了支持此标准的第三方开源库[Nancy](https://github.com/NancyFx/Nancy)。接下来上干货
#1.nuget下载相关库
+ Nancy
+ Nancy.Hosting.Self
+ Topshelf.Nancy
![选区_001.png](http://upload-images.jianshu.io/upload_images/1691484-076f9179ce3a9dff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#2. 代码
####1. 配置代码


```csharp
		HostFactory.Run (service => {
				service.Service<BizService> (biz => {
					biz.ConstructUsing (() => new BizService ());
					biz.WhenStarted (b => b.Start ()).WhenStopped (b => b.Stop ());
                    // Nancy ---------------指定端口-------------------------
					biz.WithNancyEndpoint (service, b => {
						b.AddHost (port: 8080);
						b.CreateUrlReservationsOnInstall ();
					});
                   // Nancy ----------------------------------------
				});
				service.UseLinuxIfAvailable ();
				service.UseLog4Net ("log4net.config", true);
                // Nancy 指定提供web服务
				service.RunAsNetworkService ().SetDescription ("my first linux service");
				service.SetDisplayName ("MyFirstService");
				service.SetServiceName ("firstlinuxservice");

			});
```

####2.Nancy 服务代码
- 新建一个类继承NancyModule，在 构造函数里注册对外方法 如图

![选区_002.png](http://upload-images.jianshu.io/upload_images/1691484-67fa90e249fe9e14.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

####3.测试  如图

- 启动
![选区_003.png](http://upload-images.jianshu.io/upload_images/1691484-95a1b564ae1438d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


- 网址测试


![选区_004.png](http://upload-images.jianshu.io/upload_images/1691484-87a1317d3451fe73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


有关Nancy的后续慢慢的开个专题研究。本篇就到这里。服务有了，对外接口有了，后续讲一下将服务部署成可水平扩展的负载均衡服务。一步一步慢慢研究。
