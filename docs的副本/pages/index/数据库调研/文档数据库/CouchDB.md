<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 15:29:21
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 15:31:44
-->
# **CouchDB**
## **概述**
CouchDB是用[Erlang](https://baike.baidu.com/item/Erlang)开发的面向文档的[数据库系统](https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F)，2010年7月14日发布了1.0版本。CouchDB不是一个传统的关系数据库，而是面向文档的数据库，其数据存储方式有点类似[lucene](https://baike.baidu.com/item/lucene)的index文件格式，CouchDB最大的意义在于它是一个面向web应用的新一代[存储系统](https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E7%B3%BB%E7%BB%9F)，事实上，CouchDB的口号就是：下一代的Web应用存储系统。
## **架构**
![IMG\_256](/docs/images/wendang/Aspose.Words.673c07ef-7901-4eb2-b389-19d4dd9471e3.002.png)
## **特性**
CouchDB是分布式的数据库，他可以把[存储系统](https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E7%B3%BB%E7%BB%9F)分布到n台物理的节点上面，并且很好的协调和同步节点之间的数据读写一致性。这当然也得靠Erlang无与伦比的并发特性才能做到。对于基于web的大规模应用文档应用，分布式可以让它不必像传统的关系数据库那样分库拆表，在应用代码层进行大量的改动。

CouchDB是面向文档的数据库，存储半结构化的数据，比较类似[lucene](https://baike.baidu.com/item/lucene)的index结构，特别适合存储文档，因此很适合CMS，电话本，地址本等应用，在这些应用场合，[文档数据库](https://baike.baidu.com/item/%E6%96%87%E6%A1%A3%E6%95%B0%E6%8D%AE%E5%BA%93)要比关系数据库更加方便，性能更好。

\*CouchDB支持REST API，可以让用户使用[JavaScript](https://baike.baidu.com/item/JavaScript)来操作CouchDB数据库，也可以用JavaScript编写查询语句，我们可以想像一下，用[AJAX](https://baike.baidu.com/item/AJAX)技术结合CouchDB开发出来的CMS系统会是多么的简单和方便。

其实CouchDB只是Erlang应用的冰山一角，在最近几年，基于Erlang的应用也得到的蓬勃的发展，特别是在基于web的大规模，分布式应用领域，几乎都是Erlang的优势项目。
## **适用场景**
如果你在构建一个 Lotus Notes型的应用，我们推荐使用CouchDB，主要是由于它的MVCC机制。另外如果我们需要master-master的架构，需要基于地理位置的数据分布，或者在数据结点可能不在线的情况下，我们推荐使用CouchDB。

如果你需要高性能的存储服务，那我们推荐MongoDB，比如用于存储大型网站的用户个人信息，比如用于构建在其它存储层之上的Cache层。

如果你的需求中有大量update操作，那么使用MongoDB吧。就像我们在例子updating real time analytics counters中的一样，对于那种经常变化的数据，比如浏览量，访问数之类的数据存储。