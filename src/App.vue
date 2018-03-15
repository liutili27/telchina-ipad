<template>
<div id="app" class="app-main">
    <!-- 标题栏 -->
    <flexbox class="title-box">
        <flexbox-item :span="1">
            <i class="iconfont icon-weibiaoti15" :class="{topIconSelected: showPopup}" style="padding: 12px 20px; font-size: 2.5vw;" @click="iconClick"></i>
        </flexbox-item>
        <flexbox-item>
            <div class="tc top-title-font">
                广西政务一张图
                <span v-if="$route.name != 'home'">
                    <span> - {{ topName }}</span>
                </span>
            </div>
        </flexbox-item>
        <flexbox-item :span="1" style="text-align: right;"></flexbox-item>
    </flexbox>

    <!-- 右侧报表弹窗 -->
    <popup v-model="showRightPopup" position="right" width="100%" :popup-style="leftMenuStyle" v-if="formUrl">
        <router-view :name="formUrl" ref="reportView"></router-view>
        <i class="iconfont icon-guanbi right-pop-close" @click="showRightPopup = false"></i>
    </popup>

    <!-- 主要内容区域 -->
    <router-view ref="mainView" />

    <!-- 页面加载进度图标 -->
    <i v-show="isLoading" class="fa fa-spinner fa-pulse fa-3x fa-fw loadingIcon"></i>

    <!-- 报表入口图标 -->
    <div class="formsIconDiv" v-if="$route.name != 'home' && formUrl" @click="showRightReport">
        <i class="iconfont icon-baobiao2 formsIcon"></i>
    </div>

    <!-- 左侧导航 -->
    <flexbox :gutter="0" orient="vertical" class="leftMenu" v-if="$route.name != 'home'">
        <flexbox-item v-for="(item, lindex) in leftMenu" :key="lindex">
            <div class="leftMenuItem" :class="{ leftSelected: item.isSelected}" 
                @click="leftClick(item, lindex)">
                {{ item.name }}
            </div>
        </flexbox-item>
    </flexbox>

    <!-- 底部导航 -->
    <div class="bottomMenu" v-if="$route.name != 'home' && bottomMenu.length > 1">
        <div v-for="(item, bindex) in bottomMenu" :key="bindex">
            <bottom-button v-if="item.isSelected" color="#00ffcc" @click="bottomClick(item, bindex)">{{ item.name }}</bottom-button>

            <bottom-button v-else color="#ffffff" @click="bottomClick(item, bindex)">{{ item.name }}</bottom-button>
        </div>
    </div>

    <!-- 下拉主菜单弹窗 -->
    <popup v-if="mainMenu.length > 0" v-model="showPopup" position="left" width="28vw" :popup-style="mainMenuStyle">
        <div class="main-menu-text main-menu-home" :class="{mainMenuSelected: $route.name == 'home'}" @click="jumpToIndex">
            <i class="iconfont icon-iconfonthome0 pdr10" style="font-size: 2.5vw; color: rgb(7, 189, 255);"></i> 首页
        </div>
        <flexbox v-for="(citem, cindex) in classify" :key="cindex" orient="vertical" :class="{mainClassifyBorder: cindex == 0}">
            <div class="main-classify-text">{{citem}}</div>

            <flexbox style="padding-left: 3vw; height: 9vh;" :class="{mainMenuSelected: item.isSelected  && $route.name != 'home'}" @click.native="mainClick(item, mindex)"
                v-for="(item, mindex) in mainMenu" v-if="item.classify == citem && item.url" :key="mindex">
                <flexbox-item :span="1">
                    <i class="iconfont" :class="item.icon" style="font-size: 2.8vw; color: rgb(7, 189, 255);"></i>
                </flexbox-item>
                <flexbox-item :span="11" class="main-menu-text" v-if="item.subTitle">
                    <flexbox orient="vertical" :gutter="5">
                        <flexbox-item>{{item.name}}</flexbox-item>
                        <flexbox-item>({{item.subTitle}})</flexbox-item>
                    </flexbox>
                </flexbox-item>
                <flexbox-item :span="11" class="main-menu-text" v-else>{{item.name}}</flexbox-item>
            </flexbox>

            <flexbox style="padding-left: 3vw; height: 6.5vh;">
                <flexbox-item :span="1"></flexbox-item>
                <flexbox-item :span="11" class="main-menu-text" style="font-size: 1.3vw;">更多单位对接中...</flexbox-item>
            </flexbox>
        </flexbox>
    </popup>
