<template>
  <div id="fullpage">
    <img src="@/assets/png1 (1).png" class="footer-image" alt="Footer Image" />
    <div class="section">
      <div id="videoBtn">
        <div class="navbar">
          <div class="title">《新千里江山图》，一笔一画都是中国</div>
        </div>
        <video ref="video1" autoplay loop id="video1" name="media">
          <source src="@/assets/《新千里江山图》，一笔一画都是中国.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="section">
      <div id="second-page-container">
        <div class="image-container">
          <img src="@/assets/s5bebc0f39fb2e.png" alt="Top Image" class="top-image" />
          <img src="@/assets/s5c65358abd83f.png" alt="Bottom Image" class="bottom-image" />
        </div>
        <div class="top-right-text">
          <p>
            仙鹤展翅，溅起的水波惊动了莲花绽放的花瓣，也惊动了千年时光的碧波，这是青铜时代的绝唱。
          </p>
          <p>三代遗风，滋其荣茂；玉振金声，养其蓊郁。坐听弦诵声，细嗅杏坛香。</p>
          <p>历经沉浮，休戚与共。然兴衰往复，皆不足为惧，于沉寂中孤守，于浮华中炼心。</p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="box">
          <div class="img-container small-1"></div>
          <div class="img-container large-1"></div>
        </div>
        <div class="box">
          <div class="img-container small-2"></div>
          <div class="img-container large-2"></div>
        </div>
        <div class="box">
          <div class="img-container small-3"></div>
          <div class="img-container large-3"></div>
        </div>
        <div class="box">
          <div class="img-container small-4"></div>
          <div class="img-container large-4"></div>
        </div>
        <div class="box">
          <div class="img-container small-5"></div>
          <div class="img-container large-5"></div>
        </div>
        <div class="box">
          <div class="img-container small-6"></div>
          <div class="img-container large-6"></div>
        </div>
        <div class="box">
          <div class="img-container small-7"></div>
          <div class="img-container large-7"></div>
        </div>
        <div class="box">
          <div class="img-container small-8"></div>
          <div class="img-container large-8"></div>
        </div>
        <div class="box">
          <div class="img-container small-9"></div>
          <div class="img-container large-9"></div>
        </div>
        <div class="box">
          <div class="img-container small-10"></div>
          <div class="img-container large-10"></div>
        </div>
        <div class="box">
          <div class="img-container small-11"></div>
          <div class="img-container large-11"></div>
        </div>
        <div class="box">
          <div class="img-container small-12"></div>
          <div class="img-container large-12"></div>
        </div>
      </div>
      <div class="center-boxes">
        <div class="center-box" @click="toPatternPage">
          <img src="@/assets/image/hw.png" alt="Image 1" class="box-image" />
          <p>花纹</p>
        </div>
        <div class="center-box" @click="toTreasurePage">
          <img src="@/assets/image/tc.png" alt="Image 2" class="box-image" />
          <p>器物</p>
        </div>
        <div class="center-box" @click="toMonsterPage">
          <img src="@/assets/image/yg.png" alt="Image 3" class="box-image" />
          <p>妖怪</p>
        </div>
        <div class="center-box" @click="toColorPage">
          <img src="@/assets/image/ys.png" alt="Image 4" class="box-image" />
          <p>颜色</p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="finalpage_container">
        <div class="text-box" v-show="showText">
          <p>此乃终页，观者谢过，愿君安康，岁岁平安</p>
        </div>
        <div class="rating-box" v-show="showRating">
          <el-rate v-model="value2" :colors="colors"> </el-rate>
        </div>
        <div style="margin-top: 20px">
          <CommentBox />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import fullpage from 'fullpage.js'
import 'fullpage.js/dist/fullpage.css' // 导入 CSS
import CommentBox from '@/components/CommentBox.vue'

