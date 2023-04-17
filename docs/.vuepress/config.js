/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2019-11-18 15:27:18
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-03-31 11:36:50
 */
module.exports = {
    title: '数据库调研', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '一份全面、多样、系统的数据库调研', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }], //浏览器的标签栏的网页图标
    ],
    base: '/',
    markdown: {
        lineNumbers: false,
        toc:{ includeLevel: [2, 3,4] },
        extractHeaders: [ 'h2', 'h3', 'h4' ]
    },
    serviceWorker: true,
    themeConfig: {
        sidebarDepth: 2,
        logo: '/logo.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: '关系型数据库', link: '/数据库调研/关系型数据库/Oracle.md' },
                    { text: '键值数据库', link: '/数据库调研/键值数据库/Redis.md' },
                    { text: 'XML数据库', link: '/数据库调研/XML数据库/Berkeley.md' },
                    { text: '文档数据库', link: '/数据库调研/文档数据库/mongodb.md' },
                    { text: '内容数据库', link: '/数据库调研/内容数据库/Jackrabbit.md' },
                    { text: '多维数据库', link: '/数据库调研/多维数据库/InterSystems.md' },
                    { text: '时间序列', link: '/数据库调研/时间序列/InfluxDB.md' },
                    { text: '大数据分析', link: '/数据库调研/大数据分析/hive.md' },
                    { text: '列式数据库', link: '/数据库调研/列式数据库/Cassandra.md' },
                    { text: '分布式数据库', link: '/数据库调研/分布式数据库/MysqlSharding.md' },
                    { text: '图数据库', link: '/数据库调研/图数据库/Neo4j.md' },
                    { text: 'RDF', link: '/数据库调研/RDF/MarkLogic.md' },
                    { text: '事件驱动数据库', link: '/数据库调研/事件驱动数据库/EventStoreDB.md' },
                    { text: '对象数据库', link: '/数据库调研/对象数据库/ActianNoSQLDatabase.md' },
                ],
            },
            { text: '关于我', link: 'https://wangzc.wang' },
            { text: '文档源码', link: 'https://github.com/wzc570738205/db' },
        ],
        sidebar: {
            '/pages/': [
                {
                    title: '简述',
                    collapsable: false,
                    sidebarDepth: 0,
                    path: '数据库调研/简述.md'
                },
                {
                    title: '整体对比图',
                    sidebarDepth: 0,
                    collapsable: false,
                    path: '数据库调研/整体对比图.md'
                },
                {
                    title: '关系型数据库',
                    collapsable: true,
                    children: [
                        ['数据库调研/关系型数据库/Oracle.md', 'Oracle'],
                        ['数据库调研/关系型数据库/SQL Server.md', 'SQL Server'],
                        ['数据库调研/关系型数据库/Sybase.md', 'Sybase'],
                        ['数据库调研/关系型数据库/DB2.md', 'DB2'],
                        ['数据库调研/关系型数据库/Access.md', 'Access'],
                        ['数据库调研/关系型数据库/Mysql.md', 'Mysql'],
                        ['数据库调研/关系型数据库/MariaDB.md', 'MariaDB'],
                        ['数据库调研/关系型数据库/Vfp.md', 'Vfp'],
                        ['数据库调研/关系型数据库/Ingres.md', 'Ingres'],
                        ['数据库调研/关系型数据库/PostGreSQL.md', 'PostGreSQL'],
                        ['数据库调研/关系型数据库/Kingbase es.md', 'Kingbase es(金仓)'],
                        ['数据库调研/关系型数据库/DM.md', 'DM(达梦)'],
                        ['数据库调研/关系型数据库/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/关系型数据库/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: '键值数据库',
                    collapsable: true,
                    children: [
                        ['数据库调研/键值数据库/Redis.md', 'Redis'],
                        ['数据库调研/键值数据库/Memcached.md', 'Memcached'],
                        ['数据库调研/键值数据库/TokyoTyrant.md', 'Tokyo Tyrant'],
                        ['数据库调研/键值数据库/Flare.md', 'Flare'],
                        ['数据库调研/键值数据库/ROMA.md', 'ROMA'],
                        ['数据库调研/键值数据库/Berkeley.md', 'Berkeley '],
                        ['数据库调研/键值数据库/Memlink.md', 'Memlink'],
                        ['数据库调研/键值数据库/Tair.md', 'Tair'],
                        ['数据库调研/键值数据库/etcd.md', 'etcd'],
                        ['数据库调研/键值数据库/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/键值数据库/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: 'XML数据库',
                    collapsable: true,
                    children: [
                        ['数据库调研/XML数据库/Berkeley.md', 'Oracle Berkeley DB'],
                        ['数据库调研/XML数据库/BaseX.md', 'BaseX'],
                        ['数据库调研/XML数据库/Sedna.md', 'Sedna'],
                        ['数据库调研/XML数据库/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/XML数据库/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: '文档数据库',
                    collapsable: true,
                    children: [
                        ['数据库调研/文档数据库/mongodb.md', 'mongodb'],
                        ['数据库调研/文档数据库/CouchDB.md', 'CouchDB'],
                        ['数据库调研/文档数据库/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/文档数据库/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: '内容数据库',
                    collapsable: true,
                    children: [
                        ['数据库调研/内容数据库/Jackrabbit.md', 'Jackrabbit'],
                        ['数据库调研/内容数据库/ModeShape.md', 'ModeShape'],
                        ['数据库调研/内容数据库/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/内容数据库/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: '多维数据库',
                    collapsable: true,
                    children: [
                        ['数据库调研/多维数据库/InterSystems.md', 'InterSystems Cache'],
                        ['数据库调研/多维数据库/ContourCube.md', 'ContourCube'],
                        ['数据库调研/多维数据库/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/多维数据库/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: '时间序列',
                    collapsable: true,
                    children: [
                        ['数据库调研/时间序列/InfluxDB.md', 'InfluxDB'],
                        ['数据库调研/时间序列/Kdb.md', 'Kdb+'],
                        ['数据库调研/时间序列/Graphite.md', 'Graphite'],
                        ['数据库调研/时间序列/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/时间序列/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: '大数据分析',
                    collapsable: true,
                    children: [
                        ['数据库调研/大数据分析/hive.md', 'hive'],
                        ['数据库调研/大数据分析/presto.md', 'presto'],
                        ['数据库调研/大数据分析/impala.md', 'impala'],
                        ['数据库调研/大数据分析/kylin.md', 'kylin'],
                        ['数据库调研/大数据分析/Greenplum.md', 'Greenplum'],
                        ['数据库调研/大数据分析/KingbaseAnalyticsDB.md', 'Kingbase AnalyticsDB'],
                        ['数据库调研/大数据分析/teradata.md', 'teradata'],
                        ['数据库调研/大数据分析/doris.md', 'doris'],
                        ['数据库调研/大数据分析/Clickhouse.md', 'Clickhouse'],
                        ['数据库调研/大数据分析/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/大数据分析/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: '列式数据库',
                    collapsable: true,
                    children: [
                        ['数据库调研/列式数据库/Cassandra.md', 'Cassandra'],
                        ['数据库调研/列式数据库/hbase.md', 'hbase'],
                        ['数据库调研/列式数据库/HyperTable.md', 'HyperTable'],
                        ['数据库调研/列式数据库/kudu.md', 'kudu'],
                        ['数据库调研/列式数据库/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/列式数据库/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: '分布式数据库',
                    collapsable: true,
                    children: [
                        ['数据库调研/分布式数据库/MSSQLAZure.md', 'MS SQL AZure'],
                        ['数据库调研/分布式数据库/GoogleSpanner.md', 'Google Spanner'],
                        ['数据库调研/分布式数据库/AlibabaOceanBase.md', 'Alibaba OceanBase'],
                        ['数据库调研/分布式数据库/MysqlSharding.md', 'Mysql sharding'],
                        ['数据库调研/分布式数据库/SequoiaDB.md', 'SequoiaDB'],
                        ['数据库调研/分布式数据库/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/分布式数据库/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: '图数据库',
                    collapsable: true,
                    children: [
                        ['数据库调研/图数据库/Neo4j.md', 'Neo4j'],
                        ['数据库调研/图数据库/JanusGraph.md', 'JanusGraph(on HBase)'],
                        ['数据库调研/图数据库/Titan.md', 'Titan'],
                        ['数据库调研/图数据库/Dgraph.md', 'Dgraph'],
                        ['数据库调研/图数据库/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/图数据库/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: 'RDF',
                    collapsable: true,
                    children: [
                        ['数据库调研/RDF/MarkLogic.md', 'MarkLogic'],
                        ['数据库调研/RDF/Virtuoso.md', 'Virtuoso'],
                        ['数据库调研/RDF/JenaTDB.md', 'Apache Jena–TDB'],
                        ['数据库调研/RDF/RDF4J.md', 'RDF4J'],
                        ['数据库调研/RDF/Redland.md', 'Redland'],
                        ['数据库调研/RDF/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/RDF/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: '事件驱动数据库',
                    collapsable: true,
                    children: [
                        ['数据库调研/事件驱动数据库/EventStoreDB.md', 'EventStoreDB'],
                        ['数据库调研/事件驱动数据库/IBMDb2EventStore.md', 'IBM Db2 Event Store'],
                        ['数据库调研/事件驱动数据库/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/事件驱动数据库/参考文献.md', '参考文献'],
                    ]
                },
                {
                    title: '对象数据库',
                    collapsable: true,
                    children: [
                        ['数据库调研/对象数据库/ActianNoSQLDatabase.md', 'Actian NoSQL Database'],
                        ['数据库调研/对象数据库/Db4o.md', 'Db4o'],
                        ['数据库调研/对象数据库/ObjectDB.md', 'ObjectDB'],
                        ['数据库调研/对象数据库/数据库对比图.md', '数据库对比图'],
                        ['数据库调研/对象数据库/参考文献.md', '参考文献'],
                    ]
               },
            ],
        },
    },
}
