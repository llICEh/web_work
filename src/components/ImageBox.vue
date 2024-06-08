<template>
  <div class="box" :style="{ backgroundColor: bgColor }">
    <router-link :to="link">
      <img :src="imageSrc" :alt="imageAlt" />
      <div class="mask">
        <div class="text">{{ text }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ImageBox',
  props: {
    link: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: false,
      default: '#fff'
    }
  }
}
</script>

<style scoped>
.box {
  width: 400px;
  height: 400px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.box img {
  max-width: 100%;
  max-height: 100%;
  transition: transform 0.3s ease;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.486);
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  transition: opacity 0.3s ease;
}
.box:hover {
  background-color: inherit; /* 保持背景色不变 */
}
a:hover,
a:active,
a:focus {
  background-color: inherit; /* 确保链接在任何状态下背景色一致 */
}
.box:hover .mask {
  opacity: 1;
}

.text {
  font-family: 'Ma Shan Zheng', cursive;
  font-weight: 200;
  font-style: normal;
  font-size: 30px;
  font-weight: bold;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.box:hover .text {
  opacity: 1;
}
</style>
