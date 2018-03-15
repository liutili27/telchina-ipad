<template>
    <div>
        <div id="container1" style="height: 300px;width:468px"></div>
        <div style="position: relative;top: -250px;left:200px;width:68px">
            <i class="fa fa-caret-up" style="color: #e0620d; font-size: 60px;padding-top:8px"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {};
    },
    methods: {
        do(id, option) {
            var echarts = this.$echarts;
            var echar = echarts.init(document.getElementById(id));
            echar.setOption(option);
        },
        getoption() {
            var option = {
                series: [
                    {
                        type: 'pie',
                        radius: ['60%', '70%'],
                        avoidLabelOverlap: false,
                        startAngle: 20,
                        center: ['50%', '50%'],
                        label: {
                            normal: {
                                formatter: "{aa|行业增加值}\n{bb|增速}\n{cc|12.36}{dd|个百分点}",
                                show: true,
                                position: 'center',
                                rich: {
                                    aa: {
                                        color: '#333333',
                                        lineHeight: 28,
                                        fontSize: '18'
                                    },
                                    bb: {
                                        color: '#000099',
                                        lineHeight: 28,
                                        fontSize: '18',
                                        fontWeight: 'bold'
                                    },
                                    cc: {
                                        color: '#000099',
                                        lineHeight: 28,
                                        fontSize: '18',
                                        fontWeight: 'bold'
                                    },
                                    dd: {
                                        color: '#333333',
                                        lineHeight: 28,
                                        fontSize: '13'
                                    }
                                },
                                textStyle: {

                                    fontWeight: 'bold',
                                    fontFamily: 'Arial, Verdana, sans-serif',
                                    color: '#333333'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            { value: 65, name: '' },
                            { value: 40, name: '' }
                        ],

                        color: ['#1296db', '#e0620d']
                    }
                ]
            };
            return option;
        }
    },
    mounted() {
        this.do("container1", this.getoption());
    }
};
</script>
 <!-- -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>