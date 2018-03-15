<!-- 北部湾首页，加载综合表现，港口等页面 -->
<template>
	<div style="position:relative;">
		<common-map @ready="mapReady" :showText="false">
            <home ref="home"></home>
        </common-map>
	</div>
</template>
<script>
import commonMap from '@/components/common-map.vue';
import home from './home.1.vue'; //综合表现

export default {
    components: {
        commonMap,
        home
    },
    data() {
        return {
        };
    },
    methods: {
        mapReady(myChart) {
            this.$refs.home.mapReady(myChart);
        },
        changeMenu(item, index) {
            this.$refs.home.changeMenu(item, index);
        }
    }
};
</script>
<style scoped>

</style>
