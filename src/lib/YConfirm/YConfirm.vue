<template>
  <div class="y-confirm" :class="{ fade }">
    <div class="wrapper" :class="{ fade }">
      <div class="header">
        <h3>{{ title }}</h3>
        <a @click="cancel" href="javaScript:;" class="iconfont icon-close-new"></a>
      </div>
      <div class="body">
        <span>{{ text }}</span>
      </div>
      <div class="footer">
        <YButton @click="cancel" size="mini" type="gray">取消</YButton>
        <YButton @click="submit" size="mini" type="primary">确认</YButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import YButton from '../YButton/index.vue';
import { onMounted, ref } from 'vue';

export interface confirmProp {
  title: string;
  text: string;
  cancelCallback: Function;
  submitCallback: Function;
}
const props = withDefaults(defineProps<confirmProp>(), {
  title: '温馨提示',
});

const fade = ref(false);
onMounted(() => {
  // 过渡效果需要在元素创建完毕后延时一会加上才会触发
  setTimeout(() => {
    fade.value = true;
  }, 0);
});

// 取消
const cancel = () => {
  props.cancelCallback();
};
// 确认
const submit = () => {
  props.submitCallback();
};
</script>

<style lang="less" scoped>
@priceColor: #cf4444;
.y-confirm {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 8888;
  background: rgba(0, 0, 0, 0.5);
  &.fade {
    transition: all 0.4s;
    background: rgba(0, 0, 0, 0.5);
  }
  .wrapper {
    width: 400px;
    background: #fff;
    border-radius: 4px;
    position: absolute;
    color: #666;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    opacity: 0;
    &.fade {
      transition: all 0.4s;
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    .header,
    .footer {
      height: 50px;
      line-height: 50px;
      padding: 0 20px;
    }
    .body {
      padding: 20px 40px;
      font-size: 16px;
      .icon-warning {
        color: @priceColor;
        margin-right: 3px;
        font-size: 16px;
      }
    }
    .footer {
      text-align: right;
      .y-button {
        margin-left: 20px;
      }
    }
    .header {
      position: relative;
      h3 {
        font-weight: normal;
        font-size: 18px;
      }
      a {
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 20px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        color: #999;
        &:hover {
          color: #666;
        }
      }
    }
  }
}
</style>
