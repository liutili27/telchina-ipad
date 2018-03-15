import { menuData } from '@/components/menulist';
import {gxSixCityData} from '@/components/gxSixCityGeoJSON';
import {gxData} from '@/components/gxGeoJSON';
import {qinzhouData} from '@/components/qinzhouGeoJSON';
const app = {
    state: {
        message: 'appstore message',
        isLoading: false,
        mainMenu: [], // 下拉主菜单
        currentLeftMenu: [], // 当前页面左侧三级菜单
        currentBottomMenu: [], // 当前底部二级菜单
        mainIndex: 0,
        leftIndex: 0,
        bottomIndex: 0,
        gxSixCityData: gxSixCityData,
        gxData: gxData,
        qinzhouData: qinzhouData
    },
    mutations: {
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading;
        },
        // 更改主菜单
        updateMainMenu(state, index) {
            let oldMain = Object.assign(state.mainMenu);
            oldMain[state.mainIndex].isSelected = false;
            oldMain[index].isSelected = true;
            state.mainIndex = index;
            state.mainMenu = oldMain;
            // 切换页面之前重置前一个页面底部和左侧导航
            if (state.currentBottomMenu[state.bottomIndex]) {
                state.currentBottomMenu[state.bottomIndex].isSelected = false;
                state.bottomIndex = 0;
                state.currentBottomMenu[state.bottomIndex].isSelected = true;
                if (state.currentLeftMenu[state.leftIndex]) {
                    state.currentLeftMenu[state.leftIndex].isSelected = false;
                    state.leftIndex = 0;
                    state.currentLeftMenu[state.leftIndex].isSelected = true;
                } ;
            }

            if (menuData[state.mainIndex].children && menuData[state.mainIndex].children.length > 0) {
                state.currentBottomMenu = menuData[state.mainIndex].children;
                if (state.currentBottomMenu[state.bottomIndex].children) {
                    state.currentLeftMenu = state.currentBottomMenu[state.bottomIndex].children;
                } else {
                    state.currentLeftMenu = [];
                }
            } else {
                state.currentBottomMenu = [];
                state.currentLeftMenu = [];
            }
        },
        // 更改底部导航
        updateBottomMenu(state, obj) {
            let index = obj.index;
            let type = obj.type;
            if (index == state.bottomIndex) return;
            state.currentBottomMenu[state.bottomIndex].isSelected = false;
            state.currentBottomMenu[index].isSelected = true;
            state.bottomIndex = index;

            if (type != 'method') {
                if (state.currentLeftMenu[state.leftIndex]) {
                    state.currentLeftMenu[state.leftIndex].isSelected = false;
                    state.leftIndex = 0;
                    state.currentLeftMenu[state.leftIndex].isSelected = true;
                }
                // 重置左边菜单，底部菜单只执行方法时不重置
                if (state.currentBottomMenu[state.bottomIndex].children) {
                    state.currentLeftMenu = state.currentBottomMenu[state.bottomIndex].children;
                } else {
                    state.currentLeftMenu = [];
                }
            }
        },
        updateLeftMenu(state, index) {
            if (index == state.leftIndex) return;
            state.currentLeftMenu[state.leftIndex].isSelected = false;
            state.currentLeftMenu[index].isSelected = true;
            state.leftIndex = index;
        },
        initialMenu(state) {
            menuData.forEach((item, index) => {
                state.mainMenu.push(item);
            });
            let mainChildren = menuData[state.mainIndex].children;
            if (mainChildren && mainChildren.length > 0) {
                state.currentBottomMenu = mainChildren;
                if (state.currentBottomMenu[state.bottomIndex].children) {
                    state.currentLeftMenu = state.currentBottomMenu[state.bottomIndex].children;
                }
            }
        }
    }
};

export default app;
