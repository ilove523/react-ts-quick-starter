# 一步步手动搭建 React + Typescript 项目开发环境

参考了

- [ Typescript+React 项目环境的！（2.7w 字详解)](https://github.com/vortesnail/blog/issues/14)

## 准备工作

### 安装必要的工具 git

如果您更我一样，使用的 Ubuntu 16.04，很不幸 git 版本 2.7.4，但有很多工具需要更高版本才能发挥更好的效果。下面是在 `Ubuntu 16.04`下更新 git 的方法：

```bash
# 确保系统已安装 add-apt-repository

sudo add-apt-repository ppa:git-core/ppa
sudo apt-get update
sudo apt-get install git
```

> - 来自 http://lifeonubuntu.com/upgrading-ubuntu-to-use-the-latest-git-version/
> - 最新版本是 `git version 2.29.0`

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
wush@wush:react-ts-quickly$ yarn init
yarn init v1.22.10
question name (react-ts-quickly):
question version (0.1.0):
question description (Quickly create react + typescript project development environment and scaffold for developing npm package components):
question entry point (.commitlintrc.js):
question repository url (git+https://github.com/ilove523/react-ts-quickly.git):
question author (ilove523 <wush3w@126.com>):
question license (MIT):
question private: true
success Saved package.json
Done in 40.36s.
```

## eslint 配置

主要目的是优化 JavaScript 和 TypeScript 编码风格。

### 初始化配置

```bash
yarn add -D typescript
yarn eslint --init
```

> - 因项目需要使用 ts 语言编程，所以须先安装 typescript 包。
> - 执行 `yarn eslint --init`后，会要求回答几个问题。

#### 问题 1 -- 您想怎样使用 `ESLint`

```ini
? How would you like to use ESLint? …
  To check syntax only
  To check syntax and find problems
▸ To check syntax, find problems, and enforce code style

✔ How would you like to use ESLint? · style
```

> 我这里选择了第三项。这三项的大意是：
>
> - 仅检查语法
> - 检查语法和发现问题
> - 检查语法、发现问题和执行代码风格化

#### 问题 2 -- 您的项目使用什么类型的模块

```ini
? What type of modules does your project use? …
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

✔ What type of modules does your project use? · esm
```

> 我选择第一项。这三项的大意是：
>
> - ES 标准模块方式
> - CommonJS 通用模块方式
> - 以上都不用

#### 问题 3 -- 您的项目使用哪一个框架

```ini
? Which framework does your project use? …
▸ React
  Vue.js
  None of these

✔ Which framework does your project use? · react
```

> 我选择`React`。这三项大意是：
>
> - React 框架
> - Vue.js 框架
> - 以上都不用

#### 问题 4 -- 您的项目是否使用 `TypeScript`

```ini
? Does your project use TypeScript? ‣ No / Yes # 选 Yes

✔ Does your project use TypeScript? · No / Yes
```

> 我的项目需要使用 `TypeScript`。

#### 问题 5 -- 代码运行环境

```ini
? Where does your code run? …
(Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node

✔ Where does your code run? · browser, node
```

> 运行环境包括浏览器和`Node`，我这里二者都选。操作方法如下：
>
> - 按 `<space>`（空格）键，表示选择
> - 按 `<a>` 键，表示全选
> - 按 `<i>` 键，表示反选

#### 问题 6 -- 您想怎样定义您的项目风格

```ini
? How would you like to define a style for your project? …
▸ Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)

✔ How would you like to define a style for your project? · guide
```

> 我这里选择第一项，一种流行的风格指南。这三项大意是：
>
> - 使用一种流行风格指南
> - 回答一些关于风格的问题
> - 审查您的`JavaScript`文件

#### 问题 7 -- 您想遵循那种风格指南

```ini
? Which style guide do you want to follow? …
▸ Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google

✔ Which style guide do you want to follow? · airbnb
```

> 选择`Airbnb`风格，经过社区千锤百炼的一种流行风格。

#### 问题 8 -- 您想您的配置文件使用什么格式？

```ini

? What format do you want your config file to be in? …
▸ JavaScript
  YAML
  JSON

✔ What format do you want your config file to be in? · JavaScript
```

> 我这里选择 `JavaScript`，因它更具配置灵活性。

#### 问题 9 -- 是否使用 npm 工具立即安装 eslint 需要的依赖

```ini

Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest

? Would you like to install them now with npm? ‣ No / Yes

✔ Would you like to install them now with npm? · No / Yes
```

> 根据自己实际情况，选择是否立即安装。特别提示：<br>
> _若不想使用 npm 工具进行维护，就选择 `No`。_

**ESLint 初始化命令执行结束后，项目根目录新增了两个配置文件：**

- `.eslintrc.js`
- `.eslintignore`

```js
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {},
}
```

> 这是执行以上以上配置和选择后的原始配置。

并在 `package.json`文件会新加入类似下面的配置：

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

### 修改项目 ESLint 配置

#### 在 package.json 加入 lint 指令：

```json
"scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s",
    "lint": "npm run lint-eslint && npm run lint-stylelint",
    "lint-eslint": "eslint -c .eslintrc.js --ext .ts,.tsx,.js src",
    "lint-stylelint": "stylelint --config .stylelintrc.js src/**/*.{less,css,scss}"
  },
