<template>
  <div class="ButtonView">
    <h3 class="title">默认：</h3>
    <div class="showPrimary">
      <YButton size="middle" type="primary">主题</YButton>
    </div>
    <h3 class="title">尺寸：</h3>
    <div class="showSize">
      <YButton size="mini" type="primary">mini</YButton>
      <YButton size="small" type="primary">small</YButton>
      <YButton size="middle" type="primary">middle</YButton>
      <YButton size="large" type="primary">large</YButton>
    </div>
    <h3 class="title">类型：</h3>
    <div class="showType">
      <YButton size="small" type="primary">primary</YButton>
      <YButton size="small" type="default">default</YButton>
      <YButton size="small" type="plain">plain</YButton>
      <YButton size="small" type="gray">gray</YButton>
    </div>
  </div>
</template>

<style lang="less" scoped>
// @media (min-width: 1024px) {
//   .ButtonView {
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//   }
// }
.title {
  margin-top: 10px;
  color: white;
  font-size: 16px;
}

.showSize,
.showType {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 650px;
}
</style>
