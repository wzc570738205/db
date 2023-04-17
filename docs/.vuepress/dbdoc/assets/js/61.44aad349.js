(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{415:function(e,r,t){"use strict";t.r(r);var s=t(42),a=Object(s.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hbase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hbase"}},[e._v("#")]),e._v(" "),t("strong",[e._v("hbase")])]),e._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" "),t("strong",[e._v("概述")])]),e._v(" "),t("p",[e._v("HBase 是一个开源的、分布式的、版本化的 NoSQL 数据库（也即非关系型数据库），它利用 Hadoop 分布式文件系统（Hadoop Distributed File System，HDFS）提供分布式数据存储。与传统的关系型数据库类似，HBase 也以表的形式组织数据，表也由行和列组成；不同的是，HBase 有列族的概念，它将一列或者多列组织在一起，HBase 的每一个列都必须属于某个列族。")]),e._v(" "),t("h2",{attrs:{id:"架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[e._v("#")]),e._v(" "),t("strong",[e._v("架构")])]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/lieshi/Aspose.Words.5014b4e0-af97-4ac4-b26a-729180fc467a.002.png",alt:""}})]),e._v(" "),t("p",[e._v("从HBase的架构图上可以看出，HBase中的存储包括HMaster、HRegionSever、HRegion、HLog、Store、MemStore、StoreFile、HFile等。")]),e._v(" "),t("h2",{attrs:{id:"client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Client")])]),e._v(" "),t("p",[e._v("包含访问HBase的接口并维护cache来加快对HBase的访问")]),e._v(" "),t("h2",{attrs:{id:"zookeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Zookeeper")])]),e._v(" "),t("p",[e._v("保证任何时候，集群中只有一个master")]),e._v(" "),t("p",[e._v("存贮所有Region的寻址入口。")]),e._v(" "),t("p",[e._v("实时监控Region server的上线和下线信息。并实时通知Master")]),e._v(" "),t("p",[e._v("存储HBase的schema和table元数据")]),e._v(" "),t("h2",{attrs:{id:"master"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#master"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Master")])]),e._v(" "),t("p",[e._v("为Region server分配region")]),e._v(" "),t("p",[e._v("负责Region server的负载均衡")]),e._v(" "),t("p",[e._v("发现失效的Region server并重新分配其上的region")]),e._v(" "),t("p",[e._v("管理用户对table的增删改操作")]),e._v(" "),t("h2",{attrs:{id:"regionserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regionserver"}},[e._v("#")]),e._v(" "),t("strong",[e._v("RegionServer")])]),e._v(" "),t("p",[e._v("Region server维护region，处理对这些region的IO请求")]),e._v(" "),t("p",[e._v("Region server负责切分在运行过程中变得过大的region")]),e._v(" "),t("h2",{attrs:{id:"hlog-wal-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hlog-wal-log"}},[e._v("#")]),e._v(" "),t("strong",[e._v("HLog(WAL log)")])]),e._v(" "),t("p",[e._v("HLog文件就是一个普通的Hadoop Sequence File，Sequence File 的Key是 HLogKey对象，HLogKey中记录了写入数据的归属信息，除了table和 region名字外，同时还包括sequence number和timestamp，timestamp是” 写入时间”，sequence number的起始值为0，")]),e._v(" "),t("p",[e._v("或者是最近一次存入文件系 统中sequence number。")]),e._v(" "),t("p",[e._v("HLog SequeceFile的Value是HBase的KeyValue对象，即对应HFile中的 KeyValue")]),e._v(" "),t("h2",{attrs:{id:"region"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#region"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Region")])]),e._v(" "),t("p",[e._v("HBase自动把表水平划分成多个区域(region)，每个region会保存一个表 里面某段连续的数据；每个表一开始只有一个region，随着数据不断插 入表，region不断增大，当增大到一个阀值的时候，region就会等分会 两个新的region（裂变）；")]),e._v(" "),t("p",[e._v("当table中的行不断增多，就会有越来越多的region。这样一张完整的表 被保存在多个Regionserver上。")]),e._v(" "),t("h2",{attrs:{id:"memstore-与-storefile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#memstore-与-storefile"}},[e._v("#")]),e._v(" "),t("strong",[e._v("Memstore 与 storefile")])]),e._v(" "),t("p",[e._v("一个region由多个store组成，一个store对应一个CF（列族）")]),e._v(" "),t("p",[e._v("store包括位于内存中的memstore和位于磁盘的storefile写操作先写入 memstore，当memstore中的数据达到某个阈值，hregionserver会启动 flashcache进程写入storefile，每次写入形成单独的一个storefile")]),e._v(" "),t("p",[e._v("当storefile文件的数量增长到一定阈值后，系统会进行合并（minor、 major compaction），在合并过程中会进行版本合并和删除工作 （majar），形成更大的storefile。")]),e._v(" "),t("p",[e._v("当一个region所有storefile的大小和超过一定阈值后，会把当前的region 分割为两个，并由hmaster分配到相应的regionserver服务器，实现负载均衡。")]),e._v(" "),t("p",[e._v("客户端检索数据，先在memstore找，找不到再找storefile")]),e._v(" "),t("p",[e._v("HRegion是HBase中分布式存储和负载均衡的最小单元。最小单元就表 示不同的HRegion可以分布在不同的HRegion server上。")]),e._v(" "),t("p",[e._v("HRegion由一个或者多个Store组成，每个store保存一个columns family。")]),e._v(" "),t("p",[e._v("每个Strore又由一个memStore和0至多个StoreFile组成。StoreFile 以HFile格式保存在HDFS上。")]),e._v(" "),t("h2",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[e._v("#")]),e._v(" "),t("strong",[e._v("特点")])]),e._v(" "),t("p",[e._v("1、大：一个表可以有上亿行，上百万列。")]),e._v(" "),t("p",[e._v("2、面向列：面向列表(簇)的存储和权限控制，列(簇)独立检索。")]),e._v(" "),t("p",[e._v("3、稀疏：对于为空(NULL)的列，并不占用存储空间，因此，表可以设计的非常稀疏。")]),e._v(" "),t("p",[e._v("4、无模式：每一行都有一个可以排序的主键和任意多的列，列可以根据需要动态增加，同一张表中不同的行可以有截然不同的列。")]),e._v(" "),t("p",[e._v("5、数据多版本：每个单元中的数据可以有多个版本，默认情况下，版本号自动分配，版本号就是单元格插入时的时间戳。")]),e._v(" "),t("p",[e._v("6、数据类型单一：HBase中的数据都是字符串，没有类型。")]),e._v(" "),t("h2",{attrs:{id:"优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[e._v("#")]),e._v(" "),t("strong",[e._v("优缺点")])]),e._v(" "),t("h2",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[e._v("#")]),e._v(" "),t("strong",[e._v("优点")])]),e._v(" "),t("p",[e._v("列可以动态增加，并且列为空就不存储数据,节省存储空间。")]),e._v(" "),t("p",[e._v("Hbase自动切分数据，使得数据存储自动具有水平scalability。")]),e._v(" "),t("h2",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[e._v("#")]),e._v(" "),t("strong",[e._v("缺点")])]),e._v(" "),t("p",[e._v("不能支持条件查询，只支持按照Row key来查询。")]),e._v(" "),t("p",[e._v("不适合于大范围扫描查询。")]),e._v(" "),t("p",[e._v("不支持事务。")]),e._v(" "),t("p",[e._v("不直接支持SQL 的语句查询。")])])}),[],!1,null,null,null);r.default=a.exports}}]);