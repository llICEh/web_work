<template>
  <el-button plain @click="scrollToBottomAndShowDialog"> 留言 </el-button>
  <el-dialog v-model="dialogFormVisible" title="留言区" width="875">
    <div class="rating-comment-box">
      <div class="comments-section">
        <el-scrollbar class="comments-scrollbar">
          <div v-for="(comment, index) in comments" :key="index" class="comment">
            <div class="comment-header">
              <el-avatar :src="comment.avatar" />
              <span class="comment-name">{{ comment.name }}</span>
              <span class="comment-time">{{ comment.time }}</span>
            </div>
            <div class="comment-body">{{ comment.text }}</div>
          </div>
        </el-scrollbar>
      </div>
      <div class="comment-input-section">
        <el-input
          type="textarea"
          v-model="newComment"
          placeholder="输入评论..."
          rows="4"
          maxlength="200"
          show-word-limit
        />
        <el-button style="margin-top: 10px" type="primary" @click="submitComment"
          >发表评论</el-button
        >
      </div>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      newComment: '',
      comments: [
        {
          name: 'User1',
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2024-06-04 10:00',
          text: 'This is a comment.'
        },
        {
          name: 'User2',
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User3',
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User4',
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User5',
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User6',
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User7',
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User8',
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User9',
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        }
      ]
    }
  },

  methods: {
    scrollToBottomAndShowDialog() {
      // 使用 Vue.nextTick() 确保页面已经更新完毕
      this.$nextTick(() => {
        // 获取最后一个 section 的位置
        const lastSection = document.querySelector('.finalpage_container:last-of-type')
        const lastSectionRect = lastSection.getBoundingClientRect()

        // 计算页面底部的位置
        const pageBottom = window.scrollY + window.innerHeight

        // 如果最后一个 section 在页面底部以下，即页面滚动到最底部，显示评论框
        if (lastSectionRect.top < pageBottom) {
          // 显示评论框
          this.dialogFormVisible = true
        } else {
          // 如果最后一个 section 不在页面底部以下，则滚动页面到最后一个 section 并显示评论框
          window.scrollTo({
            top: lastSection.offsetTop,
            behavior: 'smooth' // 可以添加滚动动画
          })
          this.dialogFormVisible = true
        }
      })
    },
    submitComment() {
      if (this.newComment.trim() === '') {
        this.$message({
          showClose: true,
          message: '评论不能为空',
          type: 'warning'
        })
        return
      }

      const newComment = {
        name: 'CurrentUser', // Replace with actual user data
        avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png', // Replace with actual user avatar
        time: new Date().toLocaleString(),
        text: this.newComment
      }

      this.comments.push(newComment)
      this.newComment = ''
    }
  }
}
</script>
<style scoped>
.el-dialog__wrapper {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}

.el-dialog {
  /* 确保对话框不会超出屏幕 */
  max-width: 100%;
  margin: 0;
}
.rating-comment-box {
  width: 800px;
  height: 700px;
  padding: 20px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
}

.rating-section {
  text-align: center;
  margin-bottom: 20px;
}

.comment-input-section {
  margin-top: 20px;
  margin-bottom: 20px;
}

.comments-section {
  height: 500px;
  overflow: hidden;
}

.comments-scrollbar {
  max-height: 100%;
  overflow-y: auto;
}

.comment {
  padding: 10px 0;
  border-bottom: 1px solid #ebeef5;
}

.comment:last-child {
  border-bottom: none;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.comment-name {
  font-weight: bold;
  margin-left: 10px;
}

.comment-time {
  margin-left: auto;
  font-size: 12px;
  color: #909399;
}

.comment-body {
  font-size: 14px;
  color: #606266;
}
</style>
