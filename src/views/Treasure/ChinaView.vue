<template>
  <div class="container">
    <ImageBox
      v-for="(box, index) in boxes"
      :key="index"
      :link="box.link"
      :imageSrc="box.imageSrc"
      :imageAlt="box.imageAlt"
      :text="box.text"
      :bgColor="getBgColor(index)"
    />
  </div>
</template>

<script>
import ImageBox from '../../components/ImageBox.vue'

export default {
  name: 'ChinaView',
  components: {
    ImageBox
  },
  data() {
    return {
      boxes: [
        {
          link: '/load',
          imageSrc: '../src/assets/china_img/乾隆款画珐琅团花纹六方瓶（珐琅）.png',
          imageAlt: 'Image 1',
          text: '乾隆款团花纹六方瓶'
        },
        {
          link: '/load2',
          imageSrc: '../src/assets/china_img/光绪款粉彩云蝠纹赏瓶（陶瓷）.png',
          imageAlt: 'Image 2',
          text: '光绪款粉彩云蝠纹赏瓶'
        },
        {
          link: '/load3',
          imageSrc: '../src/assets/china_img/嘉靖款五彩鱼藻图盖罐（陶瓷）.png',
          imageAlt: 'Image 3',
          text: '嘉靖款五彩鱼藻图盖罐'
        },
        {
          link: '/load4',
          imageSrc: '../src/assets/china_img/广彩人物图盘（陶瓷）.png',
          imageAlt: 'Image 4',
          text: '广彩人物图盘'
        },
        {
          link: '/load5',
          imageSrc: '../src/assets/china_img/甜白釉僧帽壶（陶瓷）.png',
          imageAlt: 'Image 5',
          text: '甜白釉僧帽壶'
        },
        {
          link: '/load6',
          imageSrc: '../src/assets/china_img/青花五彩“大吉”花卉纹葫芦瓶（陶瓷）.png',
          imageAlt: 'Image 6',
          text: '青花五彩“大吉”花卉纹葫芦瓶'
        },
        {
          link: '/load7',
          imageSrc: '../src/assets/china_img/黄地粉彩梅鹊图碗（陶瓷）.png',
          imageAlt: 'Image 7',
          text: '黄地粉彩梅鹊图碗'
        },
        {
          link: '/load8',
          imageSrc: '../src/assets/china_img/龙纹鼎（铜器）.png',
          imageAlt: 'Image 8',
          text: '龙纹鼎'
        },
        {
          link: '/load9',
          imageSrc: '../src/assets/china_img/青釉凤首龙柄壶（陶瓷）.png',
          imageAlt: 'Image 9',
          text: '青釉凤首龙柄壶'
        }
      ]
    }
  },
  methods: {
    getBgColor(index) {
      const row = Math.floor(index / 3) // 计算行号
      const col = index % 3 // 计算列号
      if ((row % 2 === 0 && col % 2 === 1) || (row % 2 === 1 && col % 2 === 0)) {
        return '#f0f0f0' // 偶数行的奇数列和奇数行的偶数列背景色为灰色
      }
      return '#fff' // 其他情况背景色为白色
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.container {
  width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
