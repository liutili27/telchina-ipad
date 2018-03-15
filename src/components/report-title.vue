<template>
    <div><p class="title">{{title}}</p></div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    name: 'name',
    data: function() {	
        return {}
    },
    methods: {}
}
</script>

<style scoped>
.title{
    /* border-left: solid 5px #3296db; */
    border-left: solid 5px #fff;
    padding-left: 10px;
    margin-left: 20px;
    /* color: #92d3ff; */
    color: #fff;
    font-weight: bold;
    font-size: 1.6vw;
}
</style>