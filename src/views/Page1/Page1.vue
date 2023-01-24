<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import one from '../../assets/img/1.jpg'
import two from '../../assets/img/2.jpg'
import three from '../../assets/img/3.jpg'

const swiperList = [
  {
    imgSrc: one,
    text: '下载地址1文案'
  },
  {
    imgSrc: two,
    text: '下载地址2文案'
  },
  {
    imgSrc: three,
    text: '下载地址3文案'
  }
]

const mainIntroduce = ref('E个魂的APP')
onMounted(() => {})

const download = () => {
  window.open('https://alist.vtb.link/EOEFANS/client')
}
</script>
<template>
  <div class="Page1">
    <div class="mask"></div>
    <!-- 文案介绍 -->
    <section class="introduce-section">
      <header>
        <div class="">EOEFANS</div>
        <div class="">APP</div>
      </header>
      <div class="main-text">
        这里是乐华娱乐旗下虚拟偶像女团[EOE组合]的非官方二创社区平台APP
        本APP非商业用途，仅提供EOE及相关社区服务。<br><br>
        不开心就来EOEFans！在这里，没有人知道你的身份。在EOEFans，没有标签，只有熟人。在EOEFans，尽情的释放自己。在EOEFans，遇见懂你的二创。 <br><br> 
        welcome to eoe world.     </div>
      <section class="button-section">
        <div class="download-button__base" @click="download">前往下载</div>
      </section>
    </section>
    <!-- 使用示例 -->
    <section class="example-section">
      <Swiper class="mySwiper" :loop="true" :autoplay="true">
        <SwiperSlide v-for="item in swiperList">
          <div class="swiper-container">
            <img :src="item.imgSrc" alt="" class="example-img" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  </div>
</template>
<style scoped lang="less">
.Page1 {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 200px;
  background-image: url('../../assets/img/home-bg.jpg');

  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    z-index: 0;
  }
}
.introduce-section {
  position: relative;
  z-index: 1;
  width: 500px;
  margin-top: 200px;
  header {
    color: #fff;
    font-size: 90px;
    text-align: center;
    animation: fadeIn 1s ease-in-out, translateUp 1s ease-in-out;
  }
  .main-text {
    font-size: 20px;
    color: #74727a;
    margin-top: 20px;
    animation: fadeIn 1s 0.5s ease-in-out both;
  }
}

.button-section {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 160px;
  animation: fadeIn 0.3s 1.8s ease-in-out both;
  .download-button__base {
    padding: 12px;
    margin: 0 15px;
    width: 200px;
    height: 60px;
    font-size: 18px;
    display: flex;
    color: #26152c;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 6px;
    cursor: pointer;
  }
}
.example-section {
  position: relative;
  z-index: 1;
  width: 300px;
  margin-top: 200px;
  animation: fadeIn 0.3s 1.5s linear both, translateLeft 0.3s 1.5s linear;
  .example-img {
    width: 100%;
  }
}

@media screen and (max-width: 1400px) {
  .Page1 {
    padding: 0px 40px 50px 40px;
  }
}
@media screen and (max-width: 750px) {
  .introduce-section {
    width: 100%;
  }
  .example-section {
    width: 100%;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes translateDown {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0%);
  }
}
@keyframes translateLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
