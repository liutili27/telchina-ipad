<template>
<div class="legend-item">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="tirangle">
        &nbsp;
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {

        };
    }
};
</script>
<style scoped>
.legend-item {
    z-index: 0;
    position: relative;
    height: 3.8vh;
    width: auto;
    min-width: 15vw;
    /*width:17vw;*/
    background: #fff;
    display: flex;
    flex-direction: row;
    margin-top: 1vh;
    margin-bottom: 1vh;
    overflow: hidden;
    line-height: 3.8vh;
    font-size: 1.4vw;
}

.right {
    min-width: 30%;
    color: #4F485D;
    height: 100%;
    padding-left: 10px;
    text-align: center;
    font-weight: bold;
}

.left {
    min-width: 30%;
    color: #fff;
    background: #4F485D;
    height: 100%;
    padding-left: 5px;
    z-index: 1;
    text-align: center;
}

.tirangle {
    z-index: 0;
    padding: 0px;
    margin-top: 0px;
    height: 3.5vh;
    min-width: 3.5vh;
    margin-left: -18px;
    background: #4F485D;
    transform: scale(1, 2) rotate(45deg);
    -ms-transform: scale(1, 2) rotate(45deg);
    /* IE 9 */
    -moz-transform: scale(1, 2) rotate(45deg);
    /* Firefox */
    -webkit-transform: scale(1, 2) rotate(45deg);
    /* Safari 和 Chrome */
    -o-transform: scale(1, 2) rotate(45deg);
    /* Opera */
}
</style>