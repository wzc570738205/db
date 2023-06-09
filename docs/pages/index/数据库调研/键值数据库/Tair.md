<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 14:05:26
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 15:18:38
-->
# **Tair**
## **Tair([性能增强型](https://www.alibabacloud.com/help/zh/doc-detail/126164.htm?spm=a2c63.p38356.879954.3.4b024c65WpFagE#concept-1254543 "Redis企业版性能增强型（简称性能增强型）适合并发量大、读写热点多，对性能的要求超过云Redis社区版实例的场景。相比云数据库Redis社区版，企业版的性能增强型主要多线程性能增强和多模块集成方面进行了优化。"))**
## **概述**
Redis企业版性能增强型（简称性能增强型）适合并发量大、读写热点多，对性能的要求超过云Redis社区版实例的场景。相比云数据库Redis社区版，企业版的性能增强型主要多线程性能增强和多模块集成方面进行了优化。
## **架构**
![1616465760(1)](/images/jianzhi/Aspose.Words.c9f17846-4b76-4cf3-af40-64ccbc0b8421.007.png)
## **特性**
1、100%兼容原生Redis，无需修改业务代码。

2、读写性能达到同规格原生Redis或者云Redis社区版实例的3倍，能够突破热点数据高频读写受到的性能限制。

3、相比原生Redis，高QPS场景下响应时间更低，性能表现更佳。

4、在大并发场景下运行稳定，可以极大地缓解突发大量请求导致的连接问题，从容应对业务高峰。

5、全量同步和增量同步在IO线程中进行，提高同步速度。

6、支持标准、集群和读写分离部署架构。

7、集成多个自研的Redis模块，包括：[TairString](https://www.alibabacloud.com/help/zh/doc-detail/145902.htm#concept-2353550 "本章节介绍TairString数据支持的命令。")、[TairHash](https://www.alibabacloud.com/help/zh/doc-detail/145970.htm#concept-2353551 "本文介绍TairHash数据支持的命令。")、[TairGIS](https://www.alibabacloud.com/help/zh/doc-detail/145971.htm#concept-2353552 "本章节介绍TairGIS数据支持的命令。")、[TairBloom](https://www.alibabacloud.com/help/zh/doc-detail/145972.htm#concept-2353553 "本章节介绍TairBloom数据支持的命令。")和[TairDoc](https://www.alibabacloud.com/help/zh/doc-detail/145940.htm#concept-2353554 "本章节介绍TairDoc数据支持的命令。")，扩展了Redis的适用性，同时降低了复杂场景下业务的开发难度，让您专注于业务创新。
## **适用场景**
适用于视频直播、电商秒杀和在线教育等场景，下面列举了性能增强型在4个典型场景中的应用。

场景1：使用Redis社区版的标准版-双副本实例在秒杀场景中构建缓存，部分热点Key的QPS要求高达20万以上，社区版实例无法满足业务高峰期的需求。

采用性能增强型（标准架构）实例后，热门商品秒杀过程流畅，未发生性能问题。

场景2：在业务中使用云Redis社区版集群实例，但在使用事务和Lua脚本功能时有一定的限制。

采用性能增强型实例后，在满足性能需求的同时消除了集群版的命令使用限制。

场景3：自建有一主多备的Redis服务，随着业务中访问量的不断提高，备节点数量也要随之增加，管理维护成本越来越高。

采用具备一个数据节点五个只读副本的性能增强型（读写分离架构）实例后，可以轻松应对百万级QPS的业务挑战。

场景4：自建有Redis集群来承担线上千万级QPS的业务压力。随着业务的发展，Redis分片数不断增加，管理维护成本居高不下。

采用性能增强型（集群架构）实例后，集群规模缩到原来的三分之一，管理维护成本大幅降低。
## **Tair(混合存储型)**
## **概述**
云数据库Redis企业版混合存储型。与社区版Redis不同，混合存储型整合了内存和磁盘二者的优势，在提供高速数据读写能力的同时满足了数据持久化的需求。
## **架构**
![p52674](/images/jianzhi/Aspose.Words.c9f17846-4b76-4cf3-af40-64ccbc0b8421.008.png)
## **特性**
Redis企业版混合存储型（简称混合存储型）是阿里云自主研发的兼容Redis协议的混合存储产品，使用磁盘存储全量数据，将热数据保存到内存中供应用快速读写。在保证常用数据访问性能不下降的基础上，混合存储型能够大幅度降低用户成本，实现性能与成本的平衡，同时使单个Redis实例的数据量不再受内存大小的限制。

内存数据：内存中存放了热数据的Key和Value，同时为快速确认要操作的Key是否存在，内存中也会缓存所有的Key信息。

磁盘数据：磁盘中存放所有的Key和Value，Redis的数据结构（例如Hash）也会以一定的格式进行存储在磁盘。
## **适用场景**
视频直播 视频直播类业务往往存在大量热点数据，大部分的请求都来自于热门的直播间。使用混合存储型，内存中保留热门直播间的数据，不活跃的直播间数据被自动存储到磁盘上，可以达到对有限内存的最佳利用效果。

电子商务 电商类应用往往有大量的商品数据。使用混合存储型可以轻松突破内存容量限制，将大量的商品数据都存储到混合存储型中。在正常业务请求中，活跃的商品数据会保留在内存，不活跃的商品数据会逐渐交换到磁盘上，从而解决内存不够的问题。

在线教育 在线教育类的场景有大量的课程、题库以及师生交流信息等数据，通常只有热门课程和最新题库会被频繁访问。使用混合存储型，将所有课程信息存储到磁盘，访问量大的课程和题库数据存储到内存并常驻内存，保证高频访问数据的读写性能，实现高性能与高性价比的有机结合。

典型业务场景的示例如下：

场景1：使用开源Redis集群存储了100GB的数据，但高峰期QPS不到2万，其中80%的数据的访问频率很低。

使用32GB内存加128GB磁盘的混合存储型实例后，节省了近70GB的内存空间，存储成本下降50%以上。

场景2：在IDC自建Pika实例来解决Redis存储成本高的问题。总数据量约400GB，其中访问频率高的数据仅占10%左右，并且集群的运维成本居高不下。

使用64GB内存加512GB磁盘的混合存储型实例后，既免除了繁重的运维工作，又保障了服务质量。