---
theme: seriph
background: https://green-img.f2ee.com/edu/bg.jpg
title: 基于大模型技术的新能源低碳提案自动化生成
info: |
  ## AI on Green Talking
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

## 基于大模型技术
# 新能源低碳提案自动化生成


陈中普，通用人工智能与数字经济创新团队，2025

<div class="flex justify-center items-center h-60px mt-8px">
    <img src="https://green-img.f2ee.com/edu/swufefull.svg" class="h-full" alt="swufe logo"/>
</div>

---
layout: image-right
image: main.png
---

# 新能源项目汇报提纲

## <span class="text-red">一、我们做了什么？</span>
## 二、我们如何做的？
## 三、我们还能做什么？


<div class="flex justify-center items-center h-150px mt-4px">

```mermaid
flowchart LR
    A[痛点] --> B[产品]
```

</div>

---

# 一、我们做了什么？

## 痛点 <uim-sync-exclamation />

<div class="flex justify-center items-center h-180px mt-4px">
    <img src="/problem1.png" class="h-full" alt="problem"/>
</div>

<div v-click>

## 机会 <uim-telegram-alt />

> 大模型可以看成一个高级的“文字接龙”游戏，实现满足**特定规则**同时也**富有变化**的<span class="text-red">可控文本生成</span>。
</div>

<div v-click>
  <div grid="~ cols-2 gap-4">
    <div class="flex justify-center items-center h-150px mt-4px">
        <img src="/system.png" class="h-full" alt="system"/>
    </div>
    <div class="flex justify-center items-center h-150px mt-4px">
    覆盖建筑、工业、工艺和农业等行业，近40项行业子分类。
    实现将原本需要人工4个小时完成的提案生成工作，缩短至2分钟。
    </div>
  </div>
</div>

---

## Demo

<div class="flex justify-center h-440px">
<SlidevVideo autoplay controls="true">
  <!-- Anything that can go in an HTML video element. -->
  <source src="https://green-img.f2ee.com/edu/demo.mp4" type="video/mp4" />
  <p>
    Your browser does not support videos. You may download it
    <a href="https://green-img.f2ee.com/edu/demo.mp4">here</a>.
  </p>
</SlidevVideo>
</div>

---
layout: image-right
image: main.png
---

# 新能源项目汇报提纲

## 一、我们做了什么？
## <span class="text-red">二、我们如何做的？</span>
## 三、我们还能做什么？


<div class="flex justify-center items-center h-150px mt-4px">

> 大模型应用，除了“套壳”，还有哪些工程和理论上的创新？

</div>

----

# 二、我们如何做的？

## 2.1 文生图的“新”思路
2022年年末，ChatGPT发布；本项目2023年9月启动，当时并没有轻量级的**文字生成图表**模型，于是提出了一套实用的解决方案。

```mermaid {theme: 'neutral', scale: 0.8}
flowchart LR
    A[文本] --> B[JSON] --> C[图表]
```

<div class="flex justify-center items-center h-180px mt-4px">
  <img src="/chart.png" class="h-full" alt="text2chart"/>
</div>

---

# 二、我们如何做的？

## 2.2 长文档输出的可读性

对于提案级别的长文档，可读性至关重要。本项目首次提出了大模型生成内容**可读性的评估及增强方法**。

<div grid="~ cols-2 gap-4">

  <div class="flex justify-center items-center h-200px mt-4px">
    <img src="/style.png" class="h-full" alt="readability"/>
  </div>

  <div class="flex justify-center items-center h-200px mt-4px">
    <img src="/md.png" class="h-full" alt="md"/>
  </div>

</div>
---

# 二、我们如何做的？

## 2.3 高效外部知识检索

<div class="flex justify-center items-center h-300px mt-4px">
  <img src="/search.png" class="h-full" alt="search"/>
</div>

- <uim-slack />不仅是搜索，本项目设计了细粒度的网页解析器，实现了实时展示政府的红头文件等高级功能
- <uim-github-alt />效率至上，本项目设计了异步的知识检索模块，修复了开源向量数据库的上下文管理问题，相关代码应用到字节跳动和博世集团等公司

---
layout: image-right
image: main.png
---

# 新能源项目汇报提纲

## 一、我们做了什么？
## 二、我们如何做的？
## <span class="text-red">三、我们还能做什么？</span>


<div class="flex justify-center items-center h-150px mt-4px">

1. 女娲智能体平台（低/零代码构建AI应用）
2. 本地知识库系统的高效构建
3. 国产化硬件本地大模型部署

</div>

---
layout: end
---
# 谢谢聆听！
