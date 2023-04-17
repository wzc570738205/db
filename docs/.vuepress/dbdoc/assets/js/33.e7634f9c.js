(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{387:function(_,v,a){"use strict";a.r(v);var t=a(42),s=Object(t.a)({},(function(){var _=this,v=_.$createElement,a=_._self._c||v;return a("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[a("h1",{attrs:{id:"dm-达梦"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dm-达梦"}},[_._v("#")]),_._v(" "),a("strong",[_._v("DM(达梦）")])]),_._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[_._v("#")]),_._v(" "),a("strong",[_._v("概述")])]),_._v(" "),a("p",[_._v("达梦数据库管理系统是达梦公司推出的具有完全自主知识产权的高性能数据库管理系统，简称DM。达梦数据库管理系统的最新版本是8.0版本，简称DM8。")]),_._v(" "),a("p",[_._v("DM8是达梦公司在总结DM系列产品研发与应用经验的基础上，坚持开放创新、简洁实用的理念，历经五年匠心打磨，推出的新一代自研数据库。")]),_._v(" "),a("p",[_._v("DM8吸收借鉴当前先进新技术思想与主流数据库产品的优点，融合了分布式、弹性计算与云计算的优势，对灵活性、易用性、可靠性、高安全性等方面进行了大规模改进，多样化架构充分满足不同场景需求，支持超大规模并发事务处理和事务-分析混合型业务处理，动态分配计算资源，实现更精细化的资源利用、更低成本的投入。一个数据库，满足用户多种需求，让用户能更加专注于业务发展。")]),_._v(" "),a("h2",{attrs:{id:"架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#架构"}},[_._v("#")]),_._v(" "),a("strong",[_._v("架构")])]),_._v(" "),a("h2",{attrs:{id:"体系结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#体系结构"}},[_._v("#")]),_._v(" "),a("strong",[_._v("体系结构")])]),_._v(" "),a("p",[_._v("达梦数据库体系结构有数据库和实例组成。")]),_._v(" "),a("p",[_._v("1、数据库")]),_._v(" "),a("p",[_._v("DM 数据库指的是磁盘上存放在DM 数据库中的数据的集合")]),_._v(" "),a("p",[_._v("2、实例")]),_._v(" "),a("p",[_._v("实例一般是由一组正在运行的DM 后台进程/线程以及一个大型的共享内存组成")]),_._v(" "),a("p",[a("img",{attrs:{src:"/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.025.png",alt:""}})]),_._v(" "),a("h2",{attrs:{id:"存储结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储结构"}},[_._v("#")]),_._v(" "),a("strong",[_._v("存储结构")])]),_._v(" "),a("p",[a("img",{attrs:{src:"/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.026.png",alt:""}})]),_._v(" "),a("p",[_._v("1、物理结构")]),_._v(" "),a("p",[a("img",{attrs:{src:"/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.027.png",alt:"在这里插入图片描述"}})]),_._v(" "),a("p",[_._v("2、逻辑结构")]),_._v(" "),a("p",[_._v("一个表空间中包括一个或多个数据文件，一个数据文件仅于一个表空间。段存在于表空间，段由簇的集合构成，簇是数据块的集合，数据块会映射到磁盘块。")]),_._v(" "),a("p",[a("img",{attrs:{src:"/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.028.png",alt:"在这里插入图片描述"}})]),_._v(" "),a("h2",{attrs:{id:"内存结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存结构"}},[_._v("#")]),_._v(" "),a("strong",[_._v("内存结构")])]),_._v(" "),a("h3",{attrs:{id:"共用内存池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共用内存池"}},[_._v("#")]),_._v(" 共用内存池")]),_._v(" "),a("p",[_._v("不依赖于操作系统的内存管理，主要用于：")]),_._v(" "),a("p",[_._v("1、维护系统内部内存空间的分配与释放")]),_._v(" "),a("p",[_._v("2、减少对操作系统内存的系统调用")]),_._v(" "),a("p",[_._v("3、其大小由MEMORY_POOL参数确定")]),_._v(" "),a("h3",{attrs:{id:"系统缓冲区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统缓冲区"}},[_._v("#")]),_._v(" 系统缓冲区")]),_._v(" "),a("p",[a("img",{attrs:{src:"/images/guanxixing/Aspose.Words.a10c56e4-d776-45a2-8e4d-e512eb974108.029.png",alt:"在这里插入图片描述"}})]),_._v(" "),a("h3",{attrs:{id:"字典缓冲区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字典缓冲区"}},[_._v("#")]),_._v(" 字典缓冲区")]),_._v(" "),a("p",[_._v("1、快速访问表,视图等对象的描述")]),_._v(" "),a("p",[_._v("2、系统表到内存对象的映射")]),_._v(" "),a("p",[_._v("3、仅保留活动的数据库对象")]),_._v(" "),a("p",[_._v("4、采用LRU算法淘汰")]),_._v(" "),a("p",[_._v("5、大小由DICT_BUF_SIZE参数决定")]),_._v(" "),a("h3",{attrs:{id:"日志缓冲区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志缓冲区"}},[_._v("#")]),_._v(" 日志缓冲区")]),_._v(" "),a("p",[_._v("日志缓存区存放重做日志的内存缓冲区。")]),_._v(" "),a("p",[_._v("1、大小由LOG_BUF_SIZE参数决定")]),_._v(" "),a("p",[_._v("2、单位为页数量，默认为256页")]),_._v(" "),a("p",[_._v("3、大小必须为2 的N 次方")]),_._v(" "),a("h3",{attrs:{id:"排序-散列缓冲区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序-散列缓冲区"}},[_._v("#")]),_._v(" 排序/散列缓冲区")]),_._v(" "),a("p",[_._v("1、排序缓冲区，数据排序的内存缓冲区。大小由SORT_BUF_SIZE参数决定。")]),_._v(" "),a("p",[_._v("2、散列缓冲区，哈希连接的内存缓冲区。大小由HJ_BUF_SIZE参数决定。")]),_._v(" "),a("p",[_._v("3、SQL缓冲区，缓存执行计划、SQL语句、SQL结果集。USE_PLN_POOL参数为1或2时启用，大小由CACHE_POOL_SIZE参数决定。")]),_._v(" "),a("h2",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[_._v("#")]),_._v(" "),a("strong",[_._v("特性")])]),_._v(" "),a("h2",{attrs:{id:"高性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高性能"}},[_._v("#")]),_._v(" "),a("strong",[_._v("高性能")])]),_._v(" "),a("p",[_._v("DM8采用多趟扫描、代价估算的优化策略，支持查询计划的HINT功能，可供经验丰富的DBA对特定查询进行优化改进，进一步提高查询的效率和灵活性。")]),_._v(" "),a("p",[_._v("DM8提供查询计划的重用，可以减少重复分析操作，有效提升语句的执行效率。DM8采用参数化常量方法，使得常量值不同的查询语句，同样可以重用查询计划。")]),_._v(" "),a("p",[_._v("DM8提供查询结果集缓存策略，在服务器端实现结果集缓存，可以在提升查询速度的同时，保证缓存结果的实时性和正确性。")]),_._v(" "),a("p",[_._v("DM8采用更加有效的异步检查点机制，相对原有检查点长时间占用缓冲区的策略相比，逻辑更加简单，速度更快，对整体系统运行影响更小。")]),_._v(" "),a("p",[_._v("DM8采用多版本并发控制技术，使得查询与更新操作间互不干扰，有效提高了高并发应用场景中的执行效率。")]),_._v(" "),a("p",[_._v("DM8中实现了数据字典缓存技术，执行期间不必封锁整个数据字典，可以有效降低DDL操作对整体系统并发执行的影响。")]),_._v(" "),a("p",[_._v("DM8为具有多个处理器 (CPU) 的计算机提供了并行查询，以优化查询执行和索引操作。并行查询其优势就是可以通过多个线程来处理查询作业，从而提高查询的效率。")]),_._v(" "),a("p",[_._v("DM8数据压缩采用智能压缩策略，自动选择最合适的压缩算法进行数据压缩，可以显著提升数据的压缩比，进一步减少系统的空间资源开销。")]),_._v(" "),a("p",[_._v("DM8同时支持行存储引擎与列存储引擎，可实现事务内对行存储表与列存储表的同时访问，可同时适用于联机事务和分析处理。")]),_._v(" "),a("p",[_._v("DM8提供 OLAP 函数，用于支持复杂的分析操作，侧重对决策人员和高层管理人员的决策支持，可根据分析人员的要求快速、灵活地进行大数据量的复杂查询处理，并且以直观易懂的形式将查询结果提供给决策人员，以便他们准确掌握企业的经营状况，了解被服务对象的需求，制定正确的方案。")]),_._v(" "),a("p",[_._v("DM8采用完全对等无共享（share-nothing）的MPP架构，支持SQL并行处理，可自动化分区数据和并行查询，无I/O冲突。DM8 MPP为新一代数据仓库所需的大规模数据和复杂查询提供了先进的软件级解决方案，具有业界先进的架构和高度的可靠性。")]),_._v(" "),a("h2",{attrs:{id:"高可用性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高可用性"}},[_._v("#")]),_._v(" "),a("strong",[_._v("高可用性")])]),_._v(" "),a("p",[_._v("DM8可以提供数据库或整个服务器的冷/热备份以及对应的还原功能，达到数据库数据保护和迁移。支持的备份类型包括物理备份、逻辑备份，可实现全库、表空间、B树3个级别的备份。支持增量备份，支持以检查点进行还原。")]),_._v(" "),a("p",[_._v("DM8提供事务级的同步复制和异步复制功能。DM8数据复制功能支持一到多、多到一、级联复制、多主多从复制、环形复制、对称复制以及大数据对象复制。")]),_._v(" "),a("p",[_._v("主备系统是DM8提高容灾能力的重要手段。系统由一台主机与一或多台备机构成。主机提供正常的数据处理服务，备机则时刻保持与主机的数据同步。一旦主机发生故障，备机中的一台立刻可以切换成为新的主机，继续提供服务。")]),_._v(" "),a("h2",{attrs:{id:"高安全性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高安全性"}},[_._v("#")]),_._v(" "),a("strong",[_._v("高安全性")])]),_._v(" "),a("p",[_._v("DM8是具有自主知识产权的高安全数据库管理系统，已通过公安部安全四级评测。是安全等级最高的商业数据库之一。同时DM8还通过了中国信息安全测评中心的EAL4级评测。")]),_._v(" "),a("p",[_._v("DM8提供基于用户口令和用户数字证书相结合的用户身份鉴别功能，还支持基于操作系统的身份认证、基于LDAP集中式的第三方认证。")]),_._v(" "),a("p",[_._v("DM8提供数据库审计功能，审计类别包括：系统级审计、语句级审计、对象级审计。DM8提供审计分析功能，通过审计分析工具Analyzer实现对审计记录的分析。提供强大的实时侵害检测功能，用于实时分析当前用户的操作，并查找与该操作相匹配的审计分析规则。")]),_._v(" "),a("p",[_._v("DM8提供了系统权限和对象权限管理功能，并支持基于角色的权限管理，方便数据库管理员对用户访问权限进行灵活配置。")]),_._v(" "),a("p",[_._v("DM8提供强制访问控制功能，强制访问控制的范围涉及到数据库内所有的主客体，避免了管理权限全部由数据库管理员一人负责的局面，可以有效防止敏感信息的泄露与篡改，增强系统的安全性。")]),_._v(" "),a("p",[_._v("DM8支持基于SSL协议的通讯加密，对传输在客户端和服务器端的数据进行非对称的安全加密，保证数据在传输过程中的保密性、完整性、抗抵赖性。")]),_._v(" "),a("p",[_._v("DM8实现了对存储数据的透明存储加密、半透明存储加密和非透明存储加密。每种模式均可自由配置加密算法。用户可以根据自己的需要自主选择采用何种加密模式。")]),_._v(" "),a("h2",{attrs:{id:"兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[_._v("#")]),_._v(" "),a("strong",[_._v("兼容性")])]),_._v(" "),a("p",[_._v("为保障用户现有应用系统上的投资，降低系统迁移到DM8的难度，DM8提供了许多与其他数据库系统兼容的特性，尤其针对Oracle，DM8提供了全方位的兼容，以降低用户学习成本，迁移成本。")]),_._v(" "),a("p",[_._v("体系结构方面，DM8兼容oracle的单库单实例式结构、表空间-数据文件机制、回滚机制、多版本并发控制、闪回。")]),_._v(" "),a("p",[_._v("应用开发接口兼容，兼容PL/SQL常用语法90%、OCI、OOCI、OO4O接口兼容、系统包机制。")]),_._v(" "),a("p",[_._v("维护管理方式兼容，兼容大量V$动态视图、AWR性能分析报告、10053等事件。")]),_._v(" "),a("h2",{attrs:{id:"通用性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用性"}},[_._v("#")]),_._v(" "),a("strong",[_._v("通用性")])]),_._v(" "),a("p",[_._v("DM8兼容多种硬件体系，可运行于X86、SPARC、POWER等硬件体系之上。DM8各种平台上的数据存储结构和消息通信结构完全一致，使得DM8各种组件在不同的硬件平台上具有一致的使用特性。")]),_._v(" "),a("p",[_._v("DM8实现了平台无关性，支持Windows系列、各版本Linux（2.4及2.4以上内核）、Unix、NeoKylin、AIX、Solaris等各种主流操作系统。DM8的服务器、接口程序和管理工具均可在32位/64 位版本操作系统上使用。")]),_._v(" "),a("p",[_._v("DM8支持多种主流集成开发环境，包括PowerBuilder、Delphi、Visual Studio、.NET、C++Builder、Qt、JBuilder、Eclipse、Zend Studio等；")]),_._v(" "),a("p",[_._v("DM8支持各种开发框架技术，主要有Spring、Struts、Hibernate、iBATIS SQLMap、EntityFramework、ZendFramework等；")]),_._v(" "),a("p",[_._v("DM8支持主流系统中间件，包括WebLogic、WebSphere、Tomcat、Jboss、东方通TongWeb、金蝶Apusic、中创InfoWeb等。")]),_._v(" "),a("p",[_._v("DM8提供对SQL92的特性支持以及SQL99的核心级别支持；支持多种数据库开发接口，包括OLE DB、ADO、ODBC、OCI、JDBC、Hibernate、PHP、PDO、DB Express以及.Net DataProvider等。")]),_._v(" "),a("p",[_._v("DM8支持多种网络协议，包括IPV4协议、IPV6协议等。")]),_._v(" "),a("p",[_._v("DM8完全支持Unicode、GBK18030等常用字符集。")]),_._v(" "),a("p",[_._v("DM8提供了国际化支持，服务器和客户端工具均支持简体中文和英文来显示输出结果和错误信息。")]),_._v(" "),a("h2",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[_._v("#")]),_._v(" "),a("strong",[_._v("使用场景")])]),_._v(" "),a("p",[_._v("达梦数据库是一款完全国产化的数据库产品。减少了对国外相同产品的依赖。目前已经在制造业，电子政务，金融领域都有相当的使用比例。")]),_._v(" "),a("p",[_._v("局限性：目前没有得到广泛应用，可能存在某些未知的风险。")])])}),[],!1,null,null,null);v.default=s.exports}}]);