```

#### 修改 .eslintrc.js

- 根据 [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 官方说明，如果要开启 React Hooks 的检查，需要在 extends 中添加一项 'airbnb/hooks' 。
- 根据 [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) 官方说明，在 extends 中添加 'plugin:@typescript-eslint/recommended' 可开启针对 ts 语法推荐的规则定义。

- 为避免在 .ts 和 .tsx 文件中引入另一个文件模块会报错，需加入下面的规则：

```js
rules: {
  'import/extensions': [
    ERROR,
    'ignorePackages',
    {
      ts: 'never',
      tsx: 'never',
      json: 'never',
      js: 'never',
    },
  ],
}
```

#### 设置加速 TypeScript 搜索的配置

```js
settings: {
  'import/resolver': {
    node: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
    },
  },
},
```

#### 新增 ESLint 插件

```sh
yarn add -D eslint-plugin-promise eslint-plugin-unicorn
```

> - eslint-plugin-promise ：优化 Promise 语法。
> - eslint-plugin-unicorn ：提供了更多有用的配置项，比如我会用来规范关于文件命名的方式。

然后将这两个插件名添加到 `.eslintrc.js` 中，如下所示：

```js
const OFF = 0
const WARN = 1
const ERROR = 2
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
      },
    },
  },
  plugins: ['react', 'unicorn', 'promise', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        json: 'never',
        js: 'never',
      },
    ],
  },
}
```

#### 设置不希望 ESLint 或 Prettier 干预的配置

在项目根目录新增 `.eslintignore`和`.prettierignore`两个文件，将需要忽略语法检查或格式化的文件或文件夹加入其中，并尽量保持两个文件内容一致性：

```ini
/node_modules
/build
/dist
/.vscode
```

## StyleLint 规范 CSS 样式风格

参考：

- [stylelint 官方指南](https://stylelint.io/user-guide/get-started) 。

### StyleLint 基本配置

1. 安装 `stylelint` 及其 [标准配置](https://github.com/stylelint/stylelint-config-standard)包：

```sh
yarn add -D stylelint stylelint-scss stylelint-config-standard
```

2. 在项目更目录创建一个配置文件 `.stylelintrc.js`，并进行相应配置：

```js
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': 'always',
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*'],
}
```

> 其中：
>
> - extends ：其实和 eslint 的类似，都是扩展，使用 stylelint 已经预设好的一些规则。
> - rules ：就是具体的规则，如果默认的你不满意，可以自己决定某个规则的具体形式。
> - ignoreFiles ：不像 eslint 需要新建 ignore 文件， stylelint 配置就支持忽略配置字段，我们先添加 node_modules 和 build ，之后有需要大家可自行添加。

3. 如果运行 stylelint 指令，就可以对项目目录的所有 CSS 文件进行风格化和相关问题报告：

```sh
yarn stylelint "**/*.css"
```

### 编辑器配置 VSCODE

与 eslint 一样，想要在编辑代码时有错误提示以及自动修复功能，我们需要安装一个 VSCode 扩展 `stylelint`，并增加以下配置：

```json
{
  // 使用 stylelint 自身的校验即可
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,

  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

### 安装社区优秀 stylelint 扩展或插件

- stylelint-config-rational-order 用于按照以下顺序将相关属性声明进行分组来对它们进行排序：

```js
1.Positioning
2.Box Model
3.Typography
4.Visual
5.Animation
6.Misc
```

- stylelint-declaration-block-no-ignored-properties 用于提示我们写的矛盾样式，比如下面的代码中 width 是会被浏览器忽略的，这可以避免我们犯一些低级错误～

```css
 {
  display: inline;
  width: 100px;
}
```

安装指令：

```sh
yarn add -D \
stylelint-order \
stylelint-config-rational-order \
stylelint-declaration-block-no-ignored-properties
```

> 安装过程中，出现警告：
> <font color="yello">warning</font> stylelint-config-rational-order > stylelint > postcss-markdown > remark > unified > @types/vfile > @types/vfile-message@2.0.0: This is a stub types definition. vfile-message provides its own type definitions, so you do not need this installed.

然后更改 StyleLint 配置文件`.stylelintrc.js`：

```js
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': 'always',
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*'],
}
```

## ESLint、Stylelint 和 Prettier 的冲突

> 有时候 eslint 和 stylelint 的自定义规则和 prettier 定义的规则冲突了，比如在 .eslintrc.js 中某个 extends 的配置设置了缩进大小为 4 ，但是我 .prettierrc 中我设置的缩进为 2 ，那就会出现我们保存时，先是 eslint 的自动修复缩进大小为 4 ，这个时候 prettier 不开心了，又强制把缩进改为了 2 ，好了， eslint 不开心，代码直接爆红！

> 参考：[Integrating with Linters](https://prettier.io/docs/en/integrating-with-linters.html)

解决办法，分别安装 eslint-config-prettier 和 stylelint-config-prettier 这两个插件，并进行相应的配置。

### 解决 ESLint 和 Prettier 的冲突

[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) 插件会禁用所有 ESLint 与 prettier 起冲突的规则。

先安装插件 `eslint-config-prettier`：

```sh
yarn add -D eslint-config-prettier
```

然后在 ESLint 配置文件 `.eslintrc.js`中添加以下配置：

```js
{
  extends: [
    // other configs ...
   	'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/unicorn',
  ]
}
```

> 这里需要注意， `'prettier'`相关配置要放到原来配置的后面，这样才能让 `prettier` 禁用与其冲突的规则。

### 解决 StyleLint 和 Prettier 的冲突

[stylelint-config-prettier](https://github.com/prettier/stylelint-config-prettier) 插件禁用所有 StyleLint 与 prettier 起冲突的规则。

先安装插件 `stylelint-config-prettier`：

npm install stylelint-config-prettier -D

然后在 StyleLint 配置文件 `.stylelintrc.js`中添加以下配置：

```js
{
	extends: [
  	// other configs ...
    'stylelint-config-prettier'
  ]
}
```

## lint-staged

需要的插件：

- husky
- lint-staged

> 在项目开发过程中，每次提交前我们都要对代码进行格式化以及 eslint 和 stylelint 的规则校验，以此来强制规范我们的代码风格，以及防止隐性 BUG 的产生。
>
> 那么有什么办法只对我们 git 缓存区最新改动过的文件进行以上的格式化和 lint 规则校验呢？答案就是 lint-staged 。
>
> 我们还需要另一个工具 husky ，它会提供一些钩子，比如执行 git commit 之前的钩子 pre-commit ，借助这个钩子我们就能执行 lint-staged 所提供的代码文件格式化及 lint 规则校验！

首先安装插件：

```sh
yarn add -D husky lint-staged
```

随后在 package.json 中添加以下代码（位置随意，我比较习惯放在 repository 上面）：

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx,js}": ["eslint --config .eslintrc.js"],
    "*.{css,less,scss}": ["stylelint --config .stylelintrc.js"],
    "*.{ts,tsx,js,json,html,yml,css,less,scss,md}": ["prettier --write"]
  }
}
```

> - 首先，对暂存区中后缀为 `.ts .tsx .js` 的文件进行 `eslint` 校验， `--config` 的作用是指定配置文件。
> - 之后，对暂存区后缀为 `.css .less .scss` 的文件进行 `stylelint` 校验，注意：我们没有添加 `--fix` 来自动修复不符合规则的代码，因为自动修复的内容对我们不透明，你不知道哪些代码被更改，这对我来说是无法接受的。
> - 但是在使用 `prettier` 进行代码格式化时，完全可以添加 `--write` 来使我们的代码自动格式化，它不会更改语法层面上的东西，所以无需担心。
>   > 可能大家搜索一些文章的时候，会发现在 `lint-staged` 中还配置了一个 `git add` ，实际上在 v10 版本之后任何被修改了的原 `staged` 区的文件都会被自动 `git add`，所以无需再添加。

## commitlint + changelog

参考原文，这里只列出操作：

1. 安装 commitlint 相关依赖：

```sh
yarn add -D @commitlint/cli @commitlint/config-conventional
```

2. 在项目更目录新建配置文件 `.commitlintrc.js`，具体配置内容如下：

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'anno'],
    ],
  },
}
```

