---
theme: seriph
background: bg.jpg
title: AI赋能中小学教学
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

# 超越 PPT
## AI时代下，师者，皆可为创造者

陈中普，西南财经大学，2026

---

# 关于我：陈中普

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="info-card">
  <div class="icon-wrap">🏛️</div>
  <div>
    <p class="label">单位</p>
    <p class="value">计算机与人工智能学院</p>
    <p class="sub">西南财经大学，九三学社</p>
  </div>
</div>

<div class="info-card">
  <div class="icon-wrap">🔬</div>
  <div>
    <p class="label">研究方向</p>
    <p class="value"><span class="tag">数据库系统</span> <span class="tag">大语言模型</span></p>
    <p class="sub">在IEEE ICDE、IEEE TKDE、ACM WWW、VLDB等顶级期刊和会议发表论文多篇</p>
  </div>
</div>

<div class="info-card">
  <div class="icon-wrap">✉️</div>
  <div>
    <p class="label">联系方式</p>
    <p class="value">zpchen@swufe.edu.cn</p>
    <p class="sub">https://zhongpu.info</p>
  </div>
</div>

<div class="info-card">
  <div class="icon-wrap">🎓</div>
  <div>
    <p class="label">教育背景</p>
    <p class="value">博士，计算机科学</p>
    <p class="sub">上海交通大学</p>
  </div>
</div>

</div>

<div class="flex justify-center gap-6 mt-4">
  <img src="/book1.jpg" class="rounded-lg shadow-md max-h-[160px] object-contain" alt="教材1"/>
  <img src="/book2.png" class="rounded-lg shadow-md max-h-[160px] object-contain" alt="教材2"/>
</div>

