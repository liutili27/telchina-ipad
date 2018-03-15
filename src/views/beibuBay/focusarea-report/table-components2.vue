<template>
	<div>
		<x-table :cell-bordered="false">
			<thead>
				<tr>
					<th>序号</th>
					<th>名称</th>
					<th>投资额</th>
					<th>产值</th>
					<th>项目进度</th>
				</tr>
			</thead>
			<tbody v-for="(item,index) in data">
				<tr name="trName1"  style="font-size: 14px;">
					<td>{{index+1}}</td>
					<td>{{item.name}}</td>
					<td>{{item.value}}</td>
					<td>{{item.earnings}}</td>
					<td>{{item.state}}</td>
				</tr>
			</tbody>
		</x-table>
	</div>
</template>

<script>
import { XTable } from 'vux';

export default {
    props: {
        "data": {
            type: Array,
            required: true,
            default: function() {
                return {};
            }
        }
    },
    components: {
        XTable
    },
    data: function() {
        return {
            tablelist: []
        };
    },
    methods: {
        addCSS() {
            var trList = document.getElementsByName("trName1");
            for (var i = 0; i < trList.length; i++) {
                if (i % 2 == 0) {
                    trList[i].style.backgroundColor = "#F2F2F2";
                }
            }
        }
    },
    mounted() {
        for (var i = 0; i < this.data.length; i++) {
            this.tablelist.push(this.data[i]);
        }
        this.$nextTick(function() {
            this.addCSS();
        });
    }
};
</script>

<style scoped>

</style>