其中 `anno`表示一些注释的增删改的提交，其它规则意思如下：

```js
/**
 * build : 改变了build工具 如 webpack
 * ci : 持续集成新增
 * chore : 构建过程或辅助工具的变动
 * feat : 新功能
 * docs : 文档改变
 * fix : 修复bug
 * perf : 性能优化
 * refactor : 某个已有功能重构
 * revert : 撤销上一次的 commit
 * style : 代码格式改变
 * test : 增加测试
 * anno: 增加注释
 */
```

3. 在 `package.json`的 `husky`一节，增加一个钩子：

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint --config .commitlintrc.js -E HUSKY_GIT_PARAMS"
    }
  }
}
```

> `-E HUSKY_GIT_PARAMS` 简单理解就是会拿到我们的 `message` ，然后 `commitlint` 进行 `lint` 校验。

4. 接着配置生成我们的 `changelog`：

首先安装依赖：

```sh
yarn add -D conventional-changelog-cli
```

接着在 `package.json` 的 `scripts` 下增加一个命令：

```json
{
  "scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
  }
}
```

> 其中：
>
> - `-p`是`--preset`的缩写，目前支持 `angular, atom, codemirror, ember, eslint, express, jquery, jscs or jshint` 这几种预设风格。
> - `-i, --infile` 表示从指定的文件读取 `CHANGELOG`。
> - `-s, --same-file` 表示输出文件与输入文件相同，不必领指定输出文件。
> - 更多参数说明，在安装了命令行工具`conventional-changelog-cli` 后，通过`./node_modules/.bin/conventional-changelog --help`可以方便了解到。

之后，就可以通过 `yarn changelog` 生成指定风格的 `changelog` ，需要注意的是，上面这条命令产生的 changelog 是基于上次 tag 版本之后的变更（feat、fix 等等）所产生的。

`:TODO` 示例，看原文。

## Webpack 配置

目的是项目能够支持 `React` 和 `TypeScript` 的开发和发布。

> 参照 [Webpack 官方`5.6+`版的中文文档](https://webpack.docschina.org/guides/getting-started/)开展下面的配置。其英文文档位于 https://webpack.js.org/guides/getting-started/
>
> > 运行 webpack 5 的 `Node.js` 最低版本是 10.13.0 (LTS)。

### 基本安装

在项目已经初始化的情况下，安装以下软件包：

- `webpack` ：用于编译打包 JavaScript 模块。
- `webpack-cli` ：此工具用于在命令行中运行 webpack 相关指令。

安装指令如下：

```sh
yarn add -D webpack webpack-cli
```

为了便于项目 webpack 配置管理，下面为其在项目根目录单独创建目录结构：

```diff
+ scripts/
+   config/
+   webpack.common.js
```

> 目的是把 webpack 的核心配置文件放到 config 下，其余的例如导出文件路径的文件模块放到 config 同级。

创建指令如下：

```sh
mkdir -p scripts/config
touch scripts/webpack.common.js
```

### 2. `input` 和 `output`

**入口(input)和出口(output)** 是 webpack 的核心概念之二：指定一个（或多个）入口文件，经过一系列操作之后转换成另一个（或多个）输出文件。

接下来在 `webpack.common.js` 中输入以下代码：

```js
const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../../src/app.js'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../../dist'),
  },
}
```

> - `entry` ：定义了入口文件路径，其属性名 app 表示引入文件的名字。
> - `output` ：定义了编译打包之后的文件名以及所在路径。
> - 这段代码的意思就是告诉 `webpack`，入口文件是项目根目录下`src/app.js` 文件，打包输出的文件路径为项目根目录下的 `dist`。
> - `filename` 为 `js/[name].[hash:8].js` ，那么就会在 `dist` 目录下再建一个 `js` 文件夹，其中输出文件前缀命名与入口文件命名一致，输出文件名称中还带有 `8位 hash 值`。
>   > `webpack` 配置是标准的 `Node.js` 的 `CommonJS` 模块，它通过 `require` 来引入其他模块，通过 `module.exports` 导出模块，由 webpack 根据对象定义的属性进行解析。

### 设置打包指令

在 `package.json`中，添加一条 `webpack 打包指令`：

```diff
{
  "scripts": {
+   "build": "webpack --config ./scripts/config/webpack.common.js",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s",
    "lint": "npm run lint-eslint && npm run lint-stylelint",
    "lint-eslint": "eslint -c .eslintrc.js --ext .ts,.tsx,.js src",
    "lint-stylelint": "stylelint --config .stylelintrc.js src/**/*.{less,css,scss}"
  },
}
```

> `--config` 选项表示指定打包配置文件。

若需打包，只需在终端执行打包替代指令：

```sh
yarn build
# or
npm run build
```

> 本文档推荐使用 `yarn` 替代 `npm` 工具。

### 设置打包通用变量

目的是简化引用文件路径的复杂度，提高配置代码的优雅性。

新建配置通用文件 `scripts/constants.js`，定义需要的变量：

```js
const path = require('path')

