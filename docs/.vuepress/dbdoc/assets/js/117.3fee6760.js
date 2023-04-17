(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{474:function(t,a,r){"use strict";r.r(a);var e=r(42),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"tair"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tair"}},[t._v("#")]),t._v(" "),r("strong",[t._v("Tair")])]),t._v(" "),r("h2",{attrs:{id:"tair-性能增强型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tair-性能增强型"}},[t._v("#")]),t._v(" "),r("strong",[t._v("Tair("),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/126164.htm?spm=a2c63.p38356.879954.3.4b024c65WpFagE#concept-1254543",title:"Redis企业版性能增强型（简称性能增强型）适合并发量大、读写热点多，对性能的要求超过云Redis社区版实例的场景。相比云数据库Redis社区版，企业版的性能增强型主要多线程性能增强和多模块集成方面进行了优化。",target:"_blank",rel:"noopener noreferrer"}},[t._v("性能增强型"),r("OutboundLink")],1),t._v(")")])]),t._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" "),r("strong",[t._v("概述")])]),t._v(" "),r("p",[t._v("Redis企业版性能增强型（简称性能增强型）适合并发量大、读写热点多，对性能的要求超过云Redis社区版实例的场景。相比云数据库Redis社区版，企业版的性能增强型主要多线程性能增强和多模块集成方面进行了优化。")]),t._v(" "),r("h2",{attrs:{id:"架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" "),r("strong",[t._v("架构")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/images/jianzhi/Aspose.Words.c9f17846-4b76-4cf3-af40-64ccbc0b8421.007.png",alt:"1616465760(1)"}})]),t._v(" "),r("h2",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" "),r("strong",[t._v("特性")])]),t._v(" "),r("p",[t._v("1、100%兼容原生Redis，无需修改业务代码。")]),t._v(" "),r("p",[t._v("2、读写性能达到同规格原生Redis或者云Redis社区版实例的3倍，能够突破热点数据高频读写受到的性能限制。")]),t._v(" "),r("p",[t._v("3、相比原生Redis，高QPS场景下响应时间更低，性能表现更佳。")]),t._v(" "),r("p",[t._v("4、在大并发场景下运行稳定，可以极大地缓解突发大量请求导致的连接问题，从容应对业务高峰。")]),t._v(" "),r("p",[t._v("5、全量同步和增量同步在IO线程中进行，提高同步速度。")]),t._v(" "),r("p",[t._v("6、支持标准、集群和读写分离部署架构。")]),t._v(" "),r("p",[t._v("7、集成多个自研的Redis模块，包括："),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/145902.htm#concept-2353550",title:"本章节介绍TairString数据支持的命令。",target:"_blank",rel:"noopener noreferrer"}},[t._v("TairString"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/145970.htm#concept-2353551",title:"本文介绍TairHash数据支持的命令。",target:"_blank",rel:"noopener noreferrer"}},[t._v("TairHash"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/145971.htm#concept-2353552",title:"本章节介绍TairGIS数据支持的命令。",target:"_blank",rel:"noopener noreferrer"}},[t._v("TairGIS"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/145972.htm#concept-2353553",title:"本章节介绍TairBloom数据支持的命令。",target:"_blank",rel:"noopener noreferrer"}},[t._v("TairBloom"),r("OutboundLink")],1),t._v("和"),r("a",{attrs:{href:"https://www.alibabacloud.com/help/zh/doc-detail/145940.htm#concept-2353554",title:"本章节介绍TairDoc数据支持的命令。",target:"_blank",rel:"noopener noreferrer"}},[t._v("TairDoc"),r("OutboundLink")],1),t._v("，扩展了Redis的适用性，同时降低了复杂场景下业务的开发难度，让您专注于业务创新。")]),t._v(" "),r("h2",{attrs:{id:"适用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" "),r("strong",[t._v("适用场景")])]),t._v(" "),r("p",[t._v("适用于视频直播、电商秒杀和在线教育等场景，下面列举了性能增强型在4个典型场景中的应用。")]),t._v(" "),r("p",[t._v("场景1：使用Redis社区版的标准版-双副本实例在秒杀场景中构建缓存，部分热点Key的QPS要求高达20万以上，社区版实例无法满足业务高峰期的需求。")]),t._v(" "),r("p",[t._v("采用性能增强型（标准架构）实例后，热门商品秒杀过程流畅，未发生性能问题。")]),t._v(" "),r("p",[t._v("场景2：在业务中使用云Redis社区版集群实例，但在使用事务和Lua脚本功能时有一定的限制。")]),t._v(" "),r("p",[t._v("采用性能增强型实例后，在满足性能需求的同时消除了集群版的命令使用限制。")]),t._v(" "),r("p",[t._v("场景3：自建有一主多备的Redis服务，随着业务中访问量的不断提高，备节点数量也要随之增加，管理维护成本越来越高。")]),t._v(" "),r("p",[t._v("采用具备一个数据节点五个只读副本的性能增强型（读写分离架构）实例后，可以轻松应对百万级QPS的业务挑战。")]),t._v(" "),r("p",[t._v("场景4：自建有Redis集群来承担线上千万级QPS的业务压力。随着业务的发展，Redis分片数不断增加，管理维护成本居高不下。")]),t._v(" "),r("p",[t._v("采用性能增强型（集群架构）实例后，集群规模缩到原来的三分之一，管理维护成本大幅降低。")]),t._v(" "),r("h2",{attrs:{id:"tair-混合存储型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tair-混合存储型"}},[t._v("#")]),t._v(" "),r("strong",[t._v("Tair(混合存储型)")])]),t._v(" "),r("h2",{attrs:{id:"概述-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述-2"}},[t._v("#")]),t._v(" "),r("strong",[t._v("概述")])]),t._v(" "),r("p",[t._v("云数据库Redis企业版混合存储型。与社区版Redis不同，混合存储型整合了内存和磁盘二者的优势，在提供高速数据读写能力的同时满足了数据持久化的需求。")]),t._v(" "),r("h2",{attrs:{id:"架构-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构-2"}},[t._v("#")]),t._v(" "),r("strong",[t._v("架构")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/images/jianzhi/Aspose.Words.c9f17846-4b76-4cf3-af40-64ccbc0b8421.008.png",alt:"p52674"}})]),t._v(" "),r("h2",{attrs:{id:"特性-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性-2"}},[t._v("#")]),t._v(" "),r("strong",[t._v("特性")])]),t._v(" "),r("p",[t._v("Redis企业版混合存储型（简称混合存储型）是阿里云自主研发的兼容Redis协议的混合存储产品，使用磁盘存储全量数据，将热数据保存到内存中供应用快速读写。在保证常用数据访问性能不下降的基础上，混合存储型能够大幅度降低用户成本，实现性能与成本的平衡，同时使单个Redis实例的数据量不再受内存大小的限制。")]),t._v(" "),r("p",[t._v("内存数据：内存中存放了热数据的Key和Value，同时为快速确认要操作的Key是否存在，内存中也会缓存所有的Key信息。")]),t._v(" "),r("p",[t._v("磁盘数据：磁盘中存放所有的Key和Value，Redis的数据结构（例如Hash）也会以一定的格式进行存储在磁盘。")]),t._v(" "),r("h2",{attrs:{id:"适用场景-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#适用场景-2"}},[t._v("#")]),t._v(" "),r("strong",[t._v("适用场景")])]),t._v(" "),r("p",[t._v("视频直播 视频直播类业务往往存在大量热点数据，大部分的请求都来自于热门的直播间。使用混合存储型，内存中保留热门直播间的数据，不活跃的直播间数据被自动存储到磁盘上，可以达到对有限内存的最佳利用效果。")]),t._v(" "),r("p",[t._v("电子商务 电商类应用往往有大量的商品数据。使用混合存储型可以轻松突破内存容量限制，将大量的商品数据都存储到混合存储型中。在正常业务请求中，活跃的商品数据会保留在内存，不活跃的商品数据会逐渐交换到磁盘上，从而解决内存不够的问题。")]),t._v(" "),r("p",[t._v("在线教育 在线教育类的场景有大量的课程、题库以及师生交流信息等数据，通常只有热门课程和最新题库会被频繁访问。使用混合存储型，将所有课程信息存储到磁盘，访问量大的课程和题库数据存储到内存并常驻内存，保证高频访问数据的读写性能，实现高性能与高性价比的有机结合。")]),t._v(" "),r("p",[t._v("典型业务场景的示例如下：")]),t._v(" "),r("p",[t._v("场景1：使用开源Redis集群存储了100GB的数据，但高峰期QPS不到2万，其中80%的数据的访问频率很低。")]),t._v(" "),r("p",[t._v("使用32GB内存加128GB磁盘的混合存储型实例后，节省了近70GB的内存空间，存储成本下降50%以上。")]),t._v(" "),r("p",[t._v("场景2：在IDC自建Pika实例来解决Redis存储成本高的问题。总数据量约400GB，其中访问频率高的数据仅占10%左右，并且集群的运维成本居高不下。")]),t._v(" "),r("p",[t._v("使用64GB内存加512GB磁盘的混合存储型实例后，既免除了繁重的运维工作，又保障了服务质量。")])])}),[],!1,null,null,null);a.default=s.exports}}]);