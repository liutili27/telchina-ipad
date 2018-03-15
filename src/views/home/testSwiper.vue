<template>
<!-- swiper -->
<swiper :options="swiperOption">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
</swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data() {
        return {
            swiperOption: {
                direction: 'vertical'
            }
        };
    },
    components: { swiper, swiperSlide }
};
</script>
<style scoped>
.swiper-slide {
    height: 100vh;
    background-color: red;
}
</style>