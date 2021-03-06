# 规范化标准

规范化是我们践行前端工程化中重要的一部分

## 规范化介绍

- 为什么要有规范化
  - 软件开发需要多人协同
  - 不同开发者具有不同的编码习惯和喜好
  - 不同的喜好增加项目维护成本
  - 每个项目或者团队需要明确统一的标准
- 哪里需要规范化标准
  - 代码、文档、甚至是提交日志
  - 开发过程中人为编写的成果物
  - 代码标准化规范最为重要
- 实施规范化的方法
  - 编码前人为的标准约定
  - 通过工具实现 Lint

## 常见的规范化实现方式

- ESLint 工具使用
- 定制 ESLint 校验规则
- ESLint 对 TypeScript 的支持
- ESLint 结合自动化工具或者 Webpack
- 基于 ESLint 的衍生工具
- StyleLint 工具的使用

## ESLint 按照步骤

- 初始化项目
- 按照 ESLint 模块为开发依赖
- 通过 CLI 命令来验证按照结果

## ESLint 快速上手

### ESLint 检查步骤

- 编写“问题”代码
- 使用 eslint 执行检测
- 完成 eslint 使用配置

## ESLint 配置文件解析

- env
  - browser 浏览器环境中的全局变量
  - node Node.js 全部变量 和 Node.js 作用域
  - commonjs CommonJS 全局变量 和 CommonJS 作用域
  - shared-node-browser Node.js 和 Browser 通用全局变量
  - es6 - 启用除了 modules 以外的所有 ECMAScript 6 特性
  - amd
  - mocha
  - jasmine
  - jest
  - phantomjs
  - protractor
  - qunit
  - jquery
  - prototypejs
  - shelljs
  - meteor
  - mongo
  - applescript
  - nashorn

## ESLint 配置注释

- eslint-disable-line 单行注释

## ESLint 结合自动化工具

- 集成之后，ESLint 一定会工作
- 与项目统一，管理更加方便

## ESLint 结合 Webpack

## 现代化项目集成 ESLint

- Line on save：表示 webpack 构建开始进行校验
- Lint and fix on commit：在 git commit 时校验

## StyleLint 的 认识

- 提供了默认的代码检查规则
- 提供了 CLI 工具，快速调用
- 通过插件支持 Sass Less PostCSS
- 支持 Gulp 或 Webpack 集成

## prettier 的使用

## Git Hooks 介绍

- 代码提交至仓库前未执行 lint 工作
- 通过 Git Hooks 在代码提交前强制 lint
- Git Hooks 也称之为 git 钩子，每个钩子都对应一个任务
- 通过 shell 脚本可以编写钩子任务触发时要具体执行的操作
