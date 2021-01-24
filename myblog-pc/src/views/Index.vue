<template>
  <div class="container">
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blogId">
        <h3 class="blog-title">
          <!-- <a href="/blog/detail">{{item.title}}</a> -->
          <router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{
            item.title
          }}</router-link>
        </h3>
        <p class="blog-content">{{ item.content }}</p>
        <span class="post-time">7{{ item.posTime }}</span>
      </div>
      <p><router-link to="/pusharticle">发表文章</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("/blog/list").then((res) => {
        let { state } = res.data;
        if (state == "fail") {
          alert("请求未授权-then");
        } else if (state == "success") {
          let { blogs } = res.data;
          this.blogList = blogs;
        }
      });
      // .catch((err) => {
      //   console.log(err);
      //   this.$router.push("/");
      // });
    },
  },
};
</script>
<style  scoped>
.blog-list {
  width: 815px;
  margin: 20px auto;
}
.blog {
  background: #cccccc;
  padding: 20px;
  margin: 20px 0;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
</style>
