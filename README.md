# 一步步手动搭建 React + Typescript 项目开发环境

参考了

- [Typescript+React 项目环境的](https://github.com/vortesnail/blog/issues/14)

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

> 这是执行以上指令和选择后的原始结果。

并在 `package.json`文件里自动新增下面的配置：

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

- 根据 [`eslint-config-airbnb`] 官方说明，如果要开启 React Hooks 的检查，需要在 extends 中添加一项 'airbnb/hooks' 。
- 根据 [`@typescript-eslint/eslint-plugin`] 官方说明，在 extends 中添加 'plugin:@typescript-eslint/recommended' 可开启针对 ts 语法推荐的规则定义。

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

  - [`html-webpack-plugin`] ：每一个页面是一定要有 `html` 文件的，而这个插件能帮助我们将打包后的 `js` 文件自动引进 `html` 文件中，毕竟你不可能每次更改代码后都手动去引入 `js` 文件。
  - [`webpack-dev-server`] ：可以在本地起一个 `http` 服务，通过简单的配置还可指定其端口、热更新的开启等。

- 安装指令

```sh
# for Webpack 4
yarn add -D webpack-dev-server html-webpack-plugin
# for Webpack 5
yarn add -D webpack-dev-middleware express html-webpack-plugin@next
```

> 注意：
> + [`webpack-dev-server`]是 `webpack 4`的产物，最新版本是`3.11.0`，在`webpack 5`环境下安装此插件会有警告，期待官方匹配的更新版本。
> + 在 webpack 5 时代，推荐使用 [`webpack-dev-middleware`] 替代 [`webpack-dev-server`]

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

[`devtool`] 中的一些设置，可以帮助我们将编译后的代码映射回原始源代码，即大家经常听到的 source-map ，这对于调试代码错误的时候特别重要，而不同的设置会明显影响到构建和重新构建的速度。所以选择一个适合自己的很重要。

[`devtool`] 都有哪些值可以设置，详见webpack 官方关于[`devtool`]说明。

**在这里我非常非常无敌强烈建议大家故意写一些有错误的代码，然后使用每个设置都试试看！**

在开发环境中，`inline-source-map` 是个不错的选择 ，需在 `scripts/config/webpack.dev.js` 中添加以下代码：

```diff
module.exports = merge(common, {
  mode: 'development',
+ devtool: 'inline-source-map',
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

更多的模式请查看 [`devtool`]官网，下面是从官网获取的一张表：

| devtool | build | rebuild | production | quality |
| --- | --- | --- | --- | --- |
| (none) | fastest | fastest | yes | bundled code |
| eval | fastest | fastest | no | generated code |
| eval-cheap-source-map| fast | faster | no | transformed code (lines only) |
| eval-cheap-module-source-map| slow | faster | no | original source (lines only) |
| eval-source-map| slowest | fast | no | original source |
| eval-nosources-source-map|   |   |   |   |
| eval-nosources-cheap-source-map|   |   |   |   |
| eval-nosources-cheap-module-source-map|   |   |   |   |
| cheap-source-map| fast | slow | yes | transformed code (lines only) |
| cheap-module-source-map| slow | slower | yes | original source (lines only) |
| inline-cheap-source-map| fast | slow | no | transformed code (lines only) |
| inline-cheap-module-source-map| slow | slower | no | original source (lines only) |
| inline-source-map| slowest | slowest | no | original source |
| inline-nosources-source-map|   |   |   |   |
| inline-nosources-cheap-source-map|   |   |   |   |
| inline-nosources-cheap-module-source-map|   |   |   |   |
| source-map| slowest | slowest | yes | original source |
| hidden-source-map| slowest | slowest | yes | original source |
| hidden-nosources-source-map|   |   |   |   |
| hidden-nosources-cheap-source-map|   |   |   |   |
| hidden-nosources-cheap-module-source-map|   |   |   |   |
| hidden-cheap-source-map|   |   |   |   |
| hidden-cheap-module-source-map|   |   |   |   |
| nosources-source-map| slowest | slowest | yes | without source content |
| nosources-cheap-source-map|   |   |   |   |
| nosources-cheap-module-source-map|   |   |   |   |

### 打包编译前清理 dist 目录

我们发现每次打出来的文件都会继续残留在 dist 目录中，也就是上一节提到的问题：在目标目录，产生了一堆 `app.xxxxxxxx.js`文件，但最终都不需要。

`clean-webpack-plugin` 插件是解决此问题的好帮手，每次打包前它会清理 dist 目录，以保证每次打出的都是当前最新的。

1\. 插件安装指令

```sh
yarn add -D clean-webpack-plugin
```

> 安装警告： `warning "webpack-dev-server > webpack-dev-middleware@3.7.2" has incorrect peer dependency "webpack@^4.0.0".`

2\. 添加配置

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
这里需要用到 [`postcss-loader`]，它是使用 [`postcss`] 来处理 `CSS` 的加载器。[postcss] 类似于 `babel` 对 `js` 一样通过各种插件对 `CSS` 进行处理，目前已有[200多个插件](https://github.com/postcss/postcss/blob/master/docs/plugins.md){:target="_blank"} ，分几大类：[Packs] 、[Future CSS Syntax]、[Fallbacks]、[Language Extensions]、[Colors] [Images and Fonts]、[Grids]、[Optimizations]、[Shortcuts]、[Others]等。在这里我们主要使用以下插件：

- `postcss-flexbugs-fixes` ：用于修复一些与 `flex` 布局相关的 `Bugs`。
- [`postcss-preset-env`] ：`PostCSS`预设环境插件，将最新的 `CSS` 语法转换为目标环境的浏览器能够理解的 `CSS` 语法，目的是使开发者不用考虑浏览器兼容问题。我们使用 [`autoprefixer`] 来自动添加浏览器头。
- `postcss-normalize` ：从 `browserslist` 中自动导入所需要的 `normalize.css` 内容。

1. 安装上面提到的所需的包。要正常使用这一功能，需要先安装 [`postcss-loader`] 和 [`postcss`]，以及与[`postcss`]相关功能的插件。
```sh
yarn add -D \
  postcss \
  postcss-loader \
  postcss-flexbugs-fixes \
  postcss-preset-env \
  postcss-normalize
```
> :warning: [`postcss-preset-env`] includes [`autoprefixer`], so adding it separately is not necessary if you already use the preset. More [information](https://github.com/csstools/postcss-preset-env#autoprefixer)

上面信息来自[`postcss-loader`]官网，意思是说，[`postcss-preset-env`]插件已经包含了[`autoprefixer`]，如果项目中同时使用了这两者，那么[`autoprefixer`]没必要单独安装。

```ini
warning Pattern ["postcss@^8.1.10"] is trying to unpack in the same destination "/home/wush/.cache/yarn/v6/npm-postcss-8.1.10-129834f94c720554d2cfdaeb27d5542ac4a026ea-integrity/node_modules/postcss" as pattern ["postcss@^8.1.4"]. This could result in non-deterministic behavior, skipping.
warning "webpack-dev-server > webpack-dev-middleware@3.7.2" has incorrect peer dependency "webpack@^4.0.0".
warning "postcss-normalize > postcss-browser-comments@3.0.0" has unmet peer dependency "browserslist@^4".
```

2. 将 [postcss-loader](https://webpack.js.org/loaders/postcss-loader/) 放到 `css-loader` 后面，配置如下：

```js
{
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    postcssOptions: {
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
    },
    sourceMap: isDev,
  },
},
```

但是我们要为每一个之前配置的样式 `loader` 中都要加一段这个，这代码会显得非常冗余，于是我们把公共逻辑抽离成一个函数，与 cra 一致，命名为 `getCssLoaders` ，因为新增了 `postcss-loader` ，所以我们要修改 `importLoaders`选项 ，于是我们现在的 `scripts/config/webpack.common.js` 修改为以下这样：

```js
const getCssLoaders = (importLoader) => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: true,
      sourceMap: isDev,
      importLoaders: importLoader,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      postcssOptions: {
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
      },
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

3. 下面是来自[`postcss-loader`]官网关于 **CSS-in-JS** 和 [`postcss-js`]的一段描述，大意是要将处理样式写入到 JavaScript 中，需要使用[`postcss-js`]分析器。

> If you want to process styles written in JavaScript, use the [`postcss-js`] parser.

引入方法如下：
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.style.js$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                parser: 'postcss-js',
              },
              execute: true,
            },
          },
        ],
      },
    ],
  },
};
```

然后就可以像下面这样使用样式了：
```js
import colors from './styles/colors';

