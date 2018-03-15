<template>
    <div>
        <div :style="{height:clientHeight + 'px',overflow:'scroll'}" id="scrollDiv" style=" position: relative;">
            <div :style="{height:clientHeight + 'px'}" style="background:#1ff;width:100%" :class="{active:true}">
                
            </div>
            <div :style="{height:clientHeight + 'px'}" style="background:#000;width:100%">
                
            </div>
            <div :style="{height:clientHeight + 'px'}" style="background:#fff;width:100%">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            clientHeight: 0,
            clientWidth: 0,
            lastScrollTop: 0,
            up: false, // 向上还是向下滚,
            currentIndex: 0
        };
    },
    mounted() {
        this.getWitdhHeight();
        this.$nextTick(function() {
           var scrollDiv = document.getElementById('scrollDiv');
              //绑定事件
              scrollDiv.addEventListener('scroll', () => {
                    var now = scrollDiv.scrollTop;
                    if (now >= this.lastScrollTop) {
                        this.up = false;
                    } else {
                        this.up = true;
                    }
                    this.lastScrollTop = scrollDiv.scrollTop;
                    if(this.up){
                        scrollDiv.scrollTop = 0;
                    }else{
                        scrollDiv.scrollTop = this.clientHeight*3
                    }
                    
              });

        })
       
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
.active {
    top: 0px!important;
    left: 0px!important;

}
</style>