# **Graphite**
## **概述**
Graphite 是处理可视化和指标数据的优秀开源工具。它有强大的查询 API 和相当丰富的插件功能设置。事实上，Graphite 指标协议（metrics protocol）是许多指标收集工具的事实标准格式。然而，Graphite 并不总是一个可以简单部署和使用的工具。由于设计方面的原因，加上它使用过程中涉及大量的小 I/O 操作，在规模化应用中会遇到一些问题，而且部署起来可能有点麻烦。

Graphite 部署痛苦的部分原因是，它是由三个不同的元素组成（当然，如果包括指标采集就是四个），这些取决于你的环境，只有其中一个或多个默认元素可能不能满足你的需要。
## **架构图**
![Graphite-OverView-2](/images/shijian/Aspose.Words.d0120bb9-f0d0-4db8-ba15-75e8166ad7d6.003.png)
## **特性**
1、指标采集器 - Dropwizard Metrics, StatsD。

2、监听器 - Carbon, graphite-ng, Riemann。

3、存储数据库 - Whisper, InfluxDB, Cyanite。
## **适用场景**
Graphite 是一个用于采集网站实时信息并进行统计的开源项目，可用于采集多种网站服务运行状态信息。Graphite服务平均每分钟有4800次更新操作。实践已经证实要监测网站发发生什么是非常有用的，它的简单文本协议和绘图功能可以方便地即插即 用的方式用于任何需要监控的系统上。

