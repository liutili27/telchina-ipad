// 导航菜单数据
export const menuData = [
    {
        "id": 2,
        "name": "自治区层面重大项目",
        "icon": "icon-wodezijin",
        "subTitle": "自治区发展改革委",
        "classify": "专题应用",
        "isSelected": true,
        "type": "url",
        "url": "prefectureProject",
        "description": "自治区层面重大项目",
        "children": [
            {
                "isSelected": true,
                "name": "按地市项目汇总",
                "type": "url",
                "url": "prefectureProject",
                "children": []
            },
            {
                "isSelected": false,
                "name": "按行业汇总",
                "type": "url",
                "url": "industry",
                "children": []
            },
            {
                "isSelected": false,
                "name": "按建设阶段汇总",
                "type": "url",
                "url": "constructionStage",
                "children": []
            }
        ]
    },
    {
        "id": 3,
        "name": "工业经济",
        "icon": "icon-gongyesheshi",
        "subTitle": "自治区工业和信息化委",
        "type": "url",
        "url": "industryEconomy",
        "classify": "专题应用",
        "isSelected": false,
        "description": "工业经济",
        "children": [
            {
                "isSelected": true,
                "name": "工业生产运行",
                "type": "url",
                "url": "industryEconomy",
                'formUrl': 'homeReport',
                "children": [
                    {
                        "isSelected": true,
                        "type": "method",
                        "name": "工业增加值增速"
                    },
                    {
                        "isSelected": false,
                        "type": "method",
                        "name": "工业总产值"
                    }
                ]
            },
            {
                "isSelected": false,
                "name": "工业经济效益",
                "type": "url",
                "url": "industrialProfit",
                'formUrl': 'report2',
            },
            {
                "isSelected": false,
                "name": "工业固定资产投资",
                "type": "url",
                "url":"assetInvestment",
                'formUrl': 'report3',
                "children": [
                    {
                        "isSelected": true,
                        "type": "method",
                        "name": "工业固定资产投资"
                    },
                    {
                        "isSelected": false,
                        "type": "method",
                        "name": "更新改造投资"
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "name": "科技创新",
        "icon": "icon-typecar118",
        "subTitle": "自治区科技厅",
        "type": "url",
        "url": "itemDistribution",
        "classify": "专题应用",
        "isSelected": false,
        "description": "科技创新",
        "children": [
            {
                "isSelected": true,
                "type": "url",
                "url": "itemDistribution",
                "name": "项目分布"
            },
            {
                "isSelected": false,
                "type": "url",
                "url": "achievement",
                "name": "科技专利",
                "children": [
                    {
                        "isSelected": true,
                        "type": "method",
                        "name": "申请数"
                    },
                    {
                        "isSelected": false,
                        "type": "method",
                        "name": "授权数"
                    },
                    {
                        "isSelected": false,
                        "type": "method",
                        "name": "有效数"
                    }
                ]
            },
            {
                "isSelected": false,
                "type": "url",
                "url": "hightechEnterprise",
                "name": "高新企业"
            }
        ]
    },
    {
        "id": 5,
        "name": "宏观经济",
        "icon": "icon-jinrongliutong",
        "subTitle": "自治区统计局",
        "type": "url",
        "url": "statsDepartment",
        "classify": "专题应用",
        "isSelected": false,
        "description": "宏观数据",
        "children": [
            {
                "isSelected": true,
                "name": "经济发展情况",
                "type": "url",
                "url": "statsDepartment",
                "children": [
                    {
                        "isSelected": true,
                        "type": "method",
                        "name": "地区生产总值"
                    },
                    {
                        "isSelected": false,
                        "type": "method",
                        "name": "人均地区生产总值"
                    },
                    {
                        "isSelected": false,
                        "type": "method",
                        "name": "一般公共财政收入"
                    },
                    {
                        "isSelected": false,
                        "type": "method",
                        "name": "一般公共财政支出"
                    },
                    {
                        "isSelected": false,
                        "type": "method",
                        "name": "城镇居民人均可支配收入"
                    },
                    {
                        "isSelected": false,
                        "type": "method",
                        "name": "农村居民人均可支配收入"
                    }
                ]
            },
            {
                "isSelected": false,
                "name": "发展情况报表",
                "type": "url",
                "url": "eachCity",
                "children": []
            },
        ]
    },
    {
        "id": 6,
        "name": "扶贫成效",
        "icon": "icon-bangzhu",
        "subTitle": "自治区扶贫办",
        "type": "url",
        "url": "povertyReduction",
        "classify": "专题应用",
        "isSelected": false,
        "description": "扶贫成效",
        "children": [
            {
                "isSelected": true,
                "name": "扶贫工作统计"
            }
        ]
    },
    {
        "id": 1,
        "name": "北部湾经济",
        "icon": "icon-jingjijianshe",
        "subTitle": '自治区北部湾办',
        "type": "url",
        "url": "beibuBay",
        "isSelected": false,
        "classify": "专题应用",
        "guideUrl": "",
        "description": "北部湾经济区",
        "children": [
            {
                "id": 11,
                "isSelected": true,
                "name": "综合表现",
                "type": "url",
                "url": "beibuBay",
                'formUrl': 'testvue',
                "children": [
                    {
                        "id": 110,
                        "name": "地区生产总值",
                        "isSelected": true,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 111, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 111,
                        "name": "财政收入",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 112, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 112,
                        "name": "一般公共预算收入",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 113, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 113,
                        "name": "规模以上工业增加值",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 113, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 114,
                        "name": "全社会固定资产投资总额",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 114, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 115,
                        "name": "社会消费品零售总额",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 115, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 116,
                        "name": "房地产投资额",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 113, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 117,
                        "name": "外贸进出口总额",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 116, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 118,
                        "name": "出口总额",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 117, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 119,
                        "name": "外商直接投资额",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 117, "mapType": "default", "dataUrl": "/getData" }
                    }
                ]
            },
            {
                "id": 12,
                "isSelected": false,
                "name": "重点园区",
                "type": "url",
                "url": "focusarea",
                "children": [
                    {
                        "id": 121,
                        "name": "广西-东盟经济开发区",
                        "isSelected": true,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 121, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 122,
                        "name": "南宁六景工业园",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 122, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 123,
                        "name": "南宁高新技术产业开发区",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 123, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 124,
                        "name": "南宁经济技术开发区",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 123, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 125,
                        "name": "北海工业园",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 124, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 126,
                        "name": "北海铁山港工业区",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 125, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 127,
                        "name": "防城港经济开发区",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 126, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 128,
                        "name": "中马钦州产业园",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 127, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 129,
                        "name": "广西钦州保税港区",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 128, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 130,
                        "name": "钦州港经济技术开发区",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 129, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 130,
                        "name": "玉林龙潭产业园",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 129, "mapType": "default", "dataUrl": "/getData" }
                    }, {
                        "id": 131,
                        "name": "广西凭祥综合保税区",
                        "isSelected": false,
                        "type": "method",
                        "method": "onClickItem",
                        "params": { "id": 1210, "mapType": "default", "dataUrl": "/getData" }
                    }
                ]
            },
            {
                "id": 13,
                "isSelected": false,
                "name": "港口",
                "type": "url",
                "url": "harbour",
                "children": []
            }
        ]
    },
    {
        "id": 7,
        "name": "钦州市经济指标",
        "subTitle": '钦州市人民政府',
        "icon": "icon-ditu",
        "classify": "地市应用",
        "type": "url",
        "url": "qinzhou",
        "isSelected": false,
        "description": "钦州市经济指标",
        "children": [
            {
                "isSelected": true,
                "name": "港口和园区",
                "type": "url",
                "url": "qinzhou",
                "children": [
                    {
                        "isSelected": true,
                        "name": "钦州港港口",
                        "type": "method"
                    },
                    {
                        "isSelected": false,
                        "name": "中马钦州产业园区",
                        "type": "method"
                    },
                    {
                        "isSelected": false,
                        "name": "广西钦州港保税港区",
                        "type": "method"
                    },
                    {
                        "isSelected": false,
                        "name": "钦州港经济技术开发区",
                        "type": "method"
                    },
                    {
                        "isSelected": false,
                        "name": "高新技术产业开发区",
                        "type": "method"
                    },
                    {
                        "isSelected": false,
                        "name": "滨海新城",
                        "type": "method"
                    },
                    {
                        "isSelected": false,
                        "name": "三娘湾旅游管理区",
                        "type": "method"
                    },
                    {
                        "isSelected": false,
                        "name": "北部湾华侨投资区",
                        "type": "method"
                    }
                ]
            },
            {
                "isSelected": false,
                "name": "经济指标",
                "type": "url",
                "url": "economicIndicator"
            },
            {
                "isSelected": false,
                "name": "重大项目",
                "type": "url",
                "url": "qinzhouMajorProject"
            }
        ]
    },
    {
        "id": 8,
        "name": "南宁市人民政府",
        "icon": "icon-mianfeiditu",
        "classify": "地市应用",
        "type": "url",
        "url": "",
        "isSelected": false,
        "description": "",
        "children": []
    },
    {
        "id": 9,
        "name": "崇左市人民政府",
        "icon": "icon-dituguanli",
        "classify": "地市应用",
        "type": "url",
        "url": "",
        "isSelected": false,
        "description": "",
        "children": []
    }
];