export default {
  '.menu': {
    color: colors.main,
    height: 25,
    '&_link': {
      color: 'white',
    },
  },
};
```
> :warning: If you are using Babel you need to do the following in order for the setup to work
> 1.  Add [`babel-plugin-add-module-exports`](https://github.com/59naga/babel-plugin-add-module-exports) to your configuration.
> 2.  You need to have only one **default** export per style module.

因此，咱们上面定义配置方法需要修改：
```diff
const getCssLoaders = (importLoader) => [
  'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: false,
      sourceMap: isDev,
      importLoaders: importLoader,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      postcssOptions: {
+       parser: 'postcss-js',
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
      },
+     execute: true,
      sourceMap: isDev,
    },
  },
]
```

4. 最后，我们还得在 `package.json` 中添加 `browserslist` （指定了项目的目标浏览器的范围）：

```json
{
  "browserslist": [">0.2%", "not dead", "ie >= 9", "not op_mini all"]
}
```

现在，在如果你在入口文件（比如我之前一直用的 `app.js` ）随便引一个写了 `display: flex` 语法的样式文件， `yarn start` 看看是不是自动加了浏览器前缀了呢？快试试吧！

### 图片和字体加载处理

我们可以使用 [`file-loader`] 或者 [`url-loader`] 来处理本地资源文件，比如图片、字体文件。 [`url-loader`] 具有 [`file-loader`] 所有的功能，还能在图片大小限制范围内打包成 base64 图片插入到 js 文件中，这样做的好处是什么呢？
+ [`url-loader`] : 一个将多种文件转换成 `base64 URIs`的`webpack`加载器。更多高级用法请查看[url-loader 官方文档](https://webpack.js.org/loaders/url-loader/)

1\. 我们先安装所需要的包：
```sh
 yarn add -D url-loader
```

2\. 然后在 `scripts/config/webpack.common.js` 中继续在 `modules.rules` 中添加以下代码：
```js
 module.exports = {
  // other...
  module: {
    rules: [
      // other...
      {
        test: /\.(bmp|png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[contenthash:8].[ext]',
              outputPath: 'assets/fonts',
            },
          },
        ],
      },
    ]
  },
  plugins: [//...],
}
```
*   `[name].[contenthash:8].[ext]` 表示输出的文件名为 `原来的文件名.哈希值.后缀` ，有了这个 hash 值，可防止图片更换后导致的缓存问题。
*   `outputPath` 是输出到 `dist` 目录下的路径，即图片目录 `dist/assets/images` 以及字体相关目录 `dist/assets/fonts` 下。
*   `limit` 表示如果你这个图片文件大于 `10240b` ，即 `10kb` ，那我 `url-loader` 就不用，转而去使用 `file-loader` ，把图片正常打包成一个单独的图片文件到设置的目录下，若是小于了 `10kb` ，就将图片打包成 base64 的图片格式插入到打包之后的文件中，这样做的好处是，减少了 http 请求，但是如果文件过大，js文件也会过大，得不偿失，这是为什么有 `limit` 的原因！

3\. 接下来大家引一下本地的图片并放到 img 标签中，或者去 [`iconfont`] 下个字体图标试试吧～

不幸的是，当你尝试引入一张图片的时候，会有以下 ts 的报错（如果你安装了 ts 的话）：

[![image.png](https://camo.githubusercontent.com/db93179e1a4cc94c386afc6e2ca3018191c9fc44b1567b2a4800b9eb5df4798d/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363236373137353236392d61373735333534322d663737652d343865342d623834382d6235346635353363613932322e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313539266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d333138266f726967696e57696474683d313337362673697a653d3534303731267374617475733d646f6e65267374796c653d6e6f6e652677696474683d363838)](https://camo.githubusercontent.com/db93179e1a4cc94c386afc6e2ca3018191c9fc44b1567b2a4800b9eb5df4798d/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363236373137353236392d61373735333534322d663737652d343865342d623834382d6235346635353363613932322e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313539266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d333138266f726967696e57696474683d313337362673697a653d3534303731267374617475733d646f6e65267374796c653d6e6f6e652677696474683d363838)

这个时候在 `src/` 下新建以下文件 `typings/file.d.ts` ，输入以下内容即可：
```ts
 declare module '*.svg' {
  const path: string
  export default path
}

declare module '*.bmp' {
  const path: string
  export default path
}

declare module '*.gif' {
  const path: string
  export default path
}

declare module '*.jpg' {
  const path: string
  export default path
}

declare module '*.jpeg' {
  const path: string
  export default path
}

declare module '*.png' {
  const path: string
  export default path
}
```

其实看到现在已经很不容易了，不过我相信大家仔细跟到现在的话，也会收获不少的，上面的 [`webpack`] 基本配置只是配置了最基本的功能，接下来我们要达到支持 `React`，`TypeScript` 以及一堆的开发环境和生产环境的优化，大家加油噢～

## 支持 React

要在 [`webpack`] 的打包管理框架下支持 React，还需要一个 [`webpack`] 的插件 [`babel-loader`] 来进行预加载处理 `JSX` 语法。因此，除了安装 React 必要的库 `react` 和 `react-dom` 之外，还需要安装和配置 [`babel-loader`]。

+ [`babel-loader`]：该软件包允许使用[`Babel`]和[`webpack`]来转译 JavaScript 文件，当前版本是 `v8.2.1`。


具体使用方法如下：

1\. 安装 [`babel-loader`] 需要的依赖包，以及 React 基础包：

```sh
yarn add -D babel-loader @babel/core @babel/preset-env webpack
yarn add react react-dom
```
> + `-S` 相当于 `--save` ，添加运行时依赖。yarn工具添加运行时依赖包，可以不加这个参数，默认加入到运行时依赖组。
> + `-D` 相当于 `--save-dev`，添加开发时依赖 。
> + [`babel-loader`] 依赖 webpack `4.x || 5.x` | babel-loader 8.x | babel 7.x
> + [`babel-loader`] 使用 `babel` 解析文件；[`@babel/core`] 是 `babel` 的核心模块；[`@babel/preset-react`] 转译 jsx 语法。

2\. 安装了这两个包就已经能使用 `JSX` 语法了，我们在 `src/index.js` 中输入以下代码：
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.querySelector('#root'))
```

在 `src/app.js` 中输入以下示例代码：
```js
 import React from 'react'

function App() {
  return <div className='App'>Hello World</div>
}

export default App
```

3\. 修改 `scripts/config/webpack.common.js` 中 `entry` 字段，修改入口文件为 `index.js` ：
```diff
 module.exports = {
  entry: {
+   app: resolve(PROJECT_PATH, './src/index.js'),
-   app: resolve(PROJECT_PATH, './src/app.js'),
  },
}
```

4\. 在根目录下新建 `.babelrc` 文件，输入以下代码：
```json
{
  "presets": ["@babel/preset-react"]
}
```

[`presets`] 是一些列插件集合。比如 [`@babel/preset-react`] 一般情况下会包含 `@babel/plugin-syntax-jsx` 、 `@babel/plugin-transform-react-jsx` 、 `@babel/plugin-transform-react-display-name` 这几个 babel 插件。

接下来打开我们的 `webpack.common.js` 文件，增加以下代码：
```js
 module.exports = {
	// other...
  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: 'babel-loader',
        options: { cacheDirectory: true },
        exclude: /node_modules/,
      },
      // other...
    ]
  },
  plugins: [ //... ],
}
```

注意，我们匹配的文件后缀只有 `.tsx` 、`.ts` 、 `.js` ，我把 `.jsx` 的格式排除在外了，因为我不可能在 ts 环境下建 `.jsx` 文件，实在要用 jsx 语法的时候，用 `.js` 不香吗？

[`babel-loader`] 在执行的时候，可能会产生一些运行期间重复的公共文件，造成代码体积大冗余，同时也会减慢编译效率，所以我们开启 `cacheDirectory` 将这些公共文件缓存起来，下次编译就会加快很多。

建议给 `loader` 指定 `include` 或是 `exclude`，指定其中一个即可，因为 `node_modules` 目录不需要我们去编译，排除后，有效提升编译效率。

现在，我们可以 `yarn start` 看看效果了！其实 babel 还有一些其他重要的配置，我们先把 TS 支持了再一起搞！

