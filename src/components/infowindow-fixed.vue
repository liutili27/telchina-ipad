<template>
  <div :class="{'hidden-infowindow-div':!show}" style="position:relative">
    <!-- <transition name="fade">
            <div v-if="show"> -->
    <div class="infowindow-div" :style="{left:divLeft+'px',top:divTop+'px',width:width+'px'}">
      <div class="left-top-corner"></div>
      <div class="right-top-corner"></div>
      <div class="info-content">
        <div class="ver-line-left"></div>
        <slot></slot>
        <div class="ver-line-right"></div>
      </div>
      <div class="left-bottom-corner"></div>
      <div class="right-bottom-corner"></div>
    </div>
    <!--        </div>
        </transition> -->
    <div :style="{position:'absolute','pointer-events':'none',left:'0px',top:'0px',height:clientHeight+'px',width:clientWidth+'px'}">
      <!-- 画布的大小设置比屏幕小一点，使它不会产生滚动条 -->
      <!-- <canvas  :id='canvasID' :width="clientWidth-20" :height="clientHeight-20" style="border:0px solid black;" ></canvas> -->
      <svg style="opacity:0.4" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <line :x1="pointLeft" :y1="pointTop" :x2="divLeft-60" :y2="divTop+30" style="stroke:rgb(0, 255, 204);stroke-width:2" />
        <line :x1="divLeft-60" :y1="divTop+30" :x2="divLeft" :y2="divTop+30" style="stroke:rgb(0, 255, 204);stroke-width:2" />
      </svg>
    </div>
  </div>
</template>
<script>
CanvasRenderingContext2D.prototype.clear = CanvasRenderingContext2D.prototype.clear || function(preserveTransform) {
    if (preserveTransform) {
        this.save();
        this.setTransform(1, 0, 0, 1, 0, 0);
    };
    this.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (preserveTransform) {
        this.restore();
    }
};
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
            default: false
        },
        infowindowWidth: {
            type: Number,
            default: -1
        }
    },
    data() {
        return {
            clientWidth: 0,
            clientHeight: 0,
            distanceX: 80, // 距离点的x轴距离，可能为正或者负
            distanceY: 200, // 距离点的y轴距离，可能为正或者负
            width: 0,
            height: 0,
            canvas: null,
            canvasID: 'connectline'

        };
    },
    mounted() {
        this.getWindowWidthAHeight();
        this.canvasID = this.canvasID + Math.random(); // 随机产生一个canvasID
    },
    created() {
        this.draw();
    },
    computed: {
        divLeft: {
            get: function() {
                this.getWindowWidthAHeight();
                if (this.show) {
                    return this.clientWidth - this.width - 25;
                }
                return this.clientWidth;
            },
            set: function(val) {}
        },
        divTop: function() {
            return 20;
        }
    },
    watch: {
        show() {
        // this.draw();
        }
        // pointLeft(){
        // this.draw();
        // },
        // pointTop(){
        // this.draw();
        // }
    },
    methods: {
        draw() {
        // 使用canvas太卡
        // this.$nextTick(() => {
        // this.drawLine(this.canvasID,[this.pointLeft,this.pointTop],[this.divLeft,this.divTop]);
        // });
        },
        drawLine(id, fromPoint, toPoint) {
            this.getOffsetHeight(); // 获取dom高度,需要在页面渲染之后
            this.canvas = document.getElementById(id);
            if (this.canvas === null) {
                return false;
            }
            var context = this.canvas.getContext("2d");
            context.clear();
            context.beginPath(); // 重新绘制一条路径，不加上原来的moveTo lineTo等动作
            context.strokeStyle = "rgb(0, 255, 204)";
            context.lineWidth = 3;
            context.lineCap = 'round'; // 圆角
            if (this.show) {
                context.globalAlpha = 0.3;
            } else {
                context.globalAlpha = 0;
            }
            // 实验证明第一次lineTo的时候和moveTo功能一样
            context.moveTo(fromPoint[0], fromPoint[1]);
            // 之后的lineTo会以上次lineTo的节点为开始
            var top = this.height == 0 ? 30 : this.height / 2;
            context.lineTo(toPoint[0] - 60, toPoint[1] + top);
            context.lineTo(toPoint[0], toPoint[1] + top);
            context.stroke();
        },
        getWindowWidthAHeight() {
            this.clientWidth = document.documentElement.clientWidth;
            this.clientHeight = document.documentElement.clientHeight;
            this.width = this.infowindowWidth == 1 ? this.clientWidth * 0.28 : this.infowindowWidth;
        },
        getOffsetHeight() {
            let cur = document.querySelectorAll("div[class='infowindow-div']")[0];
            this.height = cur.offsetHeight; // 窗口的实际高度
        }

    }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  /*transition: opacity 1s;*/
}

.hidden-infowindow-div {
  z-index: -9999;
}

.infowindow-div {
  z-index: 0;
  position: absolute;
  height: auto;
  min-height: 50px;
  background: inherit;
  background-color: rgba(0, 255, 204, 0.3);
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
  /*过度*/
  transition: left 0.6s;
  -moz-transition: left 0.6s ease;
  /* Firefox 4 */
  -webkit-transition: left 0.6s;
  /* Safari and Chrome */
  -o-transition: left 0.6s;
  /* Opera */
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
