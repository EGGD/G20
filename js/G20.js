/**
 * Created by admin on 16/8/1.
 */
var theme = {
    // 全图默认背景
    backgroundColor: '#1b1b1b',

    // 默认色板
    color: [
        '#c12e34','#e6b600','#0098d9','#2b821d',
        '#005eaa','#339ca8','#cda819','#32a487'
    ],

    // 图表标题
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#fff'          // 主标题文字颜色
        }
    },

    // 图例
    legend: {
        textStyle: {
            color: '#ccc'          // 图例文字颜色
        }
    },

    // 值域
    dataRange: {
        itemWidth: 15,
        color: ['#FFF808','#21BCF9'],
        textStyle: {
            color: '#ccc'          // 值域文字颜色
        }
    },

    toolbox: {
        color : ['#fff', '#fff', '#fff', '#fff'],
        effectiveColor : '#FE8463',
        disableColor: '#666'
    },

    // 提示框
    tooltip: {
        backgroundColor: 'rgba(250,250,250,0.8)',     // 提示背景颜色，默认为透明度为0.7的黑色
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
            lineStyle : {          // 直线指示器样式设置
                color: '#aaa'
            },
            crossStyle: {
                color: '#aaa'
            },
            shadowStyle : {                     // 阴影指示器样式设置
                color: 'rgba(200,200,200,0.2)'
            }
        },
        textStyle: {
            color: '#333'
        }
    },

    // 区域缩放控制器
    dataZoom: {
        dataBackgroundColor: '#555',            // 数据背景颜色
        fillerColor: 'rgba(200,200,200,0.2)',   // 填充颜色
        handleColor: '#eee'     // 手柄颜色
    },

    // 网格
    grid: {
        borderWidth: 0
    },

    // 类目轴
    categoryAxis: {
        axisLine: {            // 坐标轴线
            show: false
        },
        axisTick: {            // 坐标轴小标记
            show: false
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#ccc'
            }
        },
        splitLine: {           // 分隔线
            show: false
        }
    },

    // 数值型坐标轴默认参数
    valueAxis: {
        axisLine: {            // 坐标轴线
            show: false
        },
        axisTick: {            // 坐标轴小标记
            show: false
        },
        axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#ccc'
            }
        },
        splitLine: {           // 分隔线
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: ['#aaa'],
                type: 'dashed'
            }
        },
        splitArea: {           // 分隔区域
            show: false
        }
    },

    polar : {
        name : {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: '#ccc'
            }
        },
        axisLine: {            // 坐标轴线
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#ddd'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
            }
        },
        splitLine : {
            lineStyle : {
                color : '#ddd'
            }
        }
    },

    timeline : {
        label: {
            textStyle:{
                color: '#ccc'
            }
        },
        lineStyle : {
            color : '#aaa'
        },
        controlStyle : {
            normal : { color : '#fff'},
            emphasis : { color : '#FE8463'}
        },
        symbolSize : 3
    },

    // 折线图默认参数
    line: {
        smooth : true
    },

    // K线图默认参数
    k: {
        itemStyle: {
            normal: {
                color: '#FE8463',       // 阳线填充颜色
                color0: '#9BCA63',      // 阴线填充颜色
                lineStyle: {
                    width: 1,
                    color: '#FE8463',   // 阳线边框颜色
                    color0: '#9BCA63'   // 阴线边框颜色
                }
            }
        }
    },

    // 雷达图默认参数
    radar : {
        symbol: 'emptyCircle',    // 图形类型
        symbolSize:3
        //symbol: null,         // 拐点图形类型
        //symbolRotate : null,  // 图形旋转控制
    },

    pie: {
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor : 'rgba(255, 255, 255, 0.5)'
            },
            emphasis: {
                borderWidth: 1,
                borderColor : 'rgba(255, 255, 255, 1)'
            }
        }
    },

    map: {
        itemStyle: {
            normal: {
                borderColor:'rgba(255, 255, 255, 0.5)',
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        // color: '#ccc'
                    }
                }
            },
            emphasis: {                 // 也是选中样式
                areaStyle: {
                    color: '#FE8463'
                },
                label: {
                    textStyle: {
                        // color: 'ccc'
                    }
                }
            }
        }
    },

    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#fff'
                }
            }
        }
    },

    chord : {
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.2)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(228, 228, 228, 0.2)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.9)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(228, 228, 228, 0.9)'
                    }
                }
            }
        }
    },

    gauge : {
        axisLine: {            // 坐标轴线
            show: true,        // 默认显示，属性show控制显示与否
            lineStyle: {       // 属性lineStyle控制线条样式
                color: [[0.2, '#9BCA63'],[0.8, '#60C0DD'],[1, '#D7504B']],
                width: 3,
                shadowColor : '#fff', //默认透明
                shadowBlur: 10
            }
        },
        axisTick: {            // 坐标轴小标记
            length :15,        // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto',
                shadowColor : '#fff', //默认透明
                shadowBlur: 10
            }
        },
        axisLabel: {            // 坐标轴小标记
            textStyle: {       // 属性lineStyle控制线条样式
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 10
            }
        },
        splitLine: {           // 分隔线
            length :25,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                width:3,
                color: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 10
            }
        },
        pointer: {           // 分隔线
            shadowColor : '#fff', //默认透明
            shadowBlur: 5
        },
        title : {
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic',
                color: '#fff',
                shadowColor : '#fff', //默认透明
                shadowBlur: 10
            }
        },
        detail : {
            shadowColor : '#fff', //默认透明
            shadowBlur: 5,
            offsetCenter: [0, '50%'],       // x, y，单位px
            textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff'
            }
        }
    },

    funnel : {
        itemStyle: {
            normal: {
                borderColor : 'rgba(255, 255, 255, 0.5)',
                borderWidth: 1
            },
            emphasis: {
                borderColor : 'rgba(255, 255, 255, 1)',
                borderWidth: 1
            }
        }
    },

    textStyle: {
        fontFamily: '微软雅黑, Arial, Verdana, sans-serif'
    }
};
function left_zhu() {
    var Left_zhu=echarts.init(document.getElementById('Left_zhu'));
    $.getJSON("./json/Left_zhu.json",function(data){
        // console.log(data.已拦截);
        for (var i=0;i<data.已拦截.length;i++){
            $('#Left_zhu_table tr:nth-child(2) td')[i].innerHTML=data.已拦截[i];
            $('#Left_zhu_table tr:nth-child(3) td')[i].innerHTML=data.已关注[i]
        }
        option = {
            color: [
                '#4f81bd','#c0504d',
            ],
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                orient : 'vertical',
                x: '5',
                y:'203',
                data: ["已拦截", "已关注"],
                itemWidth:20,
                itemHeight:10,
                itemGap:6,
                textStyle: {
                    color: 'auto',
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : data.城市,
                    splitLine:{
                        show:false
                    },
                    axisLabel: {
                        how: true,
                        interval:0,
                        margin:2,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        how: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series : [

                {
                    name:'已拦截',
                    type:'bar',
                    stack: 'sum',
                    data:data.已拦截,
                    // itemStyle : dataStyle
                },
                {
                    name:'已关注',
                    type:'bar',
                    data:data.已关注,
                    // itemStyle : dataStyle
                }

            ]
        };
        Left_zhu.setOption(option);
    });
}
function left_zhe() {
    var Left_zhe=echarts.init(document.getElementById('left_zhe'));
    $.getJSON("./json/Left_zhe.json",function(data){
        option = {
            color: [
                '#c0504d','#4f81bd'
            ],
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c}"
            },
            legend: {
                x: "10px",
                y: "30px",
                data: ["累计均值", "总计"],
                textStyle: {
                    color: 'auto',
                }
            },
            grid: { // 控制图的大小，调整下面这些值就可以，
                x: 50,
                x2: 50,
                y2: 70,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
            },
            xAxis: [
                {
                    type: "category",
                    name: "x",
                    splitLine: {show: false},
                    data: data.时间,
                    axisLabel: {
                        how: true,
                        formatter:function(val) {
                            return val.split("").join("\n"); //横轴信息文字竖直显示
                        },
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    name: "y",
                    axisLabel: {
                        how: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],

            series: [
                {
                    name: "累计均值",
                    type: "line",
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ],
                    },
                    data: data.累计均值
                },
                {
                    name: "总计",
                    type: "line",
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data: data.总计

                }

            ]
        };
        Left_zhe.setOption(option);
    });
}
function right_bing() {
    var right_bing_one=echarts.init(document.getElementById('right_bing_one'));
    var right_bing_two=echarts.init(document.getElementById('right_bing_two'));
    // var value =[]; var label=[];var io=0;
    $.getJSON("./json/right_bing_one.json",function(data){
        // $.each(data,function(i){
        //     $.each(this,function (j,p,s) {
        //         label[io]=i;
        //         value[io]={'name':i,'value':p};
        //         io++;
        //     })
        // });
        var value=Object.keys(data).map(function (key){
            // console.log(key)
            return { name: key, value: data[key] };
        });

        var label=Object.keys(data).map(function (key){
            return { name: key };
        });
        // console.log(label,value);
        option = {
            color: [
                '#d05758','#243542','#508f98',
                '#c76d52','#80bd9f','#628f70',
                '#bd731b','#af9089','#647f96',
                '#b6c1c9','#3b464d','#4e8f59','#96b656'
            ],
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : 'left',
                y :'center',
                data:label,
                itemWidth:12,
                itemHeight:12,
                itemGap:5,
                textStyle: {
                    color: 'auto',
                }
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    center:['60%','50%'],
                    radius : '50%',
                    avoidLabelOverlap: false,
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'outer',
                                formatter : "{c}\n{d}%",
                                textStyle: {
                                    color: '#ffffff',
                                }
                            },
                            labelLine : {
                                show : true,
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                formatter : "{b}\n{d}%"
                            }
                        },

                    },
                    data:value
                }
            ]
        };

        right_bing_one.setOption(option);
    });
    $.getJSON("./json/right_bing_two.json",function(data){
        var value=Object.keys(data).map(function (key){
            return { name: key, value: data[key] };
        });
        var label=Object.keys(data).map(function (key){
            return { name: key };
        });
        option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: [
                '#b32125','#243542','#508f98',
                '#c76d52','#80bd9f','#628f70',
                '#bd731b','#af9089','#5c5d61',
                '#c08f51'
            ],
            legend: {
                orient : 'vertical',
                x : 'left',
                y :'20px',

                data:label,
                itemWidth:12,
                itemHeight:12,
                itemGap:5,
                textStyle: {
                    color: 'auto',
                }
            },
            series : [
                {
                    name:'全市采集比中数对比',
                    type:'pie',
                    center:['58%', '60%'],
                    radius : ['32%', '47%'],
                    avoidLabelOverlap: false,
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'outer',
                                formatter :"{c}\n{d}%",
                                textStyle: {
                                    color: '#ffffff',
                                }
                            },
                            labelLine : {
                                show : true,
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                formatter : "{b}\n{d}%"
                            }
                        },

                    },
                    data:value
                }
            ]
        };
        right_bing_two.setOption(option);
    });
}
function center_left(number) {
    if (number){
        var lujing_left="./json/center_left"+number+".json";
        var lujing_center="./json/center_center"+number+".json";
        var lujing_right="./json/center_right"+number+".json";
    }
    var center_left=echarts.init(document.getElementById('center_left'));
    var center_center=echarts.init(document.getElementById('center_center'));
    var center_right=echarts.init(document.getElementById('center_right'));
    $.getJSON(lujing_left,function(data){
        var value=Object.keys(data).map(function (key){
            return { name: key, value: data[key] };
        });
        var label=Object.keys(data).map(function (key){
            return { name: key };
        });
        var dataStyle = {
            normal : {
                label : {
                    position : 'outside',
                    formatter : "{d}%",
                    textStyle: {
                        color: '#ffffff',
                    }
                },
                labelLine : {
                    show : true,
                    length:5,
                    length2:0.8,
                },
            },
            emphasis : {
                label : {
                    show : true,
                    formatter : "{b}\n{d}%"
                }
            },
        };
        var placeHolderStyle = {
            normal : {
                color: 'rgba(0,0,0,0)',
                label: {show:false},
                labelLine: {show:false}
            },
            emphasis : {
                color: 'rgba(0,0,0,0)'
            }
        };

        option = {
            title: {
                textStyle : {
                    color : 'rgba(30,144,255,0.8)',
                    fontFamily : '微软雅黑',
                    fontSize : 25,
                    fontWeight : 'bolder',
                }
            },
            color: [
                '#7188ac','#e4ba64','#de9d49',
            ],
            tooltip : {
                show: true,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient : 'vertical',
                x : "center",
                y :"bottom",
                itemGap:5,
                data:label,
                formatter:'{name}',
                textStyle: {
                    color: 'auto',
                }
            },
            series : [
                {
                    name:'1',
                    type:'pie',
                    radius : [50, 60],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[2].value[0],
                            name:value[2].name
                        },
                        {
                            value:30,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'2',
                    type:'pie',
                    clockWise:false,
                    radius : [40, 50],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[1].value[0],
                            name:value[1].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'3',
                    type:'pie',
                    clockWise:true,
                    radius : [30, 40],
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'outside',
                                formatter : "{c}",
                                textStyle: {
                                    color: '#ffffff',
                                }
                            },
                            labelLine : {
                                show : false,
                                length:-35,
                                length2:2,
                            },
                        },
                        emphasis : {
                            label : {
                                show : true,
                                formatter : "{b}\n{d}%"
                            }
                        },
                    },
                    data:[
                        {
                            value:value[0].value[0],
                            name:value[0].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                }
            ]
        };


        center_left.setOption(option);
    });
    $.getJSON(lujing_center,function(data){
        var value=Object.keys(data).map(function (key){
            return { name: key, value: data[key] };
        });
        var label=Object.keys(data).map(function (key){
            return { name: key };
        });
        var dataStyle = {
            normal : {
                label : {
                    position : 'outside',
                    formatter : "{d}%",
                    textStyle: {
                        color: '#ffffff',
                    }
                },
                labelLine : {
                    show : true,
                    length:5,
                    length2:0.8,
                },
            },
            emphasis : {
                label : {
                    show : true,
                    formatter : "{b}\n{d}%"
                }
            },
        };
        var placeHolderStyle = {
            normal : {
                color: 'rgba(0,0,0,0)',
                label: {show:false},
                labelLine: {show:false}
            },
            emphasis : {
                color: 'rgba(0,0,0,0)'
            }
        };
        option = {
            title: {
                textStyle : {
                    color : 'rgba(30,144,255,0.8)',
                    fontFamily : '微软雅黑',
                    fontSize : 25,
                    fontWeight : 'bolder'
                }
            },
            color: [
                '#7188ac','#e4ba64','#de9d49',
            ],
            tooltip : {
                show: true,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            legend: {
                orient : 'vertical',
                x : "center",
                y :"bottom",
                itemGap:5,
                data:label,
                textStyle: {
                    color: 'auto',
                }
            },
            series : [
                {
                    name:'1',
                    type:'pie',
                    clockWise:true,
                    radius : [50, 60],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[2].value[0],
                            name:value[2].name
                        },
                        {
                            value:30,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'2',
                    type:'pie',
                    clockWise:false,
                    radius : [40, 50],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[1].value[0],
                            name:value[1].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'3',
                    type:'pie',
                    clockWise:true,
                    radius : [30, 40],
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'outside',
                                formatter : "{c}",
                                textStyle: {
                                    color: '#ffffff',
                                }
                            },
                            labelLine : {
                                show : false,
                                length:-35,
                                length2:2,
                            },
                        },
                        emphasis : {
                            label : {
                                show : true,
                                formatter : "{b}\n{d}%"
                            }
                        },
                    },
                    data:[
                        {
                            value:value[0].value[0],
                            name:value[0].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                }
            ]
        };


        center_center.setOption(option);
    });
    $.getJSON(lujing_right,function(data){
        var value=Object.keys(data).map(function (key){
            return { name: key, value: data[key] };
        });
        var label=Object.keys(data).map(function (key){
            return { name: key };
        });
        var dataStyle = {
            normal : {
                label : {
                    position : 'outside',
                    formatter : "{d}%",
                    textStyle: {
                        color: '#ffffff',
                    }
                },
                labelLine : {
                    show : true,
                    length:0.1,
                    length2:0.8,
                },
            },
            emphasis : {
                label : {
                    show : true,
                    formatter : "{b}\n{d}%"
                }
            },
        };
        var placeHolderStyle = {

            normal : {
                color: 'rgba(0,0,0,0)',
                label: {show:false},
                labelLine: {show:false}
            },
            emphasis : {
                color: 'rgba(0,0,0,0)'
            }
        };
        option = {
            title: {
                textStyle : {
                    color : 'rgba(30,144,255,0.8)',
                    fontFamily : '微软雅黑',
                    fontSize : 25,
                    fontWeight : 'bolder'
                }
            },
            tooltip : {
                show: true,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color: [
                '#7188ac','#e4ba64','#de9d49',
            ],
            legend: {
                orient : 'vertical',
                x : "center",
                y :"bottom",
                itemGap:5,
                data:label,
                textStyle: {
                    color: 'auto',
                }
            },
            series : [
                {
                    name:'1',
                    type:'pie',
                    clockWise:true,
                    radius : [50, 60],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[2].value[0],
                            name:value[2].name
                        },
                        {
                            value:30,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'2',
                    type:'pie',
                    clockWise:false,
                    radius : [40, 50],
                    itemStyle : dataStyle,
                    data:[
                        {
                            value:value[1].value[0],
                            name:value[1].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'3',
                    type:'pie',
                    clockWise:true,
                    radius : [30, 40],
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'outside',
                                formatter : "{c}",
                                textStyle: {
                                    color: '#ffffff',
                                }
                            },
                            labelLine : {
                                show : false,
                                length:-35,
                                length2:2,
                            },
                        },
                        emphasis : {
                            label : {
                                show : true,
                                formatter : "{b}\n{d}%"
                            }
                        },
                    },
                    data:[
                        {
                            value:value[0].value[0],
                            name:value[0].name
                        },
                        {
                            value:50,
                            name:'invisible',
                            itemStyle : placeHolderStyle
                        }
                    ]
                }
            ]
        };


        center_right.setOption(option);
    });
}
function center_right_ditu(number)  {
    var color=[];
    var ditu;
    if(number==1){
        color=['#FFF68F','#FFEFD5','#FFE4E1','#FFDEAD','#FFC1C1','#FFB90F','#FFA54F','#FF8C00','#FF7F50','#FF6EB4','#FF4500']
        ditu="./json/center_right_ditu"+number+".json"
        $(".wenzhoushi a span")[1].innerHTML=898102;
    }else if(number==2){
        color=shuijishu();
        ditu="./json/center_right_ditu"+number+".json"
        $(".wenzhoushi a span")[1].innerHTML=2933;
    }else if(number==3){
        color=shuijishu();
        ditu="./json/center_right_ditu"+number+".json"
        $(".wenzhoushi a span")[1].innerHTML=6781;
    }else if(number==4){
        color=shuijishu();
        ditu="./json/center_right_ditu"+number+".json"
        $(".wenzhoushi a span")[1].innerHTML=8274;
    }else if(number==5){
        color=shuijishu();
        ditu="./json/center_right_ditu"+number+".json"
        $(".wenzhoushi a span")[1].innerHTML=6444;
    }else if(number==6){
        color=shuijishu();
        ditu="./json/center_right_ditu"+number+".json"
        $(".wenzhoushi a span")[1].innerHTML=898;
    }
    // $('#quyu td *[style]')[0].style.backgroundColor=color[2];
    // $('#quyu td *[style]')[1].style.backgroundColor=color[3];
    // $('#quyu td *[style]')[2].style.backgroundColor=color[4];
    // $('#quyu td *[style]')[3].style.backgroundColor=color[5];
    // $('#quyu td *[style]')[4].style.backgroundColor=color[6];
    // $('#quyu td *[style]')[6].style.backgroundColor=color[1];
    // $('#quyu td *[style]')[7].style.backgroundColor=color[0];
    // $('#quyu td *[style]')[8].style.backgroundColor=color[7];
    // $('#quyu td *[style]')[9].style.backgroundColor=color[8];
    // $('#quyu td *[style]')[10].style.backgroundColor=color[10];
    // $('#quyu td *[style]')[11].style.backgroundColor=color[9];
    $.getJSON(ditu,function(data){
        // 自定义扩展图表类型：mapType = HK
        var center_right_ditu = echarts.init(document.getElementById('center_right_ditu'));
        var value=Object.keys(data).map(function (key){
            return { name: key, value: data[key] };
        });
        console.log(JSON.stringify(value))
        $.getJSON('./geoJson/wenzhou.json', function (wenzhouJson) {
            echarts.registerMap('wenzhou', wenzhouJson);
            center_right_ditu.setOption(
                option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a}<br/>{c} '
                    },
                    dataRange: {
                        min: 1,
                        max: 11,
                        x: '-500',
                        y: '-500',
                        realtime: false,
                        // color: ['#eb2424','#448aca','#fff45c','#738d2f']
                        color: ['#c99c35','#75c059','#c6736f','#706cb8','#c3c848','#5fc4c0','#81c556','#687eb8','#bac94c','#68ced2','#c9ac44']
                    },
                    series : [
                        {
                            name: '温州',
                            type: 'map',
                            mapType: 'wenzhou', // 自定义扩展图表类型
                            selectedMode : 'single',
                            itemStyle:{
                                normal:{
                                    label:{
                                        show:true,
                                        formatter : '{b}\n{c}',
                                        textStyle: {
                                            fontSize:14,
                                        }
                                    }
                                },
                                emphasis:{
                                    label:{
                                        show:true,
                                    }
                                }
                            },
                            data:value,
                        }
                    ]
            });
            center_right_ditu.on('click',function (params) {
                var city=params.name;
                console.log(city)
            })
        });
    });
}
function shuijishu() {
    var color =[];
    for (var i=0;i<11;i++){
        color.push(generateMixed(6));
    }
    function generateMixed(n) {
        var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        var res = "";
        for(var i = 0; i < n ; i ++) {
            var id = Math.ceil(Math.random()*15);
            res += chars[id];
        }
        return "#"+res;
    }
    return color;
}
function center_zhu() {
    var center_zhu=echarts.init(document.getElementById('center_zhu'));
    $.getJSON("./json/center_zhu.json",function(data){
        option = {
            tooltip : {
                trigger: 'item',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            color: [
                '#5b91ec','#d24a5e'
            ],
            title: {
                text: "旅客站点醒信息统计",
                x: "center",
                textStyle: {
                    fontSize: 30,
                    color: '#fff'
                }
            },
            grid: { // 控制图的大小，调整下面这些值就可以，
                x: 80,
                x2: 50,
                y2: 130,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
            },
            legend: {
                x: "100px",
                y: "30px",
                data:['当天','周均值'],
                textStyle: {
                    color: 'auto',
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : data.站点,
                    splitLine:{
                        show:false
                    },
                    axisLabel: {
                        how: true,
                        formatter:function(val) {
                            return val.split("").join("\n"); //横轴信息文字竖直显示
                        },
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        how: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'当天',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            label : {
                                show: true,
                                position: 'top',
                            }
                        }
                    },
                    data:data.当天,
                    // itemStyle : dataStyle
                },
                {
                    name:'周均值',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            label : {
                                show: true,
                                position: 'top',
                            }
                        }
                    },
                    data:data.周均值,
                    // itemStyle : dataStyle
                }
            ]
        };
        center_zhu.setOption(option);
    });
}
function right_center() {
    var right_center_left=echarts.init(document.getElementById('right_center_left'));
    $.getJSON("./json/right_bottom_left.json",function(left){
        var left_value=Object.keys(left).map(function (key){
            return { name: key, value: left[key] };
        });
        var left_label=Object.keys(left).map(function (key){
            return { name: key };
        });
        var lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };

        option = {
            radar: {
                indicator: [
                    {name: '国保', max: 100},
                    {name: '精神病人', max: 100},
                    {name: '极端行为人', max: 100},
                    {name: '经济类', max: 100},
                    {name: '公安口上述', max: 100},
                    {name: '非公安口', max: 100},
                    {name: '其他', max: 100}
                ],
                radius:"65%",
                shape: 'circle',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: '北京',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: left_value,
                    itemStyle: {
                        normal: {
                            color: '#F9713C'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.1
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter:function(params) {
                                return params.value;
                            }
                        }
                    },
                },
            ]
        };
        right_center_left.setOption(option);
    });
    var right_center_right=echarts.init(document.getElementById('right_center_right'));
    $.getJSON("./json/right_center_right.json",function(right){
        var right_value=Object.keys(right).map(function (key){
            return { name: key, value: right[key] };
        });
        var right_label=Object.keys(right).map(function (key){
            return { name: key };
        });
        var lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };
        option = {
            radar: {
                indicator: [
                    {name: '国保', max: 100},
                    {name: '精神病人', max: 100},
                    {name: '极端行为人', max: 100},
                    {name: '经济类', max: 100},
                    {name: '公安口上述', max: 100},
                    {name: '非公安口', max: 100},
                    {name: '其他', max: 100}
                ],
                shape: 'circle',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: '北京',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: right_value,
                    // symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#F9713C'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.1
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            formatter:function(params) {
                                return params.value;
                            }
                        }
                    },
                }
            ]
        };
        right_center_right.setOption(option);
    });

}
function left_bottom_left() {
    var left_bottom_left=echarts.init(document.getElementById('left_bottom_left'));
    $.getJSON("./json/left_bottom_left.json",function(left){
        var value=Object.keys(left).map(function (key){
            return { name: key, value: left[key] };
        });
        var label=Object.keys(left).map(function (key){
            return { name: key };
        });
        option = {
            color: [
                '#92d3b5','#556991','#2f4553','#51b1af','#d38264',
                '#af9089','#b32125','80cca6'
            ],
            legend: {
                orient: 'vertical',
                x: 'left',
                y:'bottom',
                data:label,
                textStyle: {
                    color: 'auto',
                },
                itemWidth:12,
                itemHeight:12,
                itemGap:5,
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series : [
                {
                    name:'访问来源',
                    type:'pie',
                    center:['60%','50%'],
                    radius : '50%',
                    itemStyle : {
                        normal : {
                            label : {
                                position : 'outer',
                                formatter :"{c}\n{d}%"
                            },
                            labelLine : {
                                show : true,
                            }
                        },
                        emphasis : {
                            label : {
                                show : true,
                                formatter :"{c}\n{d}%"
                            }
                        },
                    },
                    data:value
                }
            ]
        };

        left_bottom_left.setOption(option);

    });
}
function left_bottom_right() {
    var left_bottom_right=echarts.init(document.getElementById('left_bottom_right'));
    $.getJSON("./json/left_bottom_rightN.json",function(Nleft){
        var Nvalue=Object.keys(Nleft).map(function (key){
            return { name: key, value: Nleft[key] };
        });
        var Nlabel=Object.keys(Nleft).map(function (key){
            return { name: key };
        });
        $.getJSON("./json/left_bottom_rightW.json",function(Wleft) {
            var Wvalue = Object.keys(Wleft).map(function (key) {
                return {name: key, value: Wleft[key]};
            });
            var Wlabel = Object.keys(Wleft).map(function (key) {
                return {name: key};
            });
            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    y:'bottom',
                    data:Wlabel,
                    itemWidth:12,
                    itemHeight:12,
                    textStyle: {
                        color: 'auto',
                    },
                    itemGap:5,
                },
                calculable: false,
                series: [
                    // {
                    //     name: '访问来源',
                    //     type: 'pie',
                    //     selectedMode: 'single',
                    //     center:['60%','50%'],
                    //     radius: [0, 40],
                    //     avoidLabelOverlap: false,
                    //     // label: {
                    //     //     normal: {
                    //     //         show: false,
                    //     //         position: 'center'
                    //     //     },
                    //     //     emphasis: {
                    //     //         show: false,
                    //     //     }
                    //     // },
                    //     // labelLine: {
                    //     //     normal: {
                    //     //         show: false
                    //     //     }
                    //     // },
                    //     itemStyle : {
                    //         normal : {
                    //             label : {
                    //                 position : 'inner',
                    //                 formatter : function (params) {
                    //                     return (params.percent - 0).toFixed(0) + '%'
                    //                 },
                    //                 textStyle: {
                    //                     color: '#ffffff',
                    //                 }
                    //             },
                    //             labelLine : {
                    //                 show : true,
                    //             }
                    //         },
                    //         emphasis : {
                    //             label : {
                    //                 show : true,
                    //                 formatter : "{b}\n{d}%"
                    //             }
                    //         },
                    //
                    //     },
                    //     data: Nvalue
                    // },
                    {
                        name: '访问来源',
                        type: 'pie',
                        center:['58%','50%'],
                        radius: [45, 65],
                        avoidLabelOverlap: false,
                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'outer',
                                    formatter :"{c}\n{d}%",
                                    textStyle: {
                                        color: '#ffffff',
                                    }
                                },
                                labelLine : {
                                    show : true,
                                }
                            },
                            emphasis : {
                                label : {
                                    show : true,
                                    formatter : "{b}\n {c} {d}%"
                                }
                            },

                        },
                        data: Wvalue
                    }
                ]
            };
            left_bottom_right.setOption(option);
        });
    });
}
right_bing();
right_center();
center_zhu();
center_right_ditu(1);
center_left(1);
left_bottom_right();
left_bottom_left();
left_zhe();
left_zhu();
changkou();
function changkou() {
    center_right_ditu(1);
    center_left(1);
    $(".wenzhoushi").css("display","inherit");
    $('.tit')[4].innerHTML="常口"
}
function zhankou() {
    center_right_ditu(2);
    center_left(2);
    $('.tit')[4].innerHTML="暂口"
}
function nianfa() {
    center_right_ditu(3);
    center_left(3);
    $('.tit')[4].innerHTML="发案"
}
function nianjie() {
    center_right_ditu(4);
    center_left(4);
    $('.tit')[4].innerHTML="接警"
}
function changpo() {
    center_right_ditu(5);
    center_left(5);
    $('.tit')[4].innerHTML = "破案"
}
function niancai() {
    center_right_ditu(6);
    center_left(6);
    $('.tit')[4].innerHTML="强制措施数人数"
}
function  tongji() {
    console.log(1)
}
