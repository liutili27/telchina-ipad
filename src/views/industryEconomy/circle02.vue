<template>
    <div id="container1.1" style="height: 320px;width:468px">

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
                        center: ['50%', '50%'],
                        startAngle: 20,
                        label: {
                            normal: {
                                formatter: "{aa|重点产品产量}\n\n{bb|43265}",
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
                                    }
                                },
                                textStyle: {
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            { value: 99.5, name: '' },
                            { value: 0.5, name: '' }
                        ],
                        color: ['#1296db', 'white']
                    }
                ]
            };
            return option;
        }
    },
    mounted() {
        this.do("container1.1", this.getoption());
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>