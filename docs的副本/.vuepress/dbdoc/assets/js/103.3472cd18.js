(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{457:function(t,e,r){"use strict";r.r(e);var a=r(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"文档数据库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文档数据库"}},[t._v("#")]),t._v(" "),r("strong",[t._v("文档数据库")])]),t._v(" "),r("h1",{attrs:{id:"mongodb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[t._v("#")]),t._v(" "),r("strong",[t._v("mongodb")])]),t._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" "),r("strong",[t._v("概述")])]),t._v(" "),r("p",[t._v("MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。")]),t._v(" "),r("h2",{attrs:{id:"架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" "),r("strong",[t._v("架构")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/jianzhi/Aspose.Words.673c07ef-7901-4eb2-b389-19d4dd9471e3.001.png",alt:"IMG_256"}})]),t._v(" "),r("h2",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" "),r("strong",[t._v("特性")])]),t._v(" "),r("p",[t._v("1、面向集合存储，易存储对象类型的数据。")]),t._v(" "),r("p",[t._v("2、模式自由。")]),t._v(" "),r("p",[t._v("3、支持动态"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E6%9F%A5%E8%AF%A2",target:"_blank",rel:"noopener noreferrer"}},[t._v("查询"),r("OutboundLink")],1),t._v("。")]),t._v(" "),r("p",[t._v("4、支持完全索引，包含内部对象。")]),t._v(" "),r("p",[t._v("5、支持查询。")]),t._v(" "),r("p",[t._v("6、支持复制和故障恢复。")]),t._v(" "),r("p",[t._v("7、使用高效的二进制数据存储，包括大型对象（如视频等）。")]),t._v(" "),r("p",[t._v("8、自动处理碎片，以支持云计算层次的扩展性。")]),t._v(" "),r("p",[t._v("9、支持 "),r("a",{attrs:{href:"https://baike.baidu.com/item/Golang/2215139",target:"_blank",rel:"noopener noreferrer"}},[t._v("Golang"),r("OutboundLink")],1),t._v("，"),r("a",{attrs:{href:"https://baike.baidu.com/item/RUBY",target:"_blank",rel:"noopener noreferrer"}},[t._v("RUBY"),r("OutboundLink")],1),t._v("，"),r("a",{attrs:{href:"https://baike.baidu.com/item/PYTHON",target:"_blank",rel:"noopener noreferrer"}},[t._v("PYTHON"),r("OutboundLink")],1),t._v("，"),r("a",{attrs:{href:"https://baike.baidu.com/item/JAVA",target:"_blank",rel:"noopener noreferrer"}},[t._v("JAVA"),r("OutboundLink")],1),t._v("，"),r("a",{attrs:{href:"https://baike.baidu.com/item/C++",target:"_blank",rel:"noopener noreferrer"}},[t._v("C++"),r("OutboundLink")],1),t._v("，"),r("a",{attrs:{href:"https://baike.baidu.com/item/PHP",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP"),r("OutboundLink")],1),t._v("，"),r("a",{attrs:{href:"https://baike.baidu.com/item/C%23",target:"_blank",rel:"noopener noreferrer"}},[t._v("C#"),r("OutboundLink")],1),t._v("等多种语言。")]),t._v(" "),r("p",[t._v("10、文件存储格式为BSON（一种JSON的扩展）。")]),t._v(" "),r("p",[t._v("11、可通过"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E7%BD%91%E7%BB%9C",target:"_blank",rel:"noopener noreferrer"}},[t._v("网络"),r("OutboundLink")],1),t._v("访问。")]),t._v(" "),r("h2",{attrs:{id:"适用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" "),r("strong",[t._v("适用场景")])]),t._v(" "),r("p",[t._v("MongoDB 的主要目标是在键/值存储方式（提供了高性能和高度伸缩性）和传统的RDBMS 系统（具有丰富的功能）之间架起一座桥梁，它集两者的优势于一身。根据官方网站的描述，Mongo 适用于以下场景。")]),t._v(" "),r("p",[t._v("1、网站数据：Mongo 非常适合实时的插入，更新与查询，并具备网站实时数据存储所需的复制及高度伸缩性。")]),t._v(" "),r("p",[t._v("2、缓存：由于性能很高，Mongo 也适合作为信息基础设施的缓存层。在系统重启之后，由Mongo 搭建的持久化缓存层可以避免下层的数据源过载。")]),t._v(" "),r("p",[t._v("3、大尺寸、低价值的数据：使用传统的关系型数据库存储一些数据时可能会比较昂贵，在此之前，很多时候程序员往往会选择传统的文件进行存储。")]),t._v(" "),r("p",[t._v("4、高伸缩性的场景：Mongo 非常适合由数十或数百台服务器组成的数据库，Mongo 的路线图中已经包含对MapReduce 引擎的内置支持。")]),t._v(" "),r("p",[t._v("5、用于对象及JSON 数据的存储：Mongo 的BSON 数据格式非常适合文档化格式的存储及查询。")]),t._v(" "),r("p",[t._v("MongoDB 的使用也会有一些限制，例如，它不适合于以下几个地方。")]),t._v(" "),r("p",[t._v("1、高度事务性的系统：例如，银行或会计系统。传统的关系型数据库目前还是更适用于需要大量原子性复杂事务的应用程序。")]),t._v(" "),r("p",[t._v("2、传统的商业智能应用：针对特定问题的BI 数据库会产生高度优化的查询方式。对于此类应用，数据仓库可能是更合适的选择。")]),t._v(" "),r("p",[t._v("3、需要SQL 的问题。")]),t._v(" "),r("h1",{attrs:{id:"couchdb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#couchdb"}},[t._v("#")]),t._v(" "),r("strong",[t._v("CouchDB")])]),t._v(" "),r("h2",{attrs:{id:"概述-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述-2"}},[t._v("#")]),t._v(" "),r("strong",[t._v("概述")])]),t._v(" "),r("p",[t._v("CouchDB是用"),r("a",{attrs:{href:"https://baike.baidu.com/item/Erlang",target:"_blank",rel:"noopener noreferrer"}},[t._v("Erlang"),r("OutboundLink")],1),t._v("开发的面向文档的"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库系统"),r("OutboundLink")],1),t._v("，2010年7月14日发布了1.0版本。CouchDB不是一个传统的关系数据库，而是面向文档的数据库，其数据存储方式有点类似"),r("a",{attrs:{href:"https://baike.baidu.com/item/lucene",target:"_blank",rel:"noopener noreferrer"}},[t._v("lucene"),r("OutboundLink")],1),t._v("的index文件格式，CouchDB最大的意义在于它是一个面向web应用的新一代"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("存储系统"),r("OutboundLink")],1),t._v("，事实上，CouchDB的口号就是：下一代的Web应用存储系统。")]),t._v(" "),r("h2",{attrs:{id:"架构-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构-2"}},[t._v("#")]),t._v(" "),r("strong",[t._v("架构")])]),t._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/jianzhi/Aspose.Words.673c07ef-7901-4eb2-b389-19d4dd9471e3.002.png",alt:"IMG_256"}})]),t._v(" "),r("h2",{attrs:{id:"特性-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性-2"}},[t._v("#")]),t._v(" "),r("strong",[t._v("特性")])]),t._v(" "),r("p",[t._v("CouchDB是分布式的数据库，他可以把"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("存储系统"),r("OutboundLink")],1),t._v("分布到n台物理的节点上面，并且很好的协调和同步节点之间的数据读写一致性。这当然也得靠Erlang无与伦比的并发特性才能做到。对于基于web的大规模应用文档应用，分布式可以让它不必像传统的关系数据库那样分库拆表，在应用代码层进行大量的改动。")]),t._v(" "),r("p",[t._v("CouchDB是面向文档的数据库，存储半结构化的数据，比较类似"),r("a",{attrs:{href:"https://baike.baidu.com/item/lucene",target:"_blank",rel:"noopener noreferrer"}},[t._v("lucene"),r("OutboundLink")],1),t._v("的index结构，特别适合存储文档，因此很适合CMS，电话本，地址本等应用，在这些应用场合，"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E6%96%87%E6%A1%A3%E6%95%B0%E6%8D%AE%E5%BA%93",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档数据库"),r("OutboundLink")],1),t._v("要比关系数据库更加方便，性能更好。")]),t._v(" "),r("p",[t._v("*CouchDB支持REST API，可以让用户使用"),r("a",{attrs:{href:"https://baike.baidu.com/item/JavaScript",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript"),r("OutboundLink")],1),t._v("来操作CouchDB数据库，也可以用JavaScript编写查询语句，我们可以想像一下，用"),r("a",{attrs:{href:"https://baike.baidu.com/item/AJAX",target:"_blank",rel:"noopener noreferrer"}},[t._v("AJAX"),r("OutboundLink")],1),t._v("技术结合CouchDB开发出来的CMS系统会是多么的简单和方便。")]),t._v(" "),r("p",[t._v("其实CouchDB只是Erlang应用的冰山一角，在最近几年，基于Erlang的应用也得到的蓬勃的发展，特别是在基于web的大规模，分布式应用领域，几乎都是Erlang的优势项目。")]),t._v(" "),r("h2",{attrs:{id:"适用场景-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#适用场景-2"}},[t._v("#")]),t._v(" "),r("strong",[t._v("适用场景")])]),t._v(" "),r("p",[t._v("如果你在构建一个 Lotus Notes型的应用，我们推荐使用CouchDB，主要是由于它的MVCC机制。另外如果我们需要master-master的架构，需要基于地理位置的数据分布，或者在数据结点可能不在线的情况下，我们推荐使用CouchDB。")]),t._v(" "),r("p",[t._v("如果你需要高性能的存储服务，那我们推荐MongoDB，比如用于存储大型网站的用户个人信息，比如用于构建在其它存储层之上的Cache层。")]),t._v(" "),r("p",[t._v("如果你的需求中有大量update操作，那么使用MongoDB吧。就像我们在例子updating real time analytics counters中的一样，对于那种经常变化的数据，比如浏览量，访问数之类的数据存储。")]),t._v(" "),r("h1",{attrs:{id:"数据库对比图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据库对比图"}},[t._v("#")]),t._v(" "),r("strong",[t._v("数据库对比图")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th"),t._v(" "),r("th",{staticStyle:{"text-align":"left"}},[t._v("MongoDB")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("CouchDB")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("数据模型")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("它遵循面向文档的模型，但数据以BSON格式呈现。")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("它遵循面向文档的模型，数据以JSON格式呈现。")])]),t._v(" "),r("tr",[r("td",[t._v("接口")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("MongoDB在TCP/IP上使用二进制协议和自定义协议。")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CouchDB使用基于HTTP/REST的接口。它非常直观，设计非常好。")])]),t._v(" "),r("tr",[r("td",[t._v("对象存储")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("在MongoDB中，数据库包含集合，而集合包含文档")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("在CouchDB中，数据库包含文档。")])]),t._v(" "),r("tr",[r("td",[t._v("查询方法")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("MongoDB遵循Map/Reduce(JavaScript)创建集合+基于对象的查询语言")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CouchDB遵循Map/Reduce查询方法(JavaScript+其他)")])]),t._v(" "),r("tr",[r("td",[t._v("复制")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("MongoDB支持主从复制。")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CouchDB支持使用自定义冲突解析功能的主-主复制")])]),t._v(" "),r("tr",[r("td",[t._v("并发")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("就地更新")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("它遵循MVCC(多版本并发控制)")])]),t._v(" "),r("tr",[r("td",[t._v("偏向")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("MongoDB优先考虑一致性")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CouchDB优先考虑可用性")])]),t._v(" "),r("tr",[r("td",[t._v("性能一致性")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("在MongoDB中数据库包含集合，而集合包含文档。")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("在CouchDB中比MongoDB更安全")])]),t._v(" "),r("tr",[r("td",[t._v("一致性")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("MongoDB也是一致的")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("CouchDB最终是一致的")])]),t._v(" "),r("tr",[r("td",[t._v("编写语言")]),t._v(" "),r("td",{staticStyle:{"text-align":"left"}},[t._v("使用C++语言编写")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("使用Erlang语言编写")])])])]),t._v(" "),r("h1",{attrs:{id:"参考文献"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" "),r("strong",[t._v("参考文献")])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.mongodb.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.mongodb.com/"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://couchdb.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://couchdb.apache.org/"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);