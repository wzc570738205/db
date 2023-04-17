# **Flare**
## **概述**
Flare简单的说就是给TC添加了scale功能。他替换掉了TT部分，自己另外给TC写了网络服务器，Flare的主要特点就是支持scale能力，他在网络服务端之前添加了一个node server，来管理后端的多个服务器节点，因此可以动态添加数据库服务节点，删除服务器节点，也支持failover。如果你的使用场景必须要让TC可以scale，那么可以考虑flare。
## **架构**
## **特性**
1、持久存储；

2、可插拔存储；

3、数据复制(同步或异步)；

4、数据分区；

5、动态重构和分区；

6、节点监视和故障转移；

7、请求代理；

8、flare的key可以超过256bytes,而value可以超过1mb。 传统memcached由于内存分配策略因此有上述限制。
## **适用场景**
1、最正统的就是key/value storage。我自己将flare作为doggy中dhash的后端实现。

2.、Session Storage。 比如PHP，可以直接适用memcached的session\_handler。由于是持久的，因此解决原来memcached的尴尬和困扰。

\3. 其他的基于key/value的扩展方案

Flare可以直接替代Memcached么？

答案是否。Flare的优势和本质是分布式key/value的持久存储，而不是作为一个cache。作为一个caching方案，要比memcached差很多。尤其是启用了binary protocol后，memcached的优势很明显