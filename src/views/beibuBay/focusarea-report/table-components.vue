<template>
	<div>
		<x-table :cell-bordered="false">
			<thead>
				<tr>
					<th>序号</th>
					<th>名称</th>
					<th>投资额</th>
				</tr>
			</thead>
			<tbody v-for="(item,index) in tablelist">
				<tr name="trName" style="font-size: 14px;">
					<td>{{index+1}}</td>
					<td>{{item.name}}</td>
					<td>{{item.value}}</td>
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
            var trList = document.getElementsByName("trName");
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