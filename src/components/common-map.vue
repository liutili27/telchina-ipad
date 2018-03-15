<template>
    <div class="map-back" :style="{position: 'relative',height: clientHeight+'px'}">
        <div id="echartBaseMapShadow" :style="{position:'absolute',top:'0px',left:'0px',width: '100%', height: clientHeight+'px'}"></div>
	    <div id="echartBaseMap" :style="{position:'absolute',top:'0px',left:'-0px',width: '100%', height: clientHeight+'px'}"></div>
        <slot></slot>
    </div>
</template>
<script>
// import {gxSixCityData} from '@/components/gxSixCityGeoJSON';
// import {gxData} from '@/components/gxGeoJSON';
export default {
    data() {
        return {
            chart: null,
            firstInit: false,
            clientHeight: 200,
            geo: {
                show: true,
                map: 'map',
                top: 10, // 地图距离顶部距离
                // left: '19%',
                // roam:'move',//地图是否可以左右移动
                itemStyle: {
                    normal: {
                        areaColor: '#2A3B55',
                        borderColor: '#1F5EB4',
                        borderWidth: 2,
                        borderType: 'solid'
                    },
                    emphasis: {
                        areaColor: '#2A3B55'
                    }
                },
                label: {
                    normal: {
                        color: '#eee',
                        show: this.showText,
                        fontSize: 10,
                        formatter: '{a}\n'
                    },
                    emphasis: {
                        color: '#eee',
                        show: this.showText,
                        fontSize: 10
                    }
                }
            },
            shadowChart: null
        };
    },
    props: {
        showText: {
            type: Boolean,
            default: true
        },
        mapType: {
            type: String,
            default: 'gxsixcity'
        }
    },
    methods: {
        getClientHeight() {
            // console.log(window.innerHeight);
            // console.log(document.documentElement.clientHeight);
            // console.log(document.body.clientHeight);
            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        },
        setOption(val) {
            val.geo = this.geo;
            if (this.mapType === 'gxsixcity') { // 六市的地图，将玉林和崇左两市显示不同的颜色方便区分
                val.geo.regions = this.getGeoDiffItemRegions();
            } else if (this.mapType === 'gx') {
                val.geo.regions = this.getGeoLabelOffsetRegions();
            }
            this.chart.setOption(val);
            val = null;
        },
        getGeoDiffItemRegions() { // 主要是为了六市的不同区域不同颜色
            var itemStyle = {
                normal: {
                    areaColor: '#284066'
                },
                emphasis: {
                    areaColor: '#284066'
                }
            };
            var regions = [{
                name: '崇左市',
                itemStyle: itemStyle
            },
            {
                name: '玉林市',
                itemStyle: itemStyle
            }];
            return regions;
        },
        getGeoLabelOffsetRegions() { // 主要是为了六市的不同区域不同颜色
            var label = {
                normal: {
                    formatter: '{a}\n\n\n'
                }
            };
            var regions = [{
                name: '钦州市',
                label: label
            },
            {
                name: '北海市',
                label: {
                    normal: {
                        formatter: '{a}\n'
                    }
                }
            },
            {
                name: '贵港市',
                label: {
                    normal: {
                        formatter: '{a}'
                    }
                }
            },
            {
                name: '防城港市',
                label: {
                    normal: {
                        formatter: '{a}',
                        padding: [0, 0, 0, -20]
                    }
                }
            }];
            return regions;
        },
        shadowMap() { // 底图阴影高光
            var dom = document.getElementById('echartBaseMapShadow');
            this.shadowChart = this.$echarts.init(dom);
            dom = null;
            var option = {};
            option.geo = JSON.parse(JSON.stringify(this.geo));
            option.geo.itemStyle = {
                normal: {
                    areaColor: '#2A3B55',
                    borderColor: '#367FDB',
                    borderWidth: 5,
                    borderType: 'solid',
                    shadowBlur: 50,
                    shadowColor: '#367FDB'
                },
                emphasis: {
                    areaColor: '#2A3B55'
                }
            };
            this.shadowChart.setOption(option);
            option = null;
        },
        mapHadReady() {
            var dom = document.getElementById('echartBaseMap');
            this.chart = this.$echarts.init(dom);
            dom = null;
            if (this.mapType === 'gxsixcity') {
                this.$echarts.registerMap('map', this.$store.state.app.gxSixCityData);
            } else if (this.mapType === 'gx') {
                this.$echarts.registerMap('map', this.$store.state.app.gxData);
            } else if (this.mapType === 'qinzhou') {
                this.$echarts.registerMap('map', this.$store.state.app.qinzhouData);
            }
            this.shadowMap();
            this.setOption({});
            this.$emit('ready', this.chart);
        }
    },
    mounted() {
        this.getClientHeight();
        this.$nextTick(() => {
            this.mapHadReady();
        });
    },
    destroyed() {
        if (this.chart) {
            this.chart.dispose();
        }
        if (this.shadowChart) {
            this.shadowChart.dispose();
        }
    }
};
</script>
<style scoped>
.map-back {
    background: url('../assets/map-background.jpg') no-repeat; 
    background-size: cover;
}
</style>