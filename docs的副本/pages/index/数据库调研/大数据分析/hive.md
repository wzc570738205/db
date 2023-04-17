<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 15:59:27
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 15:59:58
-->
# **hive**
## **概述**
Facebook为了解决海量日志数据的分析而开发了Hive，后来开源给了Apache软件基金会。Hive是一种用类SQL语句来协助读写、管理那些存储在分布式存储系统上大数据集的数据仓库软件。

hive文件存储格式包括以下几类：

TEXTFILE

SEQUENCEFILE

RCFILE

ORCFILE(0.11以后出现)

其中TEXTFILE为默认格式，建表时不指定默认为这个格式，导入数据时会直接把数据文件拷贝到hdfs上不进行处理；SEQUENCEFILE，RCFILE，ORCFILE格式的表不能直接从本地文件导入数据，数据要先导入到textfile格式的表中， 然后再从表中用insert导入SequenceFile,RCFile,ORCFile表中。
## **架构**
![](/docs/images/dashuju/Aspose.Words.390a89bc-6b49-496d-b349-93be6392fec4.001.png)

如图:Hive通过用户提供的一系列交互接口,接收到用户的指令(SQL),使用自己的Driver,结合元数据(MetaStore),将这些指令翻译成MapReduce,提交到Hadoop中执行,最后,将执行返回的结果输出到用户交互接口。具体详情如下：

用户接口:Client CLI(hive shell 命令行),JDBC/ODBC(java访问hive),WEBUI(浏览器访问hive)

元数据:Metastore:元数据包括:表名,表所属数据库(默认是default) ,表的拥有者,列/分区字段,表的类型(是否是外部表),表的数据所在目录等

默认存储在自带的derby数据库中,推荐使用MySQL存储Metastore

存储:hive 使用HDFS进行存储,使用MapReduce进行计算

驱动器:Driver

解析器(SQL Parser):将SQL字符转换成抽象语法树AST,这一步一般使用都是第三方工具库完成,比如antlr,对AST进行语法分析,比如表是否存在,字段是否存在,SQL语句是否有误

编译器(Physical Plan):将AST编译生成逻辑执行计划

优化器(Query Optimizer):对逻辑执行计划进行优化

执行器(Execution):把逻辑执行计划转换成可以运行的物理计划,对于Hive来说,就是MR/Spark

![](/docs/images/dashuju/Aspose.Words.390a89bc-6b49-496d-b349-93be6392fec4.002.png)
## **特点**
1、Hive最大的特点是通过类SQL来分析大数据，而避免了写MapReduce程序来分析数据，这样使得分析数据更容易。

2、数据是存储在HDFS上的，Hive本身并不提供数据的存储功能

3、Hive是将数据映射成数据库和一张张的表，库和表的元数据信息一般存在关系型数据库上（比如MySQL）。

4、数据存储方面：它能够存储很大的数据集，并且对数据完整性、格式要求并不严格。

5、数据处理方面：因为Hive语句最终会生成MapReduce任务去计算，所以不适用于实时计算的场景，它适用于离线分析。
## **优缺点**
## **优点**
1 操作接口采用类SQL语法，提供快速开发的能力（简单、容易上手）。

2 避免了去写MapReduce，减少开发人员的学习成本。

3 Hive的执行延迟比较高，因此Hive常用于数据分析，对实时性要求不高的场合。

4 Hive优势在于处理大数据，对于处理小数据没有优势，因为Hive的执行延迟比较高。

5 Hive支持用户自定义函数，用户可以根据自己的需求来实现自己的函数。
## **缺点**
1 Hive的HQL表达能力有限。迭代式算法无法表达，数据挖掘方面不擅长，由于MapReduce数据处理流程的限制，效率更高的算法却无法实现。

2 Hive的效率比较低。Hive自动生成的MapReduce作业，通常情况下不够智能化，Hive调优比较困难，粒度较粗。