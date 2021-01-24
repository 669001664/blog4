<template>
  <header>
    <div class="title">MyBlog</div>
    <div class="login-box">
      {{ username }}
      <div v-if="!username">
        <router-link to="/">登录/</router-link>
        <router-link to="/regist">注册</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapState(["username"]),
  },
};
</script>

<style>
</style>