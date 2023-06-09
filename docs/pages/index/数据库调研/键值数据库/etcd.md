<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 14:05:34
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 15:18:22
-->
# **etcd**
## **概述**
etcd是CoreOS团队于2013年6月发起的开源项目，它的目标是构建一个高可用的分布式键值(key-value)数据库。etcd内部采用raft协议作为一致性算法，etcd基于Go语言实现。
## **架构**
![v2-87adbac969e187939a2dcd1ff0aa54c7\_1440w](/images/jianzhi/Aspose.Words.c9f17846-4b76-4cf3-af40-64ccbc0b8421.009.jpeg)
## **特性**
1、简单：安装配置简单，而且提供了HTTP API进行交互，使用也很简单

2、安全：支持SSL证书验证

4. 快速：根据官方提供的benchmark数据，单实例支持每秒2k+读操作

4、可靠：采用raft算法，实现分布式系统数据的可用性和一致性。
## **适用场景**
etcd比较多的应用场景是用于服务发现，服务发现(Service Discovery)要解决的是分布式系统中最常见的问题之一，即在同一个分布式集群中的进程或服务如何才能找到对方并建立连接。

从本质上说，服务发现就是要了解集群中是否有进程在监听upd或者tcp端口，并且通过名字就可以进行查找和链接。

要解决服务发现的问题，需要下面三大支柱，缺一不可。

一个强一致性、高可用的服务存储目录。

基于Ralf算法的etcd天生就是这样一个强一致性、高可用的服务存储目录。

一种注册服务和健康服务健康状况的机制。

用户可以在etcd中注册服务，并且对注册的服务配置key TTL，定时保持服务的心跳以达到监控健康状态的效果。

一种查找和连接服务的机制。

通过在etcd指定的主题下注册的服务业能在对应的主题下查找到。为了确保连接，我们可以在每个服务机器上都部署一个proxy模式的etcd，这样就可以确保访问etcd集群的服务都能够互相连接。
