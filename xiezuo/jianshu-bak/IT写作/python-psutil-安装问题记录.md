psutil是什么

psutil是个[Python](http://lib.csdn.net/base/python)模块。
**【yasi】**文档看这里：[https://pypi.python.org/pypi/psutil](https://pypi.python.org/pypi/psutil)
psutil能干啥
psutil能干的事是：提供了个接口，可以用来获取信息，包括：
当前运行的进程
系统（资源使用）信息CPU
内存
磁盘
网络
用户

psutil实现了很多功能，包括了如下工具所具有的：
ps
top
df
kill
free
lsof
free
netstat
ifconfig
nice
ionice
iostat
iotop
uptime
pidof
tty
who
taskset
pmap

在 virtualenv 中使用pip 安装 报错
```
copying psutil/tests/test_windows.py -> build/lib.linux-x86_64-3.5/psutil/tests
    running build_ext
    building 'psutil._psutil_linux' extension
    creating build/temp.linux-x86_64-3.5
    creating build/temp.linux-x86_64-3.5/psutil
    x86_64-linux-gnu-gcc -pthread -DNDEBUG -g -fwrapv -O2 -Wall -Wstrict-prototypes -g -fdebug-prefix-map=/build/python3.5-t01_iz/python3.5-3.5.2=. -fstack-protector-strong -Wformat -Werror=format-security -Wdate-time -D_FORTIFY_SOURCE=2 -fPIC -DPSUTIL_POSIX=1 -DPSUTIL_VERSION=513 -DPSUTIL_LINUX=1 -I/usr/include/python3.5m -I/home/administrator/demo/pythonTest/untitled/include/python3.5m -c psutil/_psutil_linux.c -o build/temp.linux-x86_64-3.5/psutil/_psutil_linux.o
    psutil/_psutil_linux.c:12:20: fatal error: Python.h: 没有那个文件或目录
     #include <Python.h>
                        ^
    compilation terminated.
    error: command 'x86_64-linux-gnu-gcc' failed with exit status 1
    
    ----------------------------------------
Command "/home/administrator/demo/pythonTest/untitled/bin/python3.5 -u -c "import setuptools, tokenize;__file__='/tmp/pip-build-ldas6rgp/psutil/setup.py';f=getattr(tokenize, 'open', open)(__file__);code=f.read().replace('\r\n', '\n');f.close();exec(compile(code, __file__, 'exec'))" install --record /tmp/pip-zpq12s79-record/install-record.txt --single-version-externally-managed --compile --install-headers /home/administrator/demo/pythonTest/untitled/include/site/python3.5/psutil" failed with error code 1 in /tmp/pip-build-ldas6rgp/psutil/
(untitled)administrator@JF8MUH652VSBDH:~/demo/pythonTest/untitled/bin$ pip install ^C
(untitled)administrator@JF8MUH652VSBDH:~/demo/pythonTest/untitled/bin$ pip install x86_64-linux-gnu-gcc
Collecting x86_64-linux-gnu-gcc
  Could not find a version that satisfies the requirement x86_64-linux-gnu-gcc (from versions: )
No matching distribution found for x86_64-linux-gnu-gcc

```
![选区_002.png](http://upload-images.jianshu.io/upload_images/1691484-ebf8f595a6f61f05.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

原因是由于没有安装python-devel开发包。

安装对应版本的开发包：sudo apt-get install python3.5-dev

成功解决
