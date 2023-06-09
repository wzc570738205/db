<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 16:01:56
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 16:02:12
-->
# **Kingbase AnalyticsDB**
## **概述**
KingbaseAnalyticsDB（简称KADB）是人大金仓为应对大数据时代海量数据分析处理的需求推出的具备高性能、高扩展能力的MPP数据库。它具有分布式集群部署、数据分片无共享存储、大规模并行处理技术（MPP）、数据分区、行列混存、数据库内压缩、MapReduce、在线扩容、内嵌数十种AI算法等技术特点，能满足当前各行业对大量数据采集、存储、挖掘及分析等多种需求的能力。

目前，该产品主要定位于数据分析类应用市场，可处理PB级甚至更大存储量的数据，并能集成多种异构数据源进行数据挖掘和分析，在处理多表连接、聚合等各类复杂查询方面也体现出了很好的性能。
## **架构**
![](/images/dashuju/Aspose.Words.390a89bc-6b49-496d-b349-93be6392fec4.007.png)

MPP数据库并行查询技术主要是为了提升多节点并行查询时的查询性能而设计的。

其设计思路如下：让用户的数据较均匀地分开存放在各集群计算节点上（采用哈希分布或随机分布等）——管理实例接受客户端查询请求——分析请求并生成查询计划——分发查询计划给计算实例并发查询。
## **特点**
## **海量数据存储，弹性扩展**
1、PB级数据存储能力，采用多种存储和压缩方式减少空间占用。

2、在线扩展，减少项目初期投入。
## **内置机器学习能力**
支持库内并行回归、分类、聚类、图计算等机器学习、统计分析算法。
## **MPP架构，完整SQL支持**
1、兼容各类主流ETL、BI工具。

2、高效支持数据仓库类业务高效支持数据仓库类业务法。
## **地理信息处理能力**
支持混合地理信息数据的分析应用。
## **具备开放能力，扩展性强**
1、支持和大数据生态组件高效互访问。

2、通过扩展数据类型和算法可实现行业特有数据的存储计算析应用。
## **应用场景**
## **数据仓库**
业务痛点：企业或组织需要将业务系统中的结构化数据进行清洗转换再汇聚存储，以支撑决策支持系统、商业智能工具实现数据访问的目的。

产品价值：KADB具备MPP和透明扩展能力，可提供可扩展的数据存储和高效SQL计算。同时，可作为数据仓库中的ODS、EDW、DM层使用，并提供外部访问文件系统、HDFS、消息管道等功能。
## **数据探索**
业务痛点：企业或组织需要探索已有的结构化、半结构化数据之间的关联或模式，以建立模型用于预测并指导业务发展。

产品价值：KADB提供可扩展的基于SQL的并行计算框架，内置地理信息算法、机器学习算法、图算法并支持通过R、Python、C编写自定义函数扩展算法，可实现对业务的预测及指导。
## **大数据中心**
业务痛点：高价值密度的结构化数据由于要应对复杂的数据预处理和挖掘，需要高效的优化器支持。并且，经过处理和汇总的数据需要对外提供低延迟的查询方式。

产品价值：KADB支持基于代价的优化器处理复杂的SQL查询，支持流水式并行执行和多种索引处理低延迟SQL查询，可高效支撑数据中心对结构化数据的存储计算需求；同时，KADB支持和大数据组件的互访问及各类主流ETL、BI工具，可作为大数据处理平台的组件或主要入口。