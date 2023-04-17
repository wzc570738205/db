<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 16:00:46
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 16:01:13
-->
# **kylin**
## **概述**
Apache Kylin™是一个开源的、分布式的分析型数据仓库，提供Hadoop/Spark 之上的 SQL 查询接口及多维分析（OLAP）能力以支持超大规模数据，最初由 eBay 开发并贡献至开源社区。它能在亚秒内查询巨大的表。

Apache Kylin™ 令使用者仅需三步，即可实现超大数据集上的亚秒级查询。

1 定义数据集上的一个星形或雪花形模型

2 在定义的数据表上构建cube

3 使用标准 SQL 通过 ODBC、JDBC 或 RESTFUL API 进行查询，仅需亚秒级响应时间即可获得查询结果

Kylin 提供与多种数据可视化工具的整合能力，如 Tableau，PowerBI 等，令用户可以使用 BI 工具对 Hadoop 数据进行分析。
## **架构**
Apache Kylin 系统可以分为在线查询和离线构建两部分，技术架构如图所示，在线查询的模块主要处于上半区，而离线构建则处于下半区。

![](/docs/images/dashuju/Aspose.Words.390a89bc-6b49-496d-b349-93be6392fec4.006.png)
## **特点**
1、可扩展超快的基于大数据的分析型数据仓库

Kylin 是为减少在 Hadoop/Spark 上百亿规模数据查询延迟而设计。

2、Hadoop ANSI SQL 接口

作为一个分析型数据仓库(也是 OLAP 引擎)，Kylin 为 Hadoop 提供标准 SQL 支持大部分查询功能。

3、交互式查询能力

通过 Kylin，用户可以与 Hadoop 数据进行亚秒级交互，在同样的数据集上提供比 Hive 更好的性能。

4、多维立方体（MOLAP Cube）

用户能够在 Kylin 里为百亿以上数据集定义数据模型并构建立方体。

5、Job管理与监控

6、压缩与编码

7、增量更新

8、利用HBase Coprocessor

9、基于HyperLogLog的Dinstinc Count近似算法

10、友好的web界面以管理，监控和使用立方体

11、项目及表级别的访问控制安全

12、支持LDAP、SSO
## **优缺点**
## 优点
1.写SQL查询，结果预聚合。

2.有可视化页面。
## **缺点**
1.集群依赖较多，如HBase和Hive等，属于重量级方案，因此运维成本也较高。

2.查询的维度组合数量需要提前确定好，不适合即席查询分析。

3.预计算量大，资源消耗多。