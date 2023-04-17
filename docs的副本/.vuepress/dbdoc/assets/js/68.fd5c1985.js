(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{422:function(v,_,r){"use strict";r.r(_);var t=r(42),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h1",{attrs:{id:"neo4j"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#neo4j"}},[v._v("#")]),v._v(" "),r("strong",[v._v("Neo4j")])]),v._v(" "),r("h2",{attrs:{id:"概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[v._v("#")]),v._v(" "),r("strong",[v._v("概述")])]),v._v(" "),r("p",[v._v("Neo4j是一个网络——面向网络的数据库——也就是说，它是一个嵌入式的、基于磁盘的、具备完全的事务特性的Java持久化引擎，但是它将结构化数据存储在网络上而不是表中。网络（从数学角度叫做图）是一个灵活的数据结构，可以应用更加敏捷和快速的开发模式。")]),v._v(" "),r("p",[v._v("你可以把Neo4j看作是一个高性能的图引擎，该引擎具有成熟和健壮的数据库的所有特性。程序员工作在一个面向对象的、灵活的网络结构下而不是严格、静态的表中——但是他们可以享受到具备完全的事务特性、企业级的数据库的所有好处。")]),v._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.001.png",alt:""}})]),v._v(" "),r("p",[v._v("Neo4j有以下基本概念：")]),v._v(" "),r("p",[v._v("1、标签(Label)")]),v._v(" "),r("p",[v._v("在Neo4j中，一个节点可以有一个以上的标签，从现实世界的角度去看，一个标签可以认为节点的某个类别，比如BOOK、MOVIE等等。")]),v._v(" "),r("p",[v._v("2、节点(Node)")]),v._v(" "),r("p",[v._v("节点是指一个实实在在的对象，这个对象可以有好多的标签，表示对象的种类，也可以有好多的属性，描述其特征，节点与节点之间还可以形成多个有方向（或者没有方向）的关系。")]),v._v(" "),r("p",[v._v("3、关系(Relationship)")]),v._v(" "),r("p",[v._v("用来描述节点与节点之间的关系，这也是图数据与与普通数据库最大的区别，正是因为有这些关系的存在，才可以描述那些我们普通行列数据库所很难表示的网状关系，比如我们复杂的人际关系网，所谓的六度理论，就可以很方便的用图数据库进行模拟，比如我们大脑神经元之间的连接方式，都是一张复杂的网。")]),v._v(" "),r("p",[v._v("有一点需要重点注意，关系可以拥有属性。")]),v._v(" "),r("p",[v._v("4、属性(Property)")]),v._v(" "),r("p",[v._v("描述节点的特性，采用的是Key-Value结构，可以随意设定来描述节点的特征。")]),v._v(" "),r("h2",{attrs:{id:"架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[v._v("#")]),v._v(" "),r("strong",[v._v("架构")])]),v._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.002.png",alt:""}})]),v._v(" "),r("p",[v._v("Neo4j集群由两个不同的角色Core Servers和Read Replicas组成，这两个角色是任何生产部署中的基础，但彼此之间的管理规模不同，并且在管理整个集群的容错性和可伸缩性方面承担着不同的角色。")]),v._v(" "),r("p",[v._v("Core Servers：")]),v._v(" "),r("p",[v._v("核心服务器的主要责任是保护数据。 核心服务器通过使用Raft协议复制所有事务来做到这一点。 在确认向最终用户应用程序提交事务之前，Raft确保数据安全持久。 在实际环境中，这意味着一旦集群（N / 2 + 1）中的大多数核心服务器都接受了事务，安全性要求会影响写入延迟。 隐式写入将以最快的多数Core Servers被确认，但是随着群集中核心服务器数量的增加，确认一次写入所需的Core Servers的数量也会增加。实际上，这意味着典型的Core Server集群中需要一定数量的服务器，足以为特定部署提供足够的容错能力。 这是使用公式M = 2F +1计算的，其中M是容忍F故障所需的核心服务器数量。 例如：")]),v._v(" "),r("p",[v._v("1、为了容忍两个发生故障的核心服务器，我们需要部署五个核心的集群。")]),v._v(" "),r("p",[v._v("2、最小的容错群集（一个可以容忍一个故障的群集）必须具有三个内核。")]),v._v(" "),r("p",[v._v("3、也可以创建仅包含两个核心的因果集群。 但是，该群集不是容错的。 如果两个服务器之一发生故障，其余服务器将变为只读。")]),v._v(" "),r("p",[v._v("请注意，如果Core Server集群遭受足够的故障而无法处理写入，则它将变为只读状态以保持安全。")]),v._v(" "),r("p",[v._v("Read Replicas：")]),v._v(" "),r("p",[v._v("只读副本的主要职责是扩展图数据负载能力（密码查询，过程等）。 只读副本的作用类似于Core Server保护的数据的缓存，但它们不是简单的键值缓存。 实际上，只读副本是功能齐全的Neo4j数据库，能够完成任意（只读）图数据查询和过程。")]),v._v(" "),r("p",[v._v("只读副本是通过事务日志传送从Core Servers异步复制的。 只读副本将定期（通常在ms范围内）轮询核心服务器以查找自上次轮询以来已处理的任何新事务，并且核心服务器会将这些事务发送到只读副本。 可以从相对较少的Core Server中馈送许多只读副本数据，从而使查询工作量大为增加，从而扩大规模。")]),v._v(" "),r("p",[v._v("但是，与核心服务器不同，只读副本不参与有关群集拓扑的决策。 只读副本通常应以相对较大的数量运行，并视为一次性使用。 丢失只读副本不会影响群集的可用性，除了丢失其图表查询吞吐量的一部分。 它不会影响群集的容错能力。")]),v._v(" "),r("h2",{attrs:{id:"特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[v._v("#")]),v._v(" "),r("strong",[v._v("特性")])]),v._v(" "),r("p",[r("img",{attrs:{src:"/docs/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.003.png",alt:""}})]),v._v(" "),r("p",[v._v("1、因果一致性:使得可以写入Core Server（数据是安全的）并从Read Replica（其中图操作被扩展）中读取这些写入。 例如，因果一致性可确保当该用户随后尝试登录时，会出现创建该用户帐户的写操作。")]),v._v(" "),r("p",[v._v("在执行事务时，客户可以要求书签，然后将其作为参数提供给后续事务。 使用该书签，集群可以确保只有处理了该客户已添加书签的事务的服务器才能运行其下一个事务。 这提供了因果链，从客户的角度确保了正确的写后读语义。")]),v._v(" "),r("p",[v._v("除了书签之外，其他所有事情都由集群处理。 数据库驱动程序与群集拓扑管理器一起使用，以选择最合适的核心服务器和只读副本，以提供高质量的服务。")]),v._v(" "),r("p",[v._v("2、生态完整")]),v._v(" "),r("p",[v._v("3、opencypher查询语言简单易用")]),v._v(" "),r("p",[v._v("4、稳定性好")]),v._v(" "),r("p",[v._v("5、不支持分片")]),v._v(" "),r("h2",{attrs:{id:"适用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[v._v("#")]),v._v(" "),r("strong",[v._v("适用场景")])]),v._v(" "),r("h2",{attrs:{id:"金融行业应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#金融行业应用"}},[v._v("#")]),v._v(" "),r("strong",[v._v("金融行业应用")])]),v._v(" "),r("p",[v._v("反欺诈多维关联分析场景")]),v._v(" "),r("p",[v._v("通过图分析可以清楚地知道洗钱网络及相关嫌疑，例如对用户所使用的帐号、发生交易时的IP地址、MAC地址、手机IMEI号等进行关联分析。")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1112483/201908/1112483-20190801095241110-1381634203.png",alt:""}})]),v._v(" "),r("p",[v._v("反洗钱模型")]),v._v(" "),r("p",[v._v("反欺诈已经是金融行业一个核心应用，通过图数据库可以对不同的个体、团体做关联分析，从人物在指定时间内的行为，例如去过地方的IP地址、曾经使用过的MAC地址（包括手机端、PC端、WIFI等）、社交网络的关联度分析，同一时间点是否曾经在同一地理位置附近出现过，银行账号之间是否有历史交易信息等。")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1112483/201908/1112483-20190801095307862-1405114974.png",alt:""}})]),v._v(" "),r("p",[v._v("金融反欺诈关联分析模型")]),v._v(" "),r("h2",{attrs:{id:"社交网络图谱"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#社交网络图谱"}},[v._v("#")]),v._v(" "),r("strong",[v._v("社交网络图谱")])]),v._v(" "),r("p",[v._v("在社交网络中，公司、员工、技能的信息，这些都是节点，它们之间的关系和朋友之间的关系都是边，在这里面图数据库可以做一些非常复杂的公司之间关系的查询。比如说公司到员工、员工到其他公司，从中找类似的公司、相似的公司，都可以在这个系统内完成。")]),v._v(" "),r("p",[r("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1112483/201908/1112483-20190801095332216-962914232.png",alt:""}})]),v._v(" "),r("p",[v._v("社交关系网络模型")]),v._v(" "),r("h2",{attrs:{id:"企业关系图谱"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#企业关系图谱"}},[v._v("#")]),v._v(" "),r("strong",[v._v("企业关系图谱")])]),v._v(" "),r("p",[v._v("图数据库可以对各种企业进行信息图谱的建立，包括最基本的工商信息，包括何时注册、谁注册、注册资本、在何处办公、经营范围、高管架构。围绕企业的经营范围，继续细化去查询企业究竟有哪些产品或服务，例如通过企业名称查询到企业的自媒体，从而给予其更多关注和了解。另外也包括对企业的产品和服务的数据关联，查看该企业有没有令人信服的自主知识产权和相关资质来支撑业务的开展。")]),v._v(" "),r("p",[v._v("企业在日常经营中，与客户、合作伙伴、渠道方、投资者都会打交道，这也决定了企业对社会各个领域都广有涉猎，呈现面错综复杂，因此可以通过企业数据图谱来查询，层层挖掘信息。基于图数据的企业信息查询可以真正了解企业的方方面面，而不再是传统单一的工商信息查询。")])])}),[],!1,null,null,null);_.default=s.exports}}]);