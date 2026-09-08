## 这个项目收集了许多由AI协助本地化的网页，可以直接访问 [Localized Websites](https://escosis.github.io/Localized-Websites/) 进行预览。

**对于本地文件，Android 端用户请安装本人另一个项目 [Offline WebView](https://github.com/Escosis/Offline-WebView) 进行浏览。**

**Windows 端用户可用以下方法打开进行浏览：**

### 方法一：在电脑浏览器中打开`htm/html`直接阅读，但需要禁用浏览器的 CORS 策略才可正常使用，否则将由于该策略限制无法访问资源文件。

**禁用方法一：**  
在浏览器地址栏输入 chrome://flags/ 或 edge://flags/，搜索 CORS 找到 Block insecure private network requests. 这个选项，改为 Disabled，重启浏览器。

**禁用方法二：**  
创建一个新目录作为数据目录，在浏览器的某个快捷方式属性栏的目标后添加 --disable-web-security --user-data-dir=`<新数据目录路径>`，使用以此快捷方式打开的浏览器进行阅读。  
例如，浏览器快捷方式的目标原本是：  
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"  
创建C:\EdgeDevData作为数据目录，将此栏改为：  
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --disable-web-security --user-data-dir=C:\EdgeDevData  
（注意双引号后有一个空格）

**禁用方法三：**  
新建一个`bat`文件，内容如下：（也可根据情况修改）
```batch
@echo off
start "" "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --disable-web-security --user-data-dir="C:\EdgeDevData" --allow-file-access-from-files "%~1"
```
然后可使用 BatToExeConverter 转为`exe`并设置为`htm/html`的打开方式，之后直接点开即可

### 方法二：启动一个本地服务器，从中访问htm/html
