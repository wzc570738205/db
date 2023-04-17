(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{397:function(e,a,t){"use strict";t.r(a);var r=t(42),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sybase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sybase"}},[e._v("#")]),e._v(" "),t("code"),t("strong",[e._v("Sybase")])]),e._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" "),t("strong",[e._v("概述")])]),e._v(" "),t("p",[e._v("Sybase数据库是美国Sybase公司研制的一种关系型"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"}},[e._v("数据库系统"),t("OutboundLink")],1),e._v("，是一种典型的"),t("a",{attrs:{href:"https://baike.baidu.com/item/UNIX/219943",target:"_blank",rel:"noopener noreferrer"}},[e._v("UNIX"),t("OutboundLink")],1),e._v("或WindowsNT平台上"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%AE%A2%E6%88%B7%E6%9C%BA/5168153",target:"_blank",rel:"noopener noreferrer"}},[e._v("客户机"),t("OutboundLink")],1),e._v("/服务器环境下的大型数据库系统。 Sybase提供了一套"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E7%BC%96%E7%A8%8B%E6%8E%A5%E5%8F%A3/3350958",target:"_blank",rel:"noopener noreferrer"}},[e._v("应用程序编程接口"),t("OutboundLink")],1),e._v("和库，可以与非Sybase"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E6%BA%90/5198928",target:"_blank",rel:"noopener noreferrer"}},[e._v("数据源"),t("OutboundLink")],1),e._v("及服务器集成，允许在多个数据库之间复制数据，适于创建多层应用。系统具有完备的"),t("a",{attrs:{href:"https://baike.baidu.com/item/%E8%A7%A6%E5%8F%91%E5%99%A8/16782",target:"_blank",rel:"noopener noreferrer"}},[e._v("触发器"),t("OutboundLink")],1),e._v("、存储过程、规则以及完整性定义，支持优化查询，具有较好的数据安全性。Sybase通常与SybaseSQLAnywhere用于客户机/服务器环境，前者作为服务器数据库，后者为客户机数据库，采用该公司研制的PowerBuilder为开发工具，在我国大中型系统中具有广泛的应用。")]),e._v(" "),t("h2",{attrs:{id:"架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[e._v("#")]),e._v(" "),t("strong",[e._v("架构")])]),e._v(" "),t("p",[e._v("Sybase数据库主要由以下三部分组成：")]),e._v(" "),t("p",[e._v("1、进行数据管理与维护的联机关系数据库管理系统Sybase SQL Server;")]),e._v(" "),t("p",[e._v("2、支持数据库应用系统的建立和开发的一组前端工具软件Sybase SQL Tools;")]),e._v(" "),t("p",[e._v("3、可把异构环境下其他厂商的应用软件和任何类型的数据连接在一起的接口软件Open Client/Open Server。")]),e._v(" "),t("h2",{attrs:{id:"特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[e._v("#")]),e._v(" "),t("strong",[e._v("特性")])]),e._v(" "),t("p",[e._v("一般的关系数据库都是基于主/从式的模型的。在主/从式的结构中，所有的应用都运行在一台机器上。用户只是通过终端发命令或简单地查看应用运行的结果。")]),e._v(" "),t("p",[e._v("而在客户/服务器结构中，应用被分在了多台机器上运行。一台机器是另一个系统的客户，或是另外一些机器的服务器。这些机器通过局域网或广域网联接起来。")]),e._v(" "),t("p",[e._v("客户/服务器模型的好处是：")]),e._v(" "),t("p",[e._v("● 支持共享资源且在多台设备间平衡负载")]),e._v(" "),t("p",[e._v("● 允许容纳多个主机的环境，充分利用了企业已有的各种系统")]),e._v(" "),t("p",[e._v("1、可编程数据库")]),e._v(" "),t("p",[e._v("通过提供存储过程，创建了一个可编程数据库。存储过程允许用户编写自己的数据库子例程。这些子例程是经过预编译的，因此不必为每次调用都进行编译、优化、生成查询规划，因而查询速度要快得多。")]),e._v(" "),t("p",[e._v("2、事件驱动的触发器")]),e._v(" "),t("p",[e._v("触发器是一种特殊的存储过程。通过触发器可以启动另一个存储过程，从而确保数据库的完整性。")]),e._v(" "),t("p",[e._v("3、多线索化")]),e._v(" "),t("p",[e._v("Sybase数据库的体系结构的另一个创新之处就是多线索化。一般的数据库都依靠操作系统来管理与数据库的连接。当有多个用户连接时，系统的性能会大幅度下降。Sybase数据库不让操作系统来管理进程，把与数据库的连接当作自己的一部分来管理。此外，Sybase的数据库引擎还代替操作系统来管理一部分硬件资源，如端口、内存、硬盘，绕过了操作系统这一环节，提高了性能。")]),e._v(" "),t("h2",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[e._v("#")]),e._v(" "),t("strong",[e._v("使用场景")])]),e._v(" "),t("h2",{attrs:{id:"sybase-ase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sybase-ase"}},[e._v("#")]),e._v(" "),t("strong",[e._v("SYBASE ASE")])]),e._v(" "),t("p",[e._v("Sybase ASE 的全称是 Adaptive Server Enterprise ，是企业及数据库服务器，适合用于企业级OLTP（在线联机事务处理），是功能强大的关系数据库管理系统。")]),e._v(" "),t("h2",{attrs:{id:"sybase-asa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sybase-asa"}},[e._v("#")]),e._v(" "),t("strong",[e._v("SYBASE ASA")])]),e._v(" "),t("p",[e._v("Sybase ASA 的全称是 Adaptive Server Anywhere，是轻量级数据库服务器，适合用于移动计算（PDA、带OS的手机等）、嵌入式计算（POS机、路由器等）、工作组级OLTP环境，特别是移动计算/嵌入式计算。")]),e._v(" "),t("h2",{attrs:{id:"sybase-iq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sybase-iq"}},[e._v("#")]),e._v(" "),t("strong",[e._v("SYBASE IQ")])]),e._v(" "),t("p",[e._v("Sybase IQ 是企业级数据仓库数据库服务器，适合于DSS环境中的企业级数据仓库和数据集市。")]),e._v(" "),t("p",[e._v("局限性：搜索引擎可查询到的相关技术文档稀少，学习维护成本很高。同时目前可查询到的应用案列也很少。")])])}),[],!1,null,null,null);a.default=s.exports}}]);