// 项目根目录
const PROJECT_PATH = path.resolve(__dirname__, '../')
// 项目名
const PROJECT_NAME = path.parse(PROJECT_PATH).name

// 导出外部文件需要使用的变量
module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
}
```

外部文件引用通用变量方法如下，以 `scripts/config/webpack.common.js`为例：

```js
const { resolve } = require('path')
const { PROJECT_PATH } = require('../constants')

module.exports = {
  entry: {
    app: resolve(PROJECT_PATH, './src/app.js'),
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: resolve(PROJECT_PATH, './dist'),
  },
}
```

### 设置开发/生产环境

为了提高生产环境的安全性和减少代码冗余性问题，需要区分开发环境和生产环境。但是，二者又有许多基础配置是相同的，为了减少配置代码重复性问题，`webpack-merge` 闪亮登场。同时，还要考虑跨平台问题，`cross-env`是个好帮手。

1. 安装开发阶段依赖包：

```sh
yarn add -D webpack-merge cross-env
```

2. 新增开发环境配置文件 `scripts/config/webpack.dev.js`，并在其中加入以下代码：

```js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
})
```

3. 新增生产环境配置文件 `scripts/config/webpack.prod.js` ，并在其中加入以下代码：

```js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
})
```

4. 修改`package.json`，设置跨平台配置：

```diff
{
  "scripts": {
+   "start": "cross-env NODE_ENV=development webpack --config ./scripts/config/webpack.dev.js",
+   "build": "cross-env NODE_ENV=production webpack --config ./scripts/config/webpack.prod.js",
-   "build": "webpack --config ./scripts/config/webpack.common.js",
  },
}
```

5. 设置开发环境和生产环境开关变量

修改 `srcipt/constants.js` 文件，增加一个公用布尔变量 `isDev` ：

```js
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  isDev,
  // other
}
```

> 我们现在就使用这个环境变量做点事吧！记得之前配的公共配置中，我们给出口文件的名字配了 hash:8 ，原因是在生产环境中，即用户已经在访问我们的页面了，他第一次访问时，请求了比如 app.js 文件，根据浏览器的缓存策略会将这个文件缓存起来。然后我们开发代码完成了一版功能迭代，涉及到打包后的 app.js 发生了大变化，但是该用户继续访问我们的页面时，如果缓存时间没有超出或者没有人为清除缓存，那么他将继续得到的是已缓存的 app.js ，这就糟糕了。
>
> 于是，当我们文件加了 hash 后，根据入口文件内容的不同，这个 hash 值就会发生非常夸张的变化，当更新到线上，用户再次请求，因为缓存文件中找不到同名文件，就会向服务器拿最新的文件数据，这下就能保证用户使用到最新的功能。

而 hash 值在开发环境中作用不大，于是修改 `scripts/config/webpack.common.js` 文件：

```diff
- const { PROJECT_PATH } = require('../constants')
+ const { isDev, PROJECT_PATH } = require('../constants')

