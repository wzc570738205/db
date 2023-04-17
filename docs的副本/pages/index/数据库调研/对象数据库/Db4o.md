# **Db4o**
## **概述**
db4o是一个开源的纯[面向对象](https://baike.baidu.com/item/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1)[数据库](https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%BA%93)引擎，对于 [Java ](https://baike.baidu.com/item/Java%20)与 [.NET](https://baike.baidu.com/item/.NET) 开发者来说都是一个简单易用的对象[持久化](https://baike.baidu.com/item/%E6%8C%81%E4%B9%85%E5%8C%96)工具，使用简单。
## **架构**
![db4o\_architecture](/docs/images/duixiang/Aspose.Words.cd18ac29-16a4-40c5-a622-92089c662526.001.png)
## **特性**
db4o 的目标是提供一个功能强大的，适合嵌入的[数据库](https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E5%BA%93)引擎，可以工作在设备，移动产品，桌面以及服务器等各种平台。主要特性如下：

1、开源模式。与其他 ODBMS 不同，db4o 为开源软件，通过开源社区的力量驱动开发 db4o 产品。

2、[原生数据库](https://baike.baidu.com/item/%E5%8E%9F%E7%94%9F%E6%95%B0%E6%8D%AE%E5%BA%93)。db4o 是 100% 原生的[面向对象数据库](https://baike.baidu.com/item/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E6%95%B0%E6%8D%AE%E5%BA%93)，直接使用[编程语言](https://baike.baidu.com/item/%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80)来操作数据库。程序员无需进行 [OR ](https://baike.baidu.com/item/OR%20)映射来[存储](https://baike.baidu.com/item/%E5%AD%98%E5%82%A8)[对象](https://baike.baidu.com/item/%E5%AF%B9%E8%B1%A1)，大大节省了程序员在存储数据的开发时间。

3、高性能。 db4o 比采用 Hibernate/[MySQL ](https://baike.baidu.com/item/MySQL%20)方案在某些测试线路上速度高出 44 倍之多！并且安装简单，仅仅需要 400Kb 左右的 .jar 或 .dll 库文件。

4、易嵌入。使用 db4o 仅需引入 400 多 k 的 [jar ](https://baike.baidu.com/item/jar%20)文件或是 [dll ](https://baike.baidu.com/item/dll%20)文件，内存消耗极小。

5、零管理。使用 db4o 无需 DBA，实现零管理。

6、支持多种平台。db4o 支持从 [Java ](https://baike.baidu.com/item/Java%20)1.1 到 Java 5.0，此外还支持 [.NET](https://baike.baidu.com/item/.NET) 、 CompactFramework 、 Mono 等 .NET 平台，也可以运行在 [CDC ](https://baike.baidu.com/item/CDC%20)、 PersonalProfile 、 [Symbian ](https://baike.baidu.com/item/Symbian%20)、 Savaje 以及 Zaurus 这种支持反射的 J2ME 方言环境中，还可以运行在 [CLDC ](https://baike.baidu.com/item/CLDC%20)、 [MIDP ](https://baike.baidu.com/item/MIDP%20)、 RIM/Blackberry 、 [Palm OS](https://baike.baidu.com/item/Palm%20OS) 这种不支持反射的 [J2ME ](https://baike.baidu.com/item/J2ME%20)环境中。
## **适用场景**
Db4o 仅需一行代码就能存储复杂结构对象，极大的降低了开发时间和成本，提供高效的性能，无需 DBA 干预