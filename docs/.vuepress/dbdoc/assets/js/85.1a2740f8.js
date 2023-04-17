(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{439:function(e,r,t){"use strict";t.r(r);var s=t(42),o=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"presto"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#presto"}},[e._v("#")]),e._v(" "),t("strong",[e._v("presto")])]),e._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" "),t("strong",[e._v("概述")])]),e._v(" "),t("p",[e._v("Presto是由Facebook开发的一个分布式SQL查询引擎， 它被设计为用来专门进行高速、实时的数据分析。它的产生是为了解决Hive的MapReduce模型太慢以及不能通过BI或Dashboards直接展现HDFS数据等问题。Presto是一个纯粹的计算引擎，它不存储数据，其通过Connector获取第三方Storage服务的数据。")]),e._v(" "),t("h2",{attrs:{id:"架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[e._v("#")]),e._v(" "),t("strong",[e._v("架构")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/dashuju/Aspose.Words.390a89bc-6b49-496d-b349-93be6392fec4.003.png",alt:""}})]),e._v(" "),t("p",[e._v("Presto沿用了通用的Master-Slave架构，Coordinator即Presto的Master，Worker即其Slave，Discovery Service就是用来保存Worker结点信息的，通过HTTP协议通信，而Connector用于获取第三方存储的Metadata及原始数据等。")]),e._v(" "),t("p",[e._v("Coordinator负责解析SQL语句，生成执行计划，分发执行任务给Worker节点执行；Worker节点负责实际执行查询任务。Worker节点启动后向Discovery Server服务注册，Coordinator从Discovery Server获得可以正常工作的Worker节点。假如配置了Hive Connector，需要配置一个Hive MetaStore服务为Presto提供Hive元信息，Worker节点与HDFS交互读取数据。")]),e._v(" "),t("h2",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[e._v("#")]),e._v(" "),t("strong",[e._v("特点")])]),e._v(" "),t("p",[e._v("1.Ad-hoc，期望查询时间秒级或几分钟")]),e._v(" "),t("p",[e._v("2.比Hive快10倍")]),e._v(" "),t("p",[e._v("3.支持多数据源，如Hive、Kafka、MySQL、MonogoDB、Redis、JMX等，也可自己实现Connector")]),e._v(" "),t("p",[e._v("Client Protocol: HTTP+JSON, support various languages(Python, Ruby, PHP, Node.js Java)")]),e._v(" "),t("p",[e._v("支持JDBC/ODBC连接")]),e._v(" "),t("p",[e._v("4.ANSI SQL，支持窗口函数，join，聚合，复杂查询等。")]),e._v(" "),t("h2",{attrs:{id:"与hive比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与hive比较"}},[e._v("#")]),e._v(" "),t("strong",[e._v("与hive比较")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/dashuju/Aspose.Words.390a89bc-6b49-496d-b349-93be6392fec4.004.png",alt:""}})]),e._v(" "),t("p",[e._v("上图显示了MapReduce与Presto的执行过程的不同点，MR每个操作要么需要写磁盘，要么需要等待前一个stage全部完成才开始执行，而Presto将SQL转换为多个stage，每个stage又由多个tasks执行，每个tasks又将分为多个split。所有的task是并行的方式进行允许，stage之间数据是以pipeline形式流式的执行，数据之间的传输也是通过网络以Memory-to-Memory的形式进行，没有磁盘io操作。这也是Presto性能比Hive快很多倍的决定性原因。")])])}),[],!1,null,null,null);r.default=o.exports}}]);