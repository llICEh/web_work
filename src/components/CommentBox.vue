<template>
  <div class="rating-comment-box">
    <div class="rating-section">
      <el-rate v-model="rating" />
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
      <el-button style="margin-top: 10px" type="primary" @click="submitComment">发表评论</el-button>
    </div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
      newComment: '',
      comments: [
        // Example comments
        {
          name: 'User1',
          avatar: 'https://example.com/avatar1.png',
          time: '2024-06-04 10:00',
          text: 'This is a comment.'
        },
        {
          name: 'User2',
          avatar: 'https://example.com/avatar2.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User2',
          avatar: 'https://example.com/avatar2.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User2',
          avatar: 'https://example.com/avatar2.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User2',
          avatar: 'https://example.com/avatar2.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User2',
          avatar: 'https://example.com/avatar2.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User2',
          avatar: 'https://example.com/avatar2.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User2',
          avatar: 'https://example.com/avatar2.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        },
        {
          name: 'User2',
          avatar: 'https://example.com/avatar2.png',
          time: '2024-06-03 09:00',
          text: 'This is another comment.'
        }
      ]
    }
  },
  methods: {
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
        avatar: 'https://example.com/current-avatar.png', // Replace with actual user avatar
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

.rating-comment-box {
  width: 800px;
  height: 800px;
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
