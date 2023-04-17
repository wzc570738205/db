(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{391:function(a,r,t){"use strict";t.r(r);var s=t(42),e=Object(s.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"oracle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[a._v("#")]),a._v(" "),t("strong",[a._v("Oracle")])]),a._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" "),t("strong",[a._v("概述")])]),a._v(" "),t("p",[a._v("Oracle Database，又名Oracle RDBMS，或简称Oracle。是甲骨文公司的一款关系数据库管理系统。它是在数据库领域一直处于领先地位的产品。可以说Oracle数据库系统是目前世界上流行的关系数据库管理系统，系统可移植性好、使用方便、功能强，适用于各类大、中、小微机环境。它是一种高效率的、可靠性好的、适应高吞吐量的数据库方案。")]),a._v(" "),t("h2",{attrs:{id:"架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[a._v("#")]),a._v(" "),t("strong",[a._v("架构")])]),a._v(" "),t("h2",{attrs:{id:"体系结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#体系结构"}},[a._v("#")]),a._v(" "),t("strong",[a._v("体系结构")])]),a._v(" "),t("p",[a._v("一个 Oracle 数据库服务器（database server）由一个数据库（database）以及至少一个数据库实例（database instance，通常简称实例）组成。正是由于实例和数据库之间的关系如此紧密，Oracle database 有时候同时表示实例和数据库。")]),a._v(" "),t("p",[a._v("数据库（Database）：数据库代表磁盘上的一组文件，用于存储数据。这些文件可以独立于实例而存在。")]),a._v(" "),t("p",[a._v("数据库实例（Database instance）：实例是一组内存结构，用于管理数据库文件。实例由一个称为系统全局区（SGA）的共享内存区域以及一组后台进程组成。实例可以独立于数据库文件而存在。")]),a._v(" "),t("p",[a._v("下图显示了一个数据库和它的实例。对于每个连接到实例的用户连接，客户端进程负责运行应用程序。每个客户端进程与自己的服务器进程关联。服务器进程拥有自己的私有会话内存，称为程序全局区（PGA）。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.001.png",alt:""}})]),a._v(" "),t("p",[a._v("图中 SGA 包括数据库缓冲区高速缓存（Database Buffer Cache）、重做日志缓冲区（Redo Log Buffer）、共享池（Shared Pool）、大池（Large Pool）、固定 SGA（Fixed SGA）、Java 池（Java Pool）以及流池（Streams Pool）。SGA 右边是后台进程：PMON、SMON、RECO、MMON、MMNL 等。SGA 下边也是后台进程：DBWn、CKPT、LGWR、ARCn 以及 RVWR。再往下是 PGA 和服务器进程。服务器进程和客户端进程相互连接。客户端进程右边是数据库文件（数据文件、控制文件以及在线重做日志）、归档重做日志以及闪回日志。")]),a._v(" "),t("p",[a._v("虽然严格来说，一个 Oracle 数据库就是一组物理结构（文件和内存结构），应用程序可以与一个物理数据库中的多个逻辑数据库进行交互，也可以与跨越多个物理数据库的一个逻辑数据库进行交互。")]),a._v(" "),t("h2",{attrs:{id:"内存结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存结构"}},[a._v("#")]),a._v(" "),t("strong",[a._v("内存结构")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.002.png",alt:"IMG_256"}})]),a._v(" "),t("p",[a._v("进程（process）是操作系统中能够执行一系列操作的机制。某些操作系统使用其他的术语，包括作业（job）、任务（task）或者线程（thread）。在本节内容中，线程等价于进程。一个 Oracle 数据库实例包含以下进程：")]),a._v(" "),t("p",[a._v("1、客户端进程")]),a._v(" "),t("p",[a._v("这些进程用于运行应用程序代码或者 Oracle 工具。通常客户端进程来自于多个不同的计算机。")]),a._v(" "),t("p",[a._v("2、后台进程")]),a._v(" "),t("p",[a._v("这些进程代替 Oracle 服务器进程完成各种数据库操作。后台进程异步地执行 I/O 操作，并且监控其他 Oracle 数据库进程，提供了更高的并发，获得了更好的性能和可靠性。")]),a._v(" "),t("p",[a._v("3、服务器进程")]),a._v(" "),t("p",[a._v("这些进程用于和客户端进程通信，并且和 Oracle 数据库进行交互，完成各种请求操作。")]),a._v(" "),t("p",[a._v("Oracle 进程包括服务器进程（server process）和后台进程（background process）。在大多数情况下，Oracle 进程和客户端进程运行在不同的计算机上。")]),a._v(" "),t("h2",{attrs:{id:"物理存储结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#物理存储结构"}},[a._v("#")]),a._v(" "),t("strong",[a._v("物理存储结构")])]),a._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.003.png",alt:""}})]),a._v(" "),t("p",[a._v("黄色的部分代表着Oracle的核心组成，分别是数据文件、控制文件以及重做日志文件。除此之外，物理存储结构还包括着一些其他文件，例如参数文件、密码文件以及归档日志文件等等。下面将主要介绍这些文件。")]),a._v(" "),t("h3",{attrs:{id:"数据文件-data-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据文件-data-files"}},[a._v("#")]),a._v(" 数据文件（Data files）")]),a._v(" "),t("p",[a._v("数据文件是指存储数据库中数据的文件，这些“xxxx.dbf”存储着系统数据、数据字典数据、索引数据以及用户存储的数据，所以这部分也是数据库最核心的部分。数据文件大小是灵活的，可以通过设置让它自动扩展，避免了数据量过大但是数据文件空间有限这种状况； 数据文件是专属于一个数据库的，也专属于一个表空间的，但是一个表空间却可以拥有多个数据文件。如果用户读取的数据不在缓冲区内，便会从数据文件中将相对应的数据放到缓冲区中，再进行读取。这部分内容会在之后详细分析。")]),a._v(" "),t("h3",{attrs:{id:"控制文件-control-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制文件-control-files"}},[a._v("#")]),a._v(" 控制文件（Control files）")]),a._v(" "),t("p",[a._v("控制文件是一个很小的二进制文件，这些“xxx.CTL”中存放的数据库的”物理结构信息”，这些物理结构信息包括: 数据库的名字、数据文件和联机日志文件的名字及位置.、创建数据库时的时间戳。数据库在启动的时候需要访问控制文件，从中读取数据文件、日志文件的信息；随着Oracle的运行，数据库将不断更新控制文件；相对应的一旦控制文件损坏，数据库便会发生运行故障。所以为了更好的保护数据库，我们可以镜像控制文件，特别是在数据库结构发生变化时，要对其进行备份，保持控制文件的一致性。")]),a._v(" "),t("h3",{attrs:{id:"重做日志文件-redo-log-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重做日志文件-redo-log-files"}},[a._v("#")]),a._v(" 重做日志文件（Redo Log files）")]),a._v(" "),t("p",[a._v("重做日志文件用于记录数据库所有修改信息 的文件，小名叫做日志文件，这些“.log”文件既可以保证数据库的安全，又可以实现数据库的备份和恢复。为了防止数据出现意外丢失，oracle也允许镜像日志文件，一个日志与其镜像出来的文件构成一个日志文件组，但是镜像文件数量不能超过5个。正所谓所有的鸡蛋不要放在一个篮子里，同一组的文件最好保存在不同的磁盘中，防止物理损坏造成不必要的麻烦。")]),a._v(" "),t("h3",{attrs:{id:"参数文件-parameter-file"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数文件-parameter-file"}},[a._v("#")]),a._v(" 参数文件（Parameter file）")]),a._v(" "),t("p",[a._v("参数文件记录了Oracle数据库的基本参数信息，主要包括数据库名、控制文件所在路径等。参数文件包括文本参数文件（PFILE）和服务器参数文件（SPFILE），前者为init.ora，后者为spfile.ora或spfile.ora的二进制文件。在数据库启动的时候就会读取参数文件，然后根据参数文件中的参数来分配SGA并启动一系列的后台进程。")]),a._v(" "),t("h3",{attrs:{id:"归档日志文件-archived-log-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#归档日志文件-archived-log-files"}},[a._v("#")]),a._v(" 归档日志文件（Archived Log files）")]),a._v(" "),t("p",[a._v("归档日志文件用来对写满的日志文件进行保存复制。其目的是为了长期保存日志以便于恢复。")]),a._v(" "),t("h2",{attrs:{id:"逻辑存储结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#逻辑存储结构"}},[a._v("#")]),a._v(" "),t("strong",[a._v("逻辑存储结构")])]),a._v(" "),t("p",[a._v("在oracle数据库中，对数据库操作会涉及逻辑存储结构，它是从逻辑角度分析数据库的构成，描述的是数据库内部数据的组织与管理方式，与操作系统没有关系。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.004.jpeg",alt:""}})]),a._v(" "),t("p",[a._v("如图，可以明显的看出数据库逻辑结构主要包括表空间、段、区和数据块，所有的结构都是一对多的关系，一个数据库可以拥有多个表空间，一个表空间拥有多个段等等。")]),a._v(" "),t("h3",{attrs:{id:"表空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表空间"}},[a._v("#")]),a._v(" 表空间")]),a._v(" "),t("p",[a._v("表空间是Oracle最大的逻辑存储结构，与物理上的数据文件相对应，但是一个表空间可以拥有多个数据文件，这里就不一一赘述了。")]),a._v(" "),t("h3",{attrs:{id:"段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#段"}},[a._v("#")]),a._v(" 段")]),a._v(" "),t("p",[a._v("段是一组盘区，它是一个独立的逻辑存储结构，用于存储具有独立存储结构对象的全部数据。段一般是数据库终端用户处理最小的存储单位，当段的数据区已满，Oracle为其分配另一个数据区，段的数据区在磁盘上可能是不连续的。根据段所存储的特征，可将其分为5种类型：")]),a._v(" "),t("p",[a._v("1、数据段：用来存储表中所有数据；在Oracle中，每当用户创建一个表时，系统将自动在默认表空间里分配一个与表名称相同的数据段，方便存储该表的所有数据。")]),a._v(" "),t("p",[a._v("2、索引段：用来存储表中索引的所有数据；在Oracle中，每当用户创建索引时，系统将自动在默认表空间创建一个与索引名称相同的索引段，方便存储该索引的所有数据。")]),a._v(" "),t("p",[a._v("3、临时段： 用于存储表排序或汇总时产生的临时数据；")]),a._v(" "),t("p",[a._v("临时表空间进行Order by 进行排列或汇总时，系统在该用户的临时表空间自动创建一个临时段，在操作结束时自动消除。")]),a._v(" "),t("p",[a._v("4、LOB段：LOB用来存储表中大型数据对象，例如CLOB与BLOB")]),a._v(" "),t("p",[a._v("5、回退段：用于存储用户数据被修改之前的位置和值；当与要对用户的数据进行回退操作时，就要使用回退段。")]),a._v(" "),t("h3",{attrs:{id:"区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#区"}},[a._v("#")]),a._v(" 区")]),a._v(" "),t("p",[a._v("区是Oracle存储分配的最小单位，它是由一个或多个数据块组成的。一个或多个区组成一个段，也就是说段的大小都是由区的个数来决定。当一个段的空间使用完之后，Oracle会自动为该字段分配成一个新的区。")]),a._v(" "),t("h3",{attrs:{id:"块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#块"}},[a._v("#")]),a._v(" 块")]),a._v(" "),t("p",[a._v("块是用来管理存储空间的最基本的单位，也是最小的逻辑存储单位。块的大小由初始化参数db_block_size来决定，不同的Oracle版本的大小是不同的，但是数据库一旦创建，其大小便不可更改。虽然每个数据块可以存储不同类型的数据，但是每个数据块都具有一个相同的结构。")]),a._v(" "),t("h2",{attrs:{id:"特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[a._v("#")]),a._v(" "),t("strong",[a._v("特性")])]),a._v(" "),t("h2",{attrs:{id:"完整的数据管理功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整的数据管理功能"}},[a._v("#")]),a._v(" "),t("strong",[a._v("完整的数据管理功能")])]),a._v(" "),t("p",[a._v("1、数据的大量性")]),a._v(" "),t("p",[a._v("2、数据的保存的持久性")]),a._v(" "),t("p",[a._v("3、数据的共享性")]),a._v(" "),t("p",[a._v("4、数据的可靠性")]),a._v(" "),t("h2",{attrs:{id:"完备关系的产品"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完备关系的产品"}},[a._v("#")]),a._v(" "),t("strong",[a._v("完备关系的产品")])]),a._v(" "),t("p",[a._v("1、信息准则---关系型DBMS的所有信息都应在逻辑上用一种方法，即表中的值显式地表示。")]),a._v(" "),t("p",[a._v("2、保证访问的准则。")]),a._v(" "),t("p",[a._v("3、视图更新准则---只要形成视图的表中的数据变化了，相应的视图中的数据同时变化。")]),a._v(" "),t("p",[a._v("4、数据物理性和逻辑性独立准则。")]),a._v(" "),t("h2",{attrs:{id:"分布式处理功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分布式处理功能"}},[a._v("#")]),a._v(" "),t("strong",[a._v("分布式处理功能")])]),a._v(" "),t("p",[a._v("ORACLE数据库自第5版起就提供了分布式处理能力，到第7版就有比较完善的分布式数据库功能了，一个ORACLE分布式数据库由oraclerdbms、sql*Net、SQL*CONNECT和其他非ORACLE的关系型产品构成。")]),a._v(" "),t("p",[a._v("用ORACLE能轻松的实现数据仓库的操作。这是一个技术发展的趋势，不在这里讨论。")]),a._v(" "),t("h2",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" "),t("strong",[a._v("优点：")])]),a._v(" "),t("p",[a._v("1、可用性强")]),a._v(" "),t("p",[a._v("2、可扩展性强")]),a._v(" "),t("p",[a._v("3、数据安全性强")]),a._v(" "),t("p",[a._v("4、稳定性强")]),a._v(" "),t("h2",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[a._v("#")]),a._v(" "),t("strong",[a._v("使用场景")])]),a._v(" "),t("p",[a._v("Oracle是一款大型数据库软件，支撑体系完善，强大。单库可支撑数据量大，安全性高。适用于服务器比较强大的单节点或者集群环境。")]),a._v(" "),t("p",[a._v("主要在传统行业的数据化业务中，比如：银行、金融这样的对可用性、健壮性、安全性、实时性要求极高的业务；零售、物流这样对海量数据存储分析要求很高的业务。此外，高新制造业如芯片厂也基本都离不开Oracle；电商也有很多使用者，如京东（正在投奔Oracle）、阿里巴巴（计划去Oracle化）。")]),a._v(" "),t("p",[a._v("局限性：管理维护麻烦；数据库崩溃后回复很麻烦，因为他把很多东西放在内存里，")]),a._v(" "),t("p",[a._v("数据库连接要慢些，最好用连接池；大对象不好用，vchar2字段太短，不够用；管理员的工作烦，且经验非常重要；  对硬件的要求很高；价格昂贵。")])])}),[],!1,null,null,null);r.default=e.exports}}]);