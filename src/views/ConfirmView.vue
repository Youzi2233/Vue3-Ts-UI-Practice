<template>
  <YButton size="small" type="primary" @click="handClick">点击打开弹窗</YButton>
</template>

<script setup lang="ts">
import YConfirm from '@/lib/YConfirm/YConfirm';
const handClick = () => {
  YConfirm({ title: '这是标题', text: '这是内容' })
    .then(() => {
      console.log('点击确认');
    })
    .catch(() => {
      console.log('点击取消');
    });
};
</script>

<style></style>