module.exports = {
	// other...
  output: {
-   filename: 'js/[name].[hash:8].js',
+   filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    path: resolve(PROJECT_PATH, './dist'),
  },
}
```

### 设置打包模式 `Mode`

默认情况下，webpack 为我们设为了 `mode: 'prodution'` 。在 production 模式下，webpack 默认会丑化、压缩代码，还有其他一些默认配置。
Webpack 提供了下面的模式，详细参见 [Webpack 官方关于 mode 的说明](https://webpack.js.org/configuration/mode/#root)：

```js
string = 'production': 'none' | 'development' | 'production'
```

> - 设置途径，既可以在配置文件中设置`mode: '<mode-string>'`，也可通过构建指令明确提供 `--mode=<mode-string>`。
> - 如果不设置，`mode`值默认为 `production`。

然后接下来大家可以分别执行以下命令，看看分别打的包有啥区别，主要感知下我们上面所说的：

```sh
# 开发环境打包
yarn start

# 生产环境打包
yarn build
```

### 设置本地服务，方便实时查看页面

- 依赖工具：

  - `html-webpack-plugin` ：每一个页面是一定要有 `html` 文件的，而这个插件能帮助我们将打包后的 `js` 文件自动引进 `html` 文件中，毕竟你不可能每次更改代码后都手动去引入 `js` 文件。
  - [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) ：可以在本地起一个 `http` 服务，通过简单的配置还可指定其端口、热更新的开启等。

- 安装指令

```sh
yarn add -D webpack-dev-server html-webpack-plugin
```

> 注意：`webpack-dev-server`是 `webpack 4`的产物，最新版本是`3.11.0`，在`webpack 5`环境下安装此插件会有警告，期待官方匹配的更新版本。

现在，我们先在项目根目录下新建一个 public 文件夹，里面存放一些公用的静态资源，现在我们先在其中新建一个 index.html ，写入以下内容：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React+Typescript 快速开发脚手架</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

> 注意：里面有一个 `div` 标签的 `id` 属性，其值为 `root`。

因为 `html-webpack-plugin` 在开发和生产环境我们都需要配置，于是我们打开 `scripts/config/webpck.common.js` 增加以下内容：

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {...},
  output: {...},
  plugins: [
  	new HtmlWebpackPlugin({
      template: resolve(PROJECT_PATH, './public/index.html'),
      filename: 'index.html',
      cache: fale, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
      minify: isDev ? false : {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        useShortDoctype: true,
      },
    }),
  ]
}
```

