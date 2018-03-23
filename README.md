# cordova-hotpack

Cordova自定义插件实现热更新

热更流程图：

![workflow](https://ws4.sinaimg.cn/large/006tNc79ly1fploge8evbj30d10g7wfa.jpg)

# 1 创建项目

## 1.1 安装Cordova
```
npm install -g cordova
```
## 1.2 创建项目
```
cordova create cordovaDemo com.catchzeng.testCordova testCordova

//参数说明：
//cordovaDemo: 项目文件夹名称

//com.catchzeng.testCordova: 项目的bundleID

//testCordova:项目名称
```
## 1.3 添加平台
```
cd testCordovaProject/
cordova platform add ios
```
## 1.4 添加成功

在项目的platforms文件夹中看到ios文件夹,进入后就可以看到ios工程了

![project](https://upload-images.jianshu.io/upload_images/943491-64f0524457a9c269.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/622)

## 1.5 xcode运行

![result](https://upload-images.jianshu.io/upload_images/943491-fe696d1b2a6e8636.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/627)

# 2 添加插件

复制 com.handmobile.cordovaplugin.hotpatch 到 testCordovaProject目录

添加 com.handmobile.cordovaplugin.hotpatch 插件到项目

```
cd testCordovaProject/
cordova plugin add  com.handmobile.cordovaplugin.hotpatch
```

# 3 修改Staging->www->index.html

详细参考demo里面的www目录下的index.html,updateNewVersion为更新文件的url地址


```
function testUpdate() {
                cordova.exec(testSuccess,testFailed,"hotpatch","updateNewVersion",["http://97.64.40.100:8080/hotpack/ios.zip"]);
            }
```

# 4 xcode运行项目

![update](https://ws4.sinaimg.cn/large/006tNc79ly1fpmj0ivk6tj30vq0jygqd.jpg)