</div>
</template>

<script>
import { Flexbox, FlexboxItem, Popup } from 'vux';
import { mapState } from 'vuex';
import bottomButton from '@/components/bottomButton';

export default {
    name: 'App',
    data() {
        return {
            flexGutter: 20,
            showPopup: false,
            showMark: false,
            showRightPopup: false,
            classify: ['专题应用', '地市应用'],
            mainMenuStyle: {
                top: '50px',
                height: 'calc(100% - 50px)',
                overflowX: 'hidden',
                overflowY: 'auto',
                backgroundColor: 'rgb(19, 75, 153)'
            },
            leftMenuStyle: {
                top: '50px',
                height: 'calc(100% - 50px)',
                overflowX: 'hidden',
                overflowY: 'hidden'
            }
        };
    },
    components: {
        Flexbox,
        FlexboxItem,
        Popup,
        bottomButton
    },
    computed: {
        ...mapState({
            isLoading: state => state.app.isLoading,
            mainMenu: state => state.app.mainMenu,
            mainIndex: state => state.app.mainIndex,
            leftMenu: state => state.app.currentLeftMenu,
            bottomMenu: state => state.app.currentBottomMenu,
            bottomIndex: state => state.app.bottomIndex
        }),
        topName() {
            return this.mainMenu[this.mainIndex].name;
        },
        formUrl() {
            let currentBottom = this.bottomMenu[this.bottomIndex];
            if (currentBottom) {
                let url = currentBottom.formUrl;
                if (url) {
                    return url;
                } else {
                    return '';
                }
            } else {
                return '';
            }
        }
    },
    methods: {
        iconClick() {
            this.showPopup = !this.showPopup;
            if (this.showRightPopup) {
                this.showRightPopup = false;
            }
        },
        jumpToIndex() {
            if (this.$route.name == 'home') {
                return;
            }
            this.$router.push({path: '/'});
            this.showPopup = false;
            if (this.showRightPopup) {
                this.showRightPopup = false;
            }
        },
        mainClick(item, index) {
            if (this.isLoading) {
                return;
            }
            this.showPopup = false;
            if (this.showRightPopup) {
                this.showRightPopup = false;
            }
            this.$store.commit('updateMainMenu', index);
            if (item.type == 'url') {
                this.$store.commit('updateLoadingStatus', { isLoading: true });
                setTimeout(() => {
                    this.$store.commit('updateLoadingStatus', { isLoading: false });
                    if (item.url && item.url != '') {
                        this.$router.replace({
                            path: '/' + item.url
                        });
                    }
                }, 30);
            }
            if (item.type == "method") {
                if (this.$refs.mainView.changeMainMenu) {
                    this.$refs.mainView.changeMainMenu(item, index);
                }
            }
        },
        leftClick(item, index) {
            this.$store.commit('updateLeftMenu', index);

            // 各页面重写changeMenu方法实现左侧菜单点击事件
            if (item.type == "method") {
                if (this.$refs.mainView.changeMenu) {
                    this.$refs.mainView.changeMenu(item, index);
                }
            }
        },
        bottomClick(item, index) {
            if (this.isLoading) {
                return;
            }
            this.$store.commit('updateBottomMenu', {
                type: item.type,
                index: index
            });

            if (item.type == 'url') {
                this.$store.commit('updateLoadingStatus', { isLoading: true });
                setTimeout(() => {
                    if (item.url && item.url != '') {
                        this.$router.replace({
                            path: '/' + item.url
                        });
                    }
                    this.$store.commit('updateLoadingStatus', { isLoading: false });
                }, 30);
            }
            // 各页面重写changeBottomMenu方法实现底部菜单点击事件
            if (item.type == "method") {
                if (this.$refs.mainView.changeBottomMenu) {
                    this.$refs.mainView.changeBottomMenu(item, index);
                }
            }
        },
        // 打开弹窗类报表页面触发的方法，重写reportReady
        showRightReport() {
            this.showRightPopup = true;
            if (this.$refs.reportView.reportReady) {
                this.$refs.reportView.reportReady();
            }
        }
    },
    created() {
        this.$store.commit('initialMenu');
    }
};
</script>

