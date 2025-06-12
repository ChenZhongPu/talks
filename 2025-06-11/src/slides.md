---
theme: seriph
background: https://green-img.f2ee.com/edu/bg.jpg
title: 高级数据库技术
info: |
  ## DuckDB In Action
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

# 高级数据库技术
## DuckDB In Action


陈中普，zpchen@swufe.edu.cn，2025

<div class="flex justify-center items-center h-60px mt-8px">
    <img src="https://green-img.f2ee.com/edu/swufefull.svg" class="h-full" alt="swufe logo"/>
</div>

---
layout: image-right

image: /DuckDB.svg
---
# 0. 什么是DuckDB？

> DuckDB is a fast **analytical, in-process** database system.

https://en.wikipedia.org/wiki/DuckDB

DuckDB was first released in 2019, and it has over 6 million downloads per month.

<div class="flex justify-center items-center h-160px">
  <img src="/duck-eco.png"  class="h-full border-2 border-blue-500 rounded-lg shadow-xl" alt="QA"/>
</div>

----

## 什么时候使用DuckDB？

对于分析性负载，DuckDB：

- 比SQLite更快
- 比PostgreSQL、Spark等更方便
- 比Pandas等消耗资源更少

它目前定位是**几百GB**规模数据集的分析。

<div v-click class="flex justify-center items-center h-200px">
  <img src="/book.png"  class="h-full border-2 border-blue-500 rounded-lg shadow-xl" alt="QA"/>
</div>

---

# 1. 初识DuckDB

> DuckDB支持命令行界面和Python、R等多种语言的API。

```bash
duckdb -s "SELECT COUNT(*) FROM 'countries-of-the-world.csv'"
┌──────────────┐
│ count_star() │
│    int64     │
├──────────────┤
│     227      │
└──────────────┘
```

```bash
duckdb -csv \
    -s "SELECT Country, Population
    FROM 'countries-of-the-world.csv' \
    WHERE trim(region) = 'WESTERN EUROPE'" \
    > western-europe.csv
```

```bash
duckdb -s "FROM 'western-europe.csv' LIMIT 5"
```
---

```bash
🦆> .mode line
🦆> SUMMARIZE FROM 'western-europe.csv';
    column_name = Country
    column_type = VARCHAR
            min = Andorra
            max = United Kingdom
  approx_unique = 27
            avg = NULL
            std = NULL
            q25 = NULL
            q50 = NULL
            q75 = NULL
          count = 28
null_percentage = 0.00

    column_name = Population
    column_type = BIGINT
            min = 27928
            max = 82422299
  approx_unique = 30
            avg = 14154999.92857143
            std = 23158786.43657127
            q25 = 73321
            q50 = 4921096
            q75 = 10646964
          count = 28
null_percentage = 0.00
```

---

```bash
🦆> CREATE TABLE Europe
    AS SELECT * FROM 'western-europe.csv';

🦆> DESCRIBE Europe;
┌─────────────┬─────────────┬─────────┬─────────┬─────────┬─────────┐
│ column_name │ column_type │  null   │   key   │ default │  extra  │
│   varchar   │   varchar   │ varchar │ varchar │ varchar │ varchar │
├─────────────┼─────────────┼─────────┼─────────┼─────────┼─────────┤
│ Country     │ VARCHAR     │ YES     │ NULL    │ NULL    │ NULL    │
│ Population  │ BIGINT      │ YES     │ NULL    │ NULL    │ NULL    │
└─────────────┴─────────────┴─────────┴─────────┴─────────┴─────────┘

🦆> SELECT Country FROM Europe WHERE Population > 1400000 USING SAMPLE 10%;
```