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
主要目的是优化JavaScript 和 TypeScript 编码风格。
### 初始化配置
```bash
yarn add -D typescript
yarn eslint --init
```

> + 因项目需要使用 ts 语言编程，所以须先安装 typescript 包。
> + 执行 `yarn eslint --init`后，会要求回答几个问题。

#### 问题1 -- 您想怎样使用 `ESLint`
```ini
? How would you like to use ESLint? …
  To check syntax only
  To check syntax and find problems
▸ To check syntax, find problems, and enforce code style

✔ How would you like to use ESLint? · style
```
> 我这里选择了第三项。这三项的大意是：
> + 仅检查语法
> + 检查语法和发现问题
> + 检查语法、发现问题和执行代码风格化

#### 问题2 -- 您的项目使用什么类型的模块
```ini
? What type of modules does your project use? …
▸ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

✔ What type of modules does your project use? · esm
```
> 我选择第一项。这三项的大意是：
> + ES 标准模块方式
> + CommonJS 通用模块方式
> + 以上都不用

#### 问题3 -- 您的项目使用哪一个框架
```ini
? Which framework does your project use? …
▸ React
  Vue.js
  None of these

✔ Which framework does your project use? · react
```
> 我选择`React`。这三项大意是：
> + React 框架
> + Vue.js 框架
> + 以上都不用

#### 问题4 -- 您的项目是否使用 `TypeScript`
```ini
? Does your project use TypeScript? ‣ No / Yes # 选 Yes

✔ Does your project use TypeScript? · No / Yes
```
> 我的项目需要使用 `TypeScript`。

#### 问题5 -- 代码运行环境
```ini
? Where does your code run? …  
(Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node

✔ Where does your code run? · browser, node
```
> 运行环境包括浏览器和`Node`，我这里二者都选。操作方法如下：
> + 按 `<space>`（空格）键，表示选择 
> + 按 `<a>` 键，表示全选
> + 按 `<i>` 键，表示反选

#### 问题6 -- 您想怎样定义您的项目风格
```ini
? How would you like to define a style for your project? …
▸ Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)

✔ How would you like to define a style for your project? · guide
```
> 我这里选择第一项，一种流行的风格指南。这三项大意是：
> + 使用一种流行风格指南
> + 回答一些关于风格的问题
> + 审查您的`JavaScript`文件

#### 问题7 -- 您想遵循那种风格指南
```ini
? Which style guide do you want to follow? …
▸ Airbnb: https://github.com/airbnb/javascript
  Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google

✔ Which style guide do you want to follow? · airbnb
```
> 选择`Airbnb`风格，经过社区千锤百炼的一种流行风格。

#### 问题8 -- 您想您的配置文件使用什么格式？
```ini

? What format do you want your config file to be in? …
▸ JavaScript
  YAML
  JSON

✔ What format do you want your config file to be in? · JavaScript
```
> 我这里选择 `JavaScript`，因它更具配置灵活性。


#### 问题9 -- 是否使用npm工具立即安装eslint需要的依赖
```ini

Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@^7.21.5 @typescript-eslint/eslint-plugin@latest eslint-config-airbnb@latest eslint@^5.16.0 || ^6.8.0 || ^7.2.0 eslint-plugin-import@^2.22.1 eslint-plugin-jsx-a11y@^6.4.1 eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 @typescript-eslint/parser@latest

? Would you like to install them now with npm? ‣ No / Yes

✔ Would you like to install them now with npm? · No / Yes
```
> 根据自己实际情况，选择是否立即安装。特别提示：<br>
>  _若不想使用npm工具进行维护，就选择 `No`。_


**ESLint初始化命令执行结束后，项目根目录新增了两个配置文件：**
+ `.eslintrc.js`
+ `.eslintignore`

```js
// .eslintrc.js
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
  },
};
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
#### 在 package.json 加入lint指令：
```json
"scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s",
    "lint": "npm run lint-eslint && npm run lint-stylelint",
    "lint-eslint": "eslint -c .eslintrc.js --ext .ts,.tsx,.js src",
    "lint-stylelint": "stylelint --config .stylelintrc.js src/**/*.{less,css,scss}"
  },