<style>
html,
body {
    width: 100%;
    height: 100%;
    background: #ffffff;
    overflow: hidden;
    padding: 0;
    margin: 0;
}

.app-main {
    width: 100%;
    height: 100%;
    position: relative;
}

.vux-popup-mask {
    top: 50px!important;
    height: calc(100% - 50px)!important;
}
</style>
<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
    position: relative;
}

.title-box {
    background: url('./assets/title-background.png') no-repeat;
    background-size: cover;
    color: #ffffff;
    height: 50px;
}

.tc {
    text-align: center;
}

.pdr10 {
    padding-right: 10px;
}

.pdl20 {
    padding-left: 20px;
}

.mainMenuSelected {
    background-color: rgb(15, 61, 125);
    color: #ffffff;
}

.mainClassifyBorder {
    border-bottom: 1px solid rgb(64, 118, 208);
}

.leftMenu {
    position: absolute;
    top: 50%;
    left: 20px;
    width: 19vw;
    transform: translateY(-50%);
    background-color: rgba(0, 255, 204, 0.4);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 5px 5px 10px rgba(0, 255, 204, 0.35);
}

.leftMenuItem {
    width: 19vw;
    height: 6vh;
    font-size: 1.4vw;
    color: #ffffff;
    text-align: center;
    line-height: 6vh;
}

.leftSelected {
    background-color: rgba(0, 255, 204, 0.2);
    color: #00ffcc;
}

.bottomMenu {
    position: absolute;
    display: flex;
    flex-direction: row;
    width: auto;
    left: 50%;
    bottom: 10px;
    /*width: 48vw;*/
    transform: translateX(-50%);
}
.loadingIcon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #fff;
}

.formsIconDiv {
    position: absolute;
    bottom: 24px;
    right: 24px;
    width: 8vw;
    height: 8vw;
    background-color: rgba(0, 255, 204, 0.8);
    border-radius: 100%;
    box-shadow: 0 0 24px #00ffcc;
}

.formsIcon {
    font-size: 5vw;
    color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    /*width: 5vw;
    height: 5vw;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);*/
}

.right-pop-close {
    z-index: 99999;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 2.5vw;
    color: rgba(255, 255, 255, 0.6);
    padding: 10px;
}

.top-title-font {
    color: #ffffff;
    font-size: 1.5vw;
    font-weight: bold;
}

.colorfff {
    color: #ffffff;
}
.main-classify-text {
    padding-left: 3vw;
    font-size: 1.5vw;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    color: rgb(7, 189, 255);
    font-weight: bold;
    height: 6.5vh;
    width: 28vw;
    line-height: 6.5vh;
}
.main-menu-home {
    padding-left: 1.5vw; 
    height: 9vh; 
    line-height: 9vh; 
    border-bottom: 1px solid rgb(64, 118, 208);
}
.main-menu-text {
    padding-left: 1.5vw;
    font-size: 1.5vw;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    color: #ffffff;
    font-weight: 400;
    /*
    height: 8.5vh;
    line-height: 8.5vh;
    width: 28vw;*/
}

.topIconSelected {
    color: rgba(255, 255, 255, .8);
}
</style>
