(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{394:function(v,e,r){"use strict";r.r(e);var _=r(42),a=Object(_.a)({},(function(){var v=this,e=v.$createElement,r=v._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"sql-server"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql-server"}},[v._v("#")]),v._v(" "),r("code"),r("strong",[v._v("SQL Server")])]),v._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" "),r("strong",[v._v("概述")])]),v._v(" "),r("p",[v._v("SQL Server是由Microsoft开发和推广的关系数据库管理系统（DBMS），它最初是由Microsoft、Sybase和Ashton-Tate三家公司共同开发的，并于1988年推出了第一个OS/2版本。Microsoft SQL Server近年来不断更新版本，1996年，Microsoft 推出了SQL Server 6.5版本；1998年，SQL Server 7.0版本和用户见面；SQL Server 2000是Microsoft公司于2000年推出，目前最新版本是2019年份推出的SQL SERVER 2019。")]),v._v(" "),r("h2",{attrs:{id:"架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[v._v("#")]),v._v(" "),r("strong",[v._v("架构")])]),v._v(" "),r("h2",{attrs:{id:"体系结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#体系结构"}},[v._v("#")]),v._v(" "),r("strong",[v._v("体系结构")])]),v._v(" "),r("p",[v._v("Microsoft SQL Server 是微软公司开发的一款关系型数据库管理系统，支持 Windows、Linux 以及容器部署。Microsoft SQL Server 采用标准的客户端-服务器体系结构，客户端发送请求到服务端，服务端处理完成之后返回结果到客户端。")]),v._v(" "),r("p",[v._v("Microsoft SQL Server 服务由一个实例（Instance）和多个数据库（Databases）组成，实例包含了后台线程和占用的内存，默认的系统数据库包括 master、model、msdb、Resource 以及 tempdb。")]),v._v(" "),r("p",[v._v("Microsoft SQL Server 的整体系统结构如下：")]),v._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.005.png",alt:""}})]),v._v(" "),r("p",[v._v("主要包含以下三个组件：")]),v._v(" "),r("p",[v._v("1、协议层（Protocol Layer），主要负责客户端的连接请求和数据通信。")]),v._v(" "),r("p",[v._v("2、关系引擎（Relational Engine），主要负责 SQL 语句的解析、优化和执行。")]),v._v(" "),r("p",[v._v("3、存储引擎（Storage Engine），主要负责数据和日志的存储和访问、内存和缓存管理、事务和锁管理。")]),v._v(" "),r("h3",{attrs:{id:"协议层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#协议层"}},[v._v("#")]),v._v(" 协议层")]),v._v(" "),r("p",[v._v("客户端应用首先需要通过 SNI 网络接口（SQL Server Network Interface）与服务器建立连接，Microsoft SQL Server 提供了以下三种协议方式：")]),v._v(" "),r("p",[v._v("1、TCP/IP 协议；")]),v._v(" "),r("p",[v._v("2、共享内存（Shared Memory）协议；")]),v._v(" "),r("p",[v._v("3、命名管道（Named Pipes）协议。")]),v._v(" "),r("h3",{attrs:{id:"关系引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关系引擎"}},[v._v("#")]),v._v(" 关系引擎")]),v._v(" "),r("p",[v._v("Microsoft SQL Server 协议层接收到客户端的请求并处理之后，将语句传递给关系引擎进行处理。关系引擎也成为查询处理器（Query Processor）。关系引擎决定了查询需要执行的操作以及如何最好地实现该操作，负责请求存储引擎获取用户所需的数据并且对结果进行处理，然后通过协议层将结果返回给客户端。")]),v._v(" "),r("p",[v._v("关系引擎包含了以下三个主要部分：")]),v._v(" "),r("p",[v._v("1、命令解析器")]),v._v(" "),r("p",[v._v("命令解析器主要的作用是检查 T-SQL 语句的语法和语义错误，并创建一个内部的查询树（Query Tree）。")]),v._v(" "),r("p",[v._v("Microsoft SQL Server 和其他编程语言一样预定义了很多关键字，同时具有自己的语法格式。例如，SELECT、INSERT、UPDATE、CREATE、DROP 等都属于预定义的关键字。命令解析器首先对输入的语句进行语法检查，如果违反了语法规则，将会返回一个错误。例如：")]),v._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.006.png",alt:""}})]),v._v(" "),r("p",[v._v("其中，SELECT 错写成了 SELECR，所以返回了一个语法错误。")]),v._v(" "),r("p",[v._v("接下来是语义检查，包括表名和字段名是否存在，存在的话将其绑定（Binding）到该查询。如果查询涉及了视图，还会使用视图的定义进行语句替换。例如：")]),v._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.006.png",alt:""}})]),v._v(" "),r("p",[v._v("由于当前模式中不存在表 no_table，查询返回了对象名无效的错误。")]),v._v(" "),r("p",[v._v("完成检查之后，命令解析器为 T-SQL 语句创建一个查询树，然后传递给查询优化器。")]),v._v(" "),r("p",[v._v("2、查询优化器")]),v._v(" "),r("p",[v._v("查询优化器的作用是创建一个执行计划，也就是执行查询语句的具体操作。需要注意的是，并非所有的查询都会进行优化。DML 命令（例如 SELECT、INSERT、DELETE 以及 UPDATE 等）会发送给优化器；DDL 命令（例如 CREATE、ALTER 等）不会进行优化，而是直接编译成内部格式。")]),v._v(" "),r("p",[v._v("查询优化器的输入包括查询语句、数据库模式（表和索引的定义）以及数据库统计信息。 查询优化器的输出称为“查询执行计划”，有时也称为“查询计划”或为“执行计划”。在优化单个 SELECT 语句期间查询优化器的输入和输出如下图中所示：")]),v._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.007.png",alt:"优化"}})]),v._v(" "),r("p",[v._v("Microsoft SQL Server 查询优化器是基于成本的优化器，基于输入参数和各种因素，例如所需的 CPU 使用率、内存以及 I/O 等，对查询成本进行计算，然后找出最佳（而不是成本最低）的执行计划。执行计划包含了从每个表提取数据的方法（表扫描或者索引访问）、多个表的访问顺序、执行计算的方法以及对每个表中的数据进行筛选、聚合和排序的方法。")]),v._v(" "),r("p",[v._v("3、查询执行器")]),v._v(" "),r("p",[v._v("查询执行器负责调用存储引擎执行具体的计划。存储引擎提供了获取数据的访问方法（Access Method），查询执行器将存储引擎返回的数据处理成为结果集定义的格式后，通过协议层将结果集返回客户端。")]),v._v(" "),r("h3",{attrs:{id:"存储引擎"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[v._v("#")]),v._v(" 存储引擎")]),v._v(" "),r("p",[v._v("存储引擎负责存储系统（例如磁盘或者 SAN）中的数据存储和检索。存储引擎包含了 3 个组件：")]),v._v(" "),r("p",[v._v("1、访问方法")]),v._v(" "),r("p",[v._v("访问方法是查询执行器和缓冲管理器/事务日志之间的一个接口。首先，它会判断查询的类型是 SELECT 语句还是 DDL/DML 语句；如果是 SELECT 语句，则将其传递给缓冲管理器进行处理；如果是 DDL 或者 DML 语句（例如 UPDATE），则将其传递给事务管理器进行处理。")]),v._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.008.png",alt:""}})]),v._v(" "),r("p",[v._v("2、缓冲管理器")]),v._v(" "),r("p",[v._v("缓冲管理器实现了以下核心功能模块：")]),v._v(" "),r("ul",[r("li",[v._v("执行计划缓存（Plan Cache）；")]),v._v(" "),r("li",[v._v("数据解析（Data Parsing）：缓冲区缓存（Buffer cache）和数据存储（Data storage）；")]),v._v(" "),r("li",[v._v("脏页（Dirty Page）。")])]),v._v(" "),r("p",[v._v("第一次生成查询计划时，如果计划比较复杂，缓冲管理器会将该查询和相应的执行计划存储到缓存中。缓存管理器对每次查询进行检查，如果服务器接收到相同的查询，可以重用缓存的查询计划和数据。")]),v._v(" "),r("p",[v._v("缓存管理器还提供了数据的访问操作。如果数据已经位于数据缓存（Data cache）中，直接通过缓存返回数据；这种方式减少了磁盘 I/O，提高了数据访问的性能，被称为数据的软解析（Soft Parsing）。")]),v._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.009.png",alt:"软解析"}})]),v._v(" "),r("p",[v._v("如果所需的数据不在数据缓存中，通过磁盘 I/O 访问数据存储设备中的文件，同时将数据存储到缓存中，这种方式被称为数据的硬解析（Hard Parsing）。")]),v._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.010.png",alt:""}})]),v._v(" "),r("p",[v._v("脏页是只内存中被修改过但还没有写入磁盘的数据，它由事务管理器产生，具体参考下文中的事务管理器部分。")]),v._v(" "),r("p",[v._v("3、事务管理器")]),v._v(" "),r("p",[v._v("如果查询属于修改对象或者数据的语句，需要调用事务管理器。事务管理器包括日志管理器（Log Manager）和锁管理器（Log Manager）。")]),v._v(" "),r("p",[v._v("日志管理器利用事务日志（Transaction Log）中的日志项记录了系统的所有更新操作，每条日志记录由一个日志序列号（LSN）标识，同时包含了事务 ID 和数据修改记录。 Microsoft SQL Server 使用预写日志 (Write-ahead Logging) ，可以确保在将相关日志记录写入磁盘后再将数据修改写入磁盘，维护了事务的 ACID 属性。如果系统出现故障，则可能需要使用事务日志将数据库恢复到一致状态。")]),v._v(" "),r("p",[v._v("锁管理器用于在事务处理期间管理事务对所依赖的资源（如行、页或表）上请求的锁。 锁可以阻止其他事务以某种可能会导致事务请求锁出错的方式修改资源，实现事务的隔离性和一致性。")]),v._v(" "),r("p",[v._v("数据库事务的处理流程如下：")]),v._v(" "),r("ul",[r("li",[v._v("日志管理器开始记录日志，同时锁定管理器锁定相关的数据。")]),v._v(" "),r("li",[v._v("在缓冲区缓存中维护数据的副本；")]),v._v(" "),r("li",[v._v("在日志缓冲区中记录被修改数据的前后镜像，并且更新数据缓冲区中的数据副本，此时也就产生了数据的脏页；")]),v._v(" "),r("li",[v._v("检查点线程（Checkpoint）定期将数据脏页和缓冲日志写入磁盘。")]),v._v(" "),r("li",[v._v("SQL Server 通过 Lazy Writer 线程使用 LRU（Least recently Used）算法将数据脏页刷新到磁盘文件。")])]),v._v(" "),r("p",[v._v("另外，Microsoft SQL Server 还提供了基于行版本控制的隔离，数据库引擎将会维护修改的每一行的版本。 应用程序可以指定事务使用行版本查看事务或查询开始时存在的数据，而不是使用锁保护所有读取。 通过使用行版本控制，读取操作阻止其他事务的可能性将大大降低。")]),v._v(" "),r("h2",{attrs:{id:"存储结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#存储结构"}},[v._v("#")]),v._v(" "),r("strong",[v._v("存储结构")])]),v._v(" "),r("p",[v._v("每个 SQL Server 数据库至少具有两个操作系统文件：一个数据文件和一个日志文件。 数据文件包含数据和对象，例如表、索引、存储过程和视图。 日志文件包含恢复数据库中的所有事务所需的信息。 为了便于分配和管理，可以将数据文件集合起来，放到文件组中。")]),v._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.011.png",alt:""}})]),v._v(" "),r("p",[v._v("SQL Server 数据库具有三种类型的文件：")]),v._v(" "),r("p",[v._v("1、主要数据文件（Primary file），包含数据库的启动信息，并指向数据库中的其他文件。 每个数据库有一个主要数据文件。主要数据文件的建议文件扩展名是.mdf。")]),v._v(" "),r("p",[v._v("2、辅助数据文件（Secondary file），用户定义的可选数据文件。 通过将每个文件放在不同的磁盘驱动器上，可将数据分散到多个磁盘中。次要数据文件的建议文件扩展名是.ndf。")]),v._v(" "),r("p",[v._v("3、事务日志文件（Log file），此日志包含用于恢复数据库的信息。 每个数据库必须至少有一个日志文件。 事务日志的建议文件扩展名是.ldf。")]),v._v(" "),r("h2",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[v._v("#")]),v._v(" "),r("strong",[v._v("特性")])]),v._v(" "),r("p",[v._v("1、真正的客户机/服务器体系结构。")]),v._v(" "),r("p",[v._v("2、图形化用户界面，使系统管理和数据库管理更加直观、简单。")]),v._v(" "),r("p",[v._v("3、丰富的编程接口工具，为用户进行程序设计提供了更大的选择余地。")]),v._v(" "),r("p",[v._v("4、SQL Server与Windows NT完全集成，利用了NT的许多功能，如发送和接受消息，管理登录安全性等。SQL Server也可以很好地与Microsoft BackOffice产品集成。")]),v._v(" "),r("p",[v._v("5、具有很好的伸缩性，可跨越从运行Windows 95/98的小型电脑到运行Windows 2000的大型多处理器等多种平台使用。")]),v._v(" "),r("p",[v._v("6、对Web技术的支持，使用户能够很容易地将数据库中的数据发布到Web页面上。")]),v._v(" "),r("p",[v._v("7、SQL Server提供数据仓库功能，这个功能只在Oracle和其他更昂贵的DBMS中才有。")]),v._v(" "),r("p",[v._v("SQL Server 2000与以前版本相比较，又具有以下新特性 ：")]),v._v(" "),r("p",[v._v("1、支持XML(Extensive Markup Language，扩展标记语言)")]),v._v(" "),r("p",[v._v("2、强大的基于Web的分析")]),v._v(" "),r("p",[v._v("3、支持OLE DB和多种查询")]),v._v(" "),r("p",[v._v("4、支持分布式的分区视图")]),v._v(" "),r("p",[v._v("SQL Server 2019在新的功能上可以看到有几个重大方向的内容。")]),v._v(" "),r("p",[v._v("1、大数据群集")]),v._v(" "),r("p",[v._v("2、数据库引擎更多功能")]),v._v(" "),r("p",[v._v("3、新的工具Azure Data Studio")]),v._v(" "),r("h2",{attrs:{id:"使用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[v._v("#")]),v._v(" "),r("strong",[v._v("使用场景")])]),v._v(" "),r("p",[v._v("SQL Server 是一款常用的关系型数据库，功能和mysql类似，性能也相当。主机操作系统为window，主要用于web网站的建设，承载中小型web后台数据。在租赁的虚拟主机中一般会预安装SQL Server作为数据库软件。")]),v._v(" "),r("p",[v._v("局限性：只能运行在微软的windows平台；并行实施和共存模型并不成熟，很难处理日益增多的用户数和数据卷，伸缩性有限；SQLServer当用户连接多时性能会变的很差，并且不够稳定；只支持C/S模式；SQL Server并没有获得相关机构的安全认证。")])])}),[],!1,null,null,null);e.default=a.exports}}]);