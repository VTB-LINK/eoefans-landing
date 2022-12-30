<script setup lang="ts">
import { ref, reactive } from 'vue'

const mainIntroduce = ref('介绍主文案')
</script>
<template>
  <div class="Page1">
    <section class="introduce-section">
      <div class="main-introduce" :data-word="mainIntroduce"></div>
      <!-- <div class="">
        "一个魂儿"系A-SOUL女子偶像团体粉丝名 本app非商业用途，仅提供A-soul及相关社区服务 官方B站：《A-SOUL_Official》、抖音：《五个魂儿啊》
      </div>
      <div class="to-download">前往下载</div> -->
    </section>
  </div>
</template>
<style scoped lang="less">
.Page1 {
  // border: 1px solid black;
  width: 100%;
  height: 100vh;
}
.main-introduce {
  position: relative;
  font-size: 30px;
  &::before {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: 0;
  }
  &::after {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: -3px;
  }
}
</style>
