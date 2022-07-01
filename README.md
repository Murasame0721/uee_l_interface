# 系统使用说明

## 使用限制
仅支持普通类一本，支持文科和理科。不支持南疆单列、艺术生、体育生、二本。

接近一本省控线的分数可能会出现程序错误。

仅限华山中学本部学生使用。如果你是本部的学生，但出现了身份验证错误，请反馈至murasame0721@qcly.top（出现这个错误的原因是：身份验证使用了不稳定的算法）

部分本部学生因各种原因被系统禁用，详情请参照禁用名单

结果仅供参考。用户的决策失误导致的一切事故与开发者无关。

由于开发周期短，可能会出现各种无法预测的程序错误，如出错请反馈至murasame0721@qcly.top

## 简介
在登录界面输入准考证号、身份证号、准考证上的初始密码后，系统自动查分，并展示部分可能录取的大学（根据武书连排行榜，取排名前75名）。

在登录后，你会看到这样的表格（手机端可能会展示不全，请左右拖动表格）


|学校名称	|学校标签	|评分	|录取概率	|近5年录取位次    |
|-  |-  |-  |-  |-  |
|某某大学	|985或211或“无”	|xx	|0.xx|

近5年录取位次可能有缺失

## 数据说明
对于录取概率小于0.6的学校，您可以采用“冲”的策略；对于录取概率大于0.8的学校，您可以采用“保”的策略；对于录取概率介于两者之间的学校，您可采用“稳”的策略

使用算法来自论文：《基于多特征权重模糊聚类的高考志愿推荐算法》（余奎锋、段桂华、时翔 著）

### 隐私
无须担心初始密码泄露，系统保证不会外泄密码。另外，即使初始密码泄露，也不会影响到志愿填报，因为志愿填报必须在密码被修改后进行。

## 版本更新说明
2022年6月28日，v1.0诞生

2022年6月29日，v1.1更新：

+ 提供表格筛选和排序功能
2022年6月30日 12:30，v1.2更新：

+ 增加“禁用用户”功能
+ 修复了3位同学不能成功登录的错误（14班1位，16班2位）
2022年6月30日 22:00，v1.2.1更新：

+ 禁用了6位用户
+ 更新使用说明

2022年7月1日 22:20,v1.3更新：

+ 修复bug：当什么都不填直接点登录时，系统会崩溃
+ 推荐的大学数量更改为95（这是因为位次在1000左右时，如果推荐数不足，推荐大学录取概率的会一致地位于70%左右）

### 禁用名单
出于隐私考虑，不直接公布姓名，而是公布姓名的sha1值

您可搜索“在线sha1计算”来计算您姓名的sha1值，并在下列名单中查找

推荐在：在线sha1计算 网站计算（该网站与开发者无关）

禁用名单中的用户可以付费解除禁用（笑）（我相信根本不会有人付费）

在v1.2.1中被禁用的用户：

（1班）da4dd52a33a6970beba9721cfd14a4e20d273cd9
（11班）f76bb1e082b941b69ba714ac3a0e36ab430ec505
（15班）f55643069fb545502b985faa049c803910451936
（15班）704fbf8148c2d16f7926d8ee3aca43c964573a5b
（15班）40d7e1bb9695253a1cbd4bceb1ba5678e5e8e715
（15班）b2971d15aef96872f74f6c83e0486ffeca5c2bea

# 开发者选项

该程序由React构建

在这个项目内，你可以运行以下命令：

### `npm start`

在开发者模式运行项目.\
在你的浏览器打开 [http://localhost:3000](http://localhost:3000)

当你修改文件时，自动刷新.\
你也可能在控制台看到报错

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
