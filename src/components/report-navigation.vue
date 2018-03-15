<!-- 报表导航栏组件 -->
<template>
    <div>
        <div class="navigtion-div">
            <div :style="{padding:'0 40px 0 20px',width:(clientWidth-60)+'px','font-size':'1.45vw'}">
                <ul>
                    <li v-for="(name,index) in data" :key="index">
                        <a :class="{hightlight:name==activeName}" @click="selected(name,index)">{{name}}</a>
                    </li>
                </ul>
             </div>
        </div>
        <div style="padding: 20px 8px;">
            
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Array,
            default: function() {
                return [];
            }
        },
        activeIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            activeName: '',
            clientHeight: 0,
            clientWidth: 0
        };
    },
    watch: {
        activeIndex() {
            if (this.data[this.activeIndex] != null) {
                this.activeName = this.data[this.activeIndex];
            }
        }
    },
    mounted() {
        if (this.data.length != 0) {
            this.activeName = this.data[0];
        }
        this.getWitdhHeight();
        this.$nextTick(() => {
        });
    },
    methods: {
        selected(name, index) {
            this.activeName = name;
            this.$emit("click", name, index);
        },
        getWitdhHeight() {
            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }
    }
};
</script>
<style scoped>
.navigtion-div {
    width: 100%;
    position: absolute;
    top: 5px;
    z-index: 999;
    /*background-color: #fff;*/
}
.navborder {
    border-bottom: 1px #1296DB solid;
    box-shadow: 0px 3px 5px #1296DB;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #fff;
}

li {
    float: left;
}

li a {
    display: block;
    color: #000;
    text-align: center;
    padding: 14px 8px;
    text-decoration: none;
}

li a:hover {
    background-color: #1296DB;
    color: #fff;
}
.hightlight {
    background-color: #1296DB;
    color: #fff;
}
</style>