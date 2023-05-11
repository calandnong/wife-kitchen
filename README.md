# 老婆食堂

<!-- <img
  src="./docs/imgs/ling-wu-logo.png" width="440px"
/> -->

## 项目简介

老婆食堂是一款专为每个男人的老婆打造的小程序，旨在为用户提供方便快捷的家庭餐饮服务。我们的小程序提供了点菜服务，让您可以轻松地为家人和自己点餐，同时还提供了外援服务，让您可以选择外部帮助来完成餐食制作。在老婆食堂中，您可以浏览各种菜品，每道菜品的价格为1元，您可以根据自己的口味和偏好选择菜品，并选择老公做或者请求外援。如果您选择老公做，我们会为您提供详细的制作步骤和食材清单，让您的老公可以轻松地完成制作。如果您选择请求外援，我们会为您提供多种外援选择，包括打外卖、请人帮忙做等，让您可以轻松地完成餐食制作。除了点菜和外援服务，老婆食堂还提供了社区功能，让用户可以分享自己的菜谱和厨艺心得，与其他用户交流和互动。您可以在社区中分享今天点的菜单，或者分享自己的情况，与其他用户交流和互动，让生活更加丰富多彩。最后，老婆食堂还提供了食材购买服务，您可以在小程序中直接购买新鲜的食材，无需外出购物，省时省力。我们的食材都是经过严格筛选和检测的，保证新鲜、安全、健康。我们相信，通过老婆食堂，您可以轻松地为家人和自己准备美味健康的餐食，让生活更加便捷和美好。

## 技术栈

  * node
  * pnpm
  * nestjs
  * typescript
  * rxjs
  * express
  * jest
  * swagger
  * typeorm
  * mysql
  * redis
  * eslint
  * husky
  * lint-staged
  * commitlint
  * monorepo
  * 更多待补充...

## 代办事项:

- [x] 完成基于pnpm的monorepo基建
- [x] 完成 hello,wold的nestjs项目基建
- [x] 完成typescript标准化
- [x] 加入eslint、husky、lint-staged、commitlint的仓库规范基建
- [x] [完成项目基础结构与说明文档1.0](./docs//1.nestjs%E9%A1%B9%E7%9B%AE%E5%9F%BA%E7%A1%80%E7%BB%93%E6%9E%84%E4%B8%8E%E8%AF%B4%E6%98%8E.md)
- [x] [完成pc-server中的一个请求打入时的程序流程图](./docs//2.%E4%B8%80%E4%B8%AA%E8%AF%B7%E6%B1%82%E5%BC%80%E5%A7%8B%E5%88%B0%E7%BB%93%E6%9D%9F%E8%BF%87%E7%A8%8B%E4%B8%AD%E7%9A%84nestjs%E7%A8%8B%E5%BA%8F%E6%89%A7%E8%A1%8C%E6%B5%81%E7%A8%8B%E5%9B%BE.md)
- [x] 完成项目配置&环境变量配置建设
- [x] 完成mysql与redis配置与应用建设
- [ ] 完成jwt与鉴权模块建设
- [ ] 其他...

## 功能列表:

待补充...

## 项目目录/文件介绍
- .husky: husky相关配置
- .vscode: vscode相关配置
- docs: 大仓相关文档&资源
- packages: 大仓内的所有项目/包存放目录
  - pc-server: pc端项目接口服务源码，[目录结构](./docs//1.nestjs%E9%A1%B9%E7%9B%AE%E5%9F%BA%E7%A1%80%E7%BB%93%E6%9E%84%E4%B8%8E%E8%AF%B4%E6%98%8E.md)
  - shared: 可以单独发布出去的工具集合，预留给微服务模式和前端导入使用类型（比如各个接口的response类型和request参数类型等）等场景
- package.json: 大仓的依赖配置
  - dev: 运行pc-server项目的命令
  - lint: 扫描整个大仓的eslint规范
- pnpm-workspace.yaml: workspace配置
- tsconfig.base.json: 项目基础ts配置
- 其他...

待补充...

## 运行指南

### 运行环境准备
- node >= 16.19.0
- pnpm >= 6.32.20

### 安装依赖
```bash
pnpm i
```
### 运行项目
```bash
pnpm run dev
windows: pnpm --filter @ling-wu-server/pc-server run start
```
### 访问地址（默认配置，需要更换可以在env文件中配置）

[接口地址：http://127.0.0.1:3000](http://127.0.0.1:3000)

[swagger地址：http://127.0.0.1:3000/swagger-docs](http://127.0.0.1:3000/swagger-docs)

### 其他
待补充...


## 共建指南

待补充..

## Maintainers

[@calandnong](https://github.com/calandnong).

## License

[MIT](LICENSE) © calandnong
