<!-- 使用common-map组件示例1 -->
<template>
    <div style="width: 100%; height: 100%;">
        <common-map :showText="false"></common-map>
    </div>
</template>
<script>
import commonMap from '@/components/common-map.vue';

export default {
    components: {
        commonMap
    },
    data() {
        return {
            option: {}
        }
    },
	mounted(){
	},
	methods:{
	}
}
</script>
<style>
	
</style>