export default {
  name: 'MainView',
  components: {
    CommentBox
  },
  data() {
    return {
      showText: false, // 控制文本显示的变量
      showRating: false, // 控制打分组件显示的变量
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    }
  },
  mounted() {
    this.initFullPage()
    this.getVideoTime()
    setTimeout(() => {
      this.showText = true // 延迟显示文本
    }, 500) // 延迟500毫秒

    setTimeout(() => {
      this.showRating = true // 在文本显示后延迟显示打分组件
    }, 2000) // 延迟2000毫秒
  },
  methods: {
    toPatternPage() {
      this.$router.push({
        path: '/pattern'
      })
    },
    toTreasurePage() {
      this.$router.push({
        path: '/treasure'
      })
    },
    toMonsterPage() {
      this.$router.push({
        path: '/monster'
      })
    },
    toColorPage() {
      this.$router.push({
        path: '/color'
      })
    },

    initFullPage() {
      this.$nextTick(() => {
        new fullpage('#fullpage', {
          scrollOverflow: true,
          afterLoad: (origin, destination) => {
            console.log('After load callback triggered:', origin, destination)
          }
        })
      })
    },
    playVideo() {
      const video = this.$refs.video1
      if (video) {
        video.play().catch((error) => {
          console.error('Video play error: ', error)
        })
      }
    },
    pauseVideo() {
      const video = this.$refs.video1
      if (video) {
        video.pause()
      }
    },
    getVideoTime() {
      const video = this.$refs.video1
      if (video) {
        video.addEventListener(
          'timeupdate',
          () => {
            console.log(`当前的时间点是${video.currentTime}, 视频长度是${video.duration}`)
            if (video.currentTime > 120) {
              video.pause()
              video.currentTime = 0
            }
          },
          false
        )
      }
    }
  }
}
</script>
<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#fullpag {
  width: 100vw;
}
.section {
  text-align: center;
  padding: 0;
  background-color: #f0f0f0;
  position: relative;
  height: 100vh;
  overflow: hidden;
}

#videoBtn {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

#video1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 标题样式 */
.navbar {
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8c3a3e;
  /* 几乎透明 */
  padding: 30px;
  z-index: 10;
  /* 确保标题在最上层 */
  font-size: 48px;
  color: white;
  font-family: FangSong;
  /* 设置标题文字颜色 */
}

.navbar .title {
  margin-left: 20px;
}

.navbar .date {
  right: 200px;
}

/* 固定底部图片样式 */
.footer-image {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: auto;
  z-index: 5;
}

/* 第二页样式 */
#second-page-container {
  display: flex;
  width: 100%;
  background-image: url('@/assets/s5bebbfc0524a4.jpg');
  background-size: cover;
  background-position: center;

  margin: 0;
  height: 100vh;
}

.finalpage_container {
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  background-image: url('@/assets/s5bebbfc0524a4.jpg');
  background-size: cover;
  background-position: center;
  margin: 0;
  height: 100vh;
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
}
.text-box {
  font-size: 96px;
  font-family: FangSong;
  /* transition: opacity 20s ease; 文本渐变效果 */
}

.rating-box {
  margin-top: 20px; /* 与文本保持一定距离 */

  /* transition: opacity 20s ease; 打分组件渐变效果 */
}
.el-button.is-plain {
  --el-button-hover-text-color: #3f5467;
  --el-button-hover-bg-color: var(--el-fill-color-blank);
  --el-button-hover-border-color: #3c5164;
}
.el-button {
  --el-button-active-border-color: #3e5366;
  font-size: 32px;
  height: 60px;
  width: 150px;
  border-radius: 20px;
}
.el-rate__icon {
  font-size: 80px !important; /* 增大字体大小 */
}
.image-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.top-image,
.bottom-image {
  position: absolute;
  animation-duration: 3s;
  /* 动画时间 */
  animation-timing-function: ease-out;
  /* 动画速度函数 */
  animation-fill-mode: forwards;
  /* 动画结束时停留在最后一帧 */
}

.el-dialog {
  --el-dialog-bg-color: #461d1f;
  background: var(--el-dialog-bg-color);
}
.rating-comment-box[data-v-f49b2b07] {
  border: 1px solid #dcdfe6;
  background-color: #dbd3d3;
}
.el-button--primary {
  --el-button-bg-color: #461d1f;
  --el-button-border-color: #461d1f;
  --el-button-active-color: #461d1f;
}
.top-image {
  width: 60%;
  /* 调整为需要的宽度 */
  top: -100%;
  /* 开始于视窗之上 */
  left: 0;
  /* 左上角对齐 */
  animation-name: slideDown;
  /* 下滑动画 */
}

.bottom-image {
  width: 60%;
  /* 调整为需要的宽度 */
  bottom: -100%;
  /* 开始于视窗之下 */
  right: 0;
  /* 右下角对齐 */
  animation-name: slideUp;
  /* 上滑动画 */
}

@keyframes slideDown {
  to {
    top: 0;
    /* 停在顶部 */
    left: 0;
    /* 左边界对齐 */
  }
}

@keyframes slideUp {
  to {
    bottom: 0;
    /* 停在底部 */
    right: 0;
    /* 右边界对齐 */
  }
}

