---
theme: seriph
background: bg.jpg
title: 高级数据库技术
info: |
  ## Advanced Database Technologies
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
## Advanced Database Technologies

 
陈中普，zpchen@swufe.edu.cn，2025

<div class="flex justify-center items-center h-60px mt-8px">
    <img src="https://green-img.f2ee.com/edu/swufefull.svg" class="h-full" alt="swufe logo"/>
</div>

----

# 提纲

- ## <span class="text-red">Part 1: DuckDB</span>
- ## <span>Part 2: 向量数据库</span>

---
layout: image-right

image: /DuckDB.svg
---
# 0. 什么是DuckDB？

> DuckDB is a fast **analytical, in-process** database system.

https://en.wikipedia.org/wiki/DuckDB

DuckDB was first released in 2019, and it has over 6 million downloads per month.

<div class="flex justify-center items-center h-160px">
  <img src="/duck-eco.png"  class="h-full border-2 border-blue-500 rounded-lg shadow-xl" alt="duck"/>
</div>

----

## 什么时候使用DuckDB？

对于<span class="text-red">分析性</span>负载，DuckDB：

- 比SQLite更快
- 比PostgreSQL、Spark等更方便
- 比Pandas等消耗资源更少

它目前定位是**几百GB**规模数据集的高效分析。

<div v-click class="flex justify-center items-center h-200px">
  <img src="/book.png"  class="h-full border-2 border-blue-500 rounded-lg shadow-xl" alt="book"/>
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

<v-click>

### DuckDB Web UI

类似Jupyter Notebook的Web UI，支持SQL查询、可视化等。

```bash
duckdb -ui

┌──────────────────────────────────────┐
│                result                │
│               varchar                │
├──────────────────────────────────────┤
│ UI started at http://localhost:4213/ │
└──────────────────────────────────────┘
```

</v-click>

----

# 2. DuckDB和Python生态

https://duckdb.org/docs/stable/clients/python/overview.html


```python
import duckdb

duckdb.sql("SELECT 42").show()
```

----


# 3. DuckDB与其他关系型数据库

DuckDB有丰富的插件系统，包括对PostgreSQL、MySQL等的支持。

```sql
SELECT extension_name, installed, description 
  FROM duckdb_extensions();
```

<div class="flex justify-center items-center h-260px">
  <img src="/pg.png"  class="h-full border-2 border-blue-500 rounded-lg shadow-xl" alt="PG"/>
</div>

```sql
INSTALL 'postgres_scanner';
LOAD 'postgres_scanner';
```

----

## DuckDB与PostgreSQL

https://duckdb.org/docs/stable/core_extensions/postgres.html

```sql
ATTACH 'dbname=mydb user=postgres host=127.0.0.1' AS db (TYPE postgres, SCHEMA 'public');

SELECT * FROM db.instructor WHERE salary IS NULL;
````

<div class="flex justify-center items-center h-300px">
  <img src="/plan.png"  class="h-full border-2 border-blue-500 rounded-lg shadow-xl" alt="plan"/>
</div>

---

# 4. 性能对比

10GB [parquet](https://parquet.apache.org/) 文件的查询性能对比：Pandas在64GB内存的机器上无法执行成功，而DuckDB的运行情况如下：

```
==============================
🦆 开始测试 DuckDB 性能...
==============================
初始内存使用: 127.67 MB
正在执行 DuckDB SQL 查询...

--- DuckDB 结果 ---
     group_id    sum_value1  mean_value2
0  group_1203  1.080376e+06     1.275564
1  group_3053  9.164148e+05     0.309504
2  group_1728  9.145876e+05    -0.966704
3  group_2520  8.930484e+05     1.164954
4  group_4962  8.828860e+05     1.283263
5    group_99  8.763114e+05     1.743920
6  group_1649  8.621380e+05     0.113449
7  group_2937  8.551698e+05     0.962180
8  group_4423  8.442626e+05    -0.104455
9  group_4863  8.388554e+05     0.927213
-------------------
最终内存使用: 707.39 MB (峰值内存增长非常小)
DuckDB 总执行时间: 0.95 秒
```
---

# 提纲

- ## <span>Part 1: DuckDB</span>
- ## <span class="text-red">Part 2: 向量数据库</span>

https://www.dailydoseofds.com/a-beginner-friendly-and-comprehensive-deep-dive-on-vector-databases/