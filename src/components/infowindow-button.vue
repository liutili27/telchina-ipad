<template>
  <div>
    <button class="base" @click="click">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        click() {
            this.$emit('click');
        }
    }
};
</script>
<style scoped>
.base {
  width: 10vw;
  height: 3vw;
  background-color: rgba(0, 255, 204, 1);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  font-size: 1.3vw;
  margin-right: 10px;
  margin-top: 5px;
}

.base:hover {
  background-color: rgba(0, 255, 255, 1);
}

</style>