/* 右上角文字样式 */
.top-right-text {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 30px;
  font-family: FangSong;
  color: white;
  padding: 10px;
  border-radius: 5px;

  width: 1000px;
  /* 调整宽度 */
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.box {
  width: 8.33%;
  /* 100% / 12 columns */
  margin: 0;
  background-color: #f0f0f0;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.img-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 确保图片完全填充容器 */
  display: none;
  /* 隐藏图片，避免图片显示在背景图片之上 */
}

/* 随机设置高度 */
.large-1 {
  height: 60%;
  background-image: url('@/assets/image/c22.png');
}

.small-1 {
  height: 40%;
  background-image: url('@/assets/image/c1.png');
}

.large-2 {
  height: 20%;
  background-image: url('@/assets/image/c23.png');
}

.small-2 {
  height: 80%;
  background-image: url('@/assets/image/c2.png');
}

.large-3 {
  height: 70%;
  background-image: url('@/assets/image/c24.png');
}

.small-3 {
  height: 30%;
  background-image: url('@/assets/image/c3.png');
}

.large-4 {
  height: 10%;
  background-image: url('@/assets/image/c25.png');
}

.small-4 {
  height: 90%;
  background-image: url('@/assets/image/c4.png');
}

.large-5 {
  height: 80%;
  background-image: url('@/assets/image/c26.png');
}

.small-5 {
  height: 20%;
  background-image: url('@/assets/image/c5.png');
}

.large-6 {
  height: 50%;
  background-image: url('@/assets/image/c27.png');
}

.small-6 {
  height: 50%;
  background-image: url('@/assets/image/c6.png');
}

.large-7 {
  height: 30%;
  background-image: url('@/assets/image/c28.png');
}

.small-7 {
  height: 70%;
  background-image: url('@/assets/image/c7.png');
}

.large-8 {
  height: 60%;
  background-image: url('@/assets/image/c29.png');
}

.small-8 {
  height: 40%;
  background-image: url('@/assets/image/c8.png');
}

.large-9 {
  height: 70%;
  background-image: url('@/assets/image/c30.png');
}

.small-9 {
  height: 30%;
  background-image: url('@/assets/image/c9.png');
}

.large-10 {
  height: 90%;
  background-image: url('@/assets/image/c31.png');
}

.small-10 {
  height: 10%;
  background-image: url('@/assets/image/c10.png');
}

.large-11 {
  height: 60%;
  background-image: url('@/assets/image/c32.png');
}

.small-11 {
  height: 40%;
  background-image: url('@/assets/image/c11.png');
}

.large-12 {
  height: 50%;
  background-image: url('@/assets/image/c33.png');
}

.small-12 {
  height: 50%;
  background-image: url('@/assets/image/c12.png');
}

/* 继续为其他列定义不同的高度 */

/* 让图片充满盒子 */
.img-container.large-1,
.img-container.large-2,
.img-container.large-3 {
  background-repeat: repeat;
  /* 重复背景图片填满盒子 */
}

.center-boxes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  width: 75%;
}

.center-box {
  font-family: Arial, sans-serif;
  position: relative;
  /* 让图片相对于盒子进行定位 */
  width: 20%;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation-duration: 3s;
  animation-fill-mode: forwards;

  text-align: center;
  font-size: 60px;
}

p {
  color: white;
}

/* 第1个盒子从上向下滑动 */
.center-box:nth-child(1) {
  animation-name: slide-down;
  background-image: url('../assets/image/b7.png');
}

/* 第2个盒子从下向上滑动 */
.center-box:nth-child(2) {
  animation-name: slide-up;
  background-image: url('../assets/image/b1.png');
}

/* 第3个盒子从上向下滑动 */
.center-box:nth-child(3) {
  animation-name: slide-down;
  background-image: url('../assets/image/b3.png');
}

/* 第4个盒子从下向上滑动 */
.center-box:nth-child(4) {
  animation-name: slide-up;
  background-image: url('../assets/image/b5.png');
}

.center-box.start-animation {
  animation:
    slide-down 3s forwards,
    slide-up 3s forwards;
}

/* 定义从上向下滑动的动画 */
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-150%);
    /* 调整初始位置，使其在上方 */
  }

  100% {
    opacity: 1;
    transform: translateY(20%);
  }
}

/* 定义从下向上滑动的动画 */
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(150%);
    /* 调整初始位置，使其在下方 */
  }

  100% {
    opacity: 1;
    transform: translateY(-20%);
  }
}

/* 图片的样式 */
.box-image {
  width: 100%;
  height: auto;
  /* 让图片按原比例调整高度 */
  object-fit: contain;
  /* 确保图片完全显示在盒子中 */
  object-position: top;
  /* 水平居中，垂直顶部对齐 */
}

.center-box a {
  text-decoration: none;
  /* 去除下划线 */
}
</style>
