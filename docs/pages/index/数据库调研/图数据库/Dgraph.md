# **Dgraph**
## **概述**
Dgraph 是一个可扩展的，分布式的，低延迟的图数据库，目标是提供 Google 生产水平的规模和吞吐量，在超过 TB 的结构数据里，为用户提供足够低延迟的实时查询。Dgraph有独立开发的网页端查询和操作界面，同时支持 GraphQL 作为查询语言。DGraph只支持最短路径的查询，不支持其它图形计算。
## **架构**
![](/images/tushuju/Aspose.Words.d7710a73-3b61-4240-b67b-530b3074a743.008.png)

Dgraph 0.9开始支持事务，下面是Dgraph的事务模型。

如上图所示，参与事务的角色有：

Client：事务的发起者，网络客户端。

Dgraph server：Dgraph http server，负责接收处理client的http读写请求。

Zero server：Dgraph集群的中心节点，负责元数据维护，事务管理，负载均衡等工作，多副本部署，使用raft协议保证高可用和数据一致性。

Worker server：Dgraph 数据存储处理节点，多副本部署，使用raft协议保证高可用和数据一致性。
## **特性**
1、支持分片

2、有自己的存储引擎

3、dgraph不支持属性，所有的属性都用边来表示。

4、不支持gremlin和opencypher查询语言