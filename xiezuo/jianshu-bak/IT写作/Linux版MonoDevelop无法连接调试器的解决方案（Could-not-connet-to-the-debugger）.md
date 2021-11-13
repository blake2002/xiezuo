[Linux版MonoDevelop无法连接调试器的解决方案（Could not connet to the debugger）](http://www.cnblogs.com/lilei9110/p/4338536.html)
安装了Linux版本的MonoDevelop之后，在运行程序的时候会提示Could not connnet to the debugger.的错误。
原因是新版本的Gnome Terminal不再接受--disable-factory参数。
解决办法有二：
1. 在命令行里输入：
$ unset GNOME_DESKTOP_SESSION_ID
$ monodevelop
 
2. 在项目的Project Options > Run > General里，将Run on external console取消勾选。
