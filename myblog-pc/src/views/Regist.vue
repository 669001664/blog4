<template>
  <div class="container">
    <div class="login-form">
      <h3>用户注册</h3>
      <p>
        用户名：<input
          type="text"
          @blur.prevent="changeCount"
          name="username"
          v-model="username"
        />
        <span v-if="isShow" id="info">{{ message }}</span>
      </p>
      <p>密码：<input type="password" name="password" v-model="password" /></p>
      <p>昵称：<input type="text" name="nickname" v-model="nickname" /></p>
      <p>
        <button @click="Regist" class="btn">注册</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
      isShow: false,
      message: "ok",
    };
  },
  methods: {
    Regist() {
      this.$http
        .post("/users/regist", {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        })
        .then((res) => {
          console.log(res);
          if (res.data.state == "success") {
            this.$router.push("/");
          } else {
            alert("注册失败");
          }
        });
    },
    changeCount() {
      let username = this.username;
      this.$http
        .get("/users/checkuser", {
          params: {
            username: username,
          },
        })
        .then((res) => {
          if (res.data.state == "success") {
            this.isShow = true;
            this.message = "ok";
          } else {
            this.isShow = true;
            this.message = "用户名存在";
          }
        });
    },
  },
};
</script>

<style scoped>
.login-form {
  width: 650px;
  background: #cccccc;
  margin: 40px auto;
  padding: 20px 0;
  text-align: center;
}
.login-form p {
  padding: 20px 0;
}

.btn {
  width: 70px;
}
</style>