<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-03-29 15:16:23
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-29 15:23:41
-->
# **XML数据库**
# Oracle Berkeley DB
## **概述**
Oracle Berkeley DB 是一个个业界领先的开源嵌入式数据库引擎，为开发者提供快速可靠零配置的本地持久化。它是一个直接链入应用程序的软件包。应用程序执行简单的函数调用，而不需要向远程的服务器发送消息，消除了CS架构带来的性能损耗。Oracle Berkeley DB 消除了SQL查询处理，使应用程序按可预测的方式更快的运行。 
## **架构**
![1615963437(1)](/images/jianzhi/Aspose.Words.d74eebc9-72ec-45b0-915a-471cca2ea289.001.png)
## **特性**
1、极高的性能——为具有静态访问模式的应用程序消除了客户端－服务器通信和SQL处理的延迟 

2、高可靠性和可用性——完整的事务处理语义确保数据的完整性以及故障恢复能力，复制功能提供了高可用性和可扩展性 

3、零管理——应用程序完成数据库管理，从而消除了对数据库管理员的需要并支持持续、无人值守的运行 

4、低总体拥有成本——极高的性能减少了硬件成本，嵌入式消除了DBA成本 
## **适用场景**
Berkeley DB是一个Embeddable database即嵌入式数据库，是说它是作为一个库来链接到你的应用程序的可执行文件的，你的程序中调用它的API来与它进行交流，没有SQL语言，没有数据库连接；并不是说它只能用在嵌入式系统上面。事实上，有很大一部分Berkeley DB的用户是在 \*nix 服务器上使用它，虽然它也支持很多种嵌入式系统，比如VxWorks, QNX, BREW, S60, WinCE等，并且在将来会支持更多。由于它链接到程序中成为其中的一部分，访问数据库功能就省去了网络连接和数据传输开销(HA例外), 因而速度快了很多。
# **BaseX**
## **概述**
BaseX是一个健壮的、高性能的XML数据库引擎，是一个高度兼容的XQuery 3.1处理器，完全支持W3C更新和全文扩展。它是构建复杂数据密集型web应用程序的优秀框架。BaseX是独立于平台的，在一个许可的自由软件许可证下发布。它带有交互式用户界面(桌面的，基于web的)，用户可以很好地了解数据。BaseX可以导入多种格式的数据，包括XML、JSON和CSV。异常紧凑的文本、属性、全文和路径总结索引加快了评价过程的量级。模糊匹配全文选项允许进行近似搜索和检索。BaseX使用XML树结构的表格表示来存储XML文档。数据库充当单个文档或文档集合的容器。可视化地探索、分析和浏览XML数据:快速浏览或深入细节，并自由地组合所有视图。此外，BaseX提供了几种类型的索引，以改进路径操作、属性查找、文本比较和全文搜索的性能。BaseX为数据访问提供了一个RESTful接口。REST服务器可用于访问本地和远程XML数据库。JSON格式的查询结果输出允许AJAX开发人员利用强大的XQuery语言和XML的互操作性。对于对数据库的临时访问，BaseX提供了一个WebDAV服务，它允许用户通过一个简单的支持WebDAV的文件管理器快速存储、修改和组织资源。在多用户环境中，强大的锁管理器支持并发读操作和ACID-safe写事务。
## **架构**
## **特性**
1、高度交互的可视化。

2、嵌入式编辑器提供语法高亮显示，各种快捷方式，并显示详细的错误反馈。

3、加密扩展模块使用户能够加密和解密消息。

4、Maps模块提供了一个有效的地图功能实现。

5、客户端和服务器之间的通信。

6、支持将XML转换为JSON，反之亦然。

7、国际化:支持多种语言。

8、灵活的数据建模:消除了强制匹配关系数据模型以支持新型应用数据模型的需求。

9、高效、可扩展的架构，而不是昂贵的单片架构。
# **Sedna**
## **概述**
Sedna是一个免费的本机XML数据库，它提供全方位的核心数据库服务-持久性存储，ACID事务，安全性，索引，热备份。灵活的XML处理工具包括W3C XQuery实现，XQuery与全文搜索工具的紧密集成以及节点级更新语言。
## **架构**
## **3.9.4 特性**
1、可在[Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html)下以开放源代码形式免费获得。[](http://www.apache.org/licenses/LICENSE-2.0.html)

2、用C / C ++实现的本机XML数据库系统。

3、支持通过[W3C XQuery Test Suite](http://www.w3.org/XML/Query/test-suite/XQTSReportSimple.html)验证的[W3C XQuery](http://www.w3.org/XML/Query/test-suite/XQTSReportSimple.html)语言。[](http://www.w3.org/XML/Query/test-suite/XQTSReportSimple.html)

4、全文搜索索引（本地或基于[dtSearch](http://www.dtsearch.com/)）。

5、支持声明性的节点级更新语言。

6、支持ACID交易。

7、支持细粒度的XML触发器。

8、增量热备份。

9、指数（基于B树）。

10、支持Unicode（utf8）。

11、XQuery的SQL连接。

12、XQuery在C中实现的外部函数。

13、数据库安全性（用户，角色和特权）。
# **数据库对比图**


||Berkeley|BaseX|Sedna|
| - | :-: | :-: | :-: |
|是否开源|是|是|是|
|数据格式|XML|XML、JSON、CSV|XML|
|可视化|否|是|否|
|嵌入式|是|否|否|

# **参考文献**
<https://baike.baidu.com/item/Berkeley%20DB/9534422?fr=aladdin>

<https://basex.org/>

<https://www.sedna.org/>

