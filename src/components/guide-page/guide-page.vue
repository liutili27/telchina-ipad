<!-- 引导页 -->
<template>
<div class="out-div">
    <h1 style="color: #fff;">引导页组件</h1>
    <div class="formsIconDiv" @click="_click">
        <img src="../../assets/trend.png" class="formsIcon">
    </div>
</div>
</template>

<script>
export default {
    props: {
        page: String
    },
    data: function() {
        return {};
    },
    methods: {
        _click() {}
    }
};
</script>

<style scoped>
.out-div {
    position: relative;
    height: 100vh;
    background: url('../../assets/mainbg.png') no-repeat; 
    background-size: cover;
}
h1 {
    padding: 0;
    margin: 0;
}
.formsIconDiv {
    position: absolute;
    bottom: 100px;
    right: 50px;
    width: 8.5vw;
    height: 8.5vw;
    background-color: rgba(0, 255, 204, 0.8);
    border-radius: 100%;
    box-shadow: 0 0 10px #00ffcc;
}

.formsIcon {
    width: 5vw;
    height: 5vw;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>