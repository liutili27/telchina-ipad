<!-- 页面标题 -->
<template>
<div style="text-align: center; color: white; font-size: 2.5vh; position: absolute; left: 0; right: 0; top: 1vh;">
    数据更新截止时间：{{year}}
</div>
</template>

<script>
export default {
    props: {
        year: {
            type: String,
            default: '2017年12月'
        }
    },
    data: function() {	
        return {
        }
    },
    methods: {}
}
</script>

<style scoped>

</style>