# 陶艺作品集网站

这是一个使用 Astro 搭建的个人陶艺作品展示网站 MVP。当前版本包含首页、作品图录、作品基础信息，以及约 30 件作品的示例数据。

## 环境要求

请先安装：

- Node.js 20 或更高版本
- npm

可以用下面命令检查：

```bash
node --version
npm --version
```

## 安装依赖

进入项目目录：

```bash
cd ceramic-portfolio
```

安装依赖：

```bash
npm install
```

## 本地运行网站

启动本地开发服务器：

```bash
npm run dev
```

启动成功后，在浏览器打开：

```text
http://127.0.0.1:4321/
```

如果终端显示了其他端口，请以终端输出的地址为准。

## 构建生产版本

检查并生成静态网站：

```bash
npm run build
```

构建产物会生成在：

```text
dist/
```

## 预览生产构建

先执行：

```bash
npm run build
```

然后执行：

```bash
npm run preview
```

## 修改作品信息

作品数据在：

```text
src/data/works.ts
```

每件作品可以修改这些信息：

- 名字
- 中文名
- 年份
- Clay，可选
- Glaze，可选
- Firing，可选
- 尺寸
- 图片路径
- 主图选择
- Tone，占位图颜色

## 替换作品图片

建议把作品图片放在：

```text
public/images/works/
```

然后在 `src/data/works.ts` 里给对应作品添加图片路径。每件作品支持多张图片，例如：

```ts
title: "Bamboo Cup",
titleCn: "竹杯",
clay: "Stoneware",
glaze: "Ash glaze",
firing: "Gas reduction",
dimensions: "28 x 18 x 12 cm",
images: [
  "/images/works/work-01-a.jpg",
  "/images/works/work-01-b.jpg",
  "/images/works/work-01-c.jpg",
],
coverImageIndex: 0,
tone: "ash",
```

图片放在 `public` 目录下时，页面里使用的路径从 `/images/...` 开始。

`coverImageIndex` 用来选择哪一张作为大主图，从 `0` 开始计算。大主图会自动裁切填满页面设计好的大图框；其他图片会按原比例显示。图片数量可以超过 2 张，除了主图以外的图片都会继续展示。

`clay`、`glaze`、`firing` 都是可选字段。如果某件作品没有填，对应信息行就不会显示。

`tone` 只在作品没有真实图片时使用，用来决定占位图颜色。可选值是 `"warm"`、`"ash"`、`"dark"`、`"celadon"`、`"white"`。如果每件作品都有真实图片，它基本不会影响页面。

## 主要文件

- `src/pages/index.astro`：首页和作品展示页面
- `src/data/works.ts`：作品数据
- `src/styles/global.css`：全站样式
- `public/images/hero-ceramics.png`：首页主视觉图片
