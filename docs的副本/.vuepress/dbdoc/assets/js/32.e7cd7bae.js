(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{389:function(v,_,d){"use strict";d.r(_);var b=d(42),l=Object(b.a)({},(function(){var v=this,_=v.$createElement,d=v._self._c||_;return d("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[d("h1",{attrs:{id:"db2"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#db2"}},[v._v("#")]),v._v(" "),d("code"),d("strong",[v._v("DB2")])]),v._v(" "),d("h2",{attrs:{id:"概述"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" "),d("strong",[v._v("概述")])]),v._v(" "),d("p",[v._v("IBM DB2 是美国IBM公司开发的一套关系型数据库管理系统，它主要的运行环境为UNIX（包括IBM自家的AIX）、Linux、IBM i（旧称OS/400）、z/OS，以及Windows服务器版本。")]),v._v(" "),d("p",[v._v("DB2主要应用于大型应用系统，具有较好的可伸缩性，可支持从大型机到单用户环境，应用于所有常见的服务器操作系统平台下。 DB2提供了高层次的数据利用性、完整性、安全性、可恢复性，以及小规模到大规模应用程序的执行能力，具有与平台无关的基本功能和SQL命令。DB2采用了数据分级技术，能够使大型机数据很方便地下载到LAN数据库服务器，使得客户机/服务器用户和基于LAN的应用程序可以访问大型机数据，并使数据库本地化及远程连接透明化。 DB2以拥有一个非常完备的查询优化器而著称，其外部连接改善了查询性能，并支持多任务并行查询。 DB2具有很好的网络支持能力，每个子系统可以连接十几万个分布式用户，可同时激活上千个活动线程，对大型分布式应用系统尤为适用。")]),v._v(" "),d("p",[v._v("DB2除了可以提供主流的OS/390和VM操作系统，以及中等规模的AS/400系统之外，IBM还提供了跨平台（包括基于UNIX的LINUX，HP-UX，SunSolaris，以及SCOUnixWare；还有用于个人电脑的OS/2操作系统，以及微软的Windows 2000和其早期的系统）的DB2产品。DB2数据库可以通过使用微软的开放数据库连接（ODBC）接口，Java数据库连接（JDBC）接口，或者CORBA接口代理被任何的应用程序访问。")]),v._v(" "),d("h2",{attrs:{id:"架构"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[v._v("#")]),v._v(" "),d("strong",[v._v("架构")])]),v._v(" "),d("h2",{attrs:{id:"体系结构"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#体系结构"}},[v._v("#")]),v._v(" "),d("strong",[v._v("体系结构")])]),v._v(" "),d("p",[v._v("在客户机端，本地或远程应用程序与 Db2 客户机库链接。本地客户机使用共享内存和信号进行通信；远程客户机使用协议（例如命名管道 (NPIPE) 或 TCP/IP）进行通信。在服务器端，活动由引擎可分派单元 (EDU) 控制。")]),v._v(" "),d("p",[d("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.012.png",alt:"此图显示客户机连接和数据库服务器组件"}})]),v._v(" "),d("p",[v._v("EDU 在所有平台上都作为线程实现。Db2 代理程序是最常见的 EDU 类型。这些代理程序代表应用程序执行大量 SQL 和 XQuery 处理。其他常见的 EDU 包括预取程序和页清除程序。")]),v._v(" "),d("p",[v._v("可以指定一组子代理程序来处理客户机应用程序请求。如果服务器所在的机器包含多个处理器或者是分区数据库环境的组成部分，那么可以指定多个子代理程序。例如，在对称多处理 (SMP) 环境中，多个 SMP 子代理程序可以利用多个处理器。")]),v._v(" "),d("p",[v._v("所有代理程序和子代理程序都由一个共享算法管理，该算法将最大程度地减少创建和破坏 EDU 的操作。")]),v._v(" "),d("p",[v._v("缓冲池是数据库服务器内存中的一个区域，用户数据页、索引数据页和目录数据页被临时地移至该区域，并可以在该处被修改。由于访问内存中的数据比访问磁盘中的数据快得多，因此缓冲池是数据库性能的重要决定因素。")]),v._v(" "),d("p",[v._v("缓冲池以及预取程序和页清除程序 EDU 的配置决定了应用程序能够多快地访问数据。")]),v._v(" "),d("p",[v._v("预取程序在应用程序需要数据之前从磁盘检索该数据，并将其移入缓冲池。例如，如果没有数据预取程序，那么需要扫描大量数据的应用程序将必须等待数据从磁盘移入缓冲池。应用程序的代理程序将异步预读取请求发送至公共预取队列。当预取程序可用时，它们使用大块或散射读取输入操作将请求的页从磁盘读入缓冲池，从而实现那些请求。如果使用多个磁盘来存储数据，那么可以采用条带分割技术将数据分布到那些磁盘上。条带分割技术使预取程序能够同时使用多个磁盘来检索数据。")]),v._v(" "),d("p",[v._v("页清除程序将数据从缓冲池移回到磁盘。页清除程序是独立于应用程序代理程序的后台 EDU。它们将查找已被修改的页，并将那些已更改的页写入磁盘。页清除程序确保缓冲池中有空间供预取程序正在检索的页使用。")]),v._v(" "),d("p",[v._v("如果没有独立的预取程序和页清除程序 EDU，那么应用程序代理程序将必须执行缓冲池与磁盘存储器之间的所有数据读取和写入操作。")]),v._v(" "),d("h2",{attrs:{id:"处理模型"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#处理模型"}},[v._v("#")]),v._v(" "),d("strong",[v._v("处理模型")])]),v._v(" "),d("p",[v._v("Db2 处理模型的知识可帮助您了解数据库管理器及其关联组件如何交互。此知识可帮助您诊断可能发生的问题。")]),v._v(" "),d("p",[v._v("所有 Db2 数据库服务器使用的处理模型都旨在简化数据库服务器与客户机之间的通信。它还确保数据库应用程序独立于数据库控制块和关键数据库文件之类的资源。")]),v._v(" "),d("p",[v._v("Db2 数据库服务器必须执行各种不同的任务，例如处理数据库应用程序请求，或者确保将日志记录写入磁盘。通常，每项任务都由一个独立的引擎可分派单元 (EDU) 执行。")]),v._v(" "),d("p",[v._v("采用多线程体系结构对于 Db2 数据库服务器而言有很多优点。由于同一进程内的所有线程可以共享一些操作系统资源，因此，新线程需要的内存和操作系统资源比进程要少。此外，在某些平台上，线程的上下文切换时间比进程短，这有助于提高性能。在所有平台上使用线程模型使得 Db2 数据库服务器更易于配置，因为这样更容易根据需要分配更多 EDU，并且可以动态分配必须由多个 EDU 共享的内存。")]),v._v(" "),d("p",[v._v("对于所访问的每个数据库，将启动不同的 EDU 以处理各种数据库任务，例如预取、通信和日志记录。数据库代理程序是一类特殊的 EDU，创建它们是为了处理应用程序对数据库的请求。")]),v._v(" "),d("p",[v._v("通常，您可以依靠 Db2 数据库服务器来管理 EDU 集合。但是，也可以通过一些 Db2 工具来管理 EDU。例如，可以使用带有 -edus 选项的 db2pd 命令来列示所有活动的 EDU 线程。")]),v._v(" "),d("p",[v._v("每个客户机应用程序连接都有一个对数据库执行操作的协调代理程序。协调代理程序代表应用程序工作，并根据需要使用专用内存、进程间通信 (IPC) 或远程通信协议与其他代理程序进行通信。")]),v._v(" "),d("p",[v._v("在 Db2 pureScale® 实例中，这些进程用于监视主机上运行的 Db2 成员和/或集群高速缓存工具 (CF) 的运行状况，以及将集群状态分发至实例中的所有 Db2 成员和 CF。")]),v._v(" "),d("p",[v._v("Db2 体系结构提供了一个防火墙，以使应用程序与 Db2 数据库服务器在不同的地址空间中运行。防火墙将数据库和数据库管理器与应用程序、存储过程和用户定义函数 (UDF) 隔开。此防火墙有助于维护数据库中数据的完整性，这是因为，它将阻止应用程序编程错误覆盖内部缓冲区或数据库管理器文件。此防火墙还提高了可靠性，原因是应用程序错误不会导致数据库管理器崩溃。")]),v._v(" "),d("p",[d("img",{attrs:{src:"/docs/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.013.png",alt:"Db2 数据库系统的处理模型的图形表示"}})]),v._v(" "),d("h3",{attrs:{id:"客户机程序"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#客户机程序"}},[v._v("#")]),v._v(" 客户机程序")]),v._v(" "),d("p",[v._v("客户机程序可以是远程程序，也可以是在数据库服务器所在机器上运行的本地程序。客户机程序首先通过通信侦听器与数据库联系。")]),v._v(" "),d("h3",{attrs:{id:"侦听器"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#侦听器"}},[v._v("#")]),v._v(" 侦听器")]),v._v(" "),d("p",[v._v("通信侦听器在 Db2 数据库服务器启动时启动。每种已配置的通信协议都有一个侦听器，本地客户机程序使用进程间通信 (IPC) 侦听器 (db2ipccm)。侦听器包括：")]),v._v(" "),d("p",[v._v("（1）db2ipccm，用于本地客户机连接")]),v._v(" "),d("p",[v._v("（2）db2tcpcm，用于 TCP/IP 连接")]),v._v(" "),d("p",[v._v("（3）db2tcpdm，用于 TCP/IP 发现工具请求")]),v._v(" "),d("h3",{attrs:{id:"代理程序"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#代理程序"}},[v._v("#")]),v._v(" 代理程序")]),v._v(" "),d("p",[v._v("将为所有来自本地或远程客户机程序（应用程序）的连接请求分配相应的协调代理程序 (db2agent)。创建协调代理程序之后，它将代表该应用程序执行所有数据库请求。")]),v._v(" "),d("p",[v._v("在分区数据库环境或者已启用查询内并行性的系统中，协调代理程序会将数据库请求分发给子代理程序（db2agntp 和 db2agnts）。与应用程序相关联但当前处于空闲状态的子代理程序名为 db2agnta。")]),v._v(" "),d("p",[v._v("协调代理程序可能：")]),v._v(" "),d("p",[v._v("（1） 已通过别名连接到数据库；例如，db2agent (DATA1) 将连接到数据库别名 DATA1。")]),v._v(" "),d("p",[v._v("（2）已连接到实例；例如 db2agent (user1) 将连接到实例 user1。")]),v._v(" "),d("p",[v._v("Db2 数据库服务器还会将其他类型的代理程序（例如独立的协调代理程序或子协调代理程序）实例化，以便执行特定的操作。例如，独立的协调代理程序 db2agnti 用于运行事件监视器，而子协调代理程序 db2agnsc 用于在异常关闭后以并行方式执行数据库重新启动操作。")]),v._v(" "),d("p",[v._v("网关代理程序 (db2agentg) 是一个与远程数据库相关联的代理程序。它提供用于允许客户机访问主机数据库的间接连接。")]),v._v(" "),d("p",[v._v("空闲代理程序驻留在代理程序池中。这些代理程序可用于处理来自代表客户机程序运行的协调代理程序或来自代表现有协调代理程序运行的子代理程序的请求。当存在大量应用程序工作负载时，配备大小适当的空闲代理程序池有助于提高性能。在这种情况下，可以根据需要立即使用空闲代理程序，而不需要为每个应用程序连接分配新的代理程序，后一种情况涉及创建线程以及分配并初始化内存和其他资源。Db2 数据库服务器自动管理空闲代理池的大小。")]),v._v(" "),d("p",[v._v("可将合用代理程序关联到远程数据库或本地数据库。 在远程数据库上合用的代理程序称为合用网关代理程序 (db2agntgp)。在本地数据库上合用的代理程序称为合用数据库代理程序 (db2agntdp)。")]),v._v(" "),d("p",[v._v("1、db2fmp")]),v._v(" "),d("p",[v._v("受保护方式进程负责在防火墙外执行受防护的存储过程和用户定义函数。db2fmp 进程始终是独立的进程，但可能是多线程进程，这取决于它执行的例程的类型。")]),v._v(" "),d("p",[v._v("2、db2vend")]),v._v(" "),d("p",[v._v("db2vend 进程代表 EDU 执行供应商代码；例如，执行用户出口程序以进行日志归档（仅适用于 UNIX）。")]),v._v(" "),d("ol",[d("li",[v._v("数据库 EDU")])]),v._v(" "),d("p",[v._v("以下列表包括每个数据库使用的一些重要 EDU：")]),v._v(" "),d("ul",[d("li",[v._v("db2cmpd，用于压缩守护程序执行与压缩相关的任务。在分区数据库环境中，db2cmpd EDU 在每个分区上独立运行。")]),v._v(" "),d("li",[v._v("db2dlock，用于死锁检测。在分区数据库环境中，使用另一个线程 (db2glock) 来协调 db2dlock EDU 从每个分区中收集的信息；db2glock 仅对目录分区运行。在 Db2 pureScale 环境中，db2glock EDU 用于协调 db2dlock EDU 在每个成员上收集的信息。db2glock EDU 在每个成员上启动，但只有一个 EDU 处于活动状态。")]),v._v(" "),d("li",[v._v("db2fw，事件监视器快速写程序；用于对表、文件或管道进行事件监视器数据的大量、并行写入。")]),v._v(" "),d("li",[v._v("db2fwx，事件监视器快速写程序线程，其中“x”标识线程号。在数据库激活期间，Db2 引擎会将 db2fwx 线程数目设置为一个值，该值对于事件监视器性能最佳，而且可以避免在运行不同类型的工作负载时发生潜在的性能问题。db2fwx 线程数目等于系统上逻辑 CPU 的数目（对于多核心 CPU，每个核心看作一个逻辑 CPU）。对于 DPF 实例，衍生的 db2fwx 线程数目等于每个数据库的每个成员的逻辑 CPU 数目除以主机上的本地分区数目。")]),v._v(" "),d("li",[v._v("db2hadrp，高可用性灾难恢复 (HADR) 主服务器线程")]),v._v(" "),d("li",[v._v("db2hadrs，HADR 备用服务器线程")]),v._v(" "),d("li",[v._v("db2lfr，用于处理各个日志文件的日志文件阅读器")]),v._v(" "),d("li",[v._v("db2loggp，用于定期日志工作，例如，确定恢复窗口")]),v._v(" "),d("li",[v._v("db2loggr，用于处理日志文件以处理事务处理和恢复")]),v._v(" "),d("li",[v._v("db2loggw，用于将日志记录写入日志文件")]),v._v(" "),d("li",[v._v("db2loggx，用于高级日志空间管理涉及到的日志抽取。")]),v._v(" "),d("li",[v._v("db2logmgr，用于日志管理器。管理可恢复数据库的日志文件。")]),v._v(" "),d("li",[v._v("db2logts，用于跟踪哪些表空间在哪些日志文件中有日志记录。此信息记录在数据库目录中的 DB2TSCHG.HIS 文件中。")]),v._v(" "),d("li",[v._v("db2lused，用于更新对象用途")]),v._v(" "),d("li",[v._v("db2mcd，用于管理用于表元数据的内存")]),v._v(" "),d("li",[v._v("db2pclnr，用于缓冲池页清除程序")]),v._v(" "),d("li",[v._v("db2pcsd，用于程序包高速缓存的自动清除")]),v._v(" "),d("li",[v._v("db2pfchr，用于缓冲池预取程序")]),v._v(" "),d("li",[v._v("db2pkgrb，用于自动重新绑定无效程序包。在数据库目录节点启动期间，db2pkgrb 尝试一次重新绑定每个无效程序包。如果未禁用自动重新验证（即，auto_reval 数据库配置参数未设置为 DISABLED），那么 db2pkgrb 还将尝试重新绑定每个不可用程序包。之后，它将关闭，直到下次启动。在它即将终止之前，如果它已完成对列表的处理，那么会在 INF 级别将一条摘要消息写入 diag.log。如果这是升级之后第一次尝试重新绑定，那么任何失败重新绑定的详细消息都将在 INF 级别写入 diag.log。对于所有其他启动，只会生成摘要消息。")]),v._v(" "),d("li",[v._v("db2redom，用于重做主进程。在恢复期间，它处理重做日志记录并将日志记录指定给重做工作程序来进行处理。")]),v._v(" "),d("li",[v._v("db2redow，用于重做工作程序。在恢复期间，它按照重做主进程的请求来处理重做日志记录。")]),v._v(" "),d("li",[v._v("db2shred，用于处理日志页中的各个日志记录。")]),v._v(" "),d("li",[v._v("db2stmm，用于自调整内存管理功能。")]),v._v(" "),d("li",[v._v("db2taskd，用于分发后台数据库任务。这些任务由名为 db2taskp 的线程执行。")]),v._v(" "),d("li",[v._v("db2wlmd，用于自动收集工作负载管理统计信息")]),v._v(" "),d("li",[v._v("事件监视器线程的标识方式如下：")])]),v._v(" "),d("p",[v._v("db2evm%1%2 (%3)，其中，%1 可以是：")]),v._v(" "),d("ul",[d("li",[v._v("g - 全局文件事件监视器")]),v._v(" "),d("li",[v._v("gp - 全局管道事件监视器")]),v._v(" "),d("li",[v._v("l - 本地文件事件监视器")]),v._v(" "),d("li",[v._v("lp - 本地管道事件监视器")]),v._v(" "),d("li",[v._v("t - 表事件监视器")])]),v._v(" "),d("p",[v._v("%2 可以是：")]),v._v(" "),d("ul",[d("li",[v._v("i - 协调程序")]),v._v(" "),d("li",[v._v("p - 不是协调程序")]),v._v(" "),d("li",[v._v("而 %3 是事件监视器名称")]),v._v(" "),d("li",[v._v("备份和复原线程的标识方式如下：")])]),v._v(" "),d("p",[v._v("db2bm.%1.%2（备份和复原缓冲区操纵程序）和 db2med.%1.%2（备份和复原介质控制器），其中：")]),v._v(" "),d("ul",[d("li",[v._v("%1 是用于控制备份或复原会话的代理程序的 EDU 标识")]),v._v(" "),d("li",[v._v("%2 是用于区分属于特定备份或复原会话的线程（可能有许多个）的顺序值")])]),v._v(" "),d("p",[v._v("例如：db2bm.13579.2 标识具有 EDU 标识为 13579 的 db2agent 线程控制的第二个 db2bm 线程。")]),v._v(" "),d("ul",[d("li",[v._v("以下数据库 EDU 用于在 Db2 pureScale 环境中锁定：")])]),v._v(" "),d("p",[v._v("db2LLMn1，用于处理全局锁定管理器发送的信息；每个成员上有其中两个 EDU；一个用于主 CF，另一个用于辅助 CF")]),v._v(" "),d("ul",[d("li",[v._v("db2LLMn2，用于处理全局锁定管理器为数据库激活和取消激活期间使用的特别锁定类型发送的信息；每个成员上有其中两个 EDU，一个用于主 CF，另一个用于辅助 CF")]),v._v(" "),d("li",[v._v("db2LLMng，用于确保此成员挂起的锁定及时释放（如果其他成员在等待这些锁定）")]),v._v(" "),d("li",[v._v("db2LLMrl，用于处理全局锁定管理器的锁定的释放")]),v._v(" "),d("li",[v._v("db2LLMrc，用于处理数据库恢复操作及 CF 恢复期间发生的处理")])]),v._v(" "),d("ol",[d("li",[v._v("数据库服务器线程和进程")])]),v._v(" "),d("p",[v._v("系统控制器（在 UNIX 上为 db2sysc，在 Windows 操作系统上为 db2syscs.exe）必须存在，这样数据库服务器才能工作。以下线程和进程执行各种任务：")]),v._v(" "),d("ul",[d("li",[v._v("db2acd，用于主管运行状况监视器、自动维护实用程序和管理任务调度程序的自主计算守护程序。此进程以前称为 db2hmon。")]),v._v(" "),d("li",[v._v("db2aiothr，用于管理数据库分区的异步 I/O 请求（仅适用于 UNIX）")]),v._v(" "),d("li",[v._v("db2alarm，用于在他们请求的计时器到期时通知 EDU（仅适用于 UNIX）")]),v._v(" "),d("li",[v._v("db2disp，客户机连接集中器分派器")]),v._v(" "),d("li",[v._v("db2fcms，快速通信管理器发送方守护程序")]),v._v(" "),d("li",[v._v("db2fcmr，快速通信管理器接收方守护程序")]),v._v(" "),d("li",[v._v("db2fmd，故障监视器守护程序")]),v._v(" "),d("li",[v._v("db2iperiodic，任务调度程序线程。这些任务由名为 db2iperiodicWatch<task_number> 和 db2iperiodicExec<task_number> 的线程执行。")]),v._v(" "),d("li",[v._v("db2licc，管理已安装的 Db2 许可证")]),v._v(" "),d("li",[v._v("db2panic，应急启动代理程序，用于在达到代理程序限制后处理紧急请求。")]),v._v(" "),d("li",[v._v("db2pdbc，并行系统控制器，用来处理来自远程数据库分区的并行请求（用于分区数据库环境和 Db2 pureScale 环境）")]),v._v(" "),d("li",[v._v("db2resync，扫描全局再同步列表的再同步代理进程")]),v._v(" "),d("li",[v._v("db2rocm 和 db2rocme，在 Db2 pureScale 实例中，这些进程监视每台主机上运行的 Db2 成员和集群高速缓存工具 (CF) 的操作状态，并将集群状态信息分发至该实例中的所有 Db2 成员和 CF。")]),v._v(" "),d("li",[v._v("db2sysc，主系统控制器 EDU；它处理重要的 Db2 服务器事件")]),v._v(" "),d("li",[v._v("db2sysc（空闲），Db2 空闲进程，它们允许在主机上快速轻量级重新启动访客成员，而不必与常驻成员竞争资源。")]),v._v(" "),d("li",[v._v("db2thcln，在 EDU 终止时重新启动资源（仅适用于 UNIX）")]),v._v(" "),d("li",[v._v("db2wdog，在 UNIX 和 Linux® 操作系统上处理异常终止的看守程序。")]),v._v(" "),d("li",[v._v("db2wlmt，WLM 分派器调度线程")]),v._v(" "),d("li",[v._v("db2wlmtm，WLM 分派器计时器线程\n"),d("h2",{attrs:{id:"特性"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[v._v("#")]),v._v(" "),d("strong",[v._v("特性")])])])]),v._v(" "),d("p",[v._v("1、具有很好的并行性（DB2把数据库管理扩充到了并行的，多节点的环境；数据库分区是数据库的一部分，包含自己的数据，索引，配置文件和事务日志；数据库分区有时被称为节点）。")]),v._v(" "),d("p",[v._v("2、获得最高认证级别的ISO标准认证。")]),v._v(" "),d("p",[v._v("3、性能较高，适用于数据仓库和在线事物处理。")]),v._v(" "),d("p",[v._v("4、跨平台，多层结构，支持ODBC，JDBC等客户。")]),v._v(" "),d("p",[v._v("5、操作简单，同时提供GUI和命令行，在windowsNT和unix下的操作相同。")]),v._v(" "),d("p",[v._v("6、在巨型企业得到广泛的运用，向下兼容性好，风险小。")]),v._v(" "),d("p",[v._v("7、能够在所有主流平台上运行，最适于海量数据处理。")]),v._v(" "),d("h2",{attrs:{id:"使用场景"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[v._v("#")]),v._v(" "),d("strong",[v._v("使用场景")])]),v._v(" "),d("p",[v._v("性能较高适用于数据仓库和在线事物处理。DB2 超大型数据库，与ORACLE类似 ，数据仓库和数据挖掘相当的不错，特别是集群技术可以使DB2的可扩性能达到极致。")])])}),[],!1,null,null,null);_.default=l.exports}}]);