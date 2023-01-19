<script setup lang="ts">
import { ref, reactive } from 'vue'

const mainIntroduce = ref('E个魂的APP')
</script>
<template>
  <div class="Page1">
    <div class="mask"></div>
    <section class="introduce-section">
      <div class="main-introduce">eoefans App</div>
      <div class="sub-introduce">
        "一个魂儿"系A-SOUL女子偶像团体粉丝名 本app非商业用途，仅提供A-soul及相关社区服务 官方B站：《A-SOUL_Official》、抖音：《五个魂儿啊》
      </div>
      <!-- TODO: 左边搞些介绍 随动？ -->
      <!-- TODO:搞个圆形的轮播图下载在右边 -->
      <div class="to-download">前往下载</div>
    </section>
  </div>
</template>
<style scoped lang="less">
.Page1 {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/img/home-bg.jpg');
  background-size: cover;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
.main-introduce {
  position: relative;
  font-size: 90px;
  color: #fff;
}
.sub-introduce {
  font-size: 20px;
  color: #74727a;
}
</style>