可以看到，我们以 `public/index.html` 文件为模板，并且在生产环境中对生成的 html 文件进行了代码压缩，比如去除注释、去除空格等。

> `plugin` 是 `webpack` 的核心功能，它丰富了 `webpack` 本身，针对是 `loader` 结束后， `webpack` 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 `webpack` 打包过程中的某些节点，执行广泛的任务。

随后在 `scripts/config/webpack.dev.js` 下增加本地服务的配置：

```js
const { SERVER_HOST, SERVER_PORT } = require('../constants')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
    port: SERVER_PORT, // 指定端口，默认是8080
    stats: 'errors-only', // 终端仅打印 error
    clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
  },
})
```

我们定义了两个新的变量 `SERVER_HOST` 和 `SERVER_PORT` ，在 `scripts/constants.js` 中定义它们：

```js
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = 9000

module.exports = {
  SERVER_HOST,
  SERVER_PORT,
  // ...
}
```

其中提高开发幸福度的配置项：

- stats ：当设为 error-only 时，终端中只会打印错误日志，这个配置个人觉得很有用，现在开发中经常会被一堆的 warn 日志占满，比如一些 eslint 的提醒规则，编译信息等，头疼的很。
- clientLogLevel ：设为 slient 之后，原来的三条信息会变为只有一条。

- hot ：这个配置开启后，之后在配合其他配置，可以开启热更新，我们之后再说。

现在配置好了本地服务的相关配置，我们还需要回到 package.json 中修改 start 命令：

```diff
{
  "scripts": {
+   "start": "cross-env NODE_ENV=development webpack-dev-server --config ./scripts/config/webpack.dev.js",
-   "start": "cross-env NODE_ENV=development webpack --config ./scripts/config/webpack.dev.js",
  },
}
```

然后确认一下， `src/app.js` 中的代码如下：

```js
const root = document.querySelector('#root')
root.innerHTML = 'hello, webpack!'
```

很简单，就是往之前在 `html` 文件中定义的 `id` 为 `root` 的 `div` 标签下加了一个字符串。
现在，执行以下命令：

```sh
yarn start
```

你会发现浏览器默认打开了一个页面，屏幕上出现了期待中的 `hello, webpack!` 。查看控制台，发现 html 文件真的就自动引入了我们打包后的文件～

至此，我们已经能利用本地服务实时进行页面更新了！当然，这远远是不够的，我们会一步一步继续，尽可能的去完善。

### devtool

`devtool` 中的一些设置，可以帮助我们将编译后的代码映射回原始源代码，即大家经常听到的 source-map ，这对于调试代码错误的时候特别重要，而不同的设置会明显影响到构建和重新构建的速度。所以选择一个适合自己的很重要。

