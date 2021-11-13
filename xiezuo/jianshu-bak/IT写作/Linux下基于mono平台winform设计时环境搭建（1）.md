开发winform桌面程序，离不开设计时，从工具箱拖拽空间，设置属性。下面就讲一下该环境的搭建。
- 首先 在github上获取 mwf-desinger
  + git 命令
> git clone https://github.com/mono/mwf-desinger.git

![2016-07-25_100353.png](http://upload-images.jianshu.io/upload_images/1691484-07615cba9413f75b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  + 目录的结构说明
   
    * Prepare Visual Studio Build.bat 为visual studio 开发工具准备的批处理，看其内容
> cd deps\Mono.Design && generate-mono-design.py
>pause

    所以起作用的是这个python代码。因此，首先需要安装python。
    * src 源代码

![2016-07-25_134608.png](http://upload-images.jianshu.io/upload_images/1691484-4ffd9bee5053d445.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
   * docs 文档
   * deps 为mono开发为准备的设计时


![2016-07-25_141117.png](http://upload-images.jianshu.io/upload_images/1691484-f474a4e99e45bcfc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![2016-07-25_141117.png](http://upload-images.jianshu.io/upload_images/1691484-2f130b4eb9dc28be.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

此时你会发现，该目录下没有源代码，有个python文件(generate-mono-design.py)，看文件名字是生成代码的。
打开该文件，查看源代码。如图
![2016-07-25_142145.png](http://upload-images.jianshu.io/upload_images/1691484-e277303f7e783a8a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
该脚本的作用是：
1. 从svn获取源代码-》svn失效，直接git clone mono源码到本地。
2. 打补丁
3. 更新代码命名空

**python 脚本的执行环境是python3**
4. 执行generate-mono-design.py 脚本 如下
> python generate-mono-design.py

执行结果如图

![2016-07-26_105926.png](http://upload-images.jianshu.io/upload_images/1691484-ef0e7b8b9ff79637.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![2016-07-26_105952.png](http://upload-images.jianshu.io/upload_images/1691484-22387cfbfe8fd7c3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

出错了。获取不到源代码文件，怎么办？
我把mono源代码下载下来，对比了一下，文件Mono.Design.sources 列表（如下）中，在mono源码中都有。

> build/common/Consts.cs.in
> build/common/MonoTODOAttribute.cs
> class/System.Design/System.ComponentModel.Design.Serialization/BasicDesignerLoader.cs
> class/System.Design/System.ComponentModel.Design.Serialization/CodeDomComponentSerializationService.cs
> class/System.Design/System.ComponentModel.Design.Serialization/CodeDomDesignerLoader.cs
> class/System.Design/System.ComponentModel.Design.Serialization/CodeDomSerializationProvider.cs
> class/System.Design/System.ComponentModel.Design.Serialization/CodeDomSerializer.cs
> class/System.Design/System.ComponentModel.Design.Serialization/CodeDomSerializerBase.cs
> class/System.Design/System.ComponentModel.Design.Serialization/CollectionCodeDomSerializer.cs
> class/System.Design/System.ComponentModel.Design.Serialization/ComponentCodeDomSerializer.cs
> class/System.Design/System.ComponentModel.Design.Serialization/DesignerSerializationManager.cs
> class/System.Design/System.ComponentModel.Design.Serialization/EnumCodeDomSerializer.cs
> class/System.Design/System.ComponentModel.Design.Serialization/EventCodeDomSerializer.cs
> class/System.Design/System.ComponentModel.Design.Serialization/ExpressionContext.cs
> class/System.Design/System.ComponentModel.Design.Serialization/MemberCodeDomSerializer.cs
> class/System.Design/System.ComponentModel.Design.Serialization/ObjectStatementCollection.cs
> class/System.Design/System.ComponentModel.Design.Serialization/PrimitiveCodeDomSerializer.cs
> class/System.Design/System.ComponentModel.Design.Serialization/PropertyCodeDomSerializer.cs
> class/System.Design/System.ComponentModel.Design.Serialization/RootCodeDomSerializer.cs
> class/System.Design/System.ComponentModel.Design.Serialization/RootContext.cs
> class/System.Design/System.ComponentModel.Design.Serialization/SerializeAbsoluteContext.cs
> class/System.Design/System.ComponentModel.Design.Serialization/StatementContext.cs
> class/System.Design/System.ComponentModel.Design.Serialization/TypeCodeDomSerializer.cs
> class/System.Design/System.ComponentModel.Design/ActiveDesignSurfaceChangedEventArgs.cs
> class/System.Design/System.ComponentModel.Design/ActiveDesignSurfaceChangedEventHandler.cs
> class/System.Design/System.ComponentModel.Design/ComponentDesigner.cs
> class/System.Design/System.ComponentModel.Design/DesignModeNestedContainer.cs
> class/System.Design/System.ComponentModel.Design/DesignModeSite.cs
> class/System.Design/System.ComponentModel.Design/DesignSurface.cs
> class/System.Design/System.ComponentModel.Design/DesignSurfaceCollection.cs
> class/System.Design/System.ComponentModel.Design/DesignSurfaceEventArgs.cs
> class/System.Design/System.ComponentModel.Design/DesignSurfaceEventHandler.cs
> class/System.Design/System.ComponentModel.Design/DesignSurfaceManager.cs
> class/System.Design/System.ComponentModel.Design/DesignSurfaceServiceContainer.cs
> class/System.Design/System.ComponentModel.Design/DesignerActionListCollection.cs
> class/System.Design/System.ComponentModel.Design/DesignerEventService.cs
> class/System.Design/System.ComponentModel.Design/DesignerHost.cs
> class/System.Design/System.ComponentModel.Design/EventBindingService.cs
> class/System.Design/System.ComponentModel.Design/ExtenderService.cs
> class/System.Design/System.ComponentModel.Design/LoadedEventArgs.cs
> class/System.Design/System.ComponentModel.Design/LoadedEventHandler.cs
> class/System.Design/System.ComponentModel.Design/MenuCommandService.cs
> class/System.Design/System.ComponentModel.Design/ReferenceService.cs
> class/System.Design/System.ComponentModel.Design/SelectionService.cs
> class/System.Design/System.ComponentModel.Design/TypeDescriptorFilterService.cs
> class/System.Design/System.ComponentModel.Design/UndoEngine.cs
> class/System.Design/System.Windows.Forms.Design/ComponentTray.cs
> class/System.Design/System.Windows.Forms.Design/ControlCodeDomSerializer.cs
> class/System.Design/System.Windows.Forms.Design/ControlCollectionCodeDomSerializer.cs
> class/System.Design/System.Windows.Forms.Design/ControlDataObject.cs
> class/System.Design/System.Windows.Forms.Design/ControlDesigner.cs
> class/System.Design/System.Windows.Forms.Design/DefaultMenuCommands.cs
> class/System.Design/System.Windows.Forms.Design/DocumentDesigner.cs
> class/System.Design/System.Windows.Forms.Design/FormDocumentDesigner.cs
> class/System.Design/System.Windows.Forms.Design/IMessageReceiver.cs
> class/System.Design/System.Windows.Forms.Design/IUISelectionService.cs
> class/System.Design/System.Windows.Forms.Design/Native.cs
> class/System.Design/System.Windows.Forms.Design/PanelDesigner.cs
> class/System.Design/System.Windows.Forms.Design/ParentControlDesigner.cs
> class/System.Design/System.Windows.Forms.Design/ScrollableControlDesigner.cs
> class/System.Design/System.Windows.Forms.Design/SelectionFrame.cs
> class/System.Design/System.Windows.Forms.Design/SplitContainerDesigner.cs
> class/System.Design/System.Windows.Forms.Design/UISelectionService.cs
> class/System.Design/System.Windows.Forms.Design/WndProcRouter.cs
> class/System/System.ComponentModel.Design.Serialization/ComponentSerializationService.cs
> class/System/System.ComponentModel.Design.Serialization/DefaultSerializationProviderAttribute.cs
> class/System/System.ComponentModel.Design.Serialization/MemberRelationship.cs
> class/System/System.ComponentModel.Design.Serialization/MemberRelationshipService.cs
> class/System/System.ComponentModel.Design.Serialization/SerializationStore.cs
> class/System/System.ComponentModel.Design/DesignerOptionService.cs
> class/System/System.ComponentModel.Design/IComponentInitializer.cs
> class/System/System.ComponentModel.Design/ITreeDesigner.cs
> class/System/System.ComponentModel/INestedContainer.cs
> class/System/System.ComponentModel/INestedSite.cs
> class/System/System.ComponentModel/NestedContainer.cs


查看python 脚本， 并修改 如下，直接将已经下载mono源码中的文件复制到编译目录
```
#!/usr/bin/python
import os
import os.path
import re
import sys
import subprocess
import urllib.request
import urllib.error
import shutil
import string

def main ():
    try:
        print ("--> Step 1: Fetching source code...")
        files = get_files ();
        fetch_source_code (files)
        print ("--> Step 2: Applying patches...")
        apply_patches (get_patches ())
        print ("--> Step 3: Replacing namespaces...")
        replace_namespaces (files)
        print ("Done!")
    except Exception as exc:
        print ("Unexpected Error: ")
        print (exc)

def fetch_source_code (files):
    specList=["ComponentSerializationService.cs","DefaultSerializationProviderAttribute.cs","MemberRelationship.cs","MemberRelationshipService.cs","SerializationStore.cs","DesignerOptionService.cs","IComponentInitializer.cs","ITreeDesigner.cs","INestedContainer.cs","INestedSite.cs","NestedContainer.cs"]
    specDir=("class/referencesource/System/compmod/system/componentmodel/design/serialization/",
        "class/referencesource/System/compmod/system/componentmodel/design/",
        "class/referencesource/System/compmod/system/componentmodel/")
    for file in files:
        sourceFile="/home/leo/mono/mcs/"
        directory = os.path.dirname (file)
        fileName = os.path.basename(file)
        if not fileName in specList:
            sourceFile=sourceFile+file
        else:
            if directory.rfind("Serialization") != -1:
                sourceFile = sourceFile + specDir[0] + fileName
            elif directory.rfind("Design") != -1:
                sourceFile = sourceFile + specDir[1] + fileName
            else:
                sourceFile = sourceFile + specDir[2] + fileName        
        if directory != "": # quick hack to only download assembly files and not the ones we already have
            if not os.path.exists (directory):
                os.makedirs (directory)
            if os.path.exists(file):
                continue
            for i in range (1, 4): # retry 3 times
                try:
                    if os.path.exists(sourceFile) and not os.path.exists(file):
                        shutil.copy(sourceFile,file)
                        print ("A " + file)
                        break
                except Exception as exc:
                    print ("E " + file)
                    print (exc)

# def file_to_url (file):
    # specList = ["ComponentSerializationService.cs","DefaultSerializationProviderAttribute.cs","MemberRelationship.cs","MemberRelationshipService.cs","SerializationStore.cs","DesignerOptionService.cs","IComponentInitializer.cs","ITreeDesigner.cs","INestedContainer.cs","INestedSite.cs","NestedContainer.cs"]
    # specDir = ("class/referencesource/System/compmod/system/componentmodel/design/serialization/","class/referencesource/System/compmod/system/componentmodel/design/","class/referencesource/System/compmod/system/componentmodel/")
    # directory = os.path.dirname (file)
    # fileName = os.path.basename(file)
    # sourceFile = "https://github.com/mono/mono/tree/master/mcs/"
    # if not fileName in specList:
        # sourceFile=sourceFile+file
    # else:
        # if directory.rfind("Serialization")!=-1:
            # sourceFile = sourceFile + specDir[0]+fileName
        # elif directory.rfind("Design")!=-1:
            # sourceFile = sourceFile + specDir[1]+fileName
        # else:
            # sourceFile = sourceFile +  specDir[2]+fileName   
    # return  sourceFile + "?view=co"

def get_files ():
    try:
        file = open ("Mono.Design.sources")
        filesList = []
        for fileEntry in file:
            filesList.append (fileEntry.strip ())
        file.close ()
        return filesList
    except Exception:
        print ("Unable to open file: Mono.Design.sources")
        return None

def replace_namespaces (filesList):
    if filesList == None:
        return

    regexp = re.compile (r"namespace (.*?)( ?\{?)$", re.M)
    for currentFile in filesList:
        try:
            inputFile = open (currentFile)
            input = inputFile.read ()
            inputFile.close ()
            if input.find ("namespace Mono.Design") == -1:
                output = regexp.sub (r"using \1;" + os.linesep + r"namespace Mono.Design\2", input, 1)
                outputFile = open (currentFile, "w")
                outputFile.write (output)
                outputFile.flush ()
                outputFile.close ()
        except Exception as exc:
            print (exc)

def get_patches ():
    patches = []
    patchesDir = os.path.join (os.getcwd (), "patches")
    if os.path.exists (patchesDir):
        for item in os.listdir (patchesDir):
            patchFile = os.path.join (patchesDir, item)
            if os.path.isfile (patchFile) and patchFile.endswith (".patch"):
                patches.append (patchFile)
                patches.sort ()
    return patches

def file_lf_to_clrf (fileName):
        inputFile = open (fileName, "rb")
        input = inputFile.read ()
        inputFile.close ()
        output = re.sub (bytes ("\r?\n", "utf8"), bytes ("\r\n", "utf8"), input)
        outputFile = open (fileName, "wb")
        outputFile.write (output)
        outputFile.flush ()
        outputFile.close ()

def apply_patches (patches):
    for patch in patches:
        returnCode = 0
        if os.name == "nt":
            file_lf_to_clrf (patch); # fix line endings just in case
            returnCode = subprocess.call ("patches/patch.exe -p0 -i \"" + patch + "\"")
        else:
            returnCode = subprocess.call ("patch -p0 -i \"" + patch + "\"")

        if returnCode < 0:
            print (os.path.basename (patch) + ": " + error)

if __name__ == "__main__":
        main ()


```

执行该脚本，效果如图

![2016-07-26_143647.png](http://upload-images.jianshu.io/upload_images/1691484-66707ca298384909.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![2016-07-26_143715.png](http://upload-images.jianshu.io/upload_images/1691484-5c279d1dbff404d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

not found 的错误不用管，因为该文件代码被合并到MemberRelationshipService.cs里了，所以直接在Mono.Design.sources 文件列表中删除就可以了。
获取文件的问题解决了，但是又出现新的问题了

> --> Step 2: Applying patches...
> Unexpected Error: 
> [Errno 2] No such file or directory: 'patch -p0 -i "/home/leo/mwf-designer/deps/Mono.Design/patches/CodeDomComponentSerializationService-error-reporting.patch"'
由于只是水平和时间关系，这里的原因我没有查，我是在命令行里手动执行的，如下

![2016-07-26_164116.png](http://upload-images.jianshu.io/upload_images/1691484-37790c1ecce76d2a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

在py脚本中把 patch那个步骤注释掉，在跑一下脚本 如图

![2016-07-27_142041.png](http://upload-images.jianshu.io/upload_images/1691484-114f8d6f8bb1b3af.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![2016-07-27_142101.png](http://upload-images.jianshu.io/upload_images/1691484-586e9bb8b22864ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

+ 编译
> make mono-design && make run

![2016-07-26_173132.png](http://upload-images.jianshu.io/upload_images/1691484-bf1dd6554060c367.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

又报错了。查看consts.in 和 makefile文件

consts.in 文件

![2016-07-27_092151.png](http://upload-images.jianshu.io/upload_images/1691484-fcbd3b824d9a3fa8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

看到了吧，只支持NET_2_1,NET_4_6,NET_4_5,我这里mono对应的framework是4.5，所以我选择这个。
makefile 文件，**注意这里有2个makefile文件**。

![2016-07-27_092303.png](http://upload-images.jianshu.io/upload_images/1691484-8e9858e04b0a8662.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![2016-07-27_092342.png](http://upload-images.jianshu.io/upload_images/1691484-daf0dc6428c00705.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

改成如图所示，ok 执行编译命令，结果如下
> cd deps/Mono.Design && make
> make[1]: Entering directory '/home/leo/mwf-designer/deps/Mono.Design'
> export MCS_COLORS=disable;mcs -d:NET_4_5,DEBUG -target:library -debug -r:System.Design,System.Windows.Forms,System.Drawing -out:../Mono.Design.dll `cat Mono.Design.sources`
> class/System.Design/System.ComponentModel.Design.Serialization/CodeDomComponentSerializationService.cs(47,61): warning CS0436: The type `System.ComponentModel.Design.Serialization.ComponentSerializationService' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System/System.ComponentModel.Design.Serialization/ComponentSerializationService.cs(28,27): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design.Serialization/CodeDomComponentSerializationService.cs(50,45): warning CS0436: The type `System.ComponentModel.Design.Serialization.SerializationStore' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System/System.ComponentModel.Design.Serialization/SerializationStore.cs(26,27): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design.Serialization/CodeDomDesignerLoader.cs(41,48): warning CS0436: The type `System.ComponentModel.Design.Serialization.BasicDesignerLoader' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design.Serialization/BasicDesignerLoader.cs(39,24): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design.Serialization/CodeDomSerializer.cs(40,35): warning CS0436: The type `System.ComponentModel.Design.Serialization.CodeDomSerializerBase' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design.Serialization/CodeDomSerializerBase.cs(42,24): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design.Serialization/CollectionCodeDomSerializer.cs(41,45): warning CS0436: The type `System.ComponentModel.Design.Serialization.CodeDomSerializer' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design.Serialization/CodeDomSerializer.cs(40,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design.Serialization/EventCodeDomSerializer.cs(39,42): warning CS0436: The type `System.ComponentModel.Design.Serialization.MemberCodeDomSerializer' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design.Serialization/MemberCodeDomSerializer.cs(39,24): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/ComponentDesigner.cs(38,35): warning CS0436: The type `System.ComponentModel.Design.ITreeDesigner' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System/System.ComponentModel.Design/ITreeDesigner.cs(18,22): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/ComponentDesigner.cs(38,91): warning CS0436: The type `System.ComponentModel.Design.IComponentInitializer' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System/System.ComponentModel.Design/IComponentInitializer.cs(20,22): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/DesignModeNestedContainer.cs(38,45): warning CS0436: The type `System.ComponentModel.NestedContainer' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System/System.ComponentModel/NestedContainer.cs(23,18): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.dll (Location of the symbol related to previous warning)
> class/System/System.ComponentModel/NestedContainer.cs(23,47): warning CS0436: The type `System.ComponentModel.INestedContainer' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System/System.ComponentModel/INestedContainer.cs(17,22): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.dll (Location of the symbol related to previous warning)
> class/System/System.ComponentModel/NestedContainer.cs(113,30): warning CS0436: The type `System.ComponentModel.INestedSite' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System/System.ComponentModel/INestedSite.cs(16,22): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.dll (Location of the symbol related to previous warning)
> class/System.Design/System.Windows.Forms.Design/ControlCollectionCodeDomSerializer.cs(42,55): warning CS0436: The type `System.ComponentModel.Design.Serialization.CollectionCodeDomSerializer' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design.Serialization/CollectionCodeDomSerializer.cs(41,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.Windows.Forms.Design/ControlDesigner.cs(43,33): warning CS0436: The type `System.ComponentModel.Design.ComponentDesigner' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design/ComponentDesigner.cs(38,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.Windows.Forms.Design/ControlDesigner.cs(855,50): error CS0012: The type `Accessibility.IAccessible' is defined in an assembly that is not referenced. Consider adding a reference to assembly `Accessibility, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a'
> /usr/lib/mono/4.5/System.Windows.Forms.dll (Location of the symbol related to previous error)
> class/System.Design/System.Windows.Forms.Design/DocumentDesigner.cs(42,34): warning CS0436: The type `System.Windows.Forms.Design.ScrollableControlDesigner' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.Windows.Forms.Design/ScrollableControlDesigner.cs(44,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.Windows.Forms.Design/ScrollableControlDesigner.cs(44,43): warning CS0436: The type `System.Windows.Forms.Design.ParentControlDesigner' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.Windows.Forms.Design/ParentControlDesigner.cs(44,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.Windows.Forms.Design/ParentControlDesigner.cs(44,39): warning CS0436: The type `System.Windows.Forms.Design.ControlDesigner' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.Windows.Forms.Design/ControlDesigner.cs(43,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.Windows.Forms.Design/FormDocumentDesigner.cs(40,40): warning CS0436: The type `System.Windows.Forms.Design.DocumentDesigner' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.Windows.Forms.Design/DocumentDesigner.cs(42,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design.Serialization/BasicDesignerLoader.cs(58,11): warning CS0436: The type `System.ComponentModel.Design.Serialization.DesignerSerializationManager' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design.Serialization/DesignerSerializationManager.cs(43,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design.Serialization/PropertyCodeDomSerializer.cs(171,11): warning CS0436: The type `System.ComponentModel.Design.Serialization.MemberRelationship' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System/System.ComponentModel.Design.Serialization/MemberRelationshipService.cs(165,19): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design.Serialization/StatementContext.cs(39,3): warning CS0436: The type `System.ComponentModel.Design.Serialization.ObjectStatementCollection' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design.Serialization/ObjectStatementCollection.cs(37,22): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/ActiveDesignSurfaceChangedEventArgs.cs(39,11): warning CS0436: The type `System.ComponentModel.Design.DesignSurface' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design/DesignSurface.cs(40,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/ActiveDesignSurfaceChangedEventHandler.cs(36,78): warning CS0436: The type `System.ComponentModel.Design.ActiveDesignSurfaceChangedEventArgs' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design/ActiveDesignSurfaceChangedEventArgs.cs(36,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/ComponentDesigner.cs(97,11): warning CS0436: The type `System.ComponentModel.Design.DesignerActionListCollection' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design/DesignerActionListCollection.cs(38,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/DesignSurface.cs(209,16): warning CS0436: The type `System.ComponentModel.Design.LoadedEventHandler' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design/LoadedEventHandler.cs(37,23): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/DesignSurface.cs(285,54): warning CS0436: The type `System.ComponentModel.Design.LoadedEventArgs' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design/LoadedEventArgs.cs(38,22): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/DesignSurfaceEventHandler.cs(37,65): warning CS0436: The type `System.ComponentModel.Design.DesignSurfaceEventArgs' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design/DesignSurfaceEventArgs.cs(37,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/DesignSurfaceManager.cs(158,10): warning CS0436: The type `System.ComponentModel.Design.DesignSurfaceCollection' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design/DesignSurfaceCollection.cs(41,22): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/DesignSurfaceManager.cs(185,16): warning CS0436: The type `System.ComponentModel.Design.DesignSurfaceEventHandler' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design/DesignSurfaceEventHandler.cs(37,23): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/DesignSurfaceManager.cs(187,16): warning CS0436: The type `System.ComponentModel.Design.ActiveDesignSurfaceChangedEventHandler' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design/ActiveDesignSurfaceChangedEventHandler.cs(36,23): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.ComponentModel.Design/UndoEngine.cs(222,21): warning CS0436: The type `System.ComponentModel.Design.UndoEngine' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.ComponentModel.Design/UndoEngine.cs(39,24): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System.Design/System.Windows.Forms.Design/ControlDesigner.cs(98,24): warning CS0672: Member `System.Windows.Forms.Design.ControlDesigner.OnSetComponentDefaults()' overrides obsolete member `System.ComponentModel.Design.ComponentDesigner.OnSetComponentDefaults()'. Add the Obsolete attribute to `System.Windows.Forms.Design.ControlDesigner.OnSetComponentDefaults()'
> class/System.Design/System.ComponentModel.Design/ComponentDesigner.cs(275,23): (Location of the symbol related to previous warning)
> class/System.Design/System.Windows.Forms.Design/DocumentDesigner.cs(61,12): warning CS0436: The type `System.Windows.Forms.Design.ComponentTray' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System.Design/System.Windows.Forms.Design/ComponentTray.cs(47,15): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.Design.dll (Location of the symbol related to previous warning)
> class/System/System.ComponentModel.Design/DesignerOptionService.cs(139,21): warning CS0436: The type `System.ComponentModel.Design.DesignerOptionService' conflicts with the imported type of same name'. Ignoring the imported type definition
> class/System/System.ComponentModel.Design/DesignerOptionService.cs(21,27): (Location of the symbol related to previous warning)
> /usr/lib/mono/4.5/System.dll (Location of the symbol related to previous warning)
> Compilation failed: 1 error(s), 33 warnings
> Makefile:9: recipe for target 'net-2' failed
> make[1]: *** [net-2] Error 1
> make[1]: Leaving directory '/home/leo/mwf-designer/deps/Mono.Design'
> Makefile:22: recipe for target 'mono-design' failed
> make: *** [mono-design] Error 2


有错误，但是有通过的，说明有成效。看看具体错误信息

> class/System.Design/System.Windows.Forms.Design/ControlDesigner.cs(855,50): error CS0012: The type `Accessibility.IAccessible' is defined in an assembly that is not referenced. Consider adding a reference to assembly `Accessibility, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a'
> /usr/lib/mono/4.5/System.Windows.Forms.dll (Location of the symbol related to previous error)

看似缺少引用。由于对这个makefile文件配置暂时不是太了解，所以这种命令行编译方法暂时介绍到这里。后续弄清楚了，在补上。
待续。。。
