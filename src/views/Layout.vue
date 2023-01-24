<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
// import Fullpage from 'fullpage.js'
// import 'fullpage.js/dist/fullpage.min.css'

import Page1 from './Page1/Page1.vue'
// import Page2 from './Page2/Page2.vue'
// import Banner from '../components/Banner.vue'

onMounted(() => {
  // Object.freeze(
  //   new Fullpage('#fullpage', {
  //     normalScrollElements: ''
  //     // scrollOverflow: false,
  //     // loopHorizontal: false, // 水平滚动时是否loop
  //     // verticalCentered: false, // 水平滚动下的块是否垂直居中
  //     // controlArrows: false, // 水平滚动下是否显示左右切换箭头
  //     // credits: {
  //     //   enabled: false,
  //     //   label: ''
  //     // }
  //   })
  // )
})
</script>
<template>
  <!-- <Banner></Banner> -->
  <div id="fullpage">
    <div class="section">
      <Page1></Page1>
    </div>
    <!-- <div class="section fp-auto-height">
      <Page2></Page2>
    </div> -->
  </div>
</template>
<style scoped lang="less">
.index {
}
</style>
