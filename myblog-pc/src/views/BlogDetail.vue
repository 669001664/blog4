<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog.title }}</h3>
        <span>{{ blog.post_time }} </span>
      </div>
      <div class="blog-content">{{ blog.content }}</div>
      <div class="comments">
        <h4>评论</h4>
        <div class="comment" v-for="item in blog.comments" :key="item.comm_id">
          <div class="comment-content">{{ item.comm_content }}</div>
          <div class="comment-info">
            <span class="userinfo">用户:{{ item.username }}</span>
            <span class="post-time">时间:{{ item.comm_post_time }}</span>
          </div>
        </div>
      </div>
      <p><input v-model="comment" type="text" /></p>
      <p><button @click="saveComment">发表评论</button></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: "",
      comment: "",
    };
  },
  created() {
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      let blogId = this.$route.params.blogId;
      this.$http
        .get("/blog/detail", {
          params: {
            blogId: blogId,
          },
        })
        .then((res) => {
          let { state, blogInfo } = res.data;
          console.log(blogInfo);
          if (state == "success") {
            this.blog = blogInfo;
          }
        });
      // .catch((err) => {
      //   // alert('请求未授权-catch!');
      //   console.log(err);
      //   this.$router.push("/login");
      // });
    },
    saveComment() {
      let blogId = this.$route.params.blogId;
      let userId = localStorage.getItem("userID");
      let comment = this.comment;
      this.$http
        .post("/blog/comment", {
          content: comment,
          blog_id: blogId,
          user_id: userId,
        })
        .then((res) => {
          if (res.data.state == "success") {
            this.getBlogDetail();
          }
        });
    },
  },
};
</script>

<style scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
.comment-info .userinfo {
  padding-right: 10px;
}
</style>
