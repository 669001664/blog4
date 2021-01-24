<template>
  <div class="container">
    <div class="blog">
      <p>
        标题：
        <input class="blog-title" type="text" v-model="title" name="title" />
      </p>
      <p>
        内容:
        <input
          class="blog-content"
          type="text"
          v-model="content"
          name="content"
        />
      </p>
      <p><button @click="pushArt">发表</button></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    pushArt() {
      this.$http
        .post("/blog/pusharticle", {
          title: this.title,
          content: this.content,
          user_id: localStorage.getItem("userID"),
        })
        .then((res) => {
          console.log(res);
          if (res.data.state == "success") {
            console.log("111");
            this.$router.push("/index");
          } else {
            console.log("144");
          }
        });
    },
  },
};
</script>

<style scoped>
.blog {
  width: 800px;
  height: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
  text-align: center;
}
.blog p {
  padding: 20px 0;
}
.blog button {
  width: 80px;
  height: 40px;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  width: 288px;
  height: 200px;
  padding: 10px;
}
</style>