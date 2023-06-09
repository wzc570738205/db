(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{440:function(a,t,e){"use strict";e.r(t);var r=e(42),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"impala"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#impala"}},[a._v("#")]),a._v(" "),e("strong",[a._v("impala")])]),a._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[a._v("#")]),a._v(" "),e("strong",[a._v("概述")])]),a._v(" "),e("p",[a._v("由cloudera公司主导开发的大数据实时查询分析工具，宣称比原来基于MapReduce的HiveSQL查询速度提升3~90倍，且更加灵活易用。提供类SQL的查询语句，能够查询存储在Hadoop的HDFS和Hbase中的PB级大数据。查询速度快是其最大的卖点。")]),a._v(" "),e("h2",{attrs:{id:"架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[a._v("#")]),a._v(" "),e("strong",[a._v("架构")])]),a._v(" "),e("p",[e("img",{attrs:{src:"/images/dashuju/Aspose.Words.390a89bc-6b49-496d-b349-93be6392fec4.005.png",alt:""}})]),a._v(" "),e("p",[a._v("从上图可以看出，位于Datanode上的每个impalad进程，都具有Query Planner,QueryCoordinator,Query ExecEnginer这几个组件，每个impala节点在功能上是对等的，也就是说，任何一个节点都能接受外部查询请求。当有一个节点发生故障后，其他节点仍然能够接管，这还得益于HDFS的数据冗余备份机制，即使某个impalad节点挂掉，只要挂掉的节点上的数据在其他节点上有备份，仍然是可以计算的。")]),a._v(" "),e("h2",{attrs:{id:"特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[a._v("#")]),a._v(" "),e("strong",[a._v("特点")])]),a._v(" "),e("p",[a._v("1 查询速度快。Impala不同于hive，hive底层执行使用的是MapReduce引擎，仍然是一个批处理过程。不同于hive，impala中间结果不写入磁盘，及时通过网络以流的形式传递，大大降低的节点的IO开销。")]),a._v(" "),e("p",[a._v("2 灵活性高。可以直接查询存储在HDFS上的原生数据，也可以查询经过优化设计而存储的数据，只需要数据的格式能够兼容MapReduce、hive、Pig等等。")]),a._v(" "),e("p",[a._v("3 易整合。很容易和hadoop系统整合，并使用hadoop生态系统的资源和优势，不需要将数据迁移到特定的存储系统就能满足查询分析的要求。")]),a._v(" "),e("p",[a._v("4 可伸缩性。可以很好的与一些BI应用系统协同工作，如Microstrategy、Tableau、Qlikview等。")]),a._v(" "),e("h2",{attrs:{id:"优缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[a._v("#")]),a._v(" "),e("strong",[a._v("优缺点")])]),a._v(" "),e("h2",{attrs:{id:"优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" "),e("strong",[a._v("优点")])]),a._v(" "),e("p",[a._v("1.支持SQL查询，快速查询大数据。")]),a._v(" "),e("p",[a._v("2.可以对已有数据进行查询，减少数据的加载，转换。")]),a._v(" "),e("p",[a._v("3.多种存储格式可以选择（Parquet,Text, Avro, RCFile, SequeenceFile）。")]),a._v(" "),e("p",[a._v("4.可以与Hive配合使用。")]),a._v(" "),e("h2",{attrs:{id:"缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[a._v("#")]),a._v(" "),e("strong",[a._v("缺点")])]),a._v(" "),e("p",[a._v("1.不支持用户定义函数UDF。")]),a._v(" "),e("p",[a._v("2.不支持text域的全文搜索。")]),a._v(" "),e("p",[a._v("3.不支持Transforms。")]),a._v(" "),e("p",[a._v("4.不支持查询期的容错。")]),a._v(" "),e("p",[a._v("5.对内存要求高。")]),a._v(" "),e("p",[a._v("在实时性要求不高的应用场景中，比如，月度、季度、年度报表的生成。可以使用基于传统的HadoopMapreduce处理海量大数据。但是在一些实时性要求很高的场景")]),a._v(" "),e("p",[a._v("中，一方面满足实时性要求，一方面提升用户体验。Impala因其快速的响应能力当之无愧作为首选查询分析工具。")])])}),[],!1,null,null,null);t.default=v.exports}}]);