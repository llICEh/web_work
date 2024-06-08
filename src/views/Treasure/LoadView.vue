<template>
  <div class="container">
    <div class="loader-container" v-if="loading">
      <div class="loader-bar" :style="{ width: progress + '%' }"></div>
    </div>

    <div class="content" v-else ref="content">
      <h1>乾隆仿古款青玉仿古铜纹出戟斜方斛</h1>
      <img
        v-if="!loading"
        src="../../assets/china_img/乾隆仿古款青玉仿古铜纹出戟斜方斛（玉石）.png"
        alt="Image"
      />
      <p v-if="!loading">Content loaded after progress reaches 100%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingPage',
  data() {
    return {
      progress: 0,
      loading: true
    }
  },
  mounted() {
    this.simulateLoading()
  },
  methods: {
    simulateLoading() {
      const loadingInterval = setInterval(() => {
        this.progress += 10
        if (this.progress >= 100) {
          clearInterval(loadingInterval)
          this.loading = false
          this.showContent() // Call the function to show the content
        }
      }, 100)
    },
    showContent() {
      // Define the function to show the content
      this.$refs.content.style.display = 'block' // Use $refs to access the content div
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
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #333; /* 设置页面背景色为灰黑色 */
  color: #fff; /* 设置文字颜色为白色 */
  font-family: 'Long Cang', cursive;
  font-weight: 400;
  font-size: 32px;
  font-style: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 让页面铺满整个视口高度 */
}

.loader-container {
  width: 70%; /* 设置进度条容器的宽度 */
  height: 10px; /* 设置进度条高度 */
  position: absolute;
  top: 50%; /* 将进度条容器的顶部置于页面中间 */
  left: 50%; /* 将进度条容器的左侧置于页面中间 */
  transform: translate(-50%, -50%); /* 将进度条容器水平和垂直居中 */
  background-color: #666; /* 设置进度条背景色 */
  z-index: 9999;
  opacity: 1; /* 设置初始透明度为1，显示 */
  transition: opacity 0.5s ease; /* 添加透明度变化的过渡效果 */
}

.loader-container.hidden {
  opacity: 0; /* 设置透明度为0，隐藏 */
  pointer-events: none; /* 禁用鼠标事件 */
}

.loader-bar {
  height: 100%;
  width: 0;
  background-color: #ffffff; /* 设置加载完成后的进度条颜色 */
  transition: width 0.5s; /* 添加宽度变化的过渡效果 */
}

.content {
  display: block; 
  padding: 20px;
  text-align: center;
}
.content img {
  width: 40%; /* 将图片的宽度设置为原始宽度的150% */
  height: auto; /* 自动计算高度以保持宽高比 */
}
.content {
  opacity: 0; /* 将内容初始不可见 */
  transform: translateY(20px); /* 将内容向下平移一定距离 */
  animation: slideFromBottom 0.5s ease forwards; /* 使用动画效果 */
}

@keyframes slideFromBottom {
  from {
    opacity: 0; /* 动画开始时不可见 */
    transform: translateY(20px); /* 从下方移动 */
  }
  to {
    opacity: 1; /* 动画结束时可见 */
    transform: translateY(0); /* 移动到原始位置 */
  }
}
</style>
