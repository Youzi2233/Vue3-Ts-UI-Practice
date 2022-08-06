<template>
  <button class="y-button ellipsis" :class="[size, type]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'YButton',
  props: {
    size: {
      type: String,
      default: 'middle',
    },
    type: {
      type: String,
      default: 'default',
    },
  },
});
</script>

<style lang="less" scoped>
// 主题
@yColor: #27ba9b;
.y-button {
  appearance: none;
  border: none;
  outline: none;
  background: #fff;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
}
.large {
  width: 240px;
  height: 50px;
  font-size: 16px;
}
.middle {
  width: 180px;
  height: 50px;
  font-size: 16px;
}
.small {
  width: 100px;
  height: 32px;
  font-size: 14px;
}
.mini {
  width: 60px;
  height: 32px;
  font-size: 14px;
}
.default {
  border-color: #e4e4e4;
  color: #666;
}
.primary {
  border-color: @yColor;
  background: @yColor;
  color: #fff;
  &:hover {
    background-color: #66bba8;
  }
}
.plain {
  border-color: @yColor;
  color: @yColor;
  background: lighten(@yColor, 50%);
}
.gray {
  border-color: #ccc;
  background: #ccc;
  color: #fff;
}
</style>
