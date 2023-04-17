# **Berkeley** 
## **概述**
Berkeley DB (DB)是一个高性能的，嵌入数据库编程库，和C语言，C++，Java，Perl，Python，PHP，Tcl以及其他很多语言都有绑定。Berkeley DB可以保存任意类型的键/值对，而且可以为一个键保存多个数据。Berkeley DB可以支持数千的并发线程同时操作数据库，支持最大256TB的数据
## **架构**
![2](/docs/images/jianzhi/Aspose.Words.c9f17846-4b76-4cf3-af40-64ccbc0b8421.005.jpeg)
## **特性**
1、访问速度快；

2、省硬盘空间；

3、Berkeley DB只支持单一的数据结构，它的所有数据包括两个部分：key和data；

4、Berkeley DB原则上是为[嵌入式数据库](https://baike.baidu.com/item/%E5%B5%8C%E5%85%A5%E5%BC%8F%E6%95%B0%E6%8D%AE%E5%BA%93/6484152)设计的。
## **适用场景**
Berkeley DB是一个Embeddable database即嵌入式数据库，是说它是作为一个库来链接到你的应用程序的可执行文件的，你的程序中调用它的API来与它进行交流，没有SQL语言，没有数据库连接；并不是说它只能用在嵌入式系统上面。事实上，有很大一部分Berkeley DB的用户是在 \*nix 服务器上使用它，虽然它也支持很多种嵌入式系统，比如VxWorks, QNX, BREW, S60, WinCE等，并且在将来会支持更多。由于它链接到程序中成为其中的一部分，访问数据库功能就省去了网络连接和数据传输开销(HA例外), 因而速度快了很多。