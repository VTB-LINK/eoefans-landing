<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>
<template>
  <div class="Banner">
    <div class="banner-icon">TODO:EOE图标</div>
    <div class="banner-item">首页</div>
    <div class="banner-item">Web端</div>
  </div>
</template>
<style scoped lang="less">
.Banner {
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 40px;
  background-color: rgba(255, 255, 255, 0.25);
}
.banner-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100%;
  border: 1px black solid;
}
.banner-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 256px;
  height: 100%;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.9);
  border: 1px black solid;
}
</style>
