<template>
  <div class="container">
    <div class="image-container">
      <div class="img-container" v-for="item in items" :key="item.alt">
        <router-link :to="item.to">
          <img :src="item.src" :alt="item.alt" />
          <div class="text">{{ item.text }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CulturalRelicView',
  data() {
    return {
      items: [
        {
          src: '../src/assets/china_img/乾隆款松石绿地粉彩红蝠纹葫芦式三孔瓶（陶瓷）.png',
          alt: 'Image 1',
          to: '/china',
          text: '陶瓷'
        },
        {
          src: '../src/assets/china_img/乾隆仿古款青玉仿古铜纹出戟斜方斛（玉石）.png',
          alt: 'Image 2',
          to: '/china',
          text: '玉石'
        },
        {
          src: '../src/assets/china_img/景泰款掐丝珐琅缠枝莲纹尊（珐琅）.png',
          alt: 'Image 3',
          to: '/china',
          text: '珐琅'
        },
        {
          src: '../src/assets/china_img/凫形灯（铜器）.png',
          alt: 'Image 4',
          to: '/china',
          text: '铜器'
        },
        {
          src: '../src/assets/china_img/乾隆款红漆描金丹凤牡丹纹银里撇口碗（金银器）.png',
          alt: 'Image 5',
          to: '/china',
          text: '金银器'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(#c7b39a, #2d473c); /* 第一个颜色 */
  height: 100vh; /* 设置container高度为视口高度 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.9s ease;
}

.img-container {
  position: relative;
  flex: 1;
  transition: flex-grow 0.9s ease;
}

.img-container img {
  width: 100%;
  height: 100%;
  transition: transform 0.9s ease;
  transform-origin: center;
}

.img-container:hover {
  flex-grow: 2; /* Increase the flex-grow value to make the hovered image larger */
}

.img-container:not(:hover) {
  flex-grow: 0.8; /* Slightly reduce the size of non-hovered images */
}

.image-container:hover {
  transform: translateX(-50%) scale(0.9); /* Slightly scale down the whole container when any image is hovered */
}

.text {
  font-family: 'Ma Shan Zheng', cursive;
  font-weight: 400;
  font-style: normal;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  color: white;
  font-size: 100px;
  text-align: center;
}

.img-container:hover .text {
  opacity: 1;
}
</style>