<style>
.info-card {
  display: flex; gap: 12px; align-items: flex-start;
  background: #f5f5f7; border-radius: 10px; padding: 14px;
}
.icon-wrap { font-size: 22px; }
.label { font-size: 11px; color: #999; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 2px; }
.value { font-size: 14px; font-weight: 500; margin: 0 0 2px; }
.sub { font-size: 12px; color: #666; margin: 0; }
.tag { background: #ede9fe; color: #5b21b6; font-size: 12px; padding: 1px 8px; border-radius: 20px; }
</style>

---

# 0. 信息技术发展总揽

<div class="grid grid-cols-2 gap-x-10 mt-6">

<div>
<p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 ml-4">传统工具时代</p>
<div class="relative border-l-2 border-gray-200 ml-4">

<div class="mb-6 ml-8 relative" v-click>
<span class="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -left-[31px] ring-4 ring-white shadow-sm">
<carbon-presentation-file class="text-blue-600 text-sm" />
</span>
<h3 class="flex items-center text-base font-bold text-blue-700">1990s <span class="text-gray-600 text-sm font-normal ml-3">PPT 普及</span></h3>
<p class="mt-0.5 text-[13px] text-gray-500 leading-tight">
<span class="bg-blue-50 text-blue-600 border border-blue-200 px-1 rounded text-[10px] mr-1 relative -top-[1px]">单向展示</span>
知识数字化展现，彻底改变"黑板+粉笔"的传统课堂。
</p>
</div>

<div class="mb-6 ml-8 relative" v-click>
<span class="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -left-[31px] ring-4 ring-white shadow-sm">
<carbon-search class="text-blue-600 text-sm" />
</span>
<h3 class="flex items-center text-base font-bold text-blue-700">2000s <span class="text-gray-600 text-sm font-normal ml-3">搜索引擎普及</span></h3>
<p class="mt-0.5 text-[13px] text-gray-500 leading-tight">
<span class="bg-blue-50 text-blue-600 border border-blue-200 px-1 rounded text-[10px] mr-1 relative -top-[1px]">主动检索</span>
打破信息孤岛，教师备课从"资料室"全面转向"全网搜索"。
</p>
</div>

</div>
</div>

<div>
<p class="text-xs font-semibold text-orange-400 uppercase tracking-widest mb-4 ml-4">AI 时代</p>
<div class="relative border-l-2 border-orange-200 ml-4">

<div class="mb-5 ml-8 relative" v-click>
<span class="absolute flex items-center justify-center w-7 h-7 bg-orange-100 rounded-full -left-[31px] ring-4 ring-white shadow-sm">
<carbon-chat-bot class="text-orange-500 text-sm" />
</span>
<h3 class="flex items-center text-base font-bold text-orange-600">2022.11 <span class="text-gray-600 text-sm font-normal ml-3">ChatGPT 出现</span></h3>
<p class="mt-0.5 text-[13px] text-gray-500 leading-tight">
<span class="bg-orange-50 text-orange-600 border border-orange-200 px-1 rounded text-[10px] mr-1 relative -top-[1px]">机器涌现</span>
生成式大模型诞生，机器首次掌握自然语言的"理解与生成"。
</p>
</div>

<div class="mb-5 ml-8 relative" v-click>
<span class="absolute flex items-center justify-center w-7 h-7 bg-orange-100 rounded-full -left-[31px] ring-4 ring-white shadow-sm">
<carbon-machine-learning-model class="text-orange-500 text-sm" />
</span>
<h3 class="flex items-center text-base font-bold text-orange-600">2024.12 <span class="text-gray-600 text-sm font-normal ml-3">DeepSeek V3/R1</span></h3>
<p class="mt-0.5 text-[13px] text-gray-500 leading-tight">
<span class="bg-orange-50 text-orange-600 border border-orange-200 px-1 rounded text-[10px] mr-1 relative -top-[1px]">逻辑推理</span>
国产模型带来极致性价比与深度思考，AI 教育应用成本断崖式下降。
</p>
</div>

<div class="mb-5 ml-8 relative" v-click>
<span class="absolute flex items-center justify-center w-7 h-7 bg-red-100 rounded-full -left-[31px] ring-4 ring-white shadow-sm">
<carbon-keyboard class="text-red-600 text-sm" />
</span>
<h3 class="flex items-center text-base font-bold text-red-600">2025.11 <span class="text-gray-600 text-sm font-normal ml-3">OpenClaw 发布</span></h3>
<p class="mt-0.5 text-[13px] text-gray-500 leading-tight">
<span class="bg-red-50 text-red-600 border border-red-200 px-1 rounded text-[10px] mr-1 relative -top-[1px]">机器双手</span>
智能体框架爆发，AI 可以像高级助手常驻电脑。
</p>
</div>

</div>
</div>

</div>


---


# 1. 现状审视：当下的主流 AI 教育产品

### 效率飞跃的背后，隐藏着怎样的教学妥协？

<div class="grid grid-cols-2 gap-8 mt-4">
  
  <div class="bg-green-50 p-6 rounded-xl border border-green-200 relative" v-click>
    <div class="absolute -top-4 -left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-white">
      <carbon-checkmark-outline class="text-xl"/>
    </div>
    <h3 class="text-green-700 font-bold text-lg mt-1 mb-3 flex items-center gap-2">
      <carbon-chart-line class="text-xl"/> 标准化效率的飞跃
    </h3>
    <p class="text-[13px] text-gray-500 mb-4 bg-white p-2 rounded border border-green-100">
      <strong>代表应用：</strong>科大讯飞、超星学习通、各类智慧课堂平台
    </p>
<div class="flex flex-col gap-2 mt-2">
  <div class="flex items-center gap-3 bg-white rounded-lg px-3 py-2 border border-green-100">
    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
      <carbon-task class="text-green-600 text-base"/>
    </div>
    <div class="flex-1 min-w-0">
      <div class="text-[12px] font-bold text-green-700">海量题库组卷</div>
      <div class="text-[11px] text-gray-500 leading-tight">一键生成测试，告别手工剪贴时代</div>
    </div>
  </div>
  <div class="flex justify-center"><div class="w-px h-3 bg-green-200"></div></div>
  <div class="flex items-center gap-3 bg-white rounded-lg px-3 py-2 border border-green-100">
    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
      <carbon-spell-check class="text-green-600 text-base"/>
    </div>
    <div class="flex-1 min-w-0">
      <div class="text-[12px] font-bold text-green-700">客观题自动化</div>
      <div class="text-[11px] text-gray-500 leading-tight">机器阅卷与数据统计，解放批改双手</div>
    </div>
  </div>
  <div class="flex justify-center"><div class="w-px h-3 bg-green-200"></div></div>
  <div class="flex items-center gap-3 bg-white rounded-lg px-3 py-2 border border-green-100">
    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
      <carbon-dashboard class="text-green-600 text-base"/>
    </div>
    <div class="flex-1 min-w-0">
      <div class="text-[12px] font-bold text-green-700">学情数据看板</div>
      <div class="text-[11px] text-gray-500 leading-tight">分数段、易错题分布一目了然</div>
    </div>
  </div>
</div>
  </div>

  <div class="bg-red-50 p-6 rounded-xl border border-red-200 relative" v-click>
    <div class="absolute -top-4 -left-4 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-white">
      <carbon-warning class="text-xl"/>
    </div>
    <h3 class="text-red-700 font-bold text-lg mt-1 mb-3 flex items-center gap-2">
      <carbon-locked class="text-xl"/> 个性化教学的枷锁
    </h3>
    <p class="text-[13px] text-gray-500 mb-4 bg-white p-2 rounded border border-red-100">
      <strong>核心困局：</strong>我们在努力适应系统，而不是系统在配合我们
    </p>
<div class="flex flex-col gap-2 mt-2">
  <div class="flex items-center gap-3 bg-white rounded-lg px-3 py-2 border border-red-100">
    <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <carbon-grid class="text-red-500 text-base"/>
    </div>
    <div class="flex-1 min-w-0">
      <div class="text-[12px] font-bold text-red-700">逻辑僵化</div>
      <div class="text-[11px] text-gray-500 leading-tight">只能用预设模板，无法修改底层逻辑</div>
    </div>
  </div>
  <div class="flex justify-center"><div class="w-px h-3 bg-red-200"></div></div>
  <div class="flex items-center gap-3 bg-white rounded-lg px-3 py-2 border border-red-100">
    <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <carbon-data-error class="text-red-500 text-base"/>
    </div>
    <div class="flex-1 min-w-0">
      <div class="text-[12px] font-bold text-red-700">为信息化而信息化</div>
      <div class="text-[11px] text-gray-500 leading-tight">教师沦为"数据录入员"，精力耗在配格式</div>
    </div>
  </div>
  <div class="flex justify-center"><div class="w-px h-3 bg-red-200"></div></div>
  <div class="flex items-center gap-3 bg-white rounded-lg px-3 py-2 border border-red-100">
    <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
      <carbon-idea class="text-red-500 text-base"/>
    </div>
    <div class="flex-1 min-w-0">
      <div class="text-[12px] font-bold text-red-700">教学灵感被扼杀</div>
      <div class="text-[11px] text-gray-500 leading-tight">有绝妙想法，但"系统不支持"只能作罢</div>
    </div>
  </div>
</div>
  </div>

</div>

---
layout: two-cols
---

## 例子：工具不够好

![deepseek](/deepseek.png)

https://chat.deepseek.com/share/prqeih81lc7mv5vnze

<div class="grid grid-cols-3 gap-3 mt-6">
<div class="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
  <carbon-text-short-paragraph class="text-gray-400 text-2xl flex-shrink-0"/>
  <div>
    <div class="text-[15px] font-bold text-gray-700">有字无图</div>
    <div class="text-[11px] text-gray-400 mt-0.5">只会给文字，看不到效果</div>
  </div>
</div>
<div class="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
  <carbon-recycle class="text-gray-400 text-2xl flex-shrink-0"/>
  <div>
    <div class="text-[15px] font-bold text-gray-700">难以复用</div>
    <div class="text-[11px] text-gray-400 mt-0.5">单次对话，只能用于当前任务</div>
  </div>
</div>
<div class="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
  <carbon-code class="text-gray-400 text-2xl flex-shrink-0"/>
  <div>
    <div class="text-[15px] font-bold text-gray-700">给码难用</div>
    <div class="text-[11px] text-gray-400 mt-0.5">给了代码，不知道怎么跑</div>
  </div>
</div>
</div>

::right::

![function-baidu](/function.png)

<div class="flex flex-wrap gap-3 mt-6">

<div class="flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-200 rounded-full">
  <carbon-warning-alt class="text-red-500 text-base flex-shrink-0"/>
  <span class="text-[13px] font-bold text-red-700">广告弹窗干扰</span>
</div>

<div class="flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full">
  <carbon-download class="text-orange-500 text-base flex-shrink-0"/>
  <span class="text-[13px] font-bold text-orange-700">需要注册/安装</span>
</div>

<div class="flex items-center gap-2 px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-full">
  <carbon-language class="text-yellow-600 text-base flex-shrink-0"/>
  <span class="text-[13px] font-bold text-yellow-700">全英文界面</span>
</div>

<div class="flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full">
  <carbon-misuse class="text-purple-500 text-base flex-shrink-0"/>
  <span class="text-[13px] font-bold text-purple-700">知识点对不上</span>
</div>

<div class="flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full">
  <carbon-locked class="text-blue-500 text-base flex-shrink-0"/>
  <span class="text-[13px] font-bold text-blue-700">核心功能付费</span>
</div>

<div class="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full">
  <carbon-wifi-off class="text-gray-500 text-base flex-shrink-0"/>
  <span class="text-[13px] font-bold text-gray-600">国内访问不稳定</span>
</div>

<div class="flex items-center gap-2 px-4 py-2 bg-pink-100 border border-pink-200 rounded-full">
  <carbon-edit-off class="text-pink-500 text-base flex-shrink-0"/>
  <span class="text-[13px] font-bold text-pink-700">内容无法定制</span>
</div>

</div>

---


# 2. 解决之道：工具不够好，于是创造工具
<p class="text-gray-600 mt-2 text-lg">
  在大模型之前的「上古时代」，非专业人士的创造力仅局限在 Office 软件的边界内。<br/>
  现在，<span class="text-blue-600 font-bold">Vibe Coding</span> 使得人人都可以是创造者。
</p>

<div class="grid grid-cols-2 gap-8 mt-8 items-center">

  <div class="bg-gray-50 border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm relative">
    <div class="flex items-center gap-2 mb-3 text-blue-700 font-bold text-lg">
      <carbon-book /> 气氛编程 (Vibe Coding)
    </div>
    <div class="text-[14px] leading-relaxed text-gray-700 space-y-3">
      <p>
        一种使用 AI 辅助的编程范式，用户用提示词描述问题，由大语言模型生成源代码。这使得新手在无需具备传统软件工程技能的情况下，也能独立产出软件。
      </p>
      <p class="bg-white p-2 rounded border border-gray-200">
        💡 核心转变：工作重心从 <strong>“撰写代码”</strong> 转为 <strong>“指导与测试 AI”</strong>。
      </p>
      <p class="text-[12px] text-gray-400 mt-4 border-t border-gray-200 pt-2">
        该术语由 Andrej Karpathy 于 2025 年 2 月提出，同年收录于《韦氏词典》，并被《柯林斯英语词典》评为2025年的年度词汇。
      </p>
    </div>
  </div>

  <div class="flex flex-col items-center">
    <img src="/vibe.gif" alt="Vibe Coding Demo" class="w-full rounded-xl shadow-lg border border-gray-200 transition-transform hover:scale-105" />
    <p class="text-xs text-gray-400 mt-3 flex items-center gap-1">
      <carbon-magic-wand /> 人人都可以是创造者
    </p>
  </div>

</div>

---

# 3. 实战

<div class="grid grid-cols-2 gap-8 mt-4 items-start">

  <div class="space-y-4">
    <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
      <h3 class="text-blue-800 font-bold mb-2 flex items-center gap-2">
        <carbon-terminal /> Prompt 指令内容
      </h3>
      <p class="text-sm text-gray-700 leading-relaxed font-serif">
        "请写一个单文件 HTML，演示一元二次方程 <span class="font-bold italic">ax² + bx + c = 0</span> 的根与系数的关系。包含三个滑动条控制参数，并实时绘制函数图像与交点。"
      </p>
    </div>

  </div>

  <div class="flex flex-col items-center">
    <div class="w-full bg-gray-100 rounded-xl shadow-inner border border-gray-200 overflow-hidden">
      <img 
        src="./claude.png" 
        alt="Claude Demo" 
        class="w-full max-h-[420px] object-contain mx-auto" 
      />
    </div>
    <p class="text-xs text-gray-400 mt-2 italic">使用 Claude Code 实时生成的交互界面截图</p>
  </div>

</div>

---

# 3. 实战

<div class="flex justify-center">
  <video 
    controls 
    autoplay 
    loop 
    muted 
    class="rounded-lg shadow-lg max-h-[400px]"
  >
    <source src="/demo.webm" type="video/webm">
    <img src="/demo.png" class="rounded-lg shadow-lg max-h-[400px]" alt="演示截图"/>
  </video>
</div>

---

# 4. 核心理论

## Q1. 大模型到底是什么？

大模型（LLM）是一个大型函数，只是参数非常多（数十亿到数万亿）。

| $x_1$ | $x_2$ | $f(x_1, x_2)$ |
| ----- | ----- | ------------- |
| 1     | 2     | 5             |
| 2     | 3     | 13            |
| ...   | ...   | ...           |

$$f(x_1, x_2) = x_1^2 + 5x_2 - 6$$

> 参数的单位经常使用B，表示Billion（十亿）。例如，Qwen3.6-Plus的70B参数，表示 700 亿参数。

---
layout: two-cols
---

## Q1. 大模型到底是什么？

<img src="/model.webp" class="rounded-xl border border-gray-200 shadow-md max-h-[200px]" alt="模型即函数"/>

目前国内外的大模型均致力于提升其编码能力。这也是 Vide Coding 的基础：*模型需要能够理解提示词并生成正确的代码*。

::right::

<div class="bg-indigo-50 border border-indigo-200 rounded-xl p-5 shadow-sm">
<h3 class="font-bold text-indigo-800 mb-4 flex items-center gap-2 text-lg">
<carbon-chat /> 怎么跟 AI 说清楚需求
</h3>
<div class="space-y-3">

<div class="bg-white p-3 rounded shadow-sm border-l-4 border-blue-400">
<div class="text-[12px] font-bold text-blue-600 mb-1">① 说清楚用途</div>
<div class="text-[13px] text-gray-600">我是初中数学老师，要给学生演示二次函数图像变化</div>
</div>

<div class="bg-white p-3 rounded shadow-sm border-l-4 border-orange-400">
<div class="text-[12px] font-bold text-orange-600 mb-1">② 说清楚交互</div>
<div class="text-[13px] text-gray-600">学生能拖滑块改变参数，图像实时跟着变，标出顶点坐标</div>
</div>

<div class="bg-white p-3 rounded shadow-sm border-l-4 border-green-400">
<div class="text-[12px] font-bold text-green-600 mb-1">③ 加上固定要求</div>
<div class="text-[13px] text-gray-600">单个 HTML 文件、中文界面、双击就能打开、不需要联网</div>
</div>

</div>
</div>

用户的输入也被称为提示词（Prompt）。提示词的技巧被称为提示工程（Prompt Engineering），其核心只有一个：**清晰表达你要想要什么**。

---

### 提示工程例子

<div class="grid grid-cols-3 gap-4 mt-4 items-start">

<div class="space-y-3">

<div class="bg-red-50 border border-red-200 rounded-xl p-3">
<div class="flex items-center gap-2 mb-2">
<div class="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
<carbon-close class="text-white text-[10px]"/>
</div>
<span class="text-[12px] font-bold text-red-700">模糊提示词</span>
</div>
<div class="bg-white border border-red-100 rounded-lg px-3 py-2 font-mono text-[12px] text-gray-600">
做一个单摆的教学工具
</div>
<div class="mt-2 space-y-1">
<div class="flex items-center gap-1 text-[11px] text-red-500">
<carbon-warning-alt class="flex-shrink-0"/> AI 不知道要不要动画
</div>
<div class="flex items-center gap-1 text-[11px] text-red-500">
<carbon-warning-alt class="flex-shrink-0"/> 不知道显示什么数据
</div>
<div class="flex items-center gap-1 text-[11px] text-red-500">
<carbon-warning-alt class="flex-shrink-0"/> 可能生成英文界面
</div>
</div>
</div>

<div class="flex justify-center items-center">
<carbon-arrow-down class="text-gray-300 text-2xl"/>
</div>

<div class="bg-green-50 border border-green-200 rounded-xl p-3">
<div class="flex items-center gap-2 mb-2">
<div class="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
<carbon-checkmark class="text-white text-[10px]"/>
</div>
<span class="text-[12px] font-bold text-green-700">具体提示词</span>
</div>
<div class="bg-white border border-green-100 rounded-lg px-3 py-2 font-mono text-[12px] text-gray-600 leading-relaxed">
请生成一个<span class="text-blue-600 font-bold">单文件 HTML</span> 教具，演示单摆周期与摆长的关系。有滑块调节<span class="text-orange-600 font-bold">摆长（0.1m~2m）</span>，单摆要有<span class="text-purple-600 font-bold">动画效果</span>，实时显示周期 T 并标注公式 <span class="text-green-600 font-bold">T=2π√(L/g)</span>，<span class="text-red-600 font-bold">中文界面</span>，双击即可打开。
</div>
<div class="mt-2 space-y-1">
<div class="flex items-center gap-1 text-[11px] text-green-600">
<carbon-checkmark-outline class="flex-shrink-0"/> 交互方式明确
</div>
<div class="flex items-center gap-1 text-[11px] text-green-600">
<carbon-checkmark-outline class="flex-shrink-0"/> 显示内容具体
</div>
<div class="flex items-center gap-1 text-[11px] text-green-600">
<carbon-checkmark-outline class="flex-shrink-0"/> 一次成型，无需反复修改
</div>
</div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 flex items-start gap-2">
<carbon-idea class="text-amber-500 text-base flex-shrink-0 mt-0.5"/>
<span class="text-[11px] text-amber-800"><strong>规律：</strong>说得越像"给人听的"，结果越好。</span>
</div>

</div>

<div class="flex flex-col items-center justify-start gap-3">
<img src="/sqrt.png" class="rounded-xl border border-gray-200 shadow-md w-full max-h-[62vh] object-contain" alt="sqrt"/>
</div>

<div class="space-y-3">

<div class="bg-gray-50 border border-gray-200 rounded-xl p-3">
<div class="flex items-center gap-2 mb-2">
<carbon-edit class="text-gray-500 text-base"/>
<span class="text-[12px] font-bold text-gray-700">进一步迭代</span>
</div>
<div class="space-y-2">
<div class="flex items-start gap-2 bg-white border border-gray-100 rounded-lg px-3 py-2">
<div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span class="text-[10px] font-bold text-blue-600">1</span>
</div>
<div>
<div class="text-[12px] font-bold text-gray-700">美化公式显示</div>
<div class="text-[11px] text-gray-400 mt-0.5">使用 MathJax 渲染根号，告别纯文字公式</div>
</div>
</div>
<div class="flex justify-center"><div class="w-px h-2 bg-gray-200"></div></div>
<div class="flex items-start gap-2 bg-white border border-gray-100 rounded-lg px-3 py-2">
<div class="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<span class="text-[10px] font-bold text-blue-600">2</span>
</div>
<div>
<div class="text-[12px] font-bold text-gray-700">添加初始角度控制</div>
<div class="text-[11px] text-gray-400 mt-0.5">新增滑块设置初始角度，默认 15°</div>
</div>
</div>
</div>
</div>

<div class="bg-blue-50 border border-blue-200 rounded-xl p-3">
<div class="flex items-center gap-2 mb-2">
<carbon-chat class="text-blue-500 text-base"/>
<span class="text-[12px] font-bold text-blue-700">追加 Prompt</span>
</div>
<div class="bg-white border border-blue-100 rounded-lg px-3 py-2 font-mono text-[11px] text-gray-600 leading-relaxed">
在上面的基础上：<br/>
① 用 <span class="text-blue-600 font-bold">MathJax</span> 渲染公式中的根号；<br/>
② 新增一个滑块控制<span class="text-orange-600 font-bold">初始角度</span>（1°~45°），默认 15°
</div>
</div>

<div class="bg-purple-50 border border-purple-200 rounded-lg px-3 py-2 flex items-start gap-2">
<carbon-idea class="text-purple-500 text-base flex-shrink-0 mt-0.5"/>
<span class="text-[11px] text-purple-800"><strong>迭代技巧：</strong>说"在上面的基础上"，AI 会保留之前所有内容只改你要求的部分。</span>
</div>

</div>

</div>

---

### 效果与模型能力有关

> 强大的模型能一次性生成正确的代码，并能帮助用户梳理需求；而弱一点的模型可能需要多轮迭代才能达到预期效果。

<div class="flex justify-center">
  <video 
    controls 
    autoplay 
    loop 
    muted 
    class="rounded-lg shadow-lg max-h-[400px]"
  >
    <source src="/pendulum.webm" type="video/webm">
    <img src="/pendulum.png" class="rounded-lg shadow-lg max-h-[400px]" alt="演示截图"/>
  </video>
</div>

---

## Q2. 什么是 HTML？

大模型能写很多种编程语言的代码，但在 AI 教育工具中，HTML（HyperText Markup Language） 是最常用的选择，它是一种用于创建网页的标准标记语言。

<div class="flex justify-center">
<img src="/danbai-1.png" class="rounded-lg shadow-lg max-h-[300px]" alt="技术选择"/>
</div>

<div class="grid grid-cols-2 gap-3 mt-6">

<div class="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
  <carbon-text-short-paragraph class="text-gray-400 text-2xl flex-shrink-0"/>
  <div>
    <div class="text-[15px] font-bold text-gray-700">无需安装</div>
    <div class="text-[11px] text-gray-400 mt-0.5">在浏览器中直接运行，无需额外安装</div>
  </div>
</div>

<div class="flex items-center gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl">
  <carbon-code class="text-gray-400 text-2xl flex-shrink-0"/>
  <div>
    <div class="text-[15px] font-bold text-gray-700">单文件部署</div>
    <div class="text-[11px] text-gray-400 mt-0.5">代码方便分享</div>
  </div>
</div>

</div>

---

## Q3. 如何分享给学生？

<div class="grid grid-cols-5 gap-6 mt-4 items-start">

<div class="col-span-2 space-y-4">

<div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
<div class="flex items-center gap-2 mb-3">
<mdi-laptop class="text-gray-600 text-lg"/>
<span class="text-[13px] font-bold text-gray-700">电脑</span>
</div>
<p class="text-[12px] text-gray-500 leading-relaxed">直接下载 HTML 文件，双击或拖进浏览器即可打开。</p>
</div>

<div class="bg-green-50 border border-green-200 rounded-xl p-4">
<div class="flex items-center gap-2 mb-3">
<mdi-android class="text-green-600 text-lg"/>
<span class="text-[13px] font-bold text-green-700">安卓</span>
</div>
<p class="text-[12px] text-gray-500 leading-relaxed mb-3">下载后直接选择 Chrome 等浏览器打开即可。</p>
<img src="/android.jpg" class="rounded-lg shadow-sm w-full object-contain max-h-[180px]" alt="安卓"/>
</div>

</div>

<div class="col-span-3">

<div class="bg-blue-50 border border-blue-200 rounded-xl p-4 h-full">
<div class="flex items-center gap-2 mb-3">
<mdi-apple class="text-blue-600 text-lg"/>
<span class="text-[13px] font-bold text-blue-700">iOS</span>
<span class="text-[11px] text-blue-400 ml-1">需额外安装 Documents App</span>
</div>
<p class="text-[12px] text-gray-500 leading-relaxed mb-3">iOS 默认浏览器无法打开本地 HTML 文件，安装 <strong>Documents</strong> 后通过它打开。</p>
<div class="grid grid-cols-2 gap-3">
<div class="text-center">
<img src="/documents.png" class="rounded-lg shadow-sm w-full object-contain max-h-[260px]" alt="Documents"/>
<p class="text-[11px] text-gray-400 mt-1">① 安装 Documents</p>
</div>
<div class="text-center">
<img src="/ios.png" class="rounded-lg shadow-sm w-full object-contain max-h-[260px]" alt="ios"/>
<p class="text-[11px] text-gray-400 mt-1">② 用 Documents 打开文件</p>
</div>
</div>
</div>

</div>

</div>

---

## Q4. 需要外部文件怎么办？

假设要设计一个加法器，如果程序只是告诉你：2 + 2 = 4；或 3 + 5 = 8，这样的工具就没什么意义了。我们需要它能让学生输入任意数字并得到结果。进一步，软件工具如果要通用，要么支持用户输入数据，要么就要能读取外部文件。

<div class="flex justify-center">
<img src="/words.png" class="rounded-lg shadow-lg max-h-[300px]" alt="words"/>
</div>

---

### JSON文件

JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，易于人阅读和编写，同时也易于机器解析和生成。它使用键值对的形式来表示数据结构，非常适合存储和传输结构化数据。

<div class="flex justify-center">
<img src="/json.png" class="rounded-lg shadow-lg max-h-[300px]" alt="技术选择"/>
</div>

---

### JSON 是什么？

<p class="text-gray-500 text-sm mt-1 mb-4">AI 和教具之间传递数据的"通用语言"</p>

<div class="grid grid-cols-2 gap-6 items-start">

<div class="space-y-3">

<div class="bg-gray-50 border border-gray-200 rounded-xl p-4">
<div class="flex items-center gap-2 mb-3">
<carbon-data-structured class="text-gray-500 text-lg"/>
<span class="text-[13px] font-bold text-gray-700">生活类比</span>
</div>
<div class="space-y-2">
<div class="flex items-start gap-3 bg-white border border-gray-100 rounded-lg px-3 py-2">
<span class="text-lg flex-shrink-0">📋</span>
<div>
<div class="text-[12px] font-bold text-gray-700">就像一张学生档案表</div>
<div class="text-[11px] text-gray-400 mt-0.5">姓名、年龄、班级……每个字段都有固定的名字和对应的值</div>
</div>
</div>
<div class="flex items-start gap-3 bg-white border border-gray-100 rounded-lg px-3 py-2">
<span class="text-lg flex-shrink-0">📦</span>
<div>
<div class="text-[12px] font-bold text-gray-700">数据装在"大括号"里</div>
<div class="text-[11px] text-gray-400 mt-0.5">{ } 是一个对象，[ ] 是一组列表，冒号连接名字和值</div>
</div>
</div>
<div class="flex items-start gap-3 bg-white border border-gray-100 rounded-lg px-3 py-2">
<span class="text-lg flex-shrink-0">🌐</span>
<div>
<div class="text-[12px] font-bold text-gray-700">全球通用，人和机器都能读</div>
<div class="text-[11px] text-gray-400 mt-0.5">所有编程语言、所有 AI 工具都支持 JSON 格式</div>
</div>
</div>
</div>
</div>

<div class="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 flex items-start gap-2">
<carbon-idea class="text-amber-500 text-base flex-shrink-0 mt-0.5"/>
<span class="text-[11px] text-amber-800">作为老师，不需要会写 JSON——只需要看懂它在说什么就够了。</span>
</div>

</div>

<div class="space-y-3">

<div class="bg-gray-900 rounded-xl p-4 font-mono text-[12px] leading-relaxed">
<div class="flex items-center gap-2 mb-3">
<div class="w-3 h-3 rounded-full bg-red-400"></div>
<div class="w-3 h-3 rounded-full bg-yellow-400"></div>
<div class="w-3 h-3 rounded-full bg-green-400"></div>
<span class="text-gray-500 text-[11px] ml-2">student.json</span>
</div>
<div class="text-gray-300">
<span class="text-yellow-300">{</span><br/>
&nbsp;&nbsp;<span class="text-blue-300">"姓名"</span><span class="text-gray-400">: </span><span class="text-green-300">"李明"</span><span class="text-gray-500">,</span><br/>
&nbsp;&nbsp;<span class="text-blue-300">"年级"</span><span class="text-gray-400">: </span><span class="text-green-300">"初二"</span><span class="text-gray-500">,</span><br/>
&nbsp;&nbsp;<span class="text-blue-300">"成绩"</span><span class="text-gray-400">: </span><span class="text-orange-300">92</span><span class="text-gray-500">,</span><br/>
&nbsp;&nbsp;<span class="text-blue-300">"科目"</span><span class="text-gray-400">: </span><span class="text-yellow-300">[</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">"数学"</span><span class="text-gray-500">,</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">"物理"</span><span class="text-gray-500">,</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-green-300">"化学"</span><br/>
&nbsp;&nbsp;<span class="text-yellow-300">]</span><br/>
<span class="text-yellow-300">}</span>
</div>
</div>

<div class="grid grid-cols-3 gap-2">
<div class="bg-blue-50 border border-blue-100 rounded-lg p-2 text-center">
<div class="text-blue-600 font-mono font-bold text-[13px]">{ }</div>
<div class="text-[11px] text-gray-500 mt-1">一个对象</div>
</div>
<div class="bg-yellow-50 border border-yellow-100 rounded-lg p-2 text-center">
<div class="text-yellow-600 font-mono font-bold text-[13px]">[ ]</div>
<div class="text-[11px] text-gray-500 mt-1">一组列表</div>
</div>
<div class="bg-green-50 border border-green-100 rounded-lg p-2 text-center">
<div class="text-green-600 font-mono font-bold text-[13px]">" ": </div>
<div class="text-[11px] text-gray-500 mt-1">名字与值</div>
</div>
</div>

</div>

</div>

---

### 实战

```
编写一个单页面HTML应用，读取 words.json。每个表示动词和正确名词搭配。动词数量是小组数量，每个动词对应一个小组。小组要求选择合适的名词（名词可以被重复选）。有个提交按钮，统计每个小组的回答正确的比例。错答、漏洞答、多答也扣分。
```

<div class="flex justify-center">
<img src="/words-play.png" class="rounded-lg shadow-lg max-h-[400px]" alt="技术选择"/>
</div>

---

### 练习

要求设计一个单词打地鼠游戏，随机出现本单元的重点单词的中文含义，地鼠头上会顶着一个英文单词，学生需要点击正确的英文单词才能得1分。部分地鼠头顶显示的单词是故意拼错的，点击会扣2分。每次出现 5 个地鼠，持续 20 秒，统计每轮得分。击中正确单词屏幕会闪绿光，点错会闪红光，点击后马上出现新单词。

<v-click>

```json

{
  "description": "人教版九年级英语词汇",
  "words": [
    {"english": "aloud", "chinese": "大声地；出声地"},
    {"english": "pronunciation", "chinese": "发音；读音"},
    {"english": "discover", "chinese": "发现；发觉"},
    {"english": "suggest", "chinese": "建议；暗示"},
    {"english": "support", "chinese": "支持；支撑"},
    {"english": "value", "chinese": "价值；重视"},
    {"english": "behave", "chinese": "表现；举止"},
    {"english": "exchange", "chinese": "交换；交流"},
    {"english": "gradually", "chinese": "逐步地；渐渐地"},
    {"english": "overcome", "chinese": "克服；战胜"}
  ]
}
```

</v-click>

---

### 效果

<div class="flex justify-center">
  <video 
    controls 
    autoplay 
    loop 
    muted 
    class="rounded-lg shadow-lg max-h-[400px]"
  >
    <source src="/words.webm" type="video/webm">
  </video>
</div>

---

# 5. 更多案例

#### 随机点名系统（https://roll.zhongpu.info/）

<div class="flex justify-center">
<img src="/roll.png" class="rounded-lg shadow-lg max-h-[180px]" alt="roll"/>


</div>

#### 成绩分析系统（https://grade.zhongpu.info/）

<div class="flex justify-center">
<img src="/grade.png" class="rounded-lg shadow-lg max-h-[220px]" alt="grade"/>


</div>

---

# 6. 软件及大模型选择

建议下载 Claude Code 或 OpenCode 软件，并搭配国内的大模型（如GLM 5.1、Minimax M2.7、Kimi K2.5等）使用，既能保证生成质量，又能获得流畅的使用体验。 

<div class="flex justify-center">
<img src="/codeplan.png" class="rounded-lg shadow-lg max-h-[300px]" alt="grade"/>
</div>

https://docs.bigmodel.cn/cn/coding-plan/tool/claude

---

# 总结

<div class="flex flex-col items-center justify-center h-full gap-8 text-center">

<div class="text-[13px] text-gray-400 uppercase tracking-widest">Andrej Karpathy · OpenAI 联合创始人</div>

<blockquote class="text-4xl font-bold text-gray-800 leading-snug max-w-2xl">
  "The hottest new programming language<br/>is <span class="text-blue-600">English</span>."
</blockquote>

<div class="text-xl text-gray-500 font-light">最热门的编程语言，是人类语言。</div>

<div class="w-16 h-px bg-gray-200 my-2"></div>

<div class="text-2xl font-bold text-gray-700">
  师者，皆可为<span class="text-blue-600">创造者</span>。
</div>

</div>

---
layout: end
---
# 感谢聆听
## Q&A