**在此，强烈建议大家先阅读一篇关于 babel 写的很好的文章：[不容错过的 Babel7 知识](https://juejin.im/post/5ddff3abe51d4502d56bd143)，绝对的收获满满，我知道在自己文章中插入一个链接，让读者去阅读再回来接着读这种行为挺让人反感的，我看别人文章时也有这种感觉，但是在这里我真的不得不推荐，一定要读！一定要读！一定要读！**

## 支持 TypeScript

`webpack` 模块系统只能识别 `js` 文件及其语法，遇到 `jsx` 语法、`tsx` 语法、文件、图片、字体等就需要相应的 loader 对其进行预处理，像图片、字体这种我们上面已经配置了，为了支持 React，我们使用了 [`babel-loader`] 以及对应的插件，现在如果要支持 `TypeScript` 我们也需要对应的插件。

### 1\. 安装对应 babel 插件

[`@babel/preset-typescript`] 是 `babel` 的一个 preset，它编译 ts 的过程很粗暴，它直接去掉 ts 的类型声明，然后再用其他 babel 插件进行编译，所以它很快。

废话补多少，先来安装它：
```sh
yarn add -D @babel/preset-typescript
```
> 注意：我们之前因为 Eslint 的配置地方需要先安装 Typescript，所以此处不用再安装一次了。

然后修改 `.babelrc` ：
```json
{
  "presets": ["@babel/preset-react", "@babel/preset-typescript"]
}
```
[presets 的执行顺序](https://babeljs.io/docs/en/presets#preset-ordering)是从后到前的。根据以上代码的 babel 配置，会先执行 [`@babel/preset-typescript`] ，然后再执行 [`@babel/preset-react`] 。

### 2\. tsx 语法测试

`src/` 有以下两个 `.tsx` 文件，代码分别如下：
```tsx
`index.tsx` ：

import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(
  <App name='vortesnail' age={25} />,
  document.querySelector('#root')
)

`app.tsx` ：

 import React from 'react'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  const { name, age } = props
  return (
    <div className='app'>
      <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
    </div>
  )
}

export default App
```
很简单的代码，在 `<App />` 中输入属性时因为 ts 有了良好的智能提示，比如你不输入 `name` 和 `age` ，那么就会报错，因为在 `<App />` 组件中，这两个属性时必须值！

但是这个时候如果你 `yarn start` ，发现是编译有错误的，我们修改 `scripts/config/webpack.common.js` 文件：
```js
 module.exports = {
  entry: {
    app: resolve(PROJECT_PATH, './src/index.tsx'),
  },
  output: {//...},
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
}
```
+ 一来修改了 `entry` 中的入口文件后缀，变为 `.tsx` 。
+ 二来新增了 `resolve` 属性，在 [extensions](https://webpack.js.org/configuration/resolve/#resolveextensions) 中定义好文件后缀名后，在 import 某个文件的时候，比如上面代码：
```js
import App from './app'
```
就可以不加文件后缀名了。`webpack` 会按照定义的后缀名的顺序依次处理文件，比如上文配置 `['.tsx', '.ts', '.js', '.json']` ，`webpack` 会先尝试加上 `.tsx` 后缀，看找得到文件不，如果找不到就依次尝试进行查找，所以我们在配置时尽量把最常用到的后缀放到最前面，可以缩短查找时间。

这个时候再进行 `yarn start` ，页面就能正确输出了。

既然都用上了 `Typescript`，那 `React` 的类型声明自然不能少，安装它们：
```sh
yarn add -D @types/react @types/react-dom
```
### 3\. tsconfig.json 详解

每个 Typescript 都会有一个 `tsconfig.json` 文件，其作用简单来说就是：

* 编译指定的文件
* 定义编译选项

一般都会把 `tsconfig.json` 文件放在项目根目录下。在控制台输入以下代码来生成此文件：
```sh
 yarn tsc --init
```
打开生成的 `tsconfig.json` ，有很多注释和几个配置，有点点乱，我们就将这个文件的内容删掉吧，重新输入我们自己的配置。

此文件中现在的代码为：
```json
 {
  "compilerOptions": {
    // 基本配置
    "target": "ES5",                          // 编译成哪个版本的 es
    "module": "ESNext",                       // 指定生成哪个模块系统代码
    "lib": ["dom", "dom.iterable", "esnext"], // 编译过程中需要引入的库文件的列表
    "allowJs": true,                          // 允许编译 js 文件
    "jsx": "react",                           // 在 .tsx 文件里支持 JSX
    "isolatedModules": true,
    "strict": true,                           // 启用所有严格类型检查选项

    // 模块解析选项
    "moduleResolution": "node",               // 指定模块解析策略
    "esModuleInterop": true,                  // 支持 CommonJS 和 ES 模块之间的互操作性
    "resolveJsonModule": true,                // 支持导入 json 模块
    "baseUrl": "./",                          // 根路径
    "paths": {																// 路径映射，与 baseUrl 关联
      "Src/*": ["src/*"],
      "Components/*": ["src/components/*"],
      "Utils/*": ["src/utils/*"]
    },

    // 实验性选项
    "experimentalDecorators": true,           // 启用实验性的ES装饰器
    "emitDecoratorMetadata": true,            // 给源码里的装饰器声明加上设计类型元数据

    // 其他选项
    "forceConsistentCasingInFileNames": true, // 禁止对同一个文件的不一致的引用
    "skipLibCheck": true,                     // 忽略所有的声明文件（ *.d.ts）的类型检查
    "allowSyntheticDefaultImports": true,     // 允许从没有设置默认导出的模块中默认导入
    "noEmit": true														// 只想使用tsc的类型检查作为函数时（当其他工具（例如Babel实际编译）时）使用它
  },
  "exclude": ["node_modules"]
}
```
`compilerOptions` 用来配置编译选项，其完整的可配置的字段从[这里](https://www.tslang.cn/docs/handbook/compiler-options.html)可查询到； `exclude` 指定了不需要编译的文件，我们这里是只要是 `node_modules` 下面的我们都不进行编译，当然，你也可以使用 `include` 去指定需要编译的文件，两个用一个就行。

接下来对 `compilerOptions` 重要配置做一下简单的解释：
  * `target` 和 `module` ：这两个参数实际上没有用，它是通过 `tsc` 命令执行才能生成对应的 es5 版本的 js 语法，但是实际上我们已经使用 babel 去编译我们的 ts 语法了，根本不会使用 `tsc` 命令，所以它们在此的作用就是让编辑器提供错误提示。
  * `isolatedModules` ：可以提供额外的一些语法检查。

    比如不能重复 `export` ：
    ```js
    import { add } from './utils'
    add()

    export { add } // 会报错
    ```

    比如每个文件必须是作为独立的模块：
    ```js
    const print = (str: string) => { console.log(str) } // 会报错，没有模块导出

    // 必须有 export
    export print = (str: string) => { 
      console.log(str) 
    }
    ```

* `esModuleInterop` ：允许我们导入符合 `es6` 模块规范的 `CommonJS` 模块，下面做简单说明。

    比如某个包为 `test.js` ：
    ```js
    // node_modules/test/index.js
    exports = test
    ```

    使用此包：
    ```js
    // 我们项目中的 app.tsx
    import * as test from 'test'
    test()
    ```
    开启 `esModuleInterop` 后，直接可如下使用：

    ```js
    import test from 'test'
    test()
    ```

* 接下来我们着重讲下 `baseUrl` 和 `paths` ，这两个配置真的是提升开发效率的利器啊！它的作用就是快速定位某个文件，防止多层 `../../../` 这种写法找某个模块！比如我现在的 `src/` 下有这么几个文件：

[![image.png](https://camo.githubusercontent.com/1a1ffbac3e4d0f245e4796e6788b654a7f71d180b9e378103f02ca8b08c2e301/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363132393236353439362d61643363373733622d666362362d343161332d383234312d6437656134643938316364632e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d323237266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d343534266f726967696e57696474683d3531382673697a653d3333303239267374617475733d646f6e65267374796c653d6e6f6e652677696474683d323539)](https://camo.githubusercontent.com/1a1ffbac3e4d0f245e4796e6788b654a7f71d180b9e378103f02ca8b08c2e301/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363132393236353439362d61643363373733622d666362362d343161332d383234312d6437656134643938316364632e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d323237266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d343534266f726967696e57696474683d3531382673697a653d3333303239267374617475733d646f6e65267374796c653d6e6f6e652677696474683d323539)

我在 `app.js` 中要引入 `src/components` 下的 `Header` 组件，以往的方式是：
```js
import Header from './components/Header'
```

大家可能觉得，蛮好的啊，没毛病。但是我这里是因为 `app.tsx` 和 `components` 是同级的，试想一下如果你在某个层级很深的文件里要用 `components` ，那就是疯狂 `../../../..` 了，所以我们要学会使用它，并结合 webpack 的 `resolve.alias` 使用更香。

但是想用它麻烦还蛮多的，咱一步步拆解它。

首先 `baseUrl` 一定要设置正确，我们的 `tsconfig.json` 是放在项目根目录的，那么 `baseUrl` 设为 `./` 就代表了项目根路径。于是， `paths` 中的每一项路径映射，比如 `["src/*"]` 其实就是相对根路径。

如果大家像上面一样配置了，并自己尝试用以下方式开始进行模块的引入：
```js
import Header from 'Components/Header'
```
因为 eslint 的原因，是会报错的：

[![image.png](https://camo.githubusercontent.com/0b303533deadab3529fb07f9af7fa64c8e04cc9d25b7855dc2fa1e18d3412f21/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363132393633393739352d33383132656563632d613338662d343131322d396531652d3363653662353633386666382e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d323231266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d343432266f726967696e57696474683d313638322673697a653d313138343432267374617475733d646f6e65267374796c653d6e6f6e652677696474683d383431)](https://camo.githubusercontent.com/0b303533deadab3529fb07f9af7fa64c8e04cc9d25b7855dc2fa1e18d3412f21/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363132393633393739352d33383132656563632d613338662d343131322d396531652d3363653662353633386666382e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d323231266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d343432266f726967696e57696474683d313638322673697a653d313138343432267374617475733d646f6e65267374796c653d6e6f6e652677696474683d383431)

这个时候需要改 `.eslintrc.js` 文件的配置了，首先得安装 [`eslint-import-resolver-typescript`] ：
```sh
yarn add -D eslint-import-resolver-typescript
```
然后在 `.eslintrc.js` 文件的 `setting` 字段修改为以下代码：
```js
settings: {
  'import/resolver': {
    node: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    typescript: {},
  },
},
```
是的，只需要添加 `typescript: {}` 即可，这时候再去看已经没有报错了。
但是上面我们完成的工作仅仅是对于编辑器来说可识别这个路径映射，我们需要在 `webpack.common.js` 中的 `resolve.alias` 添加相同的映射规则配置：
```js
module.exports = {
  // other...
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      'Src': resolve(PROJECT_PATH, './src'),
      'Components': resolve(PROJECT_PATH, './src/components'),
      'Utils': resolve(PROJECT_PATH, './src/utils'),
    }
  },
  module: {//...},
  plugins: [//...],
}
```

现在，两者一致就可以正常开发和打包了！可能有的小伙伴会疑惑，我只配置 webpack 中的 alias 不就行了吗？虽然开发时会有报红，但并不会影响到代码的正确，毕竟打包或开发时 webpack 都会进行路径映射替换。是的，的确是这样，但是在 `tsconfig.json` 中配置，会给我们增加智能提示，比如我打字打到 `Com` ，编辑器就会给我们提示正确的 `Components` ，而且其下面的文件还会继续提示。

## 更多 babel 配置

之前我们已经使用 babel 去解析 react 语法和 typescript 语法了，但是目前我们所做的也仅仅如此，你在代码中用到的 ES6+ 语法编译之后依然全部保留，然而不是所有浏览器都能支持 ES6+ 语法的，这时候就需要[`@babel/preset-env`] 来做这个苦力活了，它会根据设置的目标浏览器环境（browserslist）找出所需的插件去转译 ES6+ 语法。比如 `const` 或 `let` 转译为 `var` 。

但是遇到 `Promise` 或 `.includes` 这种新的 es 特性，是没办法转译到 es5 的，除非我们把这种新的语言特性的实现注入到打包后的文件中，不就行了吗？我们借助 [`@babel/plugin-transform-runtime`] 这个插件，它和 `@babel/preset-env` 一样都能提供 ES 新API 的垫片，都可实现按需加载，但前者不会污染原型链。

另外，babel 在编译每一个模块的时候会按需插入一些辅助函数例如 `_extend` ，每一个需要的模块都会生成这个辅助函数，显而易见这会增加代码的冗余，[`@babel/plugin-transform-runtime`] 这个插件会将所有的辅助函数都从 `@babel/runtime-corejs3` 导入（我们下面使用 corejs3），从而减少冗余性。

安装它们：
```sh
yarn add -D @babel/preset-env @babel/plugin-transform-runtime
yarn add @babel/runtime-corejs3
```
> 注意： `@babel/runtime-corejs3` 的安装为生产依赖。

修改 `.babelre` 如下：
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        // 防止babel将任何模块类型都转译成CommonJS类型，导致tree-shaking失效问题
        "modules": false
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plungins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": {
          "version": 3,
          "proposals": true
        },
        "useESModules": true
      }
    ]
  ]
}
```
ok，搞定！

**到此为止，我们的 react+typescript 项目开发环境已经可行了，就是说现在已经可以正常进行开发了，但是针对开发环境和生产环境，我们能做的优化还有很多，大家继续加油！**

## 公共（common）环境优化

这部分主要针对无论开发环境还是生产环境都需要的公共配置优化。

### 1\. 拷贝公共静态资源

大家有没有注意到，到目前为止，我们的开发页面还是没有 icon 的，就下面这个东西：
[![image.png](https://camo.githubusercontent.com/6d4493b489f3aee6dc5a8e74885e599290c16770e4819c43f8cbf729f63a674c/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363336383731393236312d32653939366138362d613563352d346635642d396164382d3334626633653932613863312e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d3831266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d313632266f726967696e57696474683d3939342673697a653d3232313833267374617475733d646f6e65267374796c653d6e6f6e652677696474683d343937)](https://camo.githubusercontent.com/6d4493b489f3aee6dc5a8e74885e599290c16770e4819c43f8cbf729f63a674c/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363336383731393236312d32653939366138362d613563352d346635642d396164382d3334626633653932613863312e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d3831266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d313632266f726967696e57696474683d3939342673697a653d3232313833267374617475733d646f6e65267374796c653d6e6f6e652677696474683d343937)
像 `create-react-app` 一样，我们将 `.ico` 文件放到 `public/` 目录下，比如我就复制了一个 `cra` 的 `favicon.ico` 文件，然后在我们的 `index.html` 文件中加入以下标签：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
+   <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React+Typescript 快速开发脚手架</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```
这时候你 `yarn build` 打个包，我们看到 `dist` 目录下是没有 `favicon.ico` 文件的，那么 html 文件中的引入肯定就无法起效了。于是我们希望有一个手段，在打包时能把 `public/` 文件夹下的静态资源复制到我们打包后生成的 `dist` 目录中，除非你想每次打包完手动复制，不然就借助 [`copy-webpack-plugin`] 吧！

a\. 安装它：
```sh
yarn add -D copy-webpack-plugin
```

b\. 修改 `scripts/config/webpack.common.js` 文件，增加以下代码：
```js
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	plugins: [
    // 其它 plugin...
  	new CopyPlugin({
      patterns: [
        {
          context: resolve(PROJECT_PATH, './public'),
          from: '*',
          to: resolve(PROJECT_PATH, './dist'),
          toType: 'dir',
        },
      ],
    }),
  ]
}
```
然后你重新 `yarn start` ，再清下页面缓存，你会看到我们的小图标就出来了，现在你可以替换成你自己喜欢的图标了。

[![image.png](https://camo.githubusercontent.com/39fd934e8983c91b1c9cdb0192110a9c3de6e94223ff15c584a0bbd0ddb6b272/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363336393535333739372d32373330373333332d346636302d346532392d386436362d3737363835643633353239352e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d3732266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d313434266f726967696e57696474683d3934322673697a653d3139393732267374617475733d646f6e65267374796c653d6e6f6e652677696474683d343731)](https://camo.githubusercontent.com/39fd934e8983c91b1c9cdb0192110a9c3de6e94223ff15c584a0bbd0ddb6b272/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363336393535333739372d32373330373333332d346636302d346532392d386436362d3737363835643633353239352e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d3732266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d313434266f726967696e57696474683d3934322673697a653d3139393732267374617475733d646f6e65267374796c653d6e6f6e652677696474683d343731)

同样地，其它的静态资源文件，大家只要往 `public/` 目录下丢，打包之后都会自动复制到 `dist/` 目录下。

> 特别注意![warning](https://github.githubassets.com/images/icons/emoji/unicode/26a0.png)：在讲基础配置[`html-webpack-plugin`] 时，注释中特别强调过要配置 `cache: false` ，如果不加的话，你代码修改之后刷新页面，html 文件不会引入任何打包出来的 js 文件，自然也没有执行任何 js 代码，特别可怕，我搞了好久，查了 `copy-webpack-plugin` 官方 issue 才找到的解决方案。

### 2\. 显示编译进度

我们现在执行 `yarn start` 或 `yarn build` 之后，控制台没有任何信息能告诉我们现在编译的进度怎么样，在大型项目中，编译打包的速度往往需要很久，如果不是熟悉此项目尿性的人，基本都会认为是不是卡住了，从而极大地增强了焦虑感。所以，显示打包的进度是非常重要的，这是对开发者积极的正向反馈。

> 在我看来，人活着，心中希望真的很重要。

我们可以借助 [`webpackbar`](https://github.com/nuxt/webpackbar) 来完成此项任务。

a\. 安装：
```sh
yarn add -D webpackbar
```

b\. 在 `scripts/config/webpack.common.js` 增加以下代码：

```js
const WebpackBar = require('webpackbar')

module.exports = {
	plugins: [
    // 其它 plugin...
  	new WebpackBar({
      name: isDev ? '正在启动' : '正在打包',
      color: '#fa8c16',
    }),
  ]
}
```
现在我们本地起服务还是打包都有进度展示了，是不是特别舒心呢？!

### 3\. 编译时的 Typescirpt 类型检查

我们之前配置 babel 的时候说过，为了编译速度，babel 编译 ts 时直接将类型去除，并不会对 ts 的类型做检查，来看一个例子，大家看我之前创建的 `src/app.tsx` 文件下，我故意解构出一个事先没有声明的类型：
[![image.png](https://camo.githubusercontent.com/a37438248be28b536e160a37294fd8a14b908451fa9526b6db847c56c571c772/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363338333032303131362d38333238343266392d356238662d346564322d383930352d3934636435393631326463312e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d333731266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d373432266f726967696e57696474683d313630342673697a653d313339383538267374617475733d646f6e65267374796c653d6e6f6e652677696474683d383032)](https://camo.githubusercontent.com/a37438248be28b536e160a37294fd8a14b908451fa9526b6db847c56c571c772/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363338333032303131362d38333238343266392d356238662d346564322d383930352d3934636435393631326463312e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d333731266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d373432266f726967696e57696474683d313630342673697a653d313339383538267374617475733d646f6e65267374796c653d6e6f6e652677696474683d383032)

如上所示，我尝试解构的 `wrong` 是没有在我们的 `IProps` 中声明的，在编辑器中肯定会报错的，但是重点是，在某一刻某一个人某种情况下就是犯了这样的错误，而它没有去处理这个问题，我们接手这个项目之后，并不知道有这么个问题，然后本地开发或打包时，依然可以正常进行，这完全丧失了 typescript 类型声明所带来的优势以及带来了重大的隐性 bug！

所以，我们需要借助 [`fork-ts-checker-webpack-plugin`] ，在我们打包或启动本地服务时给予错误提示。解决办法如下：

a\. 安装：
```sh
yarn add -D fork-ts-checker-webpack-plugin
```

b\. 在 `scripts/config/webpack.common.js` 中增加以下代码：
```js
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
	plugins: [
    // 其它 plugin...
  	new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolve(PROJECT_PATH, './tsconfig.json'),
      },
    }),
  ]
}
```

现在，我们执行 `yarn build` 看看，会有以下错误提示：

[![image.png](https://camo.githubusercontent.com/9c19f444d8285a1dcebc8ac03b5c2ec63115c6b6d6e05b0a8b42de733df1b77d/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363338333532373434372d39623130616463322d663232632d343235622d393863642d3239663461386663646265352e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d333830266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d373630266f726967696e57696474683d313830342673697a653d313532393433267374617475733d646f6e65267374796c653d6e6f6e652677696474683d393032)](https://camo.githubusercontent.com/9c19f444d8285a1dcebc8ac03b5c2ec63115c6b6d6e05b0a8b42de733df1b77d/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363338333532373434372d39623130616463322d663232632d343235622d393863642d3239663461386663646265352e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d333830266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d373630266f726967696e57696474683d313830342673697a653d313532393433267374617475733d646f6e65267374796c653d6e6f6e652677696474683d393032)

发现问题之后我们就可以去解决它了，而不是啥都不知道任由其隐性 bug 存在。

### 4\. 加快二次编译速度

这里所说的“二次”意思为首次构建之后的每一次构建。

有一个神器能大大提高二次编译速度，它为程序中的模块（如 lodash）提供了一个中间缓存，放到本项目 `node_modules/.cache/hard-source` 下，就是 [`hard-source-webpack-plugin`](https://github.com/mzgoddard/hard-source-webpack-pluginhttps://github.com/mzgoddard/hard-source-webpack-plugin) ，首次编译时会耗费稍微比原来多一点的时间，因为它要进行一个缓存工作，但是再之后的每一次构建都会变得快很多！

a\. 安装软件包：
```sh
yarn add -D hard-source-webpack-plugin
```

b\. 在 `scripts/config/webpack.common.js` 中增加以下代码：

```js
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
	plugins: [
    // 其它 plugin...
  	new HardSourceWebpackPlugin(),
  ]
}
```
这时候我们执行两次 `yarn start` 或 `yarn build` ，看看花费时间对比图：

[![image.png](https://camo.githubusercontent.com/d90b7757c595df141bdc056e594cfcf710df32987c4f7fa5f2c15dd10d64ec8c/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363437343936393534302d65653834366334302d323630342d343736312d613935622d3134303138393561626534372e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d333638266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d373336266f726967696e57696474683d3630362673697a653d3931393537267374617475733d646f6e65267374796c653d6e6f6e652677696474683d333033)](https://camo.githubusercontent.com/d90b7757c595df141bdc056e594cfcf710df32987c4f7fa5f2c15dd10d64ec8c/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363437343936393534302d65653834366334302d323630342d343736312d613935622d3134303138393561626534372e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d333638266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d373336266f726967696e57696474683d3630362673697a653d3931393537267374617475733d646f6e65267374796c653d6e6f6e652677696474683d333033)

随着项目变大，这个速度差距会更明显。

### 5\. external 减少打包体积

到目前为止，我们无论是开发还是生产，都要先经过 webpack 将 react、react-dom 的代码打进我们最终生成的代码中，试想一下，当这种第三方包变得越来也多的时候，最后打出的文件将会很大，用户每次进入页面需要下载一个那么大的文件，带来的就是白屏时间变长，将会严重影响用户体验，所以我们将这种第三方包剥离出去或者采用 CDN 链接形式。

修改 `webpack.common.js` ，增加以下代码：
```js
module.exports = {
	plugins: [
    // 其它 plugin...
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}
```

在开发时，我们是这样使用 `react` 和 `react-dom` 的：
```js
import React from 'react'
import ReactDOM from 'react-dom'
```

那么，我们最终打完的包已经不注入这两个包的代码了，肯定得有另外的方式将其引入，不然程序都无法正确运行了，于是我们打开 `public/index.html` ，增加以下 CDN 链接：

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="root"></div>
+   <script crossorigin src="https://unpkg.com/react@17.0.1/umd/react.production.min.js"></script>
+   <script crossorigin src="https://unpkg.com/react-dom@17.0.1/umd/react-dom.production.min.js"></script>
  </body>
</html>
```
> 它们各自的版本可在 `package.json` 去确定！

然后我们对比一下添加 externals 前后的打包体积会发现相差很多。

这个时候大家就疑惑了，我无论添不添加 externals，最终需要下载的文件大小其实并没有变啊，只不过一个是一次性下载一个文件，另一个是一次性下载三个文件，大小都不变，时间应该也不变啊？其实它有以下优势：

*   http 缓存：当用户第一次下载后，之后每次进入页面，根据浏览器的缓存策略，都不需要再重新下载 react 和 react-dom。
*   webpack 编译时间减少：因为少了一步打包编译 react 和 react-dom 的工作，因此速度会提升。

> 跟大家说明下，关于 externals 的配置，如果是用在自己的项目里，这样配完全没问题，但是如果用该脚手架开发 react 组件，并需要发布到 npm 上的，那如果你把 react 这种依赖没有打进最终输出的包里，那么别人下载了你这个包就需要 `yarn add react@17.0.1` ，这其实是有问题的，你无法保证别人的 react 版本和你一致，这个问题我们之后会再说，现在先提个醒～

### 6\. 抽离公共代码

我们先来讲一下**ES6中的懒加载**。

懒加载是优化网页首屏速度的利器，下面演示一个简单的例子，让大家明白有什么好处。

一般情况下，我们引入某个工具函数是这样的：
```js
import { add } from './math.js';
```

如果这样引入，在打包之后， `math.js` 这个文件中的代码就会打进最终的包里，**即使这个 **`**add**` **方法不一定在首屏就会使用！**那么带来的坏处显而易见，**我都不需要在首屏使用它，却要承担下载这个目前的多余代码的响应速度变慢的后果！**

但是，如果现在我们以下面的方式进行引入：
```js
import("./math").then(math => {
  console.log(math.add(16, 26))
})
```

webpack 就会自动解析这个语法，进行**代码分割**，打包出来之后， `math.js` 中的代码会被自动打成一个独立的 chunk 文件，只有我们在页面交互时调用了这个方法，页面才会下载这个文件，并执行调用的方法。

同理，我们也可以对 React 组件进行这样的懒加载，只需借助 `React.lazy` 和 `React.Suspense` 即可，下面做个简单的演示：

`src/app.tsx` ：
```tsx
import React, { Suspense, useState } from 'react'

const ComputedOne = React.lazy(() => import('Components/ComputedOne'))
const ComputedTwo = React.lazy(() => import('Components/ComputedTwo'))

function App() {
  const [showTwo, setShowTwo] = useState<boolean>(false)

  return (
    <div className='app'>
      <Suspense fallback={<div>Loading...</div>}>
        <ComputedOne a={1} b={2} />
        {showTwo && <ComputedTwo a={3} b={4} />}
        <button type='button' onClick={() => setShowTwo(true)}>
          显示Two
        </button>
      </Suspense>
    </div>
  )
}

export default App
```

`src/components/ComputedOne/index.tsx` ：
```tsx
import React from 'react'
import './index.scss'
import { add } from 'Utils/math'

interface IProps {
  a: number
  b: number
}

function ComputedOne(props: IProps) {
  const { a, b } = props
  const sum = add(a, b)

  return <p className='computed-one'>{`Hi, I'm computed one, my sum is ${sum}.`}</p>
}

export default ComputedOne
```

`ComputedTwo` 组件代码与 `ComputedOne` 组件代码相似， `math.ts` 是简单的求和函数，就不贴代码了。

接下来，我们 `yarn start` ，并打开控制台的 Network，会发现以下动态加载 chunk 文件：
[![12.gif](https://camo.githubusercontent.com/577fab5e45400eff5bc850339dd54e24d759398566418ddbb004256732931fe0/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f6769662f3334313331342f313539363633383430303230392d37306132356632302d363330372d346236392d616361302d3839666561653262303038622e67696623616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d343234266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d31322e676966266f726967696e4865696768743d343234266f726967696e57696474683d3830302673697a653d31363739353036267374617475733d646f6e65267374796c653d6e6f6e652677696474683d383030)](https://camo.githubusercontent.com/577fab5e45400eff5bc850339dd54e24d759398566418ddbb004256732931fe0/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f6769662f3334313331342f313539363633383430303230392d37306132356632302d363330372d346236392d616361302d3839666561653262303038622e67696623616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d343234266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d31322e676966266f726967696e4865696768743d343234266f726967696e57696474683d3830302673697a653d31363739353036267374617475733d646f6e65267374796c653d6e6f6e652677696474683d383030)

以上演示便是实现了组件的懒加载方式。接下来，执行一下 `yarn build` 看看打包出来了以下文件：
[![image.png](https://camo.githubusercontent.com/fc379540840d5f5c71cf53d38500cd9c58c373033de8a4b26eeef5eb9efc0753/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363630323938333335392d36616566386265372d643262382d343235632d616462312d3261343166653231386635332e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313531266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d333032266f726967696e57696474683d3437302673697a653d3235343535267374617475733d646f6e65267374796c653d6e6f6e652677696474683d323335)](https://camo.githubusercontent.com/fc379540840d5f5c71cf53d38500cd9c58c373033de8a4b26eeef5eb9efc0753/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363630323938333335392d36616566386265372d643262382d343235632d616462312d3261343166653231386635332e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313531266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d333032266f726967696e57696474683d3437302673697a653d3235343535267374617475733d646f6e65267374796c653d6e6f6e652677696474683d323335)
红线框住的文件就是两个组件（ `ComputedOne` 和 `ComputedTwo` ）的代码，这样带来的好处很明显：

* 若通过懒加载引入的组件，若该组件代码不变，打出的包名也不会变，部署到生产环境后，因为浏览器缓存原因，用户不需要再次下载该文件，缩短了网页交互时间。
* 防止把所有组件打进一个包，降低了页面首屏时间。

懒加载带来的优势不可小觑，我们沿着这个思维模式向外延伸思考，**如果我们能把一些引用的第三方包也打成单独的 chunk，是否也会具有同样的优势呢？**

[![image.png](https://camo.githubusercontent.com/6e5711632b7fcb2ebdfe34122fb356f4d2d8c14d83f5548378f4f5d505a00b4c/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363633393336343035312d61313731373261612d336531342d346134342d616566342d3031376330316239356562642e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d323430266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d343830266f726967696e57696474683d3438302673697a653d343436303133267374617475733d646f6e65267374796c653d6e6f6e652677696474683d323430)](https://camo.githubusercontent.com/6e5711632b7fcb2ebdfe34122fb356f4d2d8c14d83f5548378f4f5d505a00b4c/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363633393336343035312d61313731373261612d336531342d346134342d616566342d3031376330316239356562642e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d323430266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d343830266f726967696e57696474683d3438302673697a653d343436303133267374617475733d646f6e65267374796c653d6e6f6e652677696474683d323430)

答案是肯定的，因为第三方依赖包只要版本锁定，代码是不会有变化的，那么每一次项目代码的迭代，都不会影响到依赖包 chunk 文件的文件名，那么就会同样具有以上优势！

其实 webpack4 默认就开启该功能，所以以上演示的懒加载才会打出独立 chunk 文件，但是要将第三方依赖也打出来独立 chunk，我们需要在 `webpack.common.js` 中增加以下代码：
```js
module.exports = {
	// other...
  externals: {//...},
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: true,
    },
  },
}
```

这个时候我们 `yarn build` ，就会发现多了这么一个包：

[![image.png](https://camo.githubusercontent.com/5db7aca84538b2ba129296cc42ddbc550e02031841d144195680f41e528e8132/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363634303132313339312d35363365373537392d623266302d343131352d396630372d6530393966383435613036382e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313332266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d323634266f726967696e57696474683d3531382673697a653d3233363732267374617475733d646f6e65267374796c653d6e6f6e652677696474683d323539)](https://camo.githubusercontent.com/5db7aca84538b2ba129296cc42ddbc550e02031841d144195680f41e528e8132/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363634303132313339312d35363365373537392d623266302d343131352d396630372d6530393966383435613036382e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313332266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d323634266f726967696e57696474683d3531382673697a653d3233363732267374617475733d646f6e65267374796c653d6e6f6e652677696474683d323539)

这个 chunk 里放了一些我们没有通过 externals 剔除的第三方包的代码，若大家不想通过 cdn 形式引入 react 和 react-dom ，这里也可以进行相应的配置将它们单独抽离出来；另一方面，若是多页应用，还需要配置把公共模块也抽离出来，这里因为我们是搭建单页应用开发环境，就不演示了。

给大家推荐两个学习 `splitChunks` 配置的地方：

1\. [webpack官方介绍](https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks)；

2\. [理解webpack4.splitChunks](https://www.cnblogs.com/kwzm/p/10314438.html) 。

## 开发（dev）环境优化

这部分主要针对无论开发环境还是开发环境都需要的公共配置优化。

### 1\. 热更新

如果你开发时忍受过稍微改一下代码，页面就会重新刷新的痛苦，那么热更新一定得学会了！可能小项目你觉得没什么，都一样快，但是项目大了每一次编译都是直击内心的痛！

[![image.png](https://camo.githubusercontent.com/952fe427f8006ea58fe97b63ea14a78b6befd0b33e413db8f4e41dfdf4dad148/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539373037323935333030342d35643432613237612d383665622d343531612d626330362d3030306264336138353932662e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313230266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d323430266f726967696e57696474683d3234302673697a653d3137373136267374617475733d646f6e65267374796c653d6e6f6e652677696474683d313230)](https://camo.githubusercontent.com/952fe427f8006ea58fe97b63ea14a78b6befd0b33e413db8f4e41dfdf4dad148/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539373037323935333030342d35643432613237612d383665622d343531612d626330362d3030306264336138353932662e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313230266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d323430266f726967696e57696474683d3234302673697a653d3137373136267374617475733d646f6e65267374796c653d6e6f6e652677696474683d313230)

所谓的热更新其实就是，页面只会对你改动的地方进行“局部刷新”，这个说法可能不严谨，但是想必大家能理解什么意思。打开 `webpack.dev.js` ，执行以下三个步骤即可使用：

**第一步**：将 `devServer` 下的 `hot` 属性设为 `true` 。
[![image.png](https://camo.githubusercontent.com/2cee3c355b6b3130c5e4bc72880c1c4dde9c89d0674bcece6517250b12893b6c/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539373037333134333631362d38373839346563322d613234302d346661362d383134392d6565333739373862313337352e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d333138266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d363336266f726967696e57696474683d313132302673697a653d313034313930267374617475733d646f6e65267374796c653d6e6f6e652677696474683d353630)](https://camo.githubusercontent.com/2cee3c355b6b3130c5e4bc72880c1c4dde9c89d0674bcece6517250b12893b6c/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539373037333134333631362d38373839346563322d613234302d346661362d383134392d6565333739373862313337352e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d333138266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d363336266f726967696e57696474683d313132302673697a653d313034313930267374617475733d646f6e65267374796c653d6e6f6e652677696474683d353630)

**第二步**：新增 `webpack.HotModuleReplacementPlugin` 插件：
```js
const webpack = require('webpack')

module.exports = merge(common, {
  devServer: {//...},
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
```
这个时候，你 `yarn start` 并尝试改变局部的代码，保存后发现整个页面还是会进行刷新，如果你希望得到上面所说的“局部刷新”，需要在项目入口文件加以下代码。

**第三步**：修改入口文件，比如我就选择 `src/index.js` 作为我的入口文件：
```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<App />, document.querySelector('#root'))
```

这时候因为 ts 的原因会报错：
[![image.png](https://camo.githubusercontent.com/0f9d12cfb7966f373f234cfa6d6514efad315dfa0b1d5b30ecf094f8969da266/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539373037353231343737362d63646166336661622d393135392d343766632d616564332d6632363535306362643332302e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d3935266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d313930266f726967696e57696474683d3832302673697a653d3235313236267374617475733d646f6e65267374796c653d6e6f6e652677696474683d343130)](https://camo.githubusercontent.com/0f9d12cfb7966f373f234cfa6d6514efad315dfa0b1d5b30ecf094f8969da266/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539373037353231343737362d63646166336661622d393135392d343766632d616564332d6632363535306362643332302e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d3935266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d313930266f726967696e57696474683d3832302673697a653d3235313236267374617475733d646f6e65267374796c653d6e6f6e652677696474683d343130)

我们只需要安装 `@types/webpack-env` 即可：
```sh
yarn add -D @types/webpack-env
```

现在，我们在重新 `yarn start` ，在页面上随便修改个代码看看，是不是不会整体刷新了？舒服～

### 2\. 跨域请求

一般来说，利用 `devServer` 本来就有的 `proxy` 字段就能配置接口代理进行跨域请求，但是为了使构建环境的代码与业务代码分离，我们需要将配置文件独立出来，可以这样做：

**第一步**：在 `src/` 下新建一个 `setProxy.js` 文件，并写入以下代码：
```js
 const proxySettings = {
  // 接口代理1
  '/api/': {
    target: 'http://198.168.111.111:3001',
    changeOrigin: true,
  },
  // 接口代理2
  '/api-2/': {
    target: 'http://198.168.111.111:3002',
    changeOrigin: true,
    pathRewrite: {
      '^/api-2': '',
    },
  },
  // .....
}

module.exports = proxySettings
```

配置完成，我们要在 `scripts/config/webpack.dev.js` 中要引入，并正确放大 `devServer` 的 `proxy` 字段。

**第二步**：简单的引入及解构下就行：
```js
const proxySetting = require('../../src/setProxy.js')

module.exports = merge(common, {
  devServer: {
    //...
    proxy: { ...proxySetting }
  },
})
```

可以了！就这么简单！接下来安装我们最常用的请求发送库 `axios` ：
```sh
yarn add axios
```

在 `src/app.tsx` 中简单发个请求，就可以自己测试了，这里大家要找测试接口的话可以找下 github 的公用 api，这里我就直接蹭公司的了～

## 生产（prod）环境优化

这部分主要针对无论开发环境还是生产环境都需要的公共配置优化。

### 1\. 抽离出 css 样式

抽离出单独的 chunk 文件的优势在上面“抽离公共代码”一节已经简单描述过，现在我们写的所有样式打包后都打进了 js 文件中，如果这样放任下去，该文件会变得越来越大，抽离出样式文件势在必行！

借助 [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) 进行 css 样式拆分，先安装它：
```sh
yarn add -D mini-css-extract-plugin
```
在 `scripts/config/webpack.common.js` 文件（注意![warning](https://github.githubassets.com/images/icons/emoji/unicode/26a0.png)，是 common 文件）中增加和修改以下代码：

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const getCssLoaders = (importLoaders) => [
  isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  // ....
]

module.exports = {
	plugins: [
    // 其它 plugin...
    !isDev && new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
      ignoreOrder: false,
    }),
  ]
}
```

我们修改了 `getCssLoaders` 这个方法，原来无论在什么环境我们使用的都是 [`style-loader`] ，因为在开发环境我们不需要抽离，于是做了个判断，在生产环境下使用 `MiniCssExtractPlugin.loader` 。

我们随便写点样式，然后执行以下 `yarn build` ，再到 `dist` 目录下看看：

[![image.png](https://camo.githubusercontent.com/cbd3eb5399877633897caa99f968c6697c9869dd903c75be028eb6b728dc7c6f/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363732383933353537392d33663836313932332d323764612d346362372d613134652d3265393731343933333438382e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313535266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d333130266f726967696e57696474683d3438322673697a653d3234313531267374617475733d646f6e65267374796c653d6e6f6e652677696474683d323431)](https://camo.githubusercontent.com/cbd3eb5399877633897caa99f968c6697c9869dd903c75be028eb6b728dc7c6f/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363732383933353537392d33663836313932332d323764612d346362372d613134652d3265393731343933333438382e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313535266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d333130266f726967696e57696474683d3438322673697a653d3234313531267374617475733d646f6e65267374796c653d6e6f6e652677696474683d323431)
可以看到成功拆出来了样式 chunk 文件，享用了至尊级待遇！

### 2\. 去除无用样式

我在样式文件中故意为某个不会用到的类名加了个样式：
[![image.png](https://camo.githubusercontent.com/ab657127273c712c2e287a0fcf10b92dfc9d5f328229fb4f9b43824e0b6985c8/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363733303239303632392d64383261663933612d656236342d346430392d383638312d3562386236636466383438322e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d323938266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d353936266f726967696e57696474683d313130322673697a653d3732333730267374617475733d646f6e65267374796c653d6e6f6e652677696474683d353531)](https://camo.githubusercontent.com/ab657127273c712c2e287a0fcf10b92dfc9d5f328229fb4f9b43824e0b6985c8/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363733303239303632392d64383261663933612d656236342d346430392d383638312d3562386236636466383438322e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d323938266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d353936266f726967696e57696474683d313130322673697a653d3732333730267374617475733d646f6e65267374796c653d6e6f6e652677696474683d353531)
结果我执行打包，找到这个分离出的样式文件点进去一看：
[![image.png](https://camo.githubusercontent.com/2e794de0019db87afba6408aa5ca4af70f2f5d675ce77a03e7817d84472c3df1/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363733303434393531372d38666366643432362d376562332d343333662d613363362d6263386135646539613736312e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313132266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d323234266f726967696e57696474683d313431302673697a653d3434303234267374617475733d646f6e65267374796c653d6e6f6e652677696474683d373035)](https://camo.githubusercontent.com/2e794de0019db87afba6408aa5ca4af70f2f5d675ce77a03e7817d84472c3df1/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363733303434393531372d38666366643432362d376562332d343333662d613363362d6263386135646539613736312e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313132266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d323234266f726967696e57696474683d313431302673697a653d3434303234267374617475733d646f6e65267374796c653d6e6f6e652677696474683d373035)
它默认还是保留这个样式了，这显然是无意义的代码，所以我们要想办法去除它，所幸有 [`purgecss-webpack-plugin`] 这个利器，让我们先安装它及路径查找利器 [`node-glob`]：
```sh
yarn add -D purgecss-webpack-plugin glob
```
然后在 `scripts/config/webpack.prod.js` 中增加以下代码：
```js
const { resolve } = require('path')
const glob = require('glob')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const { PROJECT_PATH } = require('../constants')

module.exports = merge(common, {
	// ...
  plugins: [
    new PurgeCSSPlugin({
      paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
    }),
  ],
})
```

简单解释下上面的配置：
`glob` 是用来查找文件路径的，我们同步找到 `src` 下面的后缀为 `.tsx` 、 `.(sc|c|le)ss` 的文件路径并以数组形式返给 `paths` ，然后该插件就会去解析每一个路径对应的文件，将无用样式去除； `nodir` 即去除文件夹的路径，加快处理速度。为了直观给大家看下路径数组，打印出来是这个样子：
```json
[
  '/Users/RMBP/Desktop/react-ts-quick-starter/src/app.scss',
  '/Users/RMBP/Desktop/react-ts-quick-starter/src/app.tsx',
  '/Users/RMBP/Desktop/react-ts-quick-starter/src/components/ComputedOne/index.scss',
  '/Users/RMBP/Desktop/react-ts-quick-starter/src/components/ComputedOne/index.tsx',
  '/Users/RMBP/Desktop/react-ts-quick-starter/src/components/ComputedTwo/index.scss',
  '/Users/RMBP/Desktop/react-ts-quick-starter/src/components/ComputedTwo/index.tsx',
  '/Users/RMBP/Desktop/react-ts-quick-starter/src/index.tsx'
]
```

> 大家要注意![warning](https://github.githubassets.com/images/icons/emoji/unicode/26a0.png)：一定也要把引入样式的 `tsx` 文件的路径也给到，不然无法解析你没有哪个样式类名，自然也无法正确剔除无用样式了。

现在再看看我们打包出来的样式文件，已经没有了那个多余的代码，简直舒服！

### 3\. 压缩 js 和 css 代码

在生产环境，压缩代码是必须要做的工作，其打包出的文件体积能减少一大半呢！

#### js 代码压缩

webpack4 中 js 代码压缩神器 [`terser-webpack-plugin`] 可谓是无人不知了吧？它支持对 ES6 语法的压缩，且在 `mode` 为 `production` 时默认开启，是的，webpack4 完全内置，不过我们为了能对它进行一些额外的配置，还是需要先安装它的：

```sh
yarn add -D terser-webpack-plugin
```
在 `scripts/config/webpack.common.js` 文件中的 `optimization` 增加以下配置：
```js
module.exports = {
	// other...
  externals: {//...},
  optimization: {
    minimize: !isDev,
    minimizer: [
      !isDev && new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: { pure_funcs: ['console.log'] },
        }
      })
    ].filter(Boolean),
    splitChunks: {//...},
  },
}
```

首先增加了 `minimize` ，它可以指定压缩器，如果我们设为 `true` ，就默认使用 `terser-webpack-plugin` ，设为 `false` 即不压缩代码。接下来在 `minimize` 中判断如果是生产环境，就开启压缩。

*   `extractComments` 设为 `false` 意味着去除所有注释，除了有特殊标记的注释，比如 `@preserve` 标记，后面我们会利另一个插件来生成我们的自定义注释。
*   `pure_funcs` 可以设置我们想要去除的函数，比如我就将代码中所有 `console.log` 去除。

#### css 代码压缩

同样也是耳熟能详的 css 压缩插件 [`optimize-css-assets-webpack-plugin`] ，直接安装它：
```sh
yarn add -D optimize-css-assets-webpack-plugin
```
在我们上面配置过的 `minimizer` 新增一段代码即可：
```sh
module.exports = {
  optimization: {
    minimizer: [
      // terser
      !isDev && new OptimizeCssAssetsPlugin()
    ].filter(Boolean),
  },
}
```

### 4\. 添加包注释

上面我们配置 terser 时说过，打包时会把代码中所有注释去除，除了一些有特殊标记的比如 `@preserve` 这种就会保留。我们希望别人在使用我们开发的包时，可以看到我们自己写好的声明注释（比如 react 就有），就可以使用 webpack 内置的 `BannerPlugin` ，无需安装！

在 `scripts/config/webpack.prod.js` 文件中增加以下代码，并写入自己想要的声明注释即可：
```js
const webpack = require('webpack')

module.exports = merge(common, {
  plugins: [
    // ...
    new webpack.BannerPlugin({
      raw: true,
      banner: '/** @preserve Powered by react-ts-quick-starter (https://github.com/vortesnail/react-ts-quick-starter) */',
    }),
  ],
})
```

这时候打个包去 `dist` 目录下看看出口文件：

[![image.png](https://camo.githubusercontent.com/a4c4bde507bcdf63cad20834bac8cfebe08feec20ddaf94a89ed640574c1d81b/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363832303930333137302d34383433326431352d666334302d343135372d386463622d3235303162616238313837622e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313033266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d323036266f726967696e57696474683d313031362673697a653d3332303833267374617475733d646f6e65267374796c653d6e6f6e652677696474683d353038)](https://camo.githubusercontent.com/a4c4bde507bcdf63cad20834bac8cfebe08feec20ddaf94a89ed640574c1d81b/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363832303930333137302d34383433326431352d666334302d343135372d386463622d3235303162616238313837622e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d313033266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d323036266f726967696e57696474683d313031362673697a653d3332303833267374617475733d646f6e65267374796c653d6e6f6e652677696474683d353038)

### 5\. tree-shaking

tree-shaking 是 webpack 内置的打包代码优化神器，在生产环境下，即 `mode` 设置为 `production` 时，打包后会将通过 ES6 语法 `import` 引入的未使用的代码去除。下面我们简单举个例子：

在 `src/utils/math.ts` 中写入以下代码：
```ts
export function add(a: number, b: number) {
  console.info('I am add func')
  return a + b
}

export function minus(a: number, b: number) {
  console.info('I am minus func')
  return a - b
}
```

回到我们的 `src/app.tsx` 中，清除以前的内容，写入以下代码：
```tsx
import React from 'react'
import { add, minus } from 'Utils/math'

function App() {
  return <div className='app'>{add(5, 6)}</div>
}

export default App
```

可以看到，我们同时引入来 `add` 和 `minus` 方法，但是实际使用时只使用了 `add` 方法，这时候我们 build 一下，打开打包后的文件搜索 `console.info('I am minus func')` 是搜不到的，但却搜到了 `console.info('I am add func')` 意味着这个方法因为没有被使用导致被删除，这就是 tree-shaking 的作用！

在我开发的项目时，我不会去 `package.json` 中配置 `sideEffects: false` ，因为我写的模块我能保证没有副作用。

这里大家有必要回忆一下，在 `.babelrc` 中我们在 [`@babel/preset-env`] 下配置了 `module: false` ，目的在于不要将 `import` 和 `export` 关键字处理成 commonJS 的模块导出引入方式，比如 `require` ，这样的话才能支持 tree-shaking，因为我们上面说了，在 ES6 模块导入方式下才会有效。

### 6\. 打包分析

有时候我们想知道打出的包都有哪些，具体多大，只需借助 [`webpack-bundle-analyzer`](https://github.com/webpack-contrib/webpack-bundle-analyzer) 即可，我们安装它：
```sh
yarn add -D webpack-bundle-analyzer
```
打开 `scripts/config/webpack.prod.js` 增加以下 `plugin` 即可：
```js
const webpack = require('webpack')

module.exports = merge(common, {
  plugins: [
    // ...
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',					// 开一个本地服务查看报告
      analyzerHost: '127.0.0.1',			// host 设置
      analyzerPort: 8888,							// 端口号设置
    }),
  ],
})
```

这时候我们 `yarn build` 完成后，就会打开默认浏览器，出现一下 bundle 分析页面：

[![image.png](https://camo.githubusercontent.com/3ad0e5c519f3f1d503893f78f7fff5a23867a820b6a970826e8d733abcd2befc/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363939313038383437332d65663937633137362d393532612d343737652d626165632d3164343032313933653332352e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d363339266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d31323738266f726967696e57696474683d323532362673697a653d32383436313038267374617475733d646f6e65267374796c653d6e6f6e652677696474683d31323633)](https://camo.githubusercontent.com/3ad0e5c519f3f1d503893f78f7fff5a23867a820b6a970826e8d733abcd2befc/68747470733a2f2f63646e2e6e6c61726b2e636f6d2f79757175652f302f323032302f706e672f3334313331342f313539363939313038383437332d65663937633137362d393532612d343737652d626165632d3164343032313933653332352e706e6723616c69676e3d6c65667426646973706c61793d696e6c696e65266865696768743d363339266d617267696e3d2535426f626a6563742532304f626a656374253544266e616d653d696d6167652e706e67266f726967696e4865696768743d31323738266f726967696e57696474683d323532362673697a653d32383436313038267374617475733d646f6e65267374796c653d6e6f6e652677696474683d31323633)
尽情想用吧！～

## 前半部分结语

大家跟着读到这里，或者跟着做到这里，相信大家感觉一定不虚此行了吧？现在完成的配置已经是可以进行正常的开发了，至于项目中经常用到的 `react-router-dom` 、 `react-redux` 、 `mobx` 等更多的库大家就按照正常开发时安装使用就可以。

接下来后半部分我想以两个案例讲解使用现用我们搭出来的架子开发 React 组件和常规工具并发布至 npm 的全流程，内容分别如下：

*   利用 rollup 和 tsc 打包工具包并发布至 npm 全流程
*   利用 rollup 和 tsc 打包开发的 react 组件并发布至 npm 全流程

这一部分能讲的东西也是满多的，我会新起另一篇文章讲解，大家敬请期待吧！这篇文章我前后花了大概一个月时间，都是利用工作之余时间写的，希望大家能给予一点小小的鼓励，只需要给[我的github/blog](https://github.com/vortesnail/blog)一个小小的 star![sparkles](https://github.githubassets.com/images/icons/emoji/unicode/2728.png) 即可让我元气满满！球球了![pray](https://github.githubassets.com/images/icons/emoji/unicode/1f64f.png)！！！

[`@typescript-eslint/eslint-plugin`]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
[`eslint-config-airbnb`]: https://www.npmjs.com/package/eslint-config-airbnb
[`devtool`]:            https://webpack.js.org/configuration/devtool/
[`postcss`]:            https://github.com/postcss/postcss
[`postcss-js`]:         https://github.com/postcss/postcss-js
[`postcss-loader`]:     https://webpack.js.org/loaders/postcss-loader/
[Packs]:              https://github.com/postcss/postcss/blob/master/docs/plugins.md#packs

[Future CSS Syntax]:  https://github.com/postcss/postcss/blob/master/docs/plugins.md#future-css-syntax

[Fallbacks]:          https://github.com/postcss/postcss/blob/master/docs/plugins.md#fallbacks
[Language Extensions]:https://github.com/postcss/postcss/blob/master/docs/plugins.md#language-extensions
[Colors]:             https://github.com/postcss/postcss/blob/master/docs/plugins.md#colors
[Images and Fonts]:   https://github.com/postcss/postcss/blob/master/docs/plugins.md#images-and-fonts
[Grids]:              https://github.com/postcss/postcss/blob/master/docs/plugins.md#grids
[Optimizations]:      https://github.com/postcss/postcss/blob/master/docs/plugins.md#optimizations
[Shortcuts]:          https://github.com/postcss/postcss/blob/master/docs/plugins.md#shortcuts
[Others]:             https://github.com/postcss/postcss/blob/master/docs/plugins.md#others
[`autoprefixer`]:     https://github.com/postcss/autoprefixer
[`postcss-preset-env`]: https://github.com/jonathantneal/postcss-preset-env

[`file-loader`]:      https://github.com/webpack-contrib/file-loader
[`url-loader`]:       https://github.com/webpack-contrib/url-loader
[`iconfont`]:         https://www.iconfont.cn/
[`webpack`]:          https://webpack.js.org
[`Babel`]:            https://github.com/babel/babel
[`babel-loader`]:     https://github.com/babel/babel-loader
[`@babel/core`]:      https://babeljs.io/docs/en/next/babel-core.html
[`@babel/preset-react`]: https://babeljs.io/docs/en/next/babel-preset-react
[`presets`]: https://babeljs.io/docs/en/presets
[`@babel/preset-env`]: https://babeljs.io/docs/en/next/babel-preset-env.html
[`@babel/preset-typescript`]: https://babeljs.io/docs/en/babel-preset-typescript
[`eslint-import-resolver-typescript`]: https://github.com/alexgorbatchev/eslint-import-resolver-typescript
[`@babel/plugin-transform-runtime`]: https://www.babeljs.cn/docs/babel-plugin-transform-runtime
[`copy-webpack-plugin`]:    https://github.com/webpack-contrib/copy-webpack-plugin
[`webpackbar`]:             https://github.com/nuxt/webpackbar
[`webpack-dev-server`]:     https://webpack.js.org/configuration/dev-server/
[`html-webpack-plugin`]:    https://github.com/jantimon/html-webpack-plugin
[`webpack-dev-middleware`]: https://github.com/webpack/webpack-dev-middleware
[`fork-ts-checker-webpack-plugin`]:   https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#typescript-options
[`mini-css-extract-plugin`]:  https://github.com/webpack-contrib/mini-css-extract-plugin
[`purgecss`]:     https://purgecss.com/plugins/webpack.html
[`purgecss-webpack-plugin`]:  https://github.com/FullHuman/purgecss/tree/master/packages/purgecss-webpack-plugin
[`node-glob`]:              https://github.com/isaacs/node-glob
[`terser-webpack-plugin`]:  https://github.com/webpack-contrib/terser-webpack-plugin
[`optimize-css-assets-webpack-plugin`]: https://github.com/NMFR/optimize-css-assets-webpack-plugin
[`webpack-bundle-analyzer`]:  https://github.com/webpack-contrib/webpack-bundle-analyzer