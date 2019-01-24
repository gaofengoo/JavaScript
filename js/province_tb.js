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
                    "citysName": "庆阳市",
                    "areas":[
                        {
                            "areasname":"西峰区"
                        },{
                            "areasname":"庆城县"
                        },{
                            "areasname":"环县"
                        },{
                            "areasname":"华池县"
                        },{
                            "areasname":"合水县"
                        },{
                            "areasname":"正宁县"
                        },{
                            "areasname":"宁县"
                        },{
                            "areasname":"镇原县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "天水市",
                    "areas":[
                        {
                            "areasname":"秦州区"
                        },{
                            "areasname":"麦积区"
                        },{
                            "areasname":"清水县"
                        },{
                            "areasname":"秦安县"
                        },{
                            "areasname":"甘谷县"
                        },{
                            "areasname":"武山县"
                        },{
                            "areasname":"张家川回族自治县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "武威市",
                    "areas":[
                        {
                            "areasname":"凉州区"
                        },{
                            "areasname":"民勤县"
                        },{
                            "areasname":"古浪县"
                        },{
                            "areasname":"天祝藏族自治县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "张掖市",
                    "areas":[
                        {
                            "areasname":"甘州区"
                        },{
                            "areasname":"肃南裕固族自治县"
                        },{
                            "areasname":"民乐县"
                        },{
                            "areasname":"临泽县"
                        },{
                            "areasname":"高台县"
                        },{
                            "areasname":"山丹县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                }
            ],
            "provinceName": "甘肃省"
        },
        {
            "citys": [
                {
                    "citysName": "潮州市",
                    "areas":[
                        {
                            "areasname":"湘桥区"
                        },{
                            "areasname":"潮安区"
                        },{
                            "areasname":"饶平县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "东莞市",
                    "areas":[
                        {
                            "areasname":"茶山镇"
                        },{
                            "areasname":"长安镇"
                        },{
                            "areasname":"常平镇"
                        },{
                            "areasname":"大朗镇"
                        },{
                            "areasname":"大岭山镇"
                        },{
                            "areasname":"道滘镇"
                        },{
                            "areasname":"东城街道"
                        },{
                            "areasname":"东莞生态园"
                        },{
                            "areasname":"东坑镇"
                        },{
                            "areasname":"凤岗镇"
                        },{
                            "areasname":"高埗镇"
                        },{
                            "areasname":"莞城街道"
                        },{
                            "areasname":"横沥镇"
                        },{
                            "areasname":"洪梅镇"
                        },{
                            "areasname":"厚街镇"
                        },{
                            "areasname":"虎门港管委会"
                        },{
                            "areasname":"虎门镇"
                        },{
                            "areasname":"黄江镇"
                        },{
                            "areasname":"麻涌镇"
                        },{
                            "areasname":"南城街道"
                        },{
                            "areasname":"企石镇"
                        },{
                            "areasname":"桥头镇"
                        },{
                            "areasname":"清溪镇"
                        },{
                            "areasname":"沙田镇"
                        },{
                            "areasname":"石碣镇"
                        },{
                            "areasname":"石龙镇"
                        },{
                            "areasname":"石排镇"
                        },{
                            "areasname":"松山湖管委会"
                        },{
                            "areasname":"塘厦镇"
                        },{
                            "areasname":"万江街道"
                        },{
                            "areasname":"望牛墩镇"
                        },{
                            "areasname":"谢岗镇"
                        },{
                            "areasname":"樟木头镇"
                        },{
                            "areasname":"中堂镇"
                        }
                    ]
                },
                {
                    "citysName": "东沙群岛"
                },
                {
                    "citysName": "佛山市",
                    "areas":[
                        {
                            "areasname":"禅城区"
                        },{
                            "areasname":"南海区"
                        },{
                            "areasname":"顺德区"
                        },{
                            "areasname":"三水区"
                        },{
                            "areasname":"高明区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "广州市",
                    "areas":[
                        {
                            "areasname":"荔湾区"
                        },{
                            "areasname":"越秀区"
                        },{
                            "areasname":"海珠区"
                        },{
                            "areasname":"天河区"
                        },{
                            "areasname":"白云区"
                        },{
                            "areasname":"黄埔区"
                        },{
                            "areasname":"番禺区"
                        },{
                            "areasname":"花都区"
                        },{
                            "areasname":"南沙区"
                        },{
                            "areasname":"增城区"
                        },{
                            "areasname":"从化区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "河源市",
                    "areas":[
                        {
                            "areasname":"源城区"
                        },{
                            "areasname":"紫金县"
                        },{
                            "areasname":"龙川县"
                        },{
                            "areasname":"连平县"
                        },{
                            "areasname":"和平县"
                        },{
                            "areasname":"东源县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "惠州市",
                    "areas":[
                        {
                            "areasname":"惠城区"
                        },{
                            "areasname":"惠阳区"
                        },{
                            "areasname":"博罗县"
                        },{
                            "areasname":"惠东县"
                        },{
                            "areasname":"龙门县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "江门市",
                    "areas":[
                        {
                            "areasname":"蓬江区"
                        },{
                            "areasname":"江海区"
                        },{
                            "areasname":"新会区"
                        },{
                            "areasname":"台山市"
                        },{
                            "areasname":"开平市"
                        },{
                            "areasname":"鹤山市"
                        },{
                            "areasname":"恩平市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "揭阳市",
                    "areas":[
                        {
                            "areasname":"榕城区"
                        },{
                            "areasname":"揭东区"
                        },{
                            "areasname":"揭西县"
                        },{
                            "areasname":"惠来县"
                        },{
                            "areasname":"普宁市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "茂名市",
                    "areas":[
                        {
                            "areasname":"茂南区"
                        },{
                            "areasname":"电白区"
                        },{
                            "areasname":"高州市"
                        },{
                            "areasname":"化州市"
                        },{
                            "areasname":"信宜市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "梅州市",
                    "areas":[
                        {
                            "areasname":"梅江区"
                        },{
                            "areasname":"梅县区"
                        },{
                            "areasname":"大埔县"
                        },{
                            "areasname":"丰顺县"
                        },{
                            "areasname":"五华县"
                        },{
                            "areasname":"平远县"
                        },{
                            "areasname":"蕉岭县"
                        },{
                            "areasname":"兴宁市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "清远市",
                    "areas":[
                        {
                            "areasname":"清城区"
                        },{
                            "areasname":"佛冈县"
                        },{
                            "areasname":"阳山县"
                        },{
                            "areasname":"连山壮族瑶族自治县"
                        },{
                            "areasname":"连南瑶族自治县"
                        },{
                            "areasname":"清新区"
                        },{
                            "areasname":"英德市"
                        },{
                            "areasname":"连州市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "汕头市",
                    "areas":[
                        {
                            "areasname":"龙湖区"
                        },{
                            "areasname":"金平区"
                        },{
                            "areasname":"濠江区"
                        },{
                            "areasname":"潮阳区"
                        },{
                            "areasname":"潮南区"
                        },{
                            "areasname":"澄海区"
                        },{
                            "areasname":"南澳县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "汕尾市",
                    "areas":[
                        {
                            "areasname":"城区"
                        },{
                            "areasname":"海丰县"
                        },{
                            "areasname":"陆河县"
                        },{
                            "areasname":"陆丰市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "韶关市",
                    "areas":[
                        {
                            "areasname":"武江区"
                        },{
                            "areasname":"浈江区"
                        },{
                            "areasname":"曲江区"
                        },{
                            "areasname":"始兴县"
                        },{
                            "areasname":"仁化县"
                        },{
                            "areasname":"翁源县"
                        },{
                            "areasname":"乳源瑶族自治县"
                        },{
                            "areasname":"新丰县"
                        },{
                            "areasname":"乐昌市"
                        },{
                            "areasname":"南雄市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "深圳市",
                    "areas":[
                        {
                            "areasname":"罗湖区"
                        },{
                            "areasname":"福田区"
                        },{
                            "areasname":"南山区"
                        },{
                            "areasname":"宝安区"
                        },{
                            "areasname":"龙岗区"
                        },{
                            "areasname":"盐田区"
                        },{
                            "areasname":"其它区"
                        },{
                            "areasname":"坪山区"
                        },{
                            "areasname":"龙华区"
                        }
                    ]
                },
                {
                    "citysName": "阳江市",
                    "areas":[
                        {
                            "areasname":"江城区"
                        },{
                            "areasname":"阳西县"
                        },{
                            "areasname":"阳东区"
                        },{
                            "areasname":"阳春市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "云浮市",
                    "areas":[
                        {
                            "areasname":"云城区"
                        },{
                            "areasname":"新兴县"
                        },{
                            "areasname":"郁南县"
                        },{
                            "areasname":"云安区"
                        },{
                            "areasname":"罗定市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "湛江市",
                    "areas":[
                        {
                            "areasname":"赤坎区"
                        },{
                            "areasname":"霞山区"
                        },{
                            "areasname":"坡头区"
                        },{
                            "areasname":"麻章区"
                        },{
                            "areasname":"遂溪县"
                        },{
                            "areasname":"徐闻县"
                        },{
                            "areasname":"廉江市"
                        },{
                            "areasname":"雷州市"
                        },{
                            "areasname":"吴川市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "肇庆市",
                    "areas":[
                        {
                            "areasname":"端州区"
                        },{
                            "areasname":"鼎湖区"
                        },{
                            "areasname":"广宁县"
                        },{
                            "areasname":"怀集县"
                        },{
                            "areasname":"封开县"
                        },{
                            "areasname":"德庆县"
                        },{
                            "areasname":"高要区"
                        },{
                            "areasname":"四会市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "中山市",
                    "areas":[
                        {
                            "areasname":"板芙镇"
                        },{
                            "areasname":"大涌镇"
                        },{
                            "areasname":"东凤镇"
                        },{
                            "areasname":"东区街道"
                        },{
                            "areasname":"东升镇"
                        },{
                            "areasname":"阜沙镇"
                        },{
                            "areasname":"港口镇"
                        },{
                            "areasname":"古镇镇"
                        },{
                            "areasname":"横栏镇"
                        },{
                            "areasname":"黄圃镇"
                        },{
                            "areasname":"火炬开发区街道"
                        },{
                            "areasname":"民众镇"
                        },{
                            "areasname":"南朗镇"
                        },{
                            "areasname":"南区街道"
                        },{
                            "areasname":"南头镇"
                        },{
                            "areasname":"三角镇"
                        },{
                            "areasname":"三乡镇"
                        },{
                            "areasname":"沙溪镇"
                        },{
                            "areasname":"神湾镇"
                        },{
                            "areasname":"石岐区街道"
                        },{
                            "areasname":"坦洲镇"
                        },{
                            "areasname":"五桂山街道"
                        },{
                            "areasname":"西区街道"
                        },{
                            "areasname":"小榄镇"
                        }
                    ]
                },
                {
                    "citysName": "珠海市",
                    "areas":[
                        {
                            "areasname":"香洲区"
                        },{
                            "areasname":"斗门区"
                        },{
                            "areasname":"金湾区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                }
            ],
            "provinceName": "广东省"
        },
        {
            "citys": [
                {
                    "citysName": "百色市",
                    "areas":[
                        {
                            "areasname":"右江区"
                        },{
                            "areasname":"田阳县"
                        },{
                            "areasname":"田东县"
                        },{
                            "areasname":"平果县"
                        },{
                            "areasname":"德保县"
                        },{
                            "areasname":"靖西市"
                        },{
                            "areasname":"那坡县"
                        },{
                            "areasname":"凌云县"
                        },{
                            "areasname":"乐业县"
                        },{
                            "areasname":"田林县"
                        },{
                            "areasname":"西林县"
                        },{
                            "areasname":"隆林各族自治县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "北海市",
                    "areas":[
                        {
                            "areasname":"海城区"
                        },{
                            "areasname":"银海区"
                        },{
                            "areasname":"铁山港区"
                        },{
                            "areasname":"合浦县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "崇左市",
                    "areas":[
                        {
                            "areasname":"江州区"
                        },{
                            "areasname":"扶绥县"
                        },{
                            "areasname":"宁明县"
                        },{
                            "areasname":"龙州县"
                        },{
                            "areasname":"大新县"
                        },{
                            "areasname":"天等县"
                        },{
                            "areasname":"凭祥市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "防城港市",
                    "areas":[
                        {
                            "areasname":"港口区"
                        },{
                            "areasname":"防城区"
                        },{
                            "areasname":"上思县"
                        },{
                            "areasname":"东兴市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "贵港市",
                    "areas":[
                        {
                            "areasname":"港北区"
                        },{
                            "areasname":"港南区"
                        },{
                            "areasname":"覃塘区"
                        },{
                            "areasname":"平南县"
                        },{
                            "areasname":"桂平市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "桂林市",
                    "areas":[
                        {
                            "areasname":"秀峰区"
                        },{
                            "areasname":"叠彩区"
                        },{
                            "areasname":"象山区"
                        },{
                            "areasname":"七星区"
                        },{
                            "areasname":"雁山区"
                        },{
                            "areasname":"阳朔县"
                        },{
                            "areasname":"临桂区"
                        },{
                            "areasname":"灵川县"
                        },{
                            "areasname":"全州县"
                        },{
                            "areasname":"兴安县"
                        },{
                            "areasname":"永福县"
                        },{
                            "areasname":"灌阳县"
                        },{
                            "areasname":"龙胜各族自治县"
                        },{
                            "areasname":"资源县"
                        },{
                            "areasname":"平乐县"
                        },{
                            "areasname":"荔浦县"
                        },{
                            "areasname":"恭城瑶族自治县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "河池市",
                    "areas":[
                        {
                            "areasname":"金城江区"
                        },{
                            "areasname":"南丹县"
                        },{
                            "areasname":"天峨县"
                        },{
                            "areasname":"凤山县"
                        },{
                            "areasname":"东兰县"
                        },{
                            "areasname":"罗城仫佬族自治县"
                        },{
                            "areasname":"环江毛南族自治县"
                        },{
                            "areasname":"巴马瑶族自治县"
                        },{
                            "areasname":"都安瑶族自治县"
                        },{
                            "areasname":"大化瑶族自治县"
                        },{
                            "areasname":"宜州区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "贺州市",
                    "areas":[
                        {
                            "areasname":"八步区"
                        },{
                            "areasname":"平桂区"
                        },{
                            "areasname":"昭平县"
                        },{
                            "areasname":"钟山县"
                        },{
                            "areasname":"富川瑶族自治县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "来宾市",
                    "areas":[
                        {
                            "areasname":"兴宾区"
                        },{
                            "areasname":"忻城县"
                        },{
                            "areasname":"象州县"
                        },{
                            "areasname":"武宣县"
                        },{
                            "areasname":"金秀瑶族自治县"
                        },{
                            "areasname":"合山市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "柳州市",
                    "areas":[
                        {
                            "areasname":"城中区"
                        },{
                            "areasname":"鱼峰区"
                        },{
                            "areasname":"柳南区"
                        },{
                            "areasname":"柳北区"
                        },{
                            "areasname":"柳江区"
                        },{
                            "areasname":"柳城县"
                        },{
                            "areasname":"鹿寨县"
                        },{
                            "areasname":"融安县"
                        },{
                            "areasname":"融水苗族自治县"
                        },{
                            "areasname":"三江侗族自治县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "南宁市",
                    "areas":[
                        {
                            "areasname":"兴宁区"
                        },{
                            "areasname":"青秀区"
                        },{
                            "areasname":"江南区"
                        },{
                            "areasname":"西乡塘区"
                        },{
                            "areasname":"良庆区"
                        },{
                            "areasname":"邕宁区"
                        },{
                            "areasname":"武鸣区"
                        },{
                            "areasname":"隆安县"
                        },{
                            "areasname":"马山县"
                        },{
                            "areasname":"上林县"
                        },{
                            "areasname":"宾阳县"
                        },{
                            "areasname":"横县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "钦州市",
                    "areas":[
                        {
                            "areasname":"钦南区"
                        },{
                            "areasname":"钦北区"
                        },{
                            "areasname":"灵山县"
                        },{
                            "areasname":"浦北县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "梧州市",
                    "areas":[
                        {
                            "areasname":"万秀区"
                        },{
                            "areasname":"长洲区"
                        },{
                            "areasname":"龙圩区"
                        },{
                            "areasname":"苍梧县"
                        },{
                            "areasname":"藤县"
                        },{
                            "areasname":"蒙山县"
                        },{
                            "areasname":"岑溪市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "玉林市",
                    "areas":[
                        {
                            "areasname":"玉州区"
                        },{
                            "areasname":"福绵区"
                        },{
                            "areasname":"容县"
                        },{
                            "areasname":"陆川县"
                        },{
                            "areasname":"博白县"
                        },{
                            "areasname":"兴业县"
                        },{
                            "areasname":"北流市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                }
            ],
            "provinceName": "广西壮族自治区"
        },
        {
            "citys": [
                {
                    "citysName": "安顺市",
                    "areas":[
                        {
                            "areasname":"西秀区"
                        },{
                            "areasname":"平坝区"
                        },{
                            "areasname":"普定县"
                        },{
                            "areasname":"镇宁布依族苗族自治县"
                        },{
                            "areasname":"关岭布依族苗族自治县"
                        },{
                            "areasname":"紫云苗族布依族自治县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "毕节市",
                    "areas":[
                        {
                            "areasname":"七星关区"
                        },{
                            "areasname":"大方县"
                        },{
                            "areasname":"黔西县"
                        },{
                            "areasname":"金沙县"
                        },{
                            "areasname":"织金县"
                        },{
                            "areasname":"纳雍县"
                        },{
                            "areasname":"威宁彝族回族苗族自治县"
                        },{
                            "areasname":"赫章县"
                        },{
                            "areasname":"其它区"
                        },
                    ]
                },
                {
                    "citysName": "贵阳市",
                    "areas":[
                        {
                            "areasname":"南明区"
                        },{
                            "areasname":"云岩区"
                        },{
                            "areasname":"花溪区"
                        },{
                            "areasname":"乌当区"
                        },{
                            "areasname":"白云区"
                        },{
                            "areasname":"开阳县"
                        },{
                            "areasname":"息烽县"
                        },{
                            "areasname":"修文县"
                        },{
                            "areasname":"观山湖区"
                        },{
                            "areasname":"清镇市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "六盘水市",
                    "areas":[
                        {
                            "areasname":"钟山区"
                        },{
                            "areasname":"六枝特区"
                        },{
                            "areasname":"水城县"
                        },{
                            "areasname":"盘州市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "黔东南苗族侗族自治州",
                    "areas":[
                        {
                            "areasname":"凯里市"
                        },{
                            "areasname":"黄平县"
                        },{
                            "areasname":"施秉县"
                        },{
                            "areasname":"三穗县"
                        },{
                            "areasname":"镇远县"
                        },{
                            "areasname":"岑巩县"
                        },{
                            "areasname":"天柱县"
                        },{
                            "areasname":"锦屏县"
                        },{
                            "areasname":"剑河县"
                        },{
                            "areasname":"台江县"
                        },{
                            "areasname":"黎平县"
                        },{
                            "areasname":"榕江县"
                        },{
                            "areasname":"从江县"
                        },{
                            "areasname":"雷山县"
                        },{
                            "areasname":"麻江县"
                        },{
                            "areasname":"丹寨县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "黔南布依族苗族自治州",
                    "areas":[
                        {
                            "areasname":"都匀市"
                        },{
                            "areasname":"福泉市"
                        },{
                            "areasname":"荔波县"
                        },{
                            "areasname":"贵定县"
                        },{
                            "areasname":"瓮安县"
                        },{
                            "areasname":"独山县"
                        },{
                            "areasname":"平塘县"
                        },{
                            "areasname":"罗甸县"
                        },{
                            "areasname":"长顺县"
                        },{
                            "areasname":"龙里县"
                        },{
                            "areasname":"惠水县"
                        },{
                            "areasname":"三都水族自治县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "黔西南布依族苗族自治州",
                    "areas":[
                        {
                            "areasname":"兴义市"
                        },{
                            "areasname":"兴仁县"
                        },{
                            "areasname":"普安县"
                        },{
                            "areasname":"晴隆县"
                        },{
                            "areasname":"贞丰县"
                        },{
                            "areasname":"望谟县"
                        },{
                            "areasname":"册亨县"
                        },{
                            "areasname":"安龙县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "铜仁市",
                    "areas":[
                        {
                            "areasname":"碧江区"
                        },{
                            "areasname":"江口县"
                        },{
                            "areasname":"玉屏侗族自治县"
                        },{
                            "areasname":"石阡县"
                        },{
                            "areasname":"思南县"
                        },{
                            "areasname":"印江土家族苗族自治县"
                        },{
                            "areasname":"德江县"
                        },{
                            "areasname":"沿河土家族自治县"
                        },{
                            "areasname":"松桃苗族自治县"
                        },{
                            "areasname":"万山区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "遵义市",
                    "areas":[
                        {
                            "areasname":"红花岗区"
                        },{
                            "areasname":"汇川区"
                        },{
                            "areasname":"播州区"
                        },{
                            "areasname":"桐梓县"
                        },{
                            "areasname":"绥阳县"
                        },{
                            "areasname":"正安县"
                        },{
                            "areasname":"道真仡佬族苗族自治县"
                        },{
                            "areasname":"务川仡佬族苗族自治县"
                        },{
                            "areasname":"凤冈县"
                        },{
                            "areasname":"湄潭县"
                        },{
                            "areasname":"余庆县"
                        },{
                            "areasname":"习水县"
                        },{
                            "areasname":"赤水市"
                        },{
                            "areasname":"仁怀市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
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
                    "citysName": "海口市",
                    "areas":[
                        {
                            "areasname":"秀英区"
                        },{
                            "areasname":"龙华区"
                        },{
                            "areasname":"琼山区"
                        },{
                            "areasname":"美兰区"
                        },{
                            "areasname":"其它区"
                        }
                    ]
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
                    "citysName": "三沙市",
                    "areas":[
                        {
                            "areasname":"西沙群岛"
                        },{
                            "areasname":"南沙群岛"
                        },{
                            "areasname":"中沙群岛的岛礁及其海域"
                        }
                    ]
                },
                {
                    "citysName": "三亚市",
                    "areas":[
                        {
                            "areasname":"海棠区"
                        },{
                            "areasname":"海棠区"
                        },{
                            "areasname":"天涯区"
                        },{
                            "areasname":"崖州区"
                        }
                    ]
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
                    "citysName": "保定市",
                    "areas":[
                        {
                            "areasname":"竞秀区"
                        },{
                            "areasname":"莲池区"
                        },{
                            "areasname":"满城区"
                        },{
                            "areasname":"清苑区"
                        },{
                            "areasname":"涞水县"
                        },{
                            "areasname":"阜平县"
                        },{
                            "areasname":"徐水区"
                        },{
                            "areasname":"定兴县"
                        },{
                            "areasname":"唐县"
                        },{
                            "areasname":"高阳县"
                        },{
                            "areasname":"容城县"
                        },{
                            "areasname":"涞源县"
                        },{
                            "areasname":"望都县"
                        },{
                            "areasname":"安新县"
                        },{
                            "areasname":"易县"
                        },{
                            "areasname":"曲阳县"
                        },{
                            "areasname":"蠡县"
                        },{
                            "areasname":"顺平县"
                        },{
                            "areasname":"博野县"
                        },{
                            "areasname":"雄县"
                        },{
                            "areasname":"涿州市"
                        },{
                            "areasname":"定州市"
                        },{
                            "areasname":"安国市"
                        },{
                            "areasname":"高碑店市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "沧州市",
                    "areas":[
                        {
                            "areasname":"新华区"
                        },{
                            "areasname":"运河区"
                        },{
                            "areasname":"沧县"
                        },{
                            "areasname":"青县"
                        },{
                            "areasname":"东光县"
                        },{
                            "areasname":"海兴县"
                        },{
                            "areasname":"盐山县"
                        },{
                            "areasname":"肃宁县"
                        },{
                            "areasname":"南皮县"
                        },{
                            "areasname":"吴桥县"
                        },{
                            "areasname":"献县"
                        },{
                            "areasname":"孟村回族自治县"
                        },{
                            "areasname":"泊头市"
                        },{
                            "areasname":"任丘市"
                        },{
                            "areasname":"黄骅市"
                        },{
                            "areasname":"河间市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "承德市",
                    "areas":[
                        {
                            "areasname":"双桥区"
                        },{
                            "areasname":"双滦区"
                        },{
                            "areasname":"鹰手营子矿区"
                        },{
                            "areasname":"承德县"
                        },{
                            "areasname":"兴隆县"
                        },{
                            "areasname":"平泉市"
                        },{
                            "areasname":"滦平县"
                        },{
                            "areasname":"隆化县"
                        },{
                            "areasname":"丰宁满族自治县"
                        },{
                            "areasname":"宽城满族自治县"
                        },{
                            "areasname":"围场满族蒙古族自治县"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "邯郸市",
                    "areas":[
                        {
                            "areasname":"邯山区"
                        },{
                            "areasname":"丛台区"
                        },{
                            "areasname":"复兴区"
                        },{
                            "areasname":"峰峰矿区"
                        },{
                            "areasname":"临漳县"
                        },{
                            "areasname":"成安县"
                        },{
                            "areasname":"大名县"
                        },{
                            "areasname":"涉县"
                        },{
                            "areasname":"磁县"
                        },{
                            "areasname":"肥乡区"
                        },{
                            "areasname":"永年区"
                        },{
                            "areasname":"邱县"
                        },{
                            "areasname":"鸡泽县"
                        },{
                            "areasname":"广平县"
                        },{
                            "areasname":"馆陶县"
                        },{
                            "areasname":"魏县"
                        },{
                            "areasname":"曲周县"
                        },{
                            "areasname":"武安市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "衡水市",
                    "areas":[
                        {
                            "areasname":"桃城区"
                        },{
                            "areasname":"枣强县"
                        },{
                            "areasname":"武邑县"
                        },{
                            "areasname":"武强县"
                        },{
                            "areasname":"饶阳县"
                        },{
                            "areasname":"安平县"
                        },{
                            "areasname":"景县"
                        },{
                            "areasname":"阜城县"
                        },{
                            "areasname":"冀州区"
                        },{
                            "areasname":"深州市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
                },
                {
                    "citysName": "廊坊市",
                    "areas":[
                        {
                            "areasname":"安次区"
                        },{
                            "areasname":"广阳区"
                        },{
                            "areasname":"固安县"
                        },{
                            "areasname":"永清县"
                        },{
                            "areasname":"香河县"
                        },{
                            "areasname":"大城县"
                        },{
                            "areasname":"文安县"
                        },{
                            "areasname":"大厂回族自治县"
                        },{
                            "areasname":"霸州市"
                        },{
                            "areasname":"三河市"
                        },{
                            "areasname":"其它区"
                        }
                    ]
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