# ` `**MariaDB**
## **概述**
MariaDB数据库管理系统是MySQL的一个分支，主要由开源社区在维护，采用GPL授权许可 MariaDB的目的是完全兼容MySQL，包括API和命令行，使之能轻松成为MySQL的代替品。在存储引擎方面，使用XtraDB（英语：XtraDB）来代替MySQL的InnoDB。 MariaDB由MySQL的创始人Michael Widenius（英语：Michael Widenius）主导开发，他早前曾以10亿美元的价格，将自己创建的公司MySQL AB卖给了SUN，此后，随着SUN被甲骨文收购，MySQL的所有权也落入Oracle的手中。MariaDB名称来自Michael Widenius的女儿Maria的名字。
## **架构**
![IMG\_256](/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.018.png)

当Mariadb接受到Sql语句时，其详细的执行过程如下：

1、当客户端连接到 mariadb 的时候，会认证客户端的主机名，用户，密码，认证功能可以做成插件。

2、如果登录成功，客户端发送 sql 命令到服务端。

3、由解析器解析 sql 语句。

4、服务端检查客户端是否有权限去获取它想要的资源。

5、如果查询已经存储在 query cache 当中，那么结果立即返回。

6、优化器将会找出最快的执行策略，或者是执行计划，也就是说优化器可以决定什么表将会被读，以及哪些索引会被访问，哪些临时表会被使用，一个好的策略能够减少大量的磁盘访问和排序操作等。

7、存储引擎读写数据和索引文件，cache 用来加速这些操作，其他的诸如事物和外键特性，都是在存储引擎层处理的。
## **特性**
MariaDB可用于GPL,LGPL和BSD。它包括广泛的存储引擎选择，包括高性能存储引擎，用于与其他关系数据库管理系统（RDBMS）数据源一起工作。它使用标准和流行的查询语言。MariaDB在许多操作系统上运行，并支持各种编程语言。MariaDB还提供了很多在MySQL中不可用的操作和命令，并消除、取代了对性能产生负面影响的功能。其他功能还包括多源复制，融合IO 优化，表发现和联机更改表。

MariaDB拥有大量新功能，这使得它在性能和用户导向方面更加出色。以下是Mysql和MariaDB之间的一些重要差异：

1、MariaDB针对性能进行了优化，性能比MySQL强大得多。

2、MariaDB保存了和Mysql相同的数据结构，从其他数据库系统可以很方便的迁移到MariaDB数据库。

3、MariaDB通过引入微妙级精度和扩展用户统计数据提供更好的监控。

4、MariaDB为与磁盘访问，连接诶操作，子查询，派生表和视图，执行控制甚至解释语句相关的查询应用了许多查询优化。

5、MariaDB是完全开源的，而不是MySQL使用的双重授权模式。一些仅适用于Mysql Enterprise客户的插件在MariaDB中具有等效的开源实现。

6、MariaDB支持更多的引擎（SphinxSE,Aria,FederatedX,TokuDB,Spider,ScaleDB等）。

7、MariaDB提供了一个用于商业用途的集群数据库，同时也支持多主复制。任何人都可以自由使用它，并且不需要依赖MySQL Enterprise系统。
## **使用场景**
MariaDB可以应用到所有mysql数据库可应用到的场景。详情可参照mysql使用场景。

局限性：从版本5.5.36开始，MariaDB无法迁移回Mysql.对于MariaDB的新版本，相应的库（用于Debian）不会及时部署，由于依赖关系，这将导致必须升级到较新的版本。MariaDB的集群版本不是很稳定。
