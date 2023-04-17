(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{426:function(t,e,a){"use strict";a.r(e);var v=a(42),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图数据库"}},[t._v("#")]),t._v(" "),a("strong",[t._v("图数据库")])]),t._v(" "),a("h1",{attrs:{id:"neo4j"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neo4j"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Neo4j")])]),t._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" "),a("strong",[t._v("概述")])]),t._v(" "),a("p",[t._v("Neo4j是一个网络——面向网络的数据库——也就是说，它是一个嵌入式的、基于磁盘的、具备完全的事务特性的Java持久化引擎，但是它将结构化数据存储在网络上而不是表中。网络（从数学角度叫做图）是一个灵活的数据结构，可以应用更加敏捷和快速的开发模式。")]),t._v(" "),a("p",[t._v("你可以把Neo4j看作是一个高性能的图引擎，该引擎具有成熟和健壮的数据库的所有特性。程序员工作在一个面向对象的、灵活的网络结构下而不是严格、静态的表中——但是他们可以享受到具备完全的事务特性、企业级的数据库的所有好处。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.001.png",alt:""}})]),t._v(" "),a("p",[t._v("Neo4j有以下基本概念：")]),t._v(" "),a("p",[t._v("1、标签(Label)")]),t._v(" "),a("p",[t._v("在Neo4j中，一个节点可以有一个以上的标签，从现实世界的角度去看，一个标签可以认为节点的某个类别，比如BOOK、MOVIE等等。")]),t._v(" "),a("p",[t._v("2、节点(Node)")]),t._v(" "),a("p",[t._v("节点是指一个实实在在的对象，这个对象可以有好多的标签，表示对象的种类，也可以有好多的属性，描述其特征，节点与节点之间还可以形成多个有方向（或者没有方向）的关系。")]),t._v(" "),a("p",[t._v("3、关系(Relationship)")]),t._v(" "),a("p",[t._v("用来描述节点与节点之间的关系，这也是图数据与与普通数据库最大的区别，正是因为有这些关系的存在，才可以描述那些我们普通行列数据库所很难表示的网状关系，比如我们复杂的人际关系网，所谓的六度理论，就可以很方便的用图数据库进行模拟，比如我们大脑神经元之间的连接方式，都是一张复杂的网。")]),t._v(" "),a("p",[t._v("有一点需要重点注意，关系可以拥有属性。")]),t._v(" "),a("p",[t._v("4、属性(Property)")]),t._v(" "),a("p",[t._v("描述节点的特性，采用的是Key-Value结构，可以随意设定来描述节点的特征。")]),t._v(" "),a("h2",{attrs:{id:"架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[t._v("#")]),t._v(" "),a("strong",[t._v("架构")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.002.png",alt:""}})]),t._v(" "),a("p",[t._v("Neo4j集群由两个不同的角色Core Servers和Read Replicas组成，这两个角色是任何生产部署中的基础，但彼此之间的管理规模不同，并且在管理整个集群的容错性和可伸缩性方面承担着不同的角色。")]),t._v(" "),a("p",[t._v("Core Servers：")]),t._v(" "),a("p",[t._v("核心服务器的主要责任是保护数据。 核心服务器通过使用Raft协议复制所有事务来做到这一点。 在确认向最终用户应用程序提交事务之前，Raft确保数据安全持久。 在实际环境中，这意味着一旦集群（N / 2 + 1）中的大多数核心服务器都接受了事务，安全性要求会影响写入延迟。 隐式写入将以最快的多数Core Servers被确认，但是随着群集中核心服务器数量的增加，确认一次写入所需的Core Servers的数量也会增加。实际上，这意味着典型的Core Server集群中需要一定数量的服务器，足以为特定部署提供足够的容错能力。 这是使用公式M = 2F +1计算的，其中M是容忍F故障所需的核心服务器数量。 例如：")]),t._v(" "),a("p",[t._v("1、为了容忍两个发生故障的核心服务器，我们需要部署五个核心的集群。")]),t._v(" "),a("p",[t._v("2、最小的容错群集（一个可以容忍一个故障的群集）必须具有三个内核。")]),t._v(" "),a("p",[t._v("3、也可以创建仅包含两个核心的因果集群。 但是，该群集不是容错的。 如果两个服务器之一发生故障，其余服务器将变为只读。")]),t._v(" "),a("p",[t._v("请注意，如果Core Server集群遭受足够的故障而无法处理写入，则它将变为只读状态以保持安全。")]),t._v(" "),a("p",[t._v("Read Replicas：")]),t._v(" "),a("p",[t._v("只读副本的主要职责是扩展图数据负载能力（密码查询，过程等）。 只读副本的作用类似于Core Server保护的数据的缓存，但它们不是简单的键值缓存。 实际上，只读副本是功能齐全的Neo4j数据库，能够完成任意（只读）图数据查询和过程。")]),t._v(" "),a("p",[t._v("只读副本是通过事务日志传送从Core Servers异步复制的。 只读副本将定期（通常在ms范围内）轮询核心服务器以查找自上次轮询以来已处理的任何新事务，并且核心服务器会将这些事务发送到只读副本。 可以从相对较少的Core Server中馈送许多只读副本数据，从而使查询工作量大为增加，从而扩大规模。")]),t._v(" "),a("p",[t._v("但是，与核心服务器不同，只读副本不参与有关群集拓扑的决策。 只读副本通常应以相对较大的数量运行，并视为一次性使用。 丢失只读副本不会影响群集的可用性，除了丢失其图表查询吞吐量的一部分。 它不会影响群集的容错能力。")]),t._v(" "),a("h2",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" "),a("strong",[t._v("特性")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.003.png",alt:""}})]),t._v(" "),a("p",[t._v("1、因果一致性:使得可以写入Core Server（数据是安全的）并从Read Replica（其中图操作被扩展）中读取这些写入。 例如，因果一致性可确保当该用户随后尝试登录时，会出现创建该用户帐户的写操作。")]),t._v(" "),a("p",[t._v("在执行事务时，客户可以要求书签，然后将其作为参数提供给后续事务。 使用该书签，集群可以确保只有处理了该客户已添加书签的事务的服务器才能运行其下一个事务。 这提供了因果链，从客户的角度确保了正确的写后读语义。")]),t._v(" "),a("p",[t._v("除了书签之外，其他所有事情都由集群处理。 数据库驱动程序与群集拓扑管理器一起使用，以选择最合适的核心服务器和只读副本，以提供高质量的服务。")]),t._v(" "),a("p",[t._v("2、生态完整")]),t._v(" "),a("p",[t._v("3、opencypher查询语言简单易用")]),t._v(" "),a("p",[t._v("4、稳定性好")]),t._v(" "),a("p",[t._v("5、不支持分片")]),t._v(" "),a("h2",{attrs:{id:"适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" "),a("strong",[t._v("适用场景")])]),t._v(" "),a("h2",{attrs:{id:"金融行业应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#金融行业应用"}},[t._v("#")]),t._v(" "),a("strong",[t._v("金融行业应用")])]),t._v(" "),a("p",[t._v("反欺诈多维关联分析场景")]),t._v(" "),a("p",[t._v("通过图分析可以清楚地知道洗钱网络及相关嫌疑，例如对用户所使用的帐号、发生交易时的IP地址、MAC地址、手机IMEI号等进行关联分析。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1112483/201908/1112483-20190801095241110-1381634203.png",alt:""}})]),t._v(" "),a("p",[t._v("反洗钱模型")]),t._v(" "),a("p",[t._v("反欺诈已经是金融行业一个核心应用，通过图数据库可以对不同的个体、团体做关联分析，从人物在指定时间内的行为，例如去过地方的IP地址、曾经使用过的MAC地址（包括手机端、PC端、WIFI等）、社交网络的关联度分析，同一时间点是否曾经在同一地理位置附近出现过，银行账号之间是否有历史交易信息等。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1112483/201908/1112483-20190801095307862-1405114974.png",alt:""}})]),t._v(" "),a("p",[t._v("金融反欺诈关联分析模型")]),t._v(" "),a("h2",{attrs:{id:"社交网络图谱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#社交网络图谱"}},[t._v("#")]),t._v(" "),a("strong",[t._v("社交网络图谱")])]),t._v(" "),a("p",[t._v("在社交网络中，公司、员工、技能的信息，这些都是节点，它们之间的关系和朋友之间的关系都是边，在这里面图数据库可以做一些非常复杂的公司之间关系的查询。比如说公司到员工、员工到其他公司，从中找类似的公司、相似的公司，都可以在这个系统内完成。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1112483/201908/1112483-20190801095332216-962914232.png",alt:""}})]),t._v(" "),a("p",[t._v("社交关系网络模型")]),t._v(" "),a("h2",{attrs:{id:"企业关系图谱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#企业关系图谱"}},[t._v("#")]),t._v(" "),a("strong",[t._v("企业关系图谱")])]),t._v(" "),a("p",[t._v("图数据库可以对各种企业进行信息图谱的建立，包括最基本的工商信息，包括何时注册、谁注册、注册资本、在何处办公、经营范围、高管架构。围绕企业的经营范围，继续细化去查询企业究竟有哪些产品或服务，例如通过企业名称查询到企业的自媒体，从而给予其更多关注和了解。另外也包括对企业的产品和服务的数据关联，查看该企业有没有令人信服的自主知识产权和相关资质来支撑业务的开展。")]),t._v(" "),a("p",[t._v("企业在日常经营中，与客户、合作伙伴、渠道方、投资者都会打交道，这也决定了企业对社会各个领域都广有涉猎，呈现面错综复杂，因此可以通过企业数据图谱来查询，层层挖掘信息。基于图数据的企业信息查询可以真正了解企业的方方面面，而不再是传统单一的工商信息查询。")]),t._v(" "),a("h1",{attrs:{id:"janusgraph-on-hbase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#janusgraph-on-hbase"}},[t._v("#")]),t._v(" "),a("strong",[t._v("JanusGraph(on HBase)")])]),t._v(" "),a("h2",{attrs:{id:"概述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述-2"}},[t._v("#")]),t._v(" "),a("strong",[t._v("概述")])]),t._v(" "),a("p",[t._v("JanusGraph是一个可扩展的图数据库，可以把包含数千亿个顶点和边的图存储在多机集群上。它支持事务，支持数千用户实时、并发访问存储在其中的图。JanusGraph本身专注在图数据的序列化、丰富图数据建模和高效查询的执行。此外，JanusGraph使用Hadoop来做图分析和批量图数据处理。JanusGraph为数据的持久化、数据索引和客户端访问实现了健壮的，模块化的接口。JanusGraph的模块化架构使得它可以广泛地与各类存储、索引和客户端技术交互操作。它也简化了JanusGraph扩展支持新系统的过程。")]),t._v(" "),a("h2",{attrs:{id:"架构-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构-2"}},[t._v("#")]),t._v(" "),a("strong",[t._v("架构")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.004.png",alt:""}})]),t._v(" "),a("p",[t._v("JanusGraph是模块化的体系结构（JanusGraph has a modular architecture）。")]),t._v(" "),a("p",[t._v("它使用hadoop来做图的分析和图的批处理，使用模块化接口来做数据持久化、索引和客户端访问。")]),t._v(" "),a("p",[t._v("在JanusGraph和磁盘之间有多个后端存储系统和多个索引系统。（Between JanusGraph and the disks sits one or more storage and indexing adapters.）")]),t._v(" "),a("p",[t._v("它支持的外部存储系统，目前标准支持的有（当然也可以将第三方的存储系统作为JanusGraph的后端存储系统）：")]),t._v(" "),a("p",[t._v("1、Apache Cassandra")]),t._v(" "),a("p",[t._v("2、Apache HBase")]),t._v(" "),a("p",[t._v("3、Oracle Berkeley DB Java Edition")]),t._v(" "),a("p",[t._v("4、Google Cloud BigTable")]),t._v(" "),a("p",[t._v("支持的外部索引系统：")]),t._v(" "),a("p",[t._v("1、Elasticsearch")]),t._v(" "),a("p",[t._v("2、Apache Solr")]),t._v(" "),a("p",[t._v("3、Apache Lucene")]),t._v(" "),a("h2",{attrs:{id:"特性-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性-2"}},[t._v("#")]),t._v(" "),a("strong",[t._v("特性")])]),t._v(" "),a("p",[t._v("1、分布式部署，因此，支持集群。")]),t._v(" "),a("p",[t._v("2、可以存储大图，比如包含数千亿Vertices和edges的图。")]),t._v(" "),a("p",[t._v("3、支持数千用户实时、并发访问。（并发访问肯定是实时的，这个唉，没必要强调好像）")]),t._v(" "),a("p",[t._v("4、集群节点可以线性扩展，以支持更大的图和更多的并发访问用户。")]),t._v(" "),a("p",[t._v("5、数据分布式存储，并且每一份数据都有多个副本，因此，有更好的计算性能和容错性。")]),t._v(" "),a("p",[t._v("6、支持在多个数据中心做高可用，支持热备份。")]),t._v(" "),a("p",[t._v("7、支持各种后端存储系统，目前标准支持以下四种，当然也可以增加第三方的存储系统：")]),t._v(" "),a("p",[t._v("Apache Cassandra")]),t._v(" "),a("p",[t._v("Apache HBase")]),t._v(" "),a("p",[t._v("Google Cloud Bigtable")]),t._v(" "),a("p",[t._v("Oracle BerkeleyDB")]),t._v(" "),a("p",[t._v("8、通过集成大数据平台，比如Apache Spark、Apache Giraph、Apache Hadoop等，支持全局图数据分析、报表、ETL")]),t._v(" "),a("p",[t._v("9、支持geo（Gene Expression Omnibus，基因数据分析）、numeric range（这个的含义不清楚）")]),t._v(" "),a("p",[t._v("10、集成ElasticSearch、Apache Solr、Apache Lucene等系统后，可以支持全文搜索。")]),t._v(" "),a("p",[t._v("11、原生集成Apache TinkerPop图技术栈，包括Gremlin graph query language、Gremlin graph server、Gremin applications。")]),t._v(" "),a("p",[t._v("12、开源，基于Apache 2 Licence。")]),t._v(" "),a("p",[t._v("13、通过使用以下系统可以可视化存储在JanusGraph中的图数据：")]),t._v(" "),a("p",[t._v("Cytoscape")]),t._v(" "),a("p",[t._v("Gephi plugin for Apache TinkerPop")]),t._v(" "),a("p",[t._v("Graphexp")]),t._v(" "),a("p",[t._v("KeyLines by Cambridge Intelligence")]),t._v(" "),a("p",[t._v("Linkurious")]),t._v(" "),a("h2",{attrs:{id:"适用场景-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场景-2"}},[t._v("#")]),t._v(" "),a("strong",[t._v("适用场景")])]),t._v(" "),a("p",[t._v("1、新闻事件的关联分析")]),t._v(" "),a("p",[t._v("2、识别反欺诈潜在风险")]),t._v(" "),a("p",[t._v("3、不一致性验证识别")]),t._v(" "),a("p",[t._v("4、失联客户管理")]),t._v(" "),a("p",[t._v("5、知识图谱的可视化展示")]),t._v(" "),a("h1",{attrs:{id:"titan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titan"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Titan")])]),t._v(" "),a("h2",{attrs:{id:"概述-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述-3"}},[t._v("#")]),t._v(" "),a("strong",[t._v("概述")])]),t._v(" "),a("p",[t._v("Titan 是 PingCAP 研发的基于 RocksDB 的高性能单机 key-value 存储引擎，通过把大 value 同 key 分离存储的方式减少写入 LSM-tree 中的数据量级。在 value 较大的场景下显著缓解写入放大效应，降低 RocksDB 后台 compaction 对 IO 带宽和 CPU 的占用，同时提高 SSD 寿命的效果。")]),t._v(" "),a("p",[t._v("在存在大 value 的典型应用场景中，Titan 在写、更新和点读等场景下性能都优于 RocksDB。同原生 RocksDB 相比，Titan 通过一定程度上牺牲硬盘空间和范围查询的性能为代价，来取得更高的写入性能。随着 SSD 单位存储空间价格的降低，和 SSD 设备随机 IO 能力的提升，Titan 的这种设计取舍在未来会产生更加积极的作用。")]),t._v(" "),a("h2",{attrs:{id:"架构-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构-3"}},[t._v("#")]),t._v(" "),a("strong",[t._v("架构")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.005.png",alt:""}})]),t._v(" "),a("p",[t._v("Titan 维持 RocksDB 的写入流程不变，在 Flush 和 Compaction 时刻将大 value 从 LSM-tree 中进行分离并存储到 BlobFile 中。同 RocksDB 相比，Titan 增加了 BlobFile，TitanTableBuilder 和 Garbage Collection（GC）等组件，下面我们将会对这些组件逐一介绍。")]),t._v(" "),a("h2",{attrs:{id:"blobfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#blobfile"}},[t._v("#")]),t._v(" "),a("strong",[t._v("BlobFile")])]),t._v(" "),a("p",[t._v("BlobFile 是存放 LSM-tree 中分离得到的 KV 记录的文件，它由 header、record 、meta block、meta index 和 footer 组成。其中每个 record 用于存放一个 key-value 对；meta block 用于在未来保存用户自定义数据；而 meta index 则用于检索 meta block。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.006.png",alt:""}})]),t._v(" "),a("p",[t._v("为了充分利用 prefetch 机制提高顺序扫描数据时的性能，BlobFile 中的 key-value 是按照 key 的顺序有序存放的。除了从 LSM-tree 中分离出的 value 之外，blob record 中还保存了一份 key 的数据。在这份额外存储的 key 的帮助下，Titan 用较小的写放大收获了 GC 时快速查询 key 最新状态的能力。GC 则会利用 key 的更新信息来确定 value 是否已经过期可以被回收。考虑到 Titan 中存储的 value 大小偏大，将其压缩则可以获得较为显著的空间收益。BlobFile 可以选择 "),a("a",{attrs:{href:"https://github.com/google/snappy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Snappy"),a("OutboundLink")],1),t._v("、"),a("a",{attrs:{href:"https://github.com/lz4/lz4",target:"_blank",rel:"noopener noreferrer"}},[t._v("LZ4"),a("OutboundLink")],1),t._v(" 或 "),a("a",{attrs:{href:"https://github.com/facebook/zstd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zstd"),a("OutboundLink")],1),t._v(" 在单个记录级别对数据进行压缩，目前 Titan 默认使用的压缩算法是 LZ4。")]),t._v(" "),a("h2",{attrs:{id:"titantablebuilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titantablebuilder"}},[t._v("#")]),t._v(" "),a("strong",[t._v("TitanTableBuilder")])]),t._v(" "),a("p",[t._v("RocksDB 提供了 TableBuilder 机制供用户自定义的 table 实现。Titan 则利用了这个能力实现了 TitanTableBuilder，在不对 RocksDB 构建 table 流程做侵入型改动的前提下，实现了将大 value 从 LSM-tree 中分离的功能。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.007.png",alt:""}})]),t._v(" "),a("p",[t._v("在 RocksDB 将数据写入 SST 时，TitanTableBuilder 根据 value 大小决定是否需要将 value 分离到外部 BlobFile 中。如果 value 大小小于 Titan 设定的大 value 阈值，数据会直接写入到 RocksDB 的 SST 中；反之，value 则会持久化到 BlobFile 中，相应的位置检索信息将会替代 value 被写入 RocksDB 的 SST 文件中用于在读取时定位 value 的实际位置。同样利用 RocksDB 的 TableBuilder 机制，我们可以在 RocksDB 做 Compaction 的时候将分离到 BlobFile 中的 value 重新写入到 SST 文件中完成从 Titan 到 RocksDB 的降级。")]),t._v(" "),a("p",[t._v("熟悉另一个 KV 分离存储的 LSM-tree 实现 Badger 的读者可能想问为什么 Titan 没有选择选择将直接用 VLog 的方式保存在 WAL 中，从而避免一次额外的写入放大开销。假设我们将 LSM-tree 的 max level 和放大因子分别设定为 5 和 10，则 LSM-tree 的总写入放大大概为 1 + 1 + 10 + 10 + 10 + 10 = 42。其中由 BlobFile 引入的写入放大同 LSM-tree 的整体写入放大相比仅为 1 : 42，可以忽略不计。并且维持 WAL 也可以避免对 RocksDB 的侵入性改动，这也是 Titan 的重要设计目标之一。")]),t._v(" "),a("h2",{attrs:{id:"garbage-collection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#garbage-collection"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Garbage Collection")])]),t._v(" "),a("p",[t._v("RocksDB 在 LSM-tree Compaction 时对已删除数据进行空间回收。同样 Titan 也具备 Garbage Collection (GC) 组件用于已删除数据的空间回收。在 Titan 中存在两种不同的 GC 方式分别应对不同的适用场景，分为「传统 GC」和「Level-Merge GC」。")]),t._v(" "),a("h2",{attrs:{id:"特性-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性-3"}},[t._v("#")]),t._v(" "),a("strong",[t._v("特性")])]),t._v(" "),a("p",[t._v("1、支持大规模图集，其支持的规模随集群的节点扩展而扩展。")]),t._v(" "),a("p",[t._v("2、支持大规模并发事务及图操作。Titan的事务处理能力与集群中的机器数量成比例，并能在几毫秒内完成遍历查询。")]),t._v(" "),a("p",[t._v("3、支持通过Hadoop框架进行全局图分析和批处理图处理。")]),t._v(" "),a("p",[t._v("4、支持geo、数值范围，以及在非常大的图形上对顶点和边的全文搜索。")]),t._v(" "),a("p",[t._v("5、原生支持由TinkerPop公开的主流的图数据模型。")]),t._v(" "),a("p",[t._v("6、原生支持图形遍历语言Gremlin。")]),t._v(" "),a("p",[t._v("7、与Gremlin图形服务器轻松集成，实现非语言相关性编程。")]),t._v(" "),a("p",[t._v("8、对于许多图集配置项提供性能优化调节支持。")]),t._v(" "),a("p",[t._v("9、以顶点为中心的索引提供了顶点级查询，以缓解与臭名昭著的超级节点问题相关的问题。")]),t._v(" "),a("p",[t._v("10提供一个优化的磁盘指标，以便有效地使用存储和访问速度。")]),t._v(" "),a("p",[t._v("11、在Apache 2许可下开源。")]),t._v(" "),a("h2",{attrs:{id:"主要功能和优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要功能和优点"}},[t._v("#")]),t._v(" "),a("strong",[t._v("主要功能和优点")])]),t._v(" "),a("p",[t._v("1、多数据中心高可用性。")]),t._v(" "),a("p",[t._v("2、支持ACID和最终的一致性。")]),t._v(" "),a("p",[t._v("3、支持各种存储后端：Apache Cassandra，Apache HBase，Oracle BerkeleyDB。")]),t._v(" "),a("p",[t._v("4、通过与大数据平台(Apache Spark，Apache Giraph和Apache Hadoop)集成，支持全局图数据分析，报告和ETL。")]),t._v(" "),a("p",[t._v("5、通过以下方式支持地理，数值范围和全文本搜索：ElasticSearch，Solr，Lucene。")]),t._v(" "),a("p",[t._v("6、与TinkerPop图栈的本机集成：Gremlin图查询语言，Gremlin图服务器，Gremlin应用程序。")]),t._v(" "),a("h1",{attrs:{id:"dgraph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dgraph"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Dgraph")])]),t._v(" "),a("h2",{attrs:{id:"概述-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述-4"}},[t._v("#")]),t._v(" "),a("strong",[t._v("概述")])]),t._v(" "),a("p",[t._v("Dgraph 是一个可扩展的，分布式的，低延迟的图数据库，目标是提供 Google 生产水平的规模和吞吐量，在超过 TB 的结构数据里，为用户提供足够低延迟的实时查询。Dgraph有独立开发的网页端查询和操作界面，同时支持 GraphQL 作为查询语言。DGraph只支持最短路径的查询，不支持其它图形计算。")]),t._v(" "),a("h2",{attrs:{id:"架构-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构-4"}},[t._v("#")]),t._v(" "),a("strong",[t._v("架构")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.008.png",alt:""}})]),t._v(" "),a("p",[t._v("Dgraph 0.9开始支持事务，下面是Dgraph的事务模型。")]),t._v(" "),a("p",[t._v("如上图所示，参与事务的角色有：")]),t._v(" "),a("p",[t._v("Client：事务的发起者，网络客户端。")]),t._v(" "),a("p",[t._v("Dgraph server：Dgraph http server，负责接收处理client的http读写请求。")]),t._v(" "),a("p",[t._v("Zero server：Dgraph集群的中心节点，负责元数据维护，事务管理，负载均衡等工作，多副本部署，使用raft协议保证高可用和数据一致性。")]),t._v(" "),a("p",[t._v("Worker server：Dgraph 数据存储处理节点，多副本部署，使用raft协议保证高可用和数据一致性。")]),t._v(" "),a("h2",{attrs:{id:"特性-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性-4"}},[t._v("#")]),t._v(" "),a("strong",[t._v("特性")])]),t._v(" "),a("p",[t._v("1、支持分片")]),t._v(" "),a("p",[t._v("2、有自己的存储引擎")]),t._v(" "),a("p",[t._v("3、dgraph不支持属性，所有的属性都用边来表示。")]),t._v(" "),a("p",[t._v("4、不支持gremlin和opencypher查询语言")]),t._v(" "),a("h1",{attrs:{id:"图数据库对比图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图数据库对比图"}},[t._v("#")]),t._v(" "),a("strong",[t._v("图数据库对比图")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("维度/名称")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("GraphDB")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("JanusGraph")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Neo4j")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Titan")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("备注")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Titan已被Datastax收购后退役。它将从DB-Engines排名中删除。一个fork已经开源为"),a("a",{attrs:{href:"https://db-engines.com/en/system/JanusGraph",target:"_blank",rel:"noopener noreferrer"}},[t._v("JanusGraph"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("具有高效推理，集群和外部索引同步支持的企业级RDF和图形数据库。它还支持通过SPARQL对知识图和GraphQL的SQL JDBC访问。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("针对分布式集群优化的Graph DBMS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开源图数据库")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Titan是针对分布式集群优化的"),a("a",{attrs:{href:"https://db-engines.com/en/article/Graph+DBMS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Graph DBMS"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("主数据库模型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://db-engines.com/en/article/Graph+DBMS",target:"_blank",rel:"noopener noreferrer"}},[t._v("图DBMS"),a("OutboundLink")],1),a("br"),a("a",{attrs:{href:"https://db-engines.com/en/article/RDF+Stores",target:"_blank",rel:"noopener noreferrer"}},[t._v("RDF存储"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://db-engines.com/en/article/Graph+DBMS",target:"_blank",rel:"noopener noreferrer"}},[t._v("图形数据库管理系统"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://db-engines.com/en/article/Graph+DBMS",target:"_blank",rel:"noopener noreferrer"}},[t._v("图形数据库管理系统"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://db-engines.com/en/article/Graph+DBMS",target:"_blank",rel:"noopener noreferrer"}},[t._v("图形数据库管理系统"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("二级数据库模型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://db-engines.com/en/article/Spatial+DBMS",target:"_blank",rel:"noopener noreferrer"}},[t._v("空间数据库管理系统"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("网站")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://www.ontotext.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.ontotext.com"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://janusgraph.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("janusgraph.org"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://neo4j.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("neo4j.com"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"http://titan.thinkaurelius.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("titan.thinkaurelius.com"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("技术文档")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://graphdb.ontotext.com/documentation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("graphdb.ontotext.com/documentation"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://docs.janusgraph.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs.janusgraph.org"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://neo4j.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("neo4j.com/docs"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("a",{attrs:{href:"https://github.com/thinkaurelius/titan/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("github.com/thinkaurelius/titan/wiki"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("开发者")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("文字")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Linux基金会；最初由Aurelius开发为"),a("a",{attrs:{href:"https://db-engines.com/en/system/Titan",target:"_blank",rel:"noopener noreferrer"}},[t._v("Titan"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Neo4j，Inc.")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Aurelius，由DataStax拥有")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("初始发行")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2017年")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2007年")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2012年")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("当前的版本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9.6，2021年2月")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2020年5月0.5.2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4.2.3，2021年1月")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("是否开源")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("商业的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开源的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开源的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("开源的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("仅基于云")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("实施语言")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Java")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Java")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Java，Scala")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Java")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("服务器操作系统")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("所有具有Java VM的"),a("br"),t._v("操作系统Linux"),a("br"),t._v("OS X"),a("br"),t._v("Windows")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Linux"),a("br"),t._v("OS X"),a("br"),t._v("Unix"),a("br"),t._v("Windows")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Linux OS X Solaris Windows")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Linux"),a("br"),t._v("OS X"),a("br"),t._v("Unix"),a("br"),t._v("Windows")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("数据模式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("无模式和OWL / RDFS模式支持；RDF形状")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("无模式和可选模式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("预定义数据类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("XML支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("二级索引")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的，在SOLR /弹性搜索/ Lucene和GeoSPARQL几何数据索引中支持实时同步和索引编制")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SQL支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使用Apache Calcite通过JDBC / ODBC以SQL形式访问存储的SPARQL")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("API和其他访问方法")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("GeoSPARQL"),a("br"),t._v("GraphQL"),a("br"),t._v("GraphQL联合"),a("br"),t._v("Java API"),a("br"),t._v("JDBC"),a("br"),t._v("RDF4J API"),a("br"),t._v("RDFS"),a("br"),t._v("RIO"),a("br"),t._v("Sail API"),a("br"),t._v("Sesame REST HTTP Protocol"),a("br"),t._v("SPARQL 1.1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Java API"),a("br"),t._v("TinkerPop蓝图"),a("br"),t._v("TinkerPop框架"),a("br"),t._v("TinkerPop Gremlin"),a("br"),t._v("TinkerPop Rexster")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("螺栓协议"),a("br"),t._v("密码查询语言"),a("br"),t._v("Java API"),a("br"),t._v("Neo4j-OGM RESTful HTTP API Spring Data Neo4j TinkerPop 3"),a("img",{attrs:{src:"https://db-engines.com/info.png",alt:""}})]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Java API"),a("br"),t._v("TinkerPop蓝图"),a("br"),t._v("TinkerPop框架"),a("br"),t._v("TinkerPop Gremlin"),a("br"),t._v("TinkerPop Rexster")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("支持的编程语言")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v(".Net"),a("br"),t._v("C＃"),a("br"),t._v("Clojure"),a("br"),t._v("Java"),a("br"),t._v("JavaScript（Node.js）"),a("br"),t._v("PHP"),a("br"),t._v("Python"),a("br"),t._v("Ruby"),a("br"),t._v("Scala")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Clojure"),a("br"),t._v("Java"),a("br"),t._v("Python")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v(".Net"),a("br"),t._v("Clojure"),a("br"),t._v("Elixir"),a("br"),t._v("Go"),a("br"),t._v("Groovy"),a("br"),t._v("Haskell"),a("br"),t._v("Java"),a("br"),t._v("JavaScript"),a("br"),t._v("Perl"),a("br"),t._v("PHP"),a("br"),t._v("Python"),a("br"),t._v("Ruby"),a("br"),t._v("Scala")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Clojure"),a("br"),t._v("Java"),a("br"),t._v("Python")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("服务器端脚本")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("定义明确的插件接口；JavaScript服务器端可扩展性")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("触发器")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("分片支持")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("没有")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("没有")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("备份方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("多源复制")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("使用Raft协议的因果聚类")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("MapReduce  api")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("不")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("一致性概念")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("立即一致性，最终一致性（可在群集模式下根据每个主请求或单个客户端请求进行配置）")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最终一致性"),a("br"),t._v("立即一致性")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可在因果群集设置中配置因果和最终一致性，"),a("br"),t._v("在独立模式下可实现即时一致性")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("最终一致性"),a("br"),t._v("立即一致性")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("外键")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("事务性")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ACID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ACID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ACID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("ACID")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("并发性")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("持久性")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是的")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("用户访问控制")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通过RDF4J客户端进行默认的基本身份验证，或者在使用cURL运行时通过Java进行默认身份验证，在工作台中通过基于令牌的默认身份验证，或者通过Rest API，通过OpenID或Kerberos单一登录的可选访问。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通过Rexster Graph Server进行用户身份验证和安全性")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用户，角色和权限。具有支持的标准（LDAP，Active Directory，Kerberos）的可插入身份验证")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("通过Rexster Graph Server进行用户身份验证和安全性")])])])]),t._v(" "),a("h1",{attrs:{id:"参考文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" "),a("strong",[t._v("参考文献")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://neo4j.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://neo4j.com/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("https://janusgraph.org/")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/112266974",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/112266974"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("https://dgraph.io/")]),t._v(" "),a("p",[t._v("https://database.51cto.com/art/201911/606675.htm")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://db-engines.com/en/system/GraphDB%3BJanusGraph%3BNeo4j%3BTitan",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://db-engines.com/en/system/GraphDB%3BJanusGraph%3BNeo4j%3BTitan"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=_.exports}}]);