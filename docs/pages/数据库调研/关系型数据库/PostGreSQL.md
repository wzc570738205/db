# ` `**PostGreSQL**
## **概述**
PostgreSQL是一种特性非常齐全的自由软件的对象-关系型数据库管理系统（ORDBMS），是以加州大学计算机系开发的POSTGRES 4.2版本为基础的对象关系型数据库管理系统。POSTGRES的许多领先概念只是在比较迟的时候才出现在商业网站数据库中。PostgreSQL支持大部分的SQL标准并且提供了很多其他现代特性，如复杂查询、外键、触发器、视图、事务完整性、多版本并发控制等。同样，PostgreSQL也可以用许多方法扩展，例如通过增加新的数据类型、函数、操作符、聚集函数、索引方法、过程语言等。另外，因为许可证的灵活，任何人都可以以任何目的免费使用、修改和分发PostgreSQL。
## **架构**
## **体系结构**
PostgreSQL数据库由连接管理系统（系统控制器）、编译执行系统、存储管理系统、事务系统、系统表五大部分组成，其组成结构和关系如图所示。

![](/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.019.jpeg)

连接管理系统接受外部操作对系统的请求，对操作请求进行预处理和分发，起系统逻辑控制作用；

编译执行系统由查询编译器、查询执行器组成，完成操作请求在数据库中的分析处理和转化工作，最终实现物理存储介质中数据的操作；

存储管理系统由索引管理器、内存管理器、外存管理器组成，负责存储和管理物理数据，提供对编译查询系统的支持；

事务系统由事务管理器、日志管理器、并发控制、锁管理器组成，日志管理器和事务管理器完成对操作请求处理的事务一致性支持，锁管理器和并发控制提供对并发访问数据的一致性支持；

系统表是PostgreSQL数据库的元信息管理中心，包括数据库对象信息和数据库管理控制信息。系统表管理元数据信息，将PostgreSQL数据库的各个模块有机地连接在一起，形成一个高效的数据管理系统。
## **存储结构**
数据库的文件默认保存在initdb时创建的数据库目录中。

|目录|用途|
| :-: | :-: |
|base|包含每个数据库对应的子目录的子目录|
|文件|用途|
|PG\_VERSION|Postgresql主版本号文件|
|pg\_hba.conf|客户端认证控制文件|
|postgresql.conf|参数文件|

数据库本身也是数据库对象，一个数据库集簇可以包含多个Database、多个User。每个Database以及Database中的所有对象都有他们的所有者即user。

![在这里插入图片描述](/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.020.png)

创建一个Database时会为这个Database创建一个名为public的默认Schema。每个Database可以有多个Schema。 可以将schema理解为名称空间。不同的schema可以有相同的Table、index、view等。
## **特性**
PostgreSQL 是世界上可以获得的最先进的开放源码的数据库系统，它提供了多版本并行控制，支持几乎所有SQL构件（包括子查询、事务和用户定义类型和函数），并且可以获得非常广阔范围的(开发)语言绑定（包括 C、C++、Java、perl、tcl和python）。具体的优点特性如下：

1、PostgreSQL 的特性覆盖了 SQL-2/SQL-92 和 SQL-3/SQL-99，是目前世界上支持最丰富的数据类型的数据库。

2、PostgreSQL 是全功能的自由软件数据库，PostgreSQL 是唯一支持事务、子查询、多版本并行控制系统、数据完整性检查等特性的唯一的一种自由软件的数据库管理系统。

3、PostgreSQL 采用的是比较经典的 C/S (client/server)结构，也就是一个客户端对应一个服务器端守护进程的模式，这个守护进程分析客户端来的查询请求，生成规划树，进行数据检索并最终把结果格式化输出后返回给客户端。

4、PostgreSQL 对接口的支持也是非常丰富的，几乎支持所有类型的数据库客户端接口。
## **使用场景**
## **1.企业数据库**
如 ERP、交易系统、财务系统涉及资金、客户等信息，数据不能丢失且业务逻辑复杂，选择 PostgreSQL 作为数据底层存储，一是可以帮助您在数据一致性前提下提供高可用性，二是可以用简单的编程实现复杂的业务逻辑。
## **2.含 LBS 的应用**
大型游戏、O2O 等应用需要支持世界地图、附近的商家，两个点的距离等能力，PostGIS 增加了对地理对象的支持，允许您以 SQL 运行位置查询，而不需要复杂的编码，帮助您更轻松理顺逻辑，更便捷的实现 LBS，提高用户粘性。
## **3.数据仓库和大数据**
PostgreSQL 更多数据类型和强大的计算能力，能够帮助您更简单搭建数据库仓库或大数据分析平台，为企业运营加分。
## **4.建站或 App**
PostgreSQL 良好的性能和强大的功能，可以有效的提高网站性能，降低开发难度。