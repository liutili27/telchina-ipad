<template>
	<div>
		<div v-for="item in datainfo" :key="item.id">
			<div style="color: white;font-size: 2vh;">{{item.name}}<br>{{item.total}}亿元</div>
			<legend-item>
				<div slot="left">增速</div>
				<div slot="right" style="font-weight: bold;color:#00CC00;"><i class="iconfont" name="bbb"> {{item.speedUp}}</i></div>
			</legend-item>
			<legend-item>
				<div slot="left">全区占比<br /></div>
				<div slot="right" style="font-weight: bold;color:#00CC00;">{{item.percent}}%</div>
			</legend-item>
		</div>
	</div>
</template>

<script>
import legendItem from '@/components/legend-item.vue';
export default {
    components: {
        legendItem
    },
    props: {
        "datainfo": {
            type: Array
        }
    },
    data: function() {
        return {
        };
    },
    mounted() {
        this.$nextTick(function() {
            this.setcolor();
        });
    },
    methods: {
        setcolor() {
            this.deleteIcon();
            this.$nextTick(function() {
                var list1 = document.getElementsByName("bbb");
                if (this.datainfo[0].speedUp < 0) {
                    list1[0].style.color = "#C23531";
                    list1[0].classList.add("icon-tubiaoxiajiangqushi");
                } else {
                    list1[0].style.color = "#00CC00";
                    list1[0].classList.add("icon-tubiaoshangshengqushi");
                }
                if (this.datainfo[1].speedUp < 0) {
                    list1[1].style.color = "#C23531";
                    list1[1].classList.add("icon-tubiaoxiajiangqushi");
                } else {
                    list1[1].style.color = "#00CC00";
                    list1[1].classList.add("icon-tubiaoshangshengqushi");
                }
            });
        },
        deleteIcon() {
            var list2 = document.getElementsByName("bbb");
            for (var i = 0; i < list2.length; i++) {
                list2[i].classList.remove("icon-tubiaoshangshengqushi", "icon-tubiaoxiajiangqushi");
            }
        }
    }
};
</script>

<style scoped="scoped">

</style>