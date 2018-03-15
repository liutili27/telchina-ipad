<template>
	<div> 
        <x-button :style="styles" @click.native="_click">
            <slot></slot>
        </x-button>
	</div>
</template>

<script>
import {XButton} from 'vux';
import img from "@/assets/bottomBtnBack.png";
export default {
    props: {
        color: String
    },
    components: {
        XButton
    },
    data: function() {
        return {
        };
    },
    computed: {
        styles() {
            return {
                'font-family': 'Arial',
                'font-size': '1.5vw',
                'font-weight': 'bold',
                'position': 'relative',
                'width': '16vw',
                'background': 'url(' + img + ') no-repeat',
                'background-size': 'cover',
                'color': this.color
            };
        }
    },
    methods: {
        _click() {
            this.$emit('click');
        }
    }
}
</script>

<style scoped>
</style>