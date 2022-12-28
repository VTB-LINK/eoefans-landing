<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Fullpage from 'fullpage.js'
import 'fullpage.js/dist/fullpage.min.css'
onMounted(() => {
  Object.freeze(
    new Fullpage('#fullpage', {
      normalScrollElements: ''
      // scrollOverflow: false,
      // loopHorizontal: false, // 水平滚动时是否loop
      // verticalCentered: false, // 水平滚动下的块是否垂直居中
      // controlArrows: false, // 水平滚动下是否显示左右切换箭头
      // credits: {
      //   enabled: false,
      //   label: ''
      // }
    })
  )
})
</script>
<template>
  <div id="fullpage">
    <div class="section">Some section1</div>
    <div class="section">Some section2</div>
    <div class="section">Some section3</div>
    <div class="section">Some section4</div>
  </div>
</template>
<style scoped lang="less">
.index {
}
</style>
