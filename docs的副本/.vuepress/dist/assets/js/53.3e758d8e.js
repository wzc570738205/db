(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{411:function(e,a,r){"use strict";r.r(a);var t=r(42),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"ms-sql-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ms-sql-azure"}},[e._v("#")]),e._v(" "),r("strong",[e._v("MS SQL AZure")])]),e._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" "),r("strong",[e._v("概述")])]),e._v(" "),r("p",[e._v("Azure SQL 数据库属于Azure SQL系列，是为云构建的智能、可缩放的关系数据库服务。它是永久性的且始终保持最新状态，并提供 AI 支持的自动化功能来优化性能和持续性。无服务器计算和超大规模存储选项会自动按需缩放资源，使你可以专注于构建新的应用程序，而不必担心存储大小或资源管理。")]),e._v(" "),r("h2",{attrs:{id:"架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[e._v("#")]),e._v(" "),r("strong",[e._v("架构")])]),e._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/fenbushi/Aspose.Words.e155d991-2bba-4b18-8ef6-192bfb238a28.001.png",alt:""}})]),e._v(" "),r("p",[e._v("Windows Azure SQL Databsae 的基底是SQL Server (通常以最新版为主)，不过它是一个特殊设计的SQL Server，并且以Windows Azure为基座平台，配合Windows Azure的特性，Windows Azure SQL Databsae也是一种分散在许多实体基础架构(Physical Infrastucture)与其内部许多虚拟服务器(Virtual Servers)的一种云存储服务，外部应用程序或服务可以不用在乎数据库实际存储在哪里，就可以利用Windows Azure SQL Databsae显露的SQL Fabric壳层服务以接受外部链接，并且在内部使用连线绕送 (connection routing) 的方式，让连线可以对应到正确的服务器，而且数据库是在云端中由多个服务器来提供服务，每一次连线所提供服务的服务器可能会不同，因此也可以保证云存储的高度可用性(High availability)。")]),e._v(" "),r("p",[e._v("Windows Azure SQL Databsae 架构在数据中心可分为三个部分"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Microsoft_Azure_SQL_Database#cite_note-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("[1]"),r("OutboundLink")],1),e._v("：")]),e._v(" "),r("h2",{attrs:{id:"服务提供层-service-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务提供层-service-layer"}},[e._v("#")]),e._v(" "),r("strong",[e._v("服务提供层 (Service Layer)")])]),e._v(" "),r("p",[e._v("服务提供层是 Windows Azure SQL Database 显露在客户端前面的服务接口 (Facade 模式)，负责接取所有向 Windows Azure SQL Databsae 提交要求的 TDS over SSL 连线与指令，当连线进入 Windows Azure SQL Databsae 时，Windows Azure SQL Databsae Load Balancer 会分派连线到不同的 Windows Azure SQL Databsae Gateway 中。Windows Azure SQL Databsae Gateway系负责处理 TDS 连线，管理连接层安全性 (connection-level security) 以及解析指令是否有内含潜在威胁的指令，再交由连线管理员 (Connection Manager) 将连线分派到位于平台提供层内不同的 Windows Azure SQL Databsae 数据库服务器中进行处理，Windows Azure SQL Databsae Gateway 也会管理对 SQL Azure 的连线，以避免可能会屏蔽住服务器的连线 (例如过长的查询或过长的数据库交易等)。")]),e._v(" "),r("h2",{attrs:{id:"平台提供层-platform-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#平台提供层-platform-layer"}},[e._v("#")]),e._v(" "),r("strong",[e._v("平台提供层 (Platform Layer)")])]),e._v(" "),r("p",[e._v("平台提供层则是以 Windows Azure Computes 的虚拟机集群 (Cluster)，每台虚拟机都安装有 SQL Server 以及管理一定数量的数据库，通常一份数据库会分散到三至五台的 SQL Server VM 中，而每台 SQL Server VM 也安装了 SQL Fabric 中控软件，并透过 SQL Fabric 与 Windows Azure SQL Databsae Gateway 的管控下，所有对单一数据库的连线都不一定会持续连入同一台 SQL Server VM 中。SQL Server VM 内也安装了 SQL Azure Management Service，它会负责对每个数据库间的资料复写工作，以保障 Windows Azure SQL Databsae 的基本高可用性要求。每台 SQL Server VM 内的 SQL Fabric 和 Management Service 都会彼此交换健康与监控信息等，以保持整体服务的健康与可监控性。")]),e._v(" "),r("h2",{attrs:{id:"基础建设层-infrastructure-layer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础建设层-infrastructure-layer"}},[e._v("#")]),e._v(" "),r("strong",[e._v("基础建设层 (Infrastructure Layer)")])]),e._v(" "),r("p",[e._v("基础建设层由 Windows Azure Computes 以及其高度可扩展性的运算与网络基础架构来组成，以支持 Windows Azure SQL Databsae 所需的高可用性以及高扩展性等云端特色。")]),e._v(" "),r("h2",{attrs:{id:"特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[e._v("#")]),e._v(" "),r("strong",[e._v("特点")])]),e._v(" "),r("p",[e._v("1、"),r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/azure/sql-database/sql-database-technical-overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("完全托管的"),r("OutboundLink")],1),e._v("数据库可自动执行更新、预配和备份，使你可以专注于应用程序开发。")]),e._v(" "),r("p",[e._v("2、灵活且响应灵敏的无服务器计算和超大规模存储可快速适应不断变化的需求。")]),e._v(" "),r("p",[e._v("3、"),r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/azure/sql-database/sql-database-security-overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("保护层"),r("OutboundLink")],1),e._v("、内置控件和智能威胁检测可确保数据安全。")]),e._v(" "),r("p",[e._v("4、内置AI和内置的高可用性提供高达 99.995%的SLA，保证峰值性能和持续性。")])])}),[],!1,null,null,null);a.default=s.exports}}]);