<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 14:04:17
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 15:18:29
-->
# **Memcached**
## **概述**
Memcached是一个自由开源的，高性能，分布式内存对象缓存系统。

Memcached是以LiveJournal旗下Danga Interactive公司的Brad Fitzpatric为首开发的一款软件。现在已成为mixi、hatena、Facebook、Vox、LiveJournal等众多服务中提高Web应用扩展性的重要因素。

Memcached是一种基于内存的key-value存储，用来存储小块的任意数据（字符串、对象）。这些数据可以是数据库调用、API调用或者是页面渲染的结果。

Memcached简洁而强大。它的简洁设计便于快速开发，减轻开发难度，解决了大数据量缓存的很多问题。它的API兼容大部分流行的开发语言。

本质上，它是一个简洁的key-value存储系统。

一般的使用目的是，通过缓存数据库查询结果，减少数据库访问次数，以提高动态Web应用的速度、提高可扩展性。
## **架构**
![2](/images/jianzhi/Aspose.Words.c9f17846-4b76-4cf3-af40-64ccbc0b8421.002.png)
## **特性**
1、协议简单

2、基于libevent的事件处理

3、内置内存存储方式

4、memcached不互相通信的分布式
## **适用场景**
1、数据查询缓存：将数据库中的数据加载到memcached，提供程序的访问速度

2、计数器的场景：通过incr/decr命令实现评论数量、点击数统计、操作次数等等场景

3、乐观锁实现：例如计划任务多实例部署的场景下，通过CAS实现不重复执行。

4、防止重复处理：CAS命令