```

#### 修改 .eslintrc.js

+ 根据 [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 官方说明，如果要开启 React Hooks 的检查，需要在 extends 中添加一项 'airbnb/hooks' 。
+ 根据 [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) 官方说明，在 extends 中添加 'plugin:@typescript-eslint/recommended' 可开启针对 ts 语法推荐的规则定义。

+ 为避免在 .ts 和 .tsx 文件中引入另一个文件模块会报错，需加入下面的规则：
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
> + eslint-plugin-promise ：优化 Promise 语法。
> + eslint-plugin-unicorn ：提供了更多有用的配置项，比如我会用来规范关于文件命名的方式。

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
  plugins: [
    'react',
    'unicorn',
    'promise',
    '@typescript-eslint',
  ],
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
};
```

#### 设置不希望 ESLint 或 Prettier 干预的配置
在项目根目录新增 `.eslintignore`和`.prettierignore`两个文件，将需要忽略语法检查或格式化的文件或文件夹加入其中，并尽量保持两个文件内容一致性：
```ini
/node_modules
/build
/dist
/.vscode
```

## StyleLint 规范CSS样式风格 

参考：
+ [stylelint 官方指南](https://stylelint.io/user-guide/get-started) 。

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
> + extends ：其实和 eslint 的类似，都是扩展，使用 stylelint 已经预设好的一些规则。
> + rules ：就是具体的规则，如果默认的你不满意，可以自己决定某个规则的具体形式。
> + ignoreFiles ：不像 eslint 需要新建 ignore 文件， stylelint 配置就支持忽略配置字段，我们先添加 node_modules 和 build ，之后有需要大家可自行添加。


3. 如果运行 stylelint 指令，就可以对项目目录的所有 CSS 文件进行风格化和相关问题报告：
```sh
yarn stylelint "**/*.css"
```

### 编辑器配置 VSCODE
与 eslint 一样，想要在编辑代码时有错误提示以及自动修复功能，我们需要安装一个VSCode扩展 `stylelint`，并增加以下配置：
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
  },
}
```

### 安装社区优秀 stylelint 扩展或插件
+ stylelint-config-rational-order 用于按照以下顺序将相关属性声明进行分组来对它们进行排序：
```js
1.Positioning
2.Box Model
3.Typography
4.Visual
5.Animation
6.Misc
```

+ stylelint-declaration-block-no-ignored-properties 用于提示我们写的矛盾样式，比如下面的代码中 width 是会被浏览器忽略的，这可以避免我们犯一些低级错误～
```css
{ display: inline; width: 100px; }
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

然后更改StyleLint配置文件`.stylelintrc.js`：
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

[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) 插件会禁用所有ESLint 与 prettier 起冲突的规则。

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
+ husky
+ lint-staged

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
    "*.{ts,tsx,js}": [
      "eslint --config .eslintrc.js"
    ],
    "*.{css,less,scss}": [
      "stylelint --config .stylelintrc.js"
    ],
    "*.{ts,tsx,js,json,html,yml,css,less,scss,md}": [
      "prettier --write"
    ]
  },
}
```
> + 首先，对暂存区中后缀为 `.ts .tsx .js` 的文件进行 `eslint` 校验， `--config` 的作用是指定配置文件。
> + 之后，对暂存区后缀为 `.css .less .scss` 的文件进行 `stylelint` 校验，注意：我们没有添加 `--fix` 来自动修复不符合规则的代码，因为自动修复的内容对我们不透明，你不知道哪些代码被更改，这对我来说是无法接受的。
> + 但是在使用 `prettier` 进行代码格式化时，完全可以添加 `--write` 来使我们的代码自动格式化，它不会更改语法层面上的东西，所以无需担心。
>> 可能大家搜索一些文章的时候，会发现在 `lint-staged` 中还配置了一个 `git add` ，实际上在 v10 版本之后任何被修改了的原 `staged` 区的文件都会被自动 `git add`，所以无需再添加。

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
  },
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
  },
}
```
之后，就可以通过 `yarn changelog` 生成 `angular` 风格的 `changelog` ，需要注意的是，上面这条命令产生的 changelog 是基于上次 tag 版本之后的变更（feat、fix 等等）所产生的。

 `:TODO` 示例，看原文。
