<!-- 报表表格组件 -->
<template>
    <div>
        <div align="center">
            <table class="tab" :style="{width:(clientWidth-50)+'px'}">
               <tr class="title" border="0" style="border-right: solid 1px #37a2da;">
                   <td border:none v-for="(item, index) in column" :key="index">{{item.title}}</td>
               </tr>
               <tr v-for="(item, index) in data" :key="index" >
                   <td v-for="(citem, cindex) in column" :key="cindex" >
                        <div :class="{'dark-cell':cindex==0}" class="normal-cell">
                           <div v-if="cindex==0&&item.isChild==true" style="margin-left:40px;">{{item[citem.key]}}</div>
                           <div  v-else-if="citem.render==null" :class="{'num-td':cindex!=0,'bold-font':item.bold}" >{{item[citem.key]}}</div>
                           <div v-else>
                               <renderCell :render="citem.render" :params="item"></renderCell>
                           </div>
                        </div>
                   </td>
               </tr>
            </table>
        </div>
    </div>
</template>
<script>
var renderCell = { // 自定义渲染单元格数据
    name: 'funRender',
    functional: true,
    props: {
        render: Function,
        params: null
    },
    render: (h, ctx) => {
        return ctx.props.render(h, ctx.props.params);
    }
};
export default {
    components: {renderCell},
    props: {
        data: {
            type: Array,
            default: function() {
                return [];
            }
        },
        column: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data() {
        return {
            clientHeight: 0,
            clientWidth: 0
        };
    },
    mounted() {
        this.getWitdhHeight();
        this.$nextTick(() => {
        });
    },
    methods: {
        getWitdhHeight() {
            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }
    }
};
</script>
<style scoped>
.tab{
    margin-top: 20px;
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
}

.tab td{
    height: 40px;
    border-bottom: solid 1px #C0C0C0;
    background-color: #fff;
    border-right: solid 1px #C0C0C0;
    border-left: solid 1px #C0C0C0;
}
.title td{
    background-color: #37a2da;
    border: none;
    color: #fff;
    font-weight: bold;
}
.num-td {
    text-align:right;
}
.bold-font {
    font-weight: 900;
}
.dark-cell {
    background: #F2F2F2;
}
.normal-cell {
    height: 40px;
    padding: 0 10px 0 10px;
    line-height: 40px;
}
</style>