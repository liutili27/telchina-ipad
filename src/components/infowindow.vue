<template>
<div>
    <transition name="fade">
        <div v-if="show">
            <div class="infowindow-div" :style="{left:divLeft+'px',top:divTop+'px',width:width+'px',background:colorConfig.background}">
                <div class="left-top-corner" :style="{background:colorConfig.border}"></div>
                <div class="right-top-corner" :style="{background:colorConfig.border}"></div>
                <div class="right-top-close" @click="handleClose">
                    <center>
                        <i class="iconfont icon-guanbi close-icon" />
                    </center>
                </div>
                <div class="info-content">
                    <div class="ver-line-left" :style="{background:colorConfig.border}"></div>
                    <slot></slot>
                    <div class="ver-line-right" :style="{background:colorConfig.border}"></div>
                </div>
                <div class="left-bottom-corner" :style="{background:colorConfig.border}"></div>
                <div class="right-bottom-corner" :style="{background:colorConfig.border}"></div>

            </div>
            <div :style="{position:'absolute','pointer-events':'none',left:'0px',top:'0px',height:'100%',width:'100%',border:'2px'}">
                <svg style="opacity:0.5" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <polyline :points="polyline"
                        style="fill:none;stroke-width:3" :style="{stroke:colorConfig.connectLine}"/>
                    </svg>
            </div>
        </div>
    </transition>
</div>
</template>
<script>
export default {
    props: {
        pointLeft: {
            type: Number,
            default: 0
        },
        pointTop: {
            type: Number,
            default: 0
        },
        show: {
            type: Boolean,
            default: true
        },
        infowindowWidth: {
            type: null, // 具体的像素数字或者百分比
            default: -1
        },
        colorConfig: { // 改变窗口的颜色
            type: Object,
            default: function() {
                return {
                    connectLine: '#00FFCC', // 连接线
                    border: '#00FFCC', // 两边边框
                    background: 'rgba(12, 147, 158, 0.9)' // 底部
                };
            }
        }
    },
    data() {
        return {
            clientWidth: 0,
            clientHeight: 0,
            distanceX: 80, // 距离点的x轴距离，可能为正或者负
            distanceY: 200, // 距离点的y轴距离，可能为正或者负
            onTheRight: true,
            overTheTop: false,
            width: 0,
            height: 0
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.getWindowWidthAHeight();
        });
    },
    computed: {
        divLeft: function() {
            this.getWindowWidthAHeight();
            var left = this.pointLeft + this.distanceX + this.width;
            if (left >= this.clientWidth) { // 如果距离左边的距离已经大于屏幕的宽度，肯定要被档
                this.onTheRight = false;
                return this.pointLeft - this.distanceX - this.width; // 在左边出现
            }
            this.onTheRight = true;
            return this.pointLeft + this.distanceX;
        },
        divTop: function() {
            var top = this.pointTop - this.distanceY;
            if (top <= 100) {
                this.overTheTop = true;
                return this.pointTop;
            }
            if (this.pointTop > 200) { // 离顶部比较远，尽量往上移，防止被底部挡住
                this.overTheTop = false;
                return top - 100;
            }
            this.overTheTop = false;
            return top;
        },
        polyline: function() {
            var points = '';
            if (this.onTheRight == true) {
                points += this.pointLeft + "," + this.pointTop + " ";
                points += (this.divLeft - 40) + "," + (this.divTop + 25) + " ";
                points += this.divLeft + "," + (this.divTop + 25) + " ";
            }
            if (this.onTheRight == false) {
                points += this.pointLeft + "," + this.pointTop + " ";
                points += (this.divLeft + this.width + 40) + "," + (this.divTop + 25) + " ";
                points += (this.divLeft + this.width) + "," + (this.divTop + 25) + " ";
            }
            return points;
        }
    },
    methods: {
        getWindowWidthAHeight() {
            this.clientWidth = document.documentElement.clientWidth;
            this.clientHeight = document.documentElement.clientHeight;
            if (!isNaN(this.infowindowWidth)) { // 是个数字
                this.width = this.infowindowWidth == -1 ? this.clientWidth * 0.28 : this.infowindowWidth;
            } else {
                var re = /^\d+%$/;
                if (re.test(this.infowindowWidth)) {
                    // 是一个百分比
                    var nnn = this.infowindowWidth.replace("%", "");
                    if (!isNaN(nnn)) {
                        this.width = this.clientWidth * (nnn / 100);
                    }
                }
            }
        },
        handleClose() {
            this.$emit("close");
        }

    }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */

{
    opacity: 0;
}

.infowindow-div {
    z-index: 999;
    position: absolute;
    height: auto;
    min-height: 50px;
    background: inherit;
    background-color: rgba(12, 147, 158, 0.9);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(204, 204, 204, 0.3);
    border-radius: 24px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    line-height: 24px;
}

.ver-line-left {
    border-width: 0px;
    position: absolute;
    left: -2px;
    top: 0px;
    width: 4px;
    height: 100%;
    background: rgb(0, 255, 204);
}

.ver-line-right {
    border-width: 0px;
    position: absolute;
    right: -2px;
    top: 0px;
    width: 4px;
    height: 100%;
    background: rgb(0, 255, 204);
}

.left-top-corner {
    border-width: 0px;
    position: absolute;
    left: -5px;
    top: 4px;
    width: 25px;
    height: 4px;
    background: rgb(0, 255, 204);
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}

.right-top-corner {
    border-width: 0px;
    position: absolute;
    right: -5px;
    top: 4px;
    width: 25px;
    height: 4px;
    background: rgb(0, 255, 204);
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    transform: rotate(-135deg);
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}

.right-top-close {
    position: absolute;
    right: 5px;
    top: 4px;
    width: 4vw;
    height: 3vw;
    /*background: red;*/
    z-index: 1;
}

.close-icon {
    font-size: 2vw;
    color: #fff;
}

.close-icon:hover {
    color: #aaa;
}

.left-bottom-corner {
    border-width: 0px;
    position: absolute;
    left: -5px;
    bottom: 4px;
    width: 25px;
    height: 4px;
    background: rgb(0, 255, 204);
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    transform: rotate(-135deg);
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}

.right-bottom-corner {
    border-width: 0px;
    position: absolute;
    right: -5px;
    bottom: 4px;
    width: 25px;
    height: 4px;
    background: rgb(0, 255, 204);
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}

.info-content {
    padding: 0px 15px 0px 15px;
    color: #fff;
    position: relative;
    margin-top: 14px;
    margin-bottom: 14px;
    word-break: break-all;
    min-height: 40px;
    font-size: 1.4vw;
    line-height: 2.3vw;
}
</style>