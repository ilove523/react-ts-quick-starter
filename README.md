# 一步步手动搭建 React + Typescript 项目开发环境

参考了
+ [ Typescript+React 项目环境的！（2.7w 字详解)](https://github.com/vortesnail/blog/issues/14)

## 准备工作
### 安装必要的工具 git
如果您更我一样，使用的 Ubuntu 16.04，很不幸 git 版本2.7.4，但有很多工具需要更高版本才能发挥更好的效果。下面是在 `Ubuntu 16.04`下更新 git 的方法：
```bash
# 确保系统已安装 add-apt-repository

sudo add-apt-repository ppa:git-core/ppa
sudo apt-get update
sudo apt-get install git
```
> + 来自 http://lifeonubuntu.com/upgrading-ubuntu-to-use-the-latest-git-version/
> + 最新版本是 `git version 2.29.0`

## 初始化工程
生成项目管理文件 `package.json`
```bash
mkdir -p react-ts-quickly
cd react-ts-quickly
npm init
```
类似下面的回答：
```ini
package name: (react-ts-quickly) react-ts-quickly
version: (1.0.0) 0.1.0
description: Quickly create react + typescript project development environment and scaffold for developing npm package components
entry point: (.commitlintrc.js) 
test command: 
git repository: (https://github.com/ilove523/react-ts-quickly.git) 
keywords: react typescript material-ui react-dom
author: wush <wush3w@126.com>
license: (ISC) MIT
```
也可用`yarn`进行完善：
```bash
wush@wush:react-ts-quick-starter$ yarn init
yarn init v1.22.10
question name (react-ts-quickly): 
question version (0.1.0): 
question description (Quickly create react + typescript project development environment and scaffold for developing npm package components): 
question entry point (.commitlintrc.js): 
question repository url (git+https://github.com/ilove523/react-ts-quick-starter.git): 
question author (ilove523 <wush3w@126.com>): 
question license (MIT): 
question private: true
success Saved package.json
Done in 40.36s.
```

## 初始化 eslint 配置
```bash
yarn add -D typescript
npx eslint --init
```
> 因项目需要使用 ts 语言编程，须先安装 typescript 包

```ini
# wush@wush:react-ts-quick-starter$ npx eslint --init
? How would you like to use ESLint? … 
  To check syntax only
  To check syntax and find problems
▸ To check syntax, find problems, and enforce code style

✔ How would you like to use ESLint? · style

? What type of modules does your project use? … 
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

✔ What type of modules does your project use? · esm

? Which framework does your project use? … 
▸ React
  Vue.js
  None of these

✔ Which framework does your project use? · react

? Does your project use TypeScript? ‣ No / Yes # 选 Yes
✔ Does your project use TypeScript? · No / Yes

? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node
# 按 a 键，表示全选，然后回车继续
✔ Where does your code run? · browser, node

? How would you like to define a style for your project? … 
▸ Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)

✔ How would you like to define a style for your project? · guide

? Which style guide do you want to follow? … 
▸ Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google

✔ Which style guide do you want to follow? · airbnb

? What format do you want your config file to be in? … 
▸ JavaScript
  YAML
  JSON

✔ What format do you want your config file to be in? · JavaScript

Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest

? Would you like to install them now with npm? ‣ No / Yes # 右键选Yes

✔ Would you like to install them now with npm? · No / Yes
```
成功执行后，在 `package.json`文件会新加入下面的包：
```json
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.8.1",
    "@typescript-eslint/parser": "^4.8.1",
    "eslint": "^7.14.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.21.5",
    "eslint-plugin-react-hooks": "^4.2.0",
    "typescript": "^4.1.2"
  }
```