<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 15:35:17
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 15:37:03
-->
# **Jackrabbit**
## **概述**
Apache Jackrabbit（内容仓库）是一个高级的信息管理系统，该系统是传统的数据仓库的扩展，它提供了诸如版本控制、全文检索、访问控制、内容分类、内容事件监视等内容服务。Jackrabbit里面有一个DataStore类，该类有两个实现，DbDataStore和FileDataStore，可以保存元数据和二进制数据。
## **架构**
![1403099273\_2938](/images/neirong/Aspose.Words.cdfdefbb-bfa1-4a43-9063-e80ca80a5cc8.001.jpeg)
## **特性**
1、访问控制和节点类型的管理。

2、通过新的标准节点类型（包括元信息和国际化）改进互操作性。

3、扩展内容建模能力。

4、联邦、交叉仓库和交叉工作区（Workspace）功能。

5、积极发展现有查询语言、版本标定和观察。

6、Remoting和客户/服务器协议映射。
## **适用场景**
如果曾经试过开发内容管理应用程序，那么您应当非常清楚在实现内容系统时所遇到的固有难题。这个领地有点支离破碎，许多供应商都有自己的私有仓库引擎。这些困难恶化了这类系统的复杂性和可维护性、增强了厂商锁定、增加了企业市场中对传统系统长期支持的需要。随着企业 weblog 和电子企业文档管理的日益流行，对标准化内容仓库接口的需求比以往任何时候都更加显著。

Content Repository for Java Technology 规范是在 Java Community Process 中作为 JSR-170 开发的，它的目标是满足这些行业的需求。该规范在javax.jcr名称空间中提供了统一的 API ，允许以厂商中立的方式访问任何符合规范的仓库实现。