`devtool` 都有哪些值可以设置，详见[webpack 官方关于 devtool 说明](https://webpack.js.org/configuration/devtool/)。

**在这里我非常非常无敌强烈建议大家故意写一些有错误的代码，然后使用每个设置都试试看！**

在开发环境中，`eval-source-map` 是个不错的选择 ，需在 `scripts/config/webpack.dev.js` 中添加以下代码：

```diff
module.exports = merge(common, {
  mode: 'development',
+ devtool: 'eval-source-map',
})
```

在生产环境中我直接设为 `none` ，不需要 `source-map` 功能，在 `scripts/config/webpack.prod.js` 中添加以下代码：

```diff
module.exports = merge(common, {
  mode: 'production',
+ devtool: 'none',
})
```

通过上面配置，我们本地进行开发时，代码出现了错误，控制台的错误日志就会精确地告诉你错误的代码文件、位置等信息。比如我们在 `src/app.js` 中第 5 行故意写个错误代码：

```js
const root = document.querySelector('#root')
root.innerHTML = 'hello, webpack!'

const a = 5
a = 6
```

其错误日志提示我们：你的 app.js 文件中第 5 行出错了，具体错误原因为 balabala.... ，赶紧看看吧～

配置现在基本可用，但还有一个问题需要解决：如果你已经执行过多次 `yarn build` ，你会发现有一堆 `app.xxxxxxxx.js` ，为了我们最终打包后没有前一次打包出来的多余文件，得想个办法处理这个问题。请看下一节。

### 打包编译前清理 dist 目录

我们发现每次打出来的文件都会继续残留在 dist 目录中，也就是上一节提到的问题：在目标目录，产生了一堆 `app.xxxxxxxx.js`文件，但最终都不需要。

`clean-webpack-plugin` 插件是解决此问题的好帮手，每次打包前它会清理 dist 目录，以保证每次打出的都是当前最新的。

1. 插件安装指令

```sh
yarn add -D clean-webpack-plugin
```

> 安装警告： `warning "webpack-dev-server > webpack-dev-middleware@3.7.2" has incorrect peer dependency "webpack@^4.0.0".`

2. 添加配置

打开 `scripts/config/webpack.prod.js` 文件，增加以下代码：

```js
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // other...
  plugins: [new CleanWebpackPlugin()],
}
```

你无需指定要删除的目录位置，此插件会自动找到 `output` 中的 `path` 然后进行清除。

现在再执行一下 `yarn build` ，看看打出来的 dist 目录是不是干净清爽了许多？!

### 样式文件处理

如果你在 `src/` 目录下有一个（没有就新建） `app.css` 文件，给 `#root`样式对象随便添加一个样式， 在`app.js` 中通过 `import './app.css'` ，再进行打包或本地服务启动，`webpack` 直接就会报错，因为 webpack 只会编译 .js 文件，它是不支持直接处理 `.css` 、 `.less` 或 `.scss` 文件的，我们需要借助 `webpack` 中另一个很核心的东西：**loader**。

> `loader` 用于对模块的源代码进行转换。`loader` 可以使你在 `import` 或"加载"模块时预处理文件。因此，`loader` 类似于其他构建工具中“任务(task)”，并提供了处理前端构建步骤的强大方法。`loader` 可以将文件从不同的语言（如 TypeScript）转换为 `JavaScript`，或将内联图像转换为 `data URL`。`loader` 甚至允许你直接在 `JavaScript` 模块中导入 `CSS`文件！

#### CSS 样式文件处理

处理 `.css` 文件我们需要安装 [css-loader](https://webpack.js.org/loaders/css-loader/) 和 [style-loader](https://webpack.js.org/loaders/style-loader/)：

> 遇到后缀为 `.css` 的文件，`webpack` 先用 `css-loader` 加载器去解析这个文件，遇到 `@import` 等语句就将相应样式文件引入（所以如果没有 `css-loader` ，就没法解析这类语句），计算后生成 css 字符串，接下来 `style-loader` 处理此字符串生成一个内容为最终解析完的 css 代码的 style 标签，放到 head 标签里。
>
> `loader` 是有顺序的，webpack 肯定是先将所有 css 模块依赖解析完得到计算结果再创建 style 标签。因此应该把 style-loader 放在 css-loader 的前面（webpack loader 的执行顺序是从右到左，即从后往前）。

1. 安装指令

```sh
yarn add -D css-loader style-loader
```

> 安装警告：`warning "webpack-dev-server > webpack-dev-middleware@3.7.2" has incorrect peer dependency "webpack@^4.0.0".`

2. 基本配置

在 `scripts/config/webpack.common.js` ，写入以下代码：

```js
module.exports = {
  // other...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false, // 默认就是 false, 若要开启，可在官网具体查看可配置项
              sourceMap: isDev, // 开启后与 devtool 设置一致, 开发环境开启，生产环境关闭
              importLoaders: 0, // 指定在 CSS loader 处理前使用的 laoder 数量
            },
          },
        ],
      },
    ],
  },
}
```

- test 字段是匹配规则，针对符合规则的文件进行处理。

- use 字段有几种写法：

> - 可以是一个字符串，假如我们只使用 `style-loader` ，只需要 `use: 'style-loader'` 。
> - 可以是一个数组，假如我们不对 `css-loader` 做额外配置，只需要 `use: ['style-loader', 'css-loader']` 。
> - 数组的每一项既可以是字符串也可以是一个对象，当我们需要在 webpack 的配置文件中对 loader 进行配置，就需要将其编写为一个对象，并且在此对象的 `options`字段中进行配置。比如我们上面要对 `css-loader` 做配置的写法。

### LESS 样式文件处理

处理 `.less` 文件我们需要安装 `less` 和 [less-loader](https://webpack.js.org/loaders/less-loader/)。

> - 遇到后缀为 `.less` 文件， `less-loader` 会将你写的 `less` 语法转换为 `css` 语法，并转为 `.css` 文件。
> - `less-loader` 依赖于 `less` ，所以必须都安装。

如果你确定需要 LESS 样式处理

1. 安装指令：

```sh
yarn add -D less less-loader
```

2. 在 `scripts/config/webpack.common.js` 中写入以下代码：

```js
module.exports = {
  // other...
  module: {
    rules: [
      {
        /* ... */
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: isDev,
              importLoaders: 1, // 需要先被 less-loader 处理，所以这里设置为 1
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
    ],
  },
}
```

#### SASS 样式文件处理

处理 .scss 文件我们需要安装 [sass-loader](https://webpack.js.org/loaders/sass-loader/) 以及相关依赖。

- 遇到 .scss 后缀的文件， sass-loader 会将你写的 sass 语法转为 css 语法，并转为 .css 文件。
- 同样地， sass-loader 依赖于 node-sass 或 dart-sass。

> ℹ️ We recommend using [Dart Sass](https://github.com/sass/dart-sass).
>
> ⚠ [Node Sass](https://github.com/sass/node-sass) does not work with [Yarn PnP](https://classic.yarnpkg.com/en/docs/pnp/) feature.

上面引用自 webpack 官网关于 [Node Sass](https://webpack.js.org/loaders/sass-loader/)的说明。因此本方案决定使用 [Dart Sass](https://github.com/sass/dart-sass)，而 `dart-sass`包从`@1.25.0`版本后就被`sass`包替代，因此，安装时需注意。

1. 安装指令

```sh
yarn add -D sass-loader sass
```

> 如果之前没有安装 `webpack`，在这里需要加上。

2. 在 `scripts/config/webpack.common.js` 中写入配置代码：

```js
module.exports = {
  // other...
  module: {
    rules: [
      {
        /* ... */
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: isDev,
              importLoaders: 1, // 需要先被 sass-loader 处理，所以这里设置为 1
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
    ],
  },
}
```

引用来自 webpack 官网的说明：_Chain the `sass-loader` with the `css-loader` and the `style-loader` to immediately apply all styles to the DOM or the `mini-css-extract-plugin` to extract it into a separate file._ 由此可见，如果加入 `css-loader` 和 `style-loader`，则`sass-loader`可处理所有样式文件。根据[sass-loader 官方指南](https://webpack.js.org/loaders/sass-loader/)，修改配置如下：

```diff
module.exports = {
	// other...
  module: {
    rules: [
      { /* ... */ },
      {
-       test: /\.scss$/,
+       test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: isDev,
              importLoaders: 1, // 需要先被 sass-loader 处理，所以这里设置为 1
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
    ]
  },
}
```

现在，通过以上配置之后，再把 `src/app.css` 改为 `app.sass` 或 `app.scss` ，最后执行 `yarn start` ，你会发现咱们的样式正常加载了出来，开心噢～

#### PostCSS 处理浏览器兼容问题

`postcss` 一种对 `css` 编译的工具，类似 `babel` 对 `js` 一样通过各种插件对 `css` 进行处理，在这里我们主要使用以下插件：

- `postcss-flexbugs-fixes` ：用于修复一些和 `flex` 布局相关的 `bug`。
- `postcss-preset-env` ：将最新的 `CSS` 语法转换为目标环境的浏览器能够理解的 CSS 语法，目的是使开发者不用考虑浏览器兼容问题。我们使用 `autoprefixer` 来自动添加浏览器头。
- `postcss-normalize` ：从 `browserslist` 中自动导入所需要的 `normalize.css` 内容。

1. 安装上面提到的所需的包：

```sh
yarn add -D \
  postcss-loader \
  postcss-flexbugs-fixes \
  postcss-preset-env \
  autoprefixer \
  postcss-normalize
```

2. 将 [postcss-loader](https://webpack.js.org/loaders/postcss-loader/) 放到 `css-loader` 后面，配置如下：

```js
{
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      require('postcss-flexbugs-fixes'),
      require('postcss-preset-env')({
        autoprefixer: {
          grid: true,
          flexbox: 'no-2009'
        },
        stage: 3,
      }),
      require('postcss-normalize'),
    ],
    sourceMap: isDev,
  },
},
```

但是我们要为每一个之前配置的样式 `loader` 中都要加一段这个，这代码会显得非常冗余，于是我们把公共逻辑抽离成一个函数，与 cra 一致，命名为 `getCssLoaders` ，因为新增了 `postcss-loader` ，所以我们要修改导入 `Loaders` ，于是我们现在的 `scripts/config/webpack.common.js` 修改为以下这样：

```js
const getCssLoaders = (importLoaders) => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: isDev,
      importLoaders,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: [
        // 修复一些和 flex 布局相关的 bug
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            grid: true,
            flexbox: 'no-2009'
          },
          stage: 3,
        }),
        require('postcss-normalize'),
      ],
      sourceMap: isDev,
    },
  },
]

module.exports = {
	// other...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getCssLoaders(1),
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          ...getCssLoaders(2),
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
    ]
  },
  plugins: [//...],
}
```

最后，我们还得在 `package.json` 中添加 `browserslist` （指定了项目的目标浏览器的范围）：

```json
{
  "browserslist": [">0.2%", "not dead", "ie >= 9", "not op_mini all"]
}
```

现在，在如果你在入口文件（比如我之前一直用的 `app.js` ）随便引一个写了 `display: flex` 语法的样式文件， `yarn start` 看看是不是自动加了浏览器前缀了呢？快试试吧！
