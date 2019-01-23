//淘宝收货地址
var datas = {
    "provinces":[
        {
            "citys": [
                {
                    "citysName": "杭州市",
                    "areas":[
                        {
                            "areasname":"上城区"
                        },{
                            "areasname":"下城区"
                        },{
                            "areasname":"江干区"
                        },{
                            "areasname":"拱墅区"
                        },{
                            "areasname":"西湖区"
                        },{
                            "areasname":"滨江区"
                        },{
                            "areasname":"萧山区"
                        },{
                            "areasname":"余杭区"
                        },{
                            "areasname":"桐庐县"
                        },{
                            "areasname":"淳安县"
                        },{
                            "areasname":"建德市"
                        },{
                            "areasname":"富阳区"
                        },{
                            "areasname":"临安区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "湖州市",
                    "areas":[
                        {
                            "areasname":"吴兴区"
                        },{
                            "areasname":"南浔区"
                        },{
                            "areasname":"德清县"
                        },{
                            "areasname":"长兴县"
                        },{
                            "areasname":"安吉县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "嘉兴市",
                    "areas":[
                        {
                            "areasname":"南湖区"
                        },{
                            "areasname":"秀洲区"
                        },{
                            "areasname":"嘉善县"
                        },{
                            "areasname":"海盐县"
                        },{
                            "areasname":"海宁市"
                        },{
                            "areasname":"平湖市"
                        },{
                            "areasname":"桐乡市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "金华市",
                    "areas":[
                        {
                            "areasname":"婺城区"
                        },{
                            "areasname":"金东区"
                        },{
                            "areasname":"武义县"
                        },{
                            "areasname":"浦江县"
                        },{
                            "areasname":"磐安县"
                        },{
                            "areasname":"兰溪市"
                        },{
                            "areasname":"义乌市"
                        },{
                            "areasname":"东阳市"
                        },{
                            "areasname":"永康市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "丽水市",
                    "areas":[
                        {
                            "areasname":"莲都区"
                        },{
                            "areasname":"青田县"
                        },{
                            "areasname":"缙云县"
                        },{
                            "areasname":"遂昌县"
                        },{
                            "areasname":"松阳县"
                        },{
                            "areasname":"云和县"
                        },{
                            "areasname":"庆元县"
                        },{
                            "areasname":"景宁畲族自治县"
                        },{
                            "areasname":"龙泉市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "宁波市",
                    "areas":[
                        {
                            "areasname":"海曙区"
                        },{
                            "areasname":"江北区"
                        },{
                            "areasname":"北仑区"
                        },{
                            "areasname":"镇海区"
                        },{
                            "areasname":"鄞州区"
                        },{
                            "areasname":"象山县"
                        },{
                            "areasname":"宁海县"
                        },{
                            "areasname":"余姚市"
                        },{
                            "areasname":"慈溪市"
                        },{
                            "areasname":"奉化区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "衢州市",
                    "areas":[
                        {
                            "areasname":"柯城区"
                        },{
                            "areasname":"衢江区"
                        },{
                            "areasname":"常山县"
                        },{
                            "areasname":"开化县"
                        },{
                            "areasname":"龙游县"
                        },{
                            "areasname":"江山市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "绍兴市",
                    "areas":[
                        {
                            "areasname":"越城区"
                        },{
                            "areasname":"柯桥区"
                        },{
                            "areasname":"新昌县"
                        },{
                            "areasname":"诸暨市"
                        },{
                            "areasname":"上虞区"
                        },{
                            "areasname":"嵊州市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "台州市",
                    "areas":[
                        {
                            "areasname":"椒江区"
                        },{
                            "areasname":"黄岩区"
                        },{
                            "areasname":"路桥区"
                        },{
                            "areasname":"玉环市"
                        },{
                            "areasname":"三门县"
                        },{
                            "areasname":"天台县"
                        },{
                            "areasname":"仙居县"
                        },{
                            "areasname":"温岭市"
                        },{
                            "areasname":"临海市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "温州市",
                    "areas":[
                        {
                            "areasname":"鹿城区"
                        },{
                            "areasname":"龙湾区"
                        },{
                            "areasname":"瓯海区"
                        },{
                            "areasname":"洞头区"
                        },{
                            "areasname":"永嘉县"
                        },{
                            "areasname":"平阳县"
                        },{
                            "areasname":"苍南县"
                        },{
                            "areasname":"文成县"
                        },{
                            "areasname":"泰顺县"
                        },{
                            "areasname":"瑞安市"
                        },{
                            "areasname":"乐清市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "舟山市",
                    "areas":[
                        {
                            "areasname":"定海区"
                        },{
                            "areasname":"普陀区"
                        },{
                            "areasname":"岱山县"
                        },{
                            "areasname":"嵊泗县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                }
            ],
            "provinceName": "浙江省"
        },
        {
            "citys": [
                {
                    "citysName": "安庆市",
                    "areas":[
                        {
                            "areasname":"迎江区"
                        },{
                            "areasname":"大观区"
                        },{
                            "areasname":"宜秀区"
                        },{
                            "areasname":"怀宁县"
                        },{
                            "areasname":"潜山县"
                        },{
                            "areasname":"太湖县"
                        },{
                            "areasname":"宿松县"
                        },{
                            "areasname":"望江县"
                        },{
                            "areasname":"岳西县"
                        },{
                            "areasname":"桐城市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "蚌埠市",
                    "areas":[
                        {
                            "areasname":"龙子湖区"
                        },{
                            "areasname":"蚌山区"
                        },{
                            "areasname":"禹会区"
                        },{
                            "areasname":"淮上区"
                        },{
                            "areasname":"怀远县"
                        },{
                            "areasname":"五河县"
                        },{
                            "areasname":"固镇县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "亳州市",
                    "areas":[
                        {
                            "areasname":"谯城区"
                        },{
                            "areasname":"涡阳县"
                        },{
                            "areasname":"蒙城县"
                        },{
                            "areasname":"利辛县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "池州市",
                    "areas":[
                        {
                            "areasname":"贵池区"
                        },{
                            "areasname":"东至县"
                        },{
                            "areasname":"石台县"
                        },{
                            "areasname":"青阳县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "滁州市",
                    "areas":[
                        {
                            "areasname":"琅琊区"
                        },{
                            "areasname":"南谯区"
                        },{
                            "areasname":"来安县"
                        },{
                            "areasname":"全椒县"
                        },{
                            "areasname":"定远县"
                        },{
                            "areasname":"凤阳县"
                        },{
                            "areasname":"天长市"
                        },{
                            "areasname":"明光市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "阜阳市",
                    "areas":[
                        {
                            "areasname":"颍州区"
                        },{
                            "areasname":"颍东区"
                        },{
                            "areasname":"颍泉区"
                        },{
                            "areasname":"临泉县"
                        },{
                            "areasname":"太和县"
                        },{
                            "areasname":"阜南县"
                        },{
                            "areasname":"颍上县"
                        },{
                            "areasname":"界首市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "合肥市",
                    "areas":[
                        {
                            "areasname":"瑶海区"
                        },{
                            "areasname":"庐阳区"
                        },{
                            "areasname":"蜀山区"
                        },{
                            "areasname":"包河区"
                        },{
                            "areasname":"长丰县"
                        },{
                            "areasname":"肥东县"
                        },{
                            "areasname":"肥西县"
                        },{
                            "areasname":"其它区"
                        },{
                            "areasname":"巢湖市"
                        },{
                            "areasname":"庐江县"
                        }
                    ]
                },
                {
                    "citysName": "淮北市",
                    "areas":[
                        {
                            "areasname":"杜集区"
                        },{
                            "areasname":"相山区"
                        },{
                            "areasname":"烈山区"
                        },{
                            "areasname":"濉溪县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "淮南市",
                    "areas":[
                        {
                            "areasname":"大通区"
                        },{
                            "areasname":"田家庵区"
                        },{
                            "areasname":"谢家集区"
                        },{
                            "areasname":"八公山区"
                        },{
                            "areasname":"潘集区"
                        },{
                            "areasname":"凤台县"
                        },{
                            "areasname":"其它区"
                        },{
                            "areasname":"寿县"
                        }
                    ]
                },
                {
                    "citysName": "黄山市",
                    "areas":[
                        {
                            "areasname":"屯溪区"
                        },{
                            "areasname":"黄山区"
                        },{
                            "areasname":"徽州区"
                        },{
                            "areasname":"歙县"
                        },{
                            "areasname":"休宁县"
                        },{
                            "areasname":"黟县"
                        },{
                            "areasname":"祁门县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "六安市",
                    "areas":[
                        {
                            "areasname":"金安区"
                        },{
                            "areasname":"裕安区"
                        },{
                            "areasname":"叶集区"
                        },{
                            "areasname":"霍邱县"
                        },{
                            "areasname":"舒城县"
                        },{
                            "areasname":"金寨县"
                        },{
                            "areasname":"霍山县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "马鞍山市",
                    "areas":[
                        {
                            "areasname":"花山区"
                        },{
                            "areasname":"雨山区"
                        },{
                            "areasname":"博望区"
                        },{
                            "areasname":"当涂县"
                        },{
                            "areasname":"其它区"
                        },{
                            "areasname":"含山县"
                        },{
                            "areasname":"和县"
                        }
                    ]
                },
                {
                    "citysName": "宿州市",
                    "areas":[
                        {
                            "areasname":"埇桥区"
                        },{
                            "areasname":"砀山县"
                        },{
                            "areasname":"萧县"
                        },{
                            "areasname":"灵璧县"
                        },{
                            "areasname":"泗县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "铜陵市",
                    "areas":[
                        {
                            "areasname":"铜官区"
                        },{
                            "areasname":"郊区"
                        },{
                            "areasname":"义安区"
                        },{
                            "areasname":"其它区"
                        },{
                            "areasname":"枞阳县"
                        }
                    ]
                },
                {
                    "citysName": "芜湖市",
                    "areas":[
                        {
                            "areasname":"镜湖区"
                        },{
                            "areasname":"弋江区"
                        },{
                            "areasname":"鸠江区"
                        },{
                            "areasname":"三山区"
                        },{
                            "areasname":"芜湖县"
                        },{
                            "areasname":"繁昌县"
                        },{
                            "areasname":"南陵县"
                        },{
                            "areasname":"其它区"
                        },{
                            "areasname":"无为县"
                        }
                    ]
                }   
            ],
            "provinceName": "安徽省"
        },
        {
            "citys": [
                {
                    "citysName": "北京市",
                    "areas":[
                        {
                            "areasname":"东城区"
                        },{
                            "areasname":"西城区"
                        },{
                            "areasname":"朝阳区"
                        },{
                            "areasname":"丰台区"
                        },{
                            "areasname":"石景山区"
                        },{
                            "areasname":"海淀区"
                        },{
                            "areasname":"门头沟区"
                        },{
                            "areasname":"房山区"
                        },{
                            "areasname":"通州区"
                        },{
                            "areasname":"顺义区"
                        },{
                            "areasname":"昌平区"
                        },{
                            "areasname":"大兴区"
                        },{
                            "areasname":"怀柔区"
                        },{
                            "areasname":"平谷区"
                        },{
                            "areasname":"密云区"
                        },{
                            "areasname":"延庆区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                }
            ],
            "provinceName": "北京"
        },
        {
            "citys": [
                {
                    "citysName": "重庆市",
                    "areas":[
                        {
                            "areasname":"万州区"
                        },{
                            "areasname":"涪陵区"
                        },{
                            "areasname":"渝中区"
                        },{
                            "areasname":"大渡口区"
                        },{
                            "areasname":"江北区"
                        },{
                            "areasname":"沙坪坝区"
                        },{
                            "areasname":"九龙坡区"
                        },{
                            "areasname":"南岸区"
                        },{
                            "areasname":"北碚区"
                        },{
                            "areasname":"渝北区"
                        },{
                            "areasname":"巴南区"
                        },{
                            "areasname":"黔江区"
                        },{
                            "areasname":"长寿区"
                        },{
                            "areasname":"綦江区"
                        },{
                            "areasname":"潼南区"
                        },{
                            "areasname":"铜梁区"
                        },{
                            "areasname":"大足区"
                        },{
                            "areasname":"荣昌区"
                        },{
                            "areasname":"璧山区"
                        },{
                            "areasname":"梁平区"
                        },{
                            "areasname":"城口县"
                        },{
                            "areasname":"丰都县"
                        },{
                            "areasname":"垫江县"
                        },{
                            "areasname":"武隆区"
                        },{
                            "areasname":"忠县"
                        },{
                            "areasname":"开州区"
                        },{
                            "areasname":"云阳县"
                        },{
                            "areasname":"奉节县"
                        },{
                            "areasname":"巫山县"
                        },{
                            "areasname":"巫溪县"
                        },{
                            "areasname":"石柱土家族自治县"
                        },{
                            "areasname":"秀山土家族苗族自治县"
                        },{
                            "areasname":"酉阳土家族苗族自治县"
                        },{
                            "areasname":"彭水苗族土家族自治县"
                        },{
                            "areasname":"江津区"
                        },{
                            "areasname":"合川区"
                        },{
                            "areasname":"永川区"
                        },{
                            "areasname":"南川区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                }
            ],
            "provinceName": "重庆"
        },
        {
            "citys": [
                {
                    "citysName": "福州市",
                    "areas":[
                        {
                            "areasname":"鼓楼区"
                        },{
                            "areasname":"台江区"
                        },{
                            "areasname":"仓山区"
                        },{
                            "areasname":"马尾区"
                        },{
                            "areasname":"晋安区"
                        },{
                            "areasname":"闽侯县"
                        },{
                            "areasname":"连江县"
                        },{
                            "areasname":"罗源县"
                        },{
                            "areasname":"闽清县"
                        },{
                            "areasname":"永泰县"
                        },{
                            "areasname":"福清市"
                        },{
                            "areasname":"长乐区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "南平市",
                    "areas":[
                        {
                            "areasname":"延平区"
                        },{
                            "areasname":"顺昌县"
                        },{
                            "areasname":"浦城县"
                        },{
                            "areasname":"光泽县"
                        },{
                            "areasname":"松溪县"
                        },{
                            "areasname":"政和县"
                        },{
                            "areasname":"邵武市"
                        },{
                            "areasname":"武夷山市"
                        },{
                            "areasname":"建瓯市"
                        },{
                            "areasname":"建阳区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },{
                    "citysName": "莆田市",
                    "areas":[
                        {
                            "areasname":"城厢区"
                        },{
                            "areasname":"涵江区"
                        },{
                            "areasname":"荔城区"
                        },{
                            "areasname":"秀屿区"
                        },{
                            "areasname":"仙游县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "泉州市",
                    "areas":[
                        {
                            "areasname":"鲤城区"
                        },{
                            "areasname":"丰泽区"
                        },{
                            "areasname":"洛江区"
                        },{
                            "areasname":"泉港区"
                        },{
                            "areasname":"惠安县"
                        },{
                            "areasname":"安溪县"
                        },{
                            "areasname":"永春县"
                        },{
                            "areasname":"德化县"
                        },{
                            "areasname":"金门县"
                        },{
                            "areasname":"石狮市"
                        },{
                            "areasname":"晋江市"
                        },{
                            "areasname":"南安市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "三明市",
                    "areas":[
                        {
                            "areasname":"梅列区"
                        },{
                            "areasname":"三元区"
                        },{
                            "areasname":"明溪县"
                        },{
                            "areasname":"清流县"
                        },{
                            "areasname":"宁化县"
                        },{
                            "areasname":"大田县"
                        },{
                            "areasname":"尤溪县"
                        },{
                            "areasname":"沙县"
                        },{
                            "areasname":"将乐县"
                        },{
                            "areasname":"泰宁县"
                        },{
                            "areasname":"永安市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "厦门市",
                    "areas":[
                        {
                            "areasname":"思明区"
                        },{
                            "areasname":"海沧区"
                        },{
                            "areasname":"湖里区"
                        },{
                            "areasname":"集美区"
                        },{
                            "areasname":"同安区"
                        },{
                            "areasname":"翔安区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "漳州市",
                    "areas":[
                        {
                            "areasname":"芗城区"
                        },{
                            "areasname":"龙文区"
                        },{
                            "areasname":"云霄县"
                        },{
                            "areasname":"漳浦县"
                        },{
                            "areasname":"长泰县"
                        },{
                            "areasname":"东山县"
                        },{
                            "areasname":"南靖县"
                        },{
                            "areasname":"平和县"
                        },{
                            "areasname":"华安县"
                        },{
                            "areasname":"龙海市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },{
                    "citysName": "龙岩市",
                    "areas":[
                        {
                            "areasname":"新罗区"
                        },{
                            "areasname":"长汀县"
                        },{
                            "areasname":"永定区"
                        },{
                            "areasname":"上杭县"
                        },{
                            "areasname":"武平县"
                        },{
                            "areasname":"连城县"
                        },{
                            "areasname":"漳平市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },{
                    "citysName": "宁德市",
                    "areas":[
                        {
                            "areasname":"蕉城区"
                        },{
                            "areasname":"霞浦县"
                        },{
                            "areasname":"古田县"
                        },{
                            "areasname":"屏南县"
                        },{
                            "areasname":"寿宁县"
                        },{
                            "areasname":"周宁县"
                        },{
                            "areasname":"柘荣县"
                        },{
                            "areasname":"福安市"
                        },{
                            "areasname":"福鼎市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                }
            ],
            "provinceName": "福建省"
        },
        {
            "citys": [
                {
                    "citysName": "白银市",
                    "areas":[
                        {
                            "areasname":"白银区"
                        },{
                            "areasname":"平川区"
                        },{
                            "areasname":"靖远县"
                        },{
                            "areasname":"会宁县"
                        },{
                            "areasname":"景泰县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "定西市",
                    "areas":[
                        {
                            "areasname":"安定区"
                        },{
                            "areasname":"通渭县"
                        },{
                            "areasname":"陇西县"
                        },{
                            "areasname":"渭源县"
                        },{
                            "areasname":"漳县"
                        },{
                            "areasname":"岷县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "甘南藏族自治州",
                    "areas":[
                        {
                            "areasname":"合作市"
                        },{
                            "areasname":"临潭县"
                        },{
                            "areasname":"卓尼县"
                        },{
                            "areasname":"舟曲县"
                        },{
                            "areasname":"迭部县"
                        },{
                            "areasname":"玛曲县"
                        },{
                            "areasname":"碌曲县"
                        },{
                            "areasname":"夏河县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "嘉峪关市",
                    "areas":[
                        {
                            "areasname":"长城区"
                        },{
                            "areasname":"镜铁区"
                        },{
                            "areasname":"文殊镇"
                        },{
                            "areasname":"新城镇"
                        },{
                            "areasname":"雄关区"
                        },{
                            "areasname":"峪泉镇"
                        }
                    ]
                },
                {
                    "citysName": "金昌市",
                    "areas":[
                        {
                            "areasname":"金川区"
                        },{
                            "areasname":"永昌县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "酒泉市",
                    "areas":[
                        {
                            "areasname":"肃州区"
                        },{
                            "areasname":"金塔县"
                        },{
                            "areasname":"瓜州县"
                        },{
                            "areasname":"肃北蒙古族自治县"
                        },{
                            "areasname":"阿克塞哈萨克族自治县"
                        },{
                            "areasname":"玉门市"
                        },{
                            "areasname":"敦煌市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "兰州市",
                    "areas":[
                        {
                            "areasname":"城关区"
                        },{
                            "areasname":"七里河区"
                        },{
                            "areasname":"西固区"
                        },{
                            "areasname":"安宁区"
                        },{
                            "areasname":"红古区"
                        },{
                            "areasname":"永登县"
                        },{
                            "areasname":"皋兰县"
                        },{
                            "areasname":"榆中县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "临夏回族自治州",
                    "areas":[
                        {
                            "areasname":"临夏市"
                        },{
                            "areasname":"临夏县"
                        },{
                            "areasname":"康乐县"
                        },{
                            "areasname":"永靖县"
                        },{
                            "areasname":"广河县"
                        },{
                            "areasname":"和政县"
                        },{
                            "areasname":"东乡族自治县"
                        },{
                            "areasname":"积石山保安族东乡族撒拉族自治县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "陇南市",
                    "areas":[
                        {
                            "areasname":"武都区"
                        },{
                            "areasname":"成县"
                        },{
                            "areasname":"文县"
                        },{
                            "areasname":"宕昌县"
                        },{
                            "areasname":"康县"
                        },{
                            "areasname":"西和县"
                        },{
                            "areasname":"礼县"
                        },{
                            "areasname":"徽县"
                        },{
                            "areasname":"两当县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "平凉市",
                    "areas":[
                        {
                            "areasname":"崆峒区"
                        },{
                            "areasname":"泾川县"
                        },{
                            "areasname":"灵台县"
                        },{
                            "areasname":"崇信县"
                        },{
                            "areasname":"华亭县"
                        },{
                            "areasname":"庄浪县"
                        },{
                            "areasname":"静宁县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "庆阳市"
                },
                {
                    "citysName": "天水市"
                },
                {
                    "citysName": "武威市"
                },
                {
                    "citysName": "张掖市"
                }
            ],
            "provinceName": "甘肃省"
        },
        {
            "citys": [
                {
                    "citysName": "潮州市"
                },
                {
                    "citysName": "东莞市"
                },
                {
                    "citysName": "东沙群岛"
                },
                {
                    "citysName": "佛山市"
                },
                {
                    "citysName": "广州市"
                },
                {
                    "citysName": "河源市"
                },
                {
                    "citysName": "惠州市"
                },
                {
                    "citysName": "江门市"
                },
                {
                    "citysName": "揭阳市"
                },
                {
                    "citysName": "茂名市"
                },
                {
                    "citysName": "梅州市"
                },
                {
                    "citysName": "清远市"
                },
                {
                    "citysName": "汕头市"
                },
                {
                    "citysName": "汕尾市"
                },
                {
                    "citysName": "韶关市"
                },
                {
                    "citysName": "深圳市"
                },
                {
                    "citysName": "阳江市"
                },
                {
                    "citysName": "云浮市"
                },
                {
                    "citysName": "湛江市"
                },
                {
                    "citysName": "肇庆市"
                },
                {
                    "citysName": "中山市"
                },
                {
                    "citysName": "珠海市"
                }
            ],
            "provinceName": "广东省"
        },
        {
            "citys": [
                {
                    "citysName": "百色市"
                },
                {
                    "citysName": "北海市"
                },
                {
                    "citysName": "崇左市"
                },
                {
                    "citysName": "防城港市"
                },
                {
                    "citysName": "贵港市"
                },
                {
                    "citysName": "桂林市"
                },
                {
                    "citysName": "河池市"
                },
                {
                    "citysName": "贺州市"
                },
                {
                    "citysName": "来宾市"
                },
                {
                    "citysName": "柳州市"
                },
                {
                    "citysName": "南宁市"
                },
                {
                    "citysName": "钦州市"
                },
                {
                    "citysName": "梧州市"
                },
                {
                    "citysName": "玉林市"
                }
            ],
            "provinceName": "广西壮族自治区"
        },
        {
            "citys": [
                {
                    "citysName": "安顺市"
                },
                {
                    "citysName": "毕节市"
                },
                {
                    "citysName": "贵阳市"
                },
                {
                    "citysName": "六盘水市"
                },
                {
                    "citysName": "黔东南苗族侗族自治州"
                },
                {
                    "citysName": "黔南布依族苗族自治州"
                },
                {
                    "citysName": "黔西南布依族苗族自治州"
                },
                {
                    "citysName": "铜仁市"
                },
                {
                    "citysName": "遵义市"
                }
            ],
            "provinceName": "贵州省"
        },
        {
            "citys": [
                {
                    "citysName": "白沙黎族自治县"
                },
                {
                    "citysName": "保亭黎族苗族自治县"
                },
                {
                    "citysName": "昌江黎族自治县"
                },
                {
                    "citysName": "澄迈县"
                },
                {
                    "citysName": "儋州市"
                },
                {
                    "citysName": "定安县"
                },
                {
                    "citysName": "东方市"
                },
                {
                    "citysName": "海口市"
                },
                {
                    "citysName": "乐东黎族自治县"
                },
                {
                    "citysName": "临高县"
                },
                {
                    "citysName": "陵水黎族苗族自治县"
                },
                {
                    "citysName": "琼海市"
                },
                {
                    "citysName": "琼中黎族苗族自治县"
                },
                {
                    "citysName": "三沙市"
                },
                {
                    "citysName": "三亚市"
                },
                {
                    "citysName": "屯昌县"
                },
                {
                    "citysName": "万宁市"
                },
                {
                    "citysName": "文昌市"
                },
                {
                    "citysName": "五指山市"
                }
            ],
            "provinceName": "海南省"
        },
        {
            "citys": [
                {
                    "citysName": "保定市"
                },
                {
                    "citysName": "沧州市"
                },
                {
                    "citysName": "承德市"
                },
                {
                    "citysName": "邯郸市"
                },
                {
                    "citysName": "衡水市"
                },
                {
                    "citysName": "廊坊市"
                },
                {
                    "citysName": "秦皇岛市"
                },
                {
                    "citysName": "石家庄市"
                },
                {
                    "citysName": "唐山市"
                },
                {
                    "citysName": "邢台市"
                },
                {
                    "citysName": "张家口市"
                }
            ],
            "provinceName": "河北省"
        },
        {
            "citys": [
                {
                    "citysName": "安阳市"
                },
                {
                    "citysName": "鹤壁市"
                },
                {
                    "citysName": "济源市"
                },
                {
                    "citysName": "焦作市"
                },
                {
                    "citysName": "开封市"
                },
                {
                    "citysName": "漯河市"
                },
                {
                    "citysName": "洛阳市"
                },
                {
                    "citysName": "南阳市"
                },
                {
                    "citysName": "平顶山市"
                },
                {
                    "citysName": "濮阳市"
                },
                {
                    "citysName": "三门峡市"
                },
                {
                    "citysName": "商丘市"
                },
                {
                    "citysName": "新乡市"
                },
                {
                    "citysName": "信阳市"
                },
                {
                    "citysName": "许昌市"
                },
                {
                    "citysName": "郑州市"
                },
                {
                    "citysName": "周口市"
                },
                {
                    "citysName": "驻马店市"
                }
            ],
            "provinceName": "河南省"
        },
        {
            "citys": [
                {
                    "citysName": "大庆市"
                },
                {
                    "citysName": "大兴安岭地区"
                },
                {
                    "citysName": "哈尔滨市"
                },
                {
                    "citysName": "鹤岗市"
                },
                {
                    "citysName": "黑河市"
                },
                {
                    "citysName": "鸡西市"
                },
                {
                    "citysName": "佳木斯市"
                },
                {
                    "citysName": "牡丹江市"
                },
                {
                    "citysName": "齐齐哈尔市"
                },
                {
                    "citysName": "七台河市"
                },
                {
                    "citysName": "双鸭山市"
                },
                {
                    "citysName": "绥化市"
                },
                {
                    "citysName": "伊春市"
                }
            ],
            "provinceName": "黑龙江省"
        },
        {
            "citys": [
                {
                    "citysName": "鄂州市"
                },
                {
                    "citysName": "恩施土家族苗族自治州"
                },
                {
                    "citysName": "黄冈市"
                },
                {
                    "citysName": "黄石市"
                },
                {
                    "citysName": "荆门市"
                },
                {
                    "citysName": "荆州市"
                },
                {
                    "citysName": "潜江市"
                },
                {
                    "citysName": "神农架林区"
                },
                {
                    "citysName": "十堰市"
                },
                {
                    "citysName": "随州市"
                },
                {
                    "citysName": "天门市"
                },
                {
                    "citysName": "武汉市"
                },
                {
                    "citysName": "咸宁市"
                },
                {
                    "citysName": "仙桃市"
                },
                {
                    "citysName": "襄阳市"
                },
                {
                    "citysName": "孝感市"
                },
                {
                    "citysName": "宜昌市"
                }
            ],
            "provinceName": "湖北省"
        },
        {
            "citys": [
                {
                    "citysName": "常德市"
                },
                {
                    "citysName": "长沙市"
                },
                {
                    "citysName": "郴州市"
                },
                {
                    "citysName": "衡阳市"
                },
                {
                    "citysName": "怀化市"
                },
                {
                    "citysName": "娄底市"
                },
                {
                    "citysName": "邵阳市"
                },
                {
                    "citysName": "湘潭市"
                },
                {
                    "citysName": "湘西土家族苗族自治州"
                },
                {
                    "citysName": "益阳市"
                },
                {
                    "citysName": "永州市"
                },
                {
                    "citysName": "岳阳市"
                },
                {
                    "citysName": "张家界市"
                },
                {
                    "citysName": "株洲市"
                }
            ],
            "provinceName": "湖南省"
        },
        {
            "citys": [
                {
                    "citysName": "白城市"
                },
                {
                    "citysName": "白山市"
                },
                {
                    "citysName": "长春市"
                },
                {
                    "citysName": "吉林市"
                },
                {
                    "citysName": "辽源市"
                },
                {
                    "citysName": "四平市"
                },
                {
                    "citysName": "松原市"
                },
                {
                    "citysName": "通化市"
                },
                {
                    "citysName": "延边朝鲜族自治州"
                }
            ],
            "provinceName": "吉林省"
        },
        {
            "citys": [
                {
                    "citysName": "常州市"
                },
                {
                    "citysName": "淮安市"
                },
                {
                    "citysName": "连云港市"
                },
                {
                    "citysName": "南京市"
                },
                {
                    "citysName": "南通市"
                },
                {
                    "citysName": "宿迁市"
                },
                {
                    "citysName": "苏州市"
                },
                {
                    "citysName": "泰州市"
                },
                {
                    "citysName": "无锡市"
                },
                {
                    "citysName": "徐州市"
                },
                {
                    "citysName": "盐城市"
                },
                {
                    "citysName": "扬州市"
                },
                {
                    "citysName": "镇江市"
                }
            ],
            "provinceName": "江苏省"
        },
        {
            "citys": [
                {
                    "citysName": "抚州市"
                },
                {
                    "citysName": "赣州市"
                },
                {
                    "citysName": "吉安市"
                },
                {
                    "citysName": "景德镇市"
                },
                {
                    "citysName": "九江市"
                },
                {
                    "citysName": "南昌市"
                },
                {
                    "citysName": "萍乡市"
                },
                {
                    "citysName": "上饶市"
                },
                {
                    "citysName": "新余市"
                },
                {
                    "citysName": "宜春市"
                },
                {
                    "citysName": "鹰潭市"
                }
            ],
            "provinceName": "江西省"
        },
        {
            "citys": [
                {
                    "citysName": "鞍山市"
                },
                {
                    "citysName": "本溪市"
                },
                {
                    "citysName": "朝阳市"
                },
                {
                    "citysName": "大连市"
                },
                {
                    "citysName": "丹东市"
                },
                {
                    "citysName": "抚顺市"
                },
                {
                    "citysName": "阜新市"
                },
                {
                    "citysName": "葫芦岛市"
                },
                {
                    "citysName": "锦州市"
                },
                {
                    "citysName": "辽阳市"
                },
                {
                    "citysName": "盘锦市"
                },
                {
                    "citysName": "沈阳市"
                },
                {
                    "citysName": "铁岭市"
                },
                {
                    "citysName": "营口市"
                }
            ],
            "provinceName": "辽宁省"
        },
        {
            "citys": [
                {
                    "citysName": "阿拉善盟"
                },
                {
                    "citysName": "巴彦淖尔市"
                },
                {
                    "citysName": "包头市"
                },
                {
                    "citysName": "赤峰市"
                },
                {
                    "citysName": "鄂尔多斯市"
                },
                {
                    "citysName": "呼和浩特市"
                },
                {
                    "citysName": "呼伦贝尔市"
                },
                {
                    "citysName": "通辽市"
                },
                {
                    "citysName": "乌海市"
                },
                {
                    "citysName": "乌兰察布市"
                },
                {
                    "citysName": "锡林郭勒盟"
                },
                {
                    "citysName": "兴安盟"
                }
            ],
            "provinceName": "内蒙古自治区"
        },
        {
            "citys": [
                {
                    "citysName": "固原市"
                },
                {
                    "citysName": "石嘴山市"
                },
                {
                    "citysName": "吴忠市"
                },
                {
                    "citysName": "银川市"
                },
                {
                    "citysName": "中卫市"
                }
            ],
            "provinceName": "宁夏回族自治区"
        },
        {
            "citys": [
                {
                    "citysName": "果洛藏族自治州"
                },
                {
                    "citysName": "海北藏族自治州"
                },
                {
                    "citysName": "海东市"
                },
                {
                    "citysName": "海南藏族自治州"
                },
                {
                    "citysName": "海西蒙古族藏族自治州"
                },
                {
                    "citysName": "黄南藏族自治州"
                },
                {
                    "citysName": "西宁市"
                },
                {
                    "citysName": "玉树藏族自治州"
                }
            ],
            "provinceName": "青海省"
        },
        {
            "citys": [
                {
                    "citysName": "滨州市"
                },
                {
                    "citysName": "德州市"
                },
                {
                    "citysName": "东营市"
                },
                {
                    "citysName": "菏泽市"
                },
                {
                    "citysName": "济南市"
                },
                {
                    "citysName": "济宁市"
                },
                {
                    "citysName": "莱芜市"
                },
                {
                    "citysName": "聊城市"
                },
                {
                    "citysName": "临沂市"
                },
                {
                    "citysName": "青岛市"
                },
                {
                    "citysName": "日照市"
                },
                {
                    "citysName": "泰安市"
                },
                {
                    "citysName": "潍坊市"
                },
                {
                    "citysName": "威海市"
                },
                {
                    "citysName": "烟台市"
                },
                {
                    "citysName": "枣庄市"
                },
                {
                    "citysName": "淄博市"
                }
            ],
            "provinceName": "山东省"
        },
        {
            "citys": [
                {
                    "citysName": "长治市"
                },
                {
                    "citysName": "大同市"
                },
                {
                    "citysName": "晋城市"
                },
                {
                    "citysName": "晋中市"
                },
                {
                    "citysName": "临汾市"
                },
                {
                    "citysName": "吕梁市"
                },
                {
                    "citysName": "朔州市"
                },
                {
                    "citysName": "太原市"
                },
                {
                    "citysName": "忻州市"
                },
                {
                    "citysName": "阳泉市"
                },
                {
                    "citysName": "运城市"
                }
            ],
            "provinceName": "山西省"
        },
        {
            "citys": [
                {
                    "citysName": "安康市"
                },
                {
                    "citysName": "宝鸡市"
                },
                {
                    "citysName": "汉中市"
                },
                {
                    "citysName": "商洛市"
                },
                {
                    "citysName": "铜川市"
                },
                {
                    "citysName": "渭南市"
                },
                {
                    "citysName": "西安市"
                },
                {
                    "citysName": "咸阳市"
                },
                {
                    "citysName": "延安市"
                },
                {
                    "citysName": "榆林市"
                }
            ],
            "provinceName": "陕西省"
        },
        {
            "citys": [
                {
                    "citysName": "上海市"
                }
            ],
            "provinceName": "上海"
        },
        {
            "citys": [
                {
                    "citysName": "阿贝藏族羌族自治州"
                },
                {
                    "citysName": "巴中市"
                },
                {
                    "citysName": "成都市"
                },
                {
                    "citysName": "达州市"
                },
                {
                    "citysName": "德阳市"
                },
                {
                    "citysName": "甘孜藏族自治州"
                },
                {
                    "citysName": "广安市"
                },
                {
                    "citysName": "广元市"
                },
                {
                    "citysName": "乐山市"
                },
                {
                    "citysName": "凉山彝族自治州"
                },
                {
                    "citysName": "泸州市"
                },
                {
                    "citysName": "眉山市"
                },
                {
                    "citysName": "绵阳市"
                },
                {
                    "citysName": "南充市"
                },
                {
                    "citysName": "内江市"
                },
                {
                    "citysName": "攀枝花市"
                },
                {
                    "citysName": "遂宁市"
                },
                {
                    "citysName": "雅安市"
                },
                {
                    "citysName": "宜宾市"
                },
                {
                    "citysName": "自贡市"
                },
                {
                    "citysName": "资阳市"
                }
            ],
            "provinceName": "四川省"
        },
        {
            "citys": [
                {
                    "citysName": "天津市"
                }
            ],
            "provinceName": "天津"
        },
        {
            "citys": [
                {
                    "citysName": "阿里地区"
                },
                {
                    "citysName": "昌都市"
                },
                {
                    "citysName": "拉萨市"
                },
                {
                    "citysName": "林芝市"
                },
                {
                    "citysName": "那曲市"
                },
                {
                    "citysName": "日喀则市"
                },
                {
                    "citysName": "山南市"
                }
            ],
            "provinceName": "西藏自治区"
        },
        {
            "citys": [
                {
                    "citysName": "阿克苏地区"
                },
                {
                    "citysName": "阿拉尔市"
                },
                {
                    "citysName": "阿勒泰地区"
                },
                {
                    "citysName": "巴音敦楞蒙古自治州"
                },
                {
                    "citysName": "北屯市"
                },
                {
                    "citysName": "博尔塔拉蒙古自治州"
                },
                {
                    "citysName": "昌吉回族自治州"
                },
                {
                    "citysName": "哈密市"
                },
                {
                    "citysName": "和田地区"
                },
                {
                    "citysName": "喀什地区"
                },
                {
                    "citysName": "可克达拉市"
                },
                {
                    "citysName": "克拉玛依市"
                },
                {
                    "citysName": "克孜勒苏柯尔克孜自治州"
                },
                {
                    "citysName": "昆玉市"
                },
                {
                    "citysName": "石河子市"
                },
                {
                    "citysName": "塔城地区"
                },
                {
                    "citysName": "铁门关市"
                },
                {
                    "citysName": "吐鲁番市"
                },
                {
                    "citysName": "图木舒克市"
                },
                {
                    "citysName": "五家渠市"
                },
                {
                    "citysName": "乌鲁木齐市"
                },
                {
                    "citysName": "伊犁哈萨克自治州"
                }
            ],
            "provinceName": "新疆维吾尔自治区"
        },
        {
            "citys": [
                {
                    "citysName": "保山市"
                },
                {
                    "citysName": "楚雄彝族自治州"
                },
                {
                    "citysName": "大理白族自治州"
                },
                {
                    "citysName": "德宏傣族景颇族自治州"
                },
                {
                    "citysName": "迪庆藏族自治州"
                },
                {
                    "citysName": "红河哈尼族彝族自治州"
                },
                {
                    "citysName": "昆明市"
                },
                {
                    "citysName": "丽江市"
                },
                {
                    "citysName": "临沧市"
                },
                {
                    "citysName": "怒江傈僳族自治州"
                },
                {
                    "citysName": "普洱市"
                },
                {
                    "citysName": "曲靖市"
                },
                {
                    "citysName": "文山壮族苗族自治州"
                },
                {
                    "citysName": "西双版纳傣族自治州"
                },
                {
                    "citysName": "玉溪市"
                },
                {
                    "citysName": "昭通市"
                }
            ],
            "provinceName": "云南省"
        },
        {
            "citys": [
                {
                    "citysName": "九龙"
                },
                {
                    "citysName": "香港岛"
                },
                {
                    "citysName": "新界"
                }
            ],
            "provinceName": "香港"
        },
        {
            "citys": [
                {
                    "citysName": "澳门半岛"
                },
                {
                    "citysName": "离岛"
                }
            ],
            "provinceName": "澳门"
        },
        {
            "citys": [
                {
                    "citysName": "高雄市"
                },
                {
                    "citysName": "花莲县"
                },
                {
                    "citysName": "基隆市"
                },
                {
                    "citysName": "嘉义市"
                },
                {
                    "citysName": "嘉义县"
                },
                {
                    "citysName": "金门县"
                },
                {
                    "citysName": "连江县"
                },
                {
                    "citysName": "苗栗县"
                },
                {
                    "citysName": "南投县"
                },
                {
                    "citysName": "澎湖县"
                },
                {
                    "citysName": "屏东县"
                },
                {
                    "citysName": "台北市"
                },
                {
                    "citysName": "台东县"
                },
                {
                    "citysName": "台南市"
                },
                {
                    "citysName": "台中市"
                },
                {
                    "citysName": "桃园县"
                },
                {
                    "citysName": "新北市"
                },
                {
                    "citysName": "新竹市"
                },
                {
                    "citysName": "新竹县"
                },
                {
                    "citysName": "宜兰县"
                },
                {
                    "citysName": "云林县"
                },
                {
                    "citysName": "彰化县"
                }
            ],
            "provinceName": "台湾"
        }
    ]
}

exports.datas = datas;