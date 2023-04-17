# **Tokyo Tyrant**
## **概述**
Tokyo Cabinet 是日本人 平林幹雄 开发的一款 DBM 数据库，该数据库读写非常快。哈希模式下 写入 100 万条数据只需 0.643 秒，读取 100万 条数据只需 0.773秒，是 Berkely DB 等 DBM 的几倍

Tokyo Tyrant 是由同一作者开发的 Tokyo Cabinet 数据库网络接口。它拥有 Memcached 兼容协议，也可以通过 HTTP 协议进行数据交换。

Tokyo Tyrant 加上 Tokyo Cabinet，构成了一款支持高并发的分布式持久存储系统，对任何原有 Memcached客户端来讲，可以将 Tokyo Tyrant 看成是一个 Memcached，但是，它的数据是可以持久存储的。这一点，跟新浪的 Memcached 性质一样。
## **架构**
![20190507093716914](/images/jianzhi/Aspose.Words.c9f17846-4b76-4cf3-af40-64ccbc0b8421.003.png)
## **特性**
**1、**故障转移：Tokyo Tyrant 支持双机互为主辅模式，主辅库均可以读写，而 Memcachedb 目前支持类似 MySQL 主辅库同步的方式实现读写分离，支持“主服务器可读写、辅助服务器只读”模式。这里使用 $memcache->addServer 而不是 $memcache->connect 去连接 Tokyo Tyrant 服务器，是因为当 Memcache 客户端使用 addServer 服务器池时，是根据“crc32(key) % current\_server\_num”哈希算法将 key 哈希到不同的服务器的，PHP、C 和 python 的客户端都是如此的算法。Memcache 客户端的 addserver 具有故障转移机制，当 addserver 了2台 Memcached 服务器，而其中1台宕机了，那么 current\_server\_num 会由原先的2变成1。

2、日志文件体积小：Tokyo Tyrant 用于主辅同步的日志文件比较小，大约是数据库文件的1.3倍，而 Memcachedb 的同步日志文件非常大，如果不定期清理，很容易将磁盘写满。

3、超大数据量下表现出色：

![20190507094155704](/images/jianzhi/Aspose.Words.c9f17846-4b76-4cf3-af40-64ccbc0b8421.004.png)

推荐在64位 CPU、操作系统上安装运行。