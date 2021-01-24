<template>
   
    <div class="container">
        <div class="login-form">
            <h3>用户登录</h3>
        
                <p>
                    用户名：<input v-model="username" type="text" name="username">
                </p>
                <p>
                    密码：<input v-model="password" type="password" name="password">
                </p>
                <p>
                    <button @click="doLogin" class="btn">登录</button>
                </p>
 
        </div>
        
    </div>
</template>

<script>
export default {
  data() {
      return {
          username: '',
          password: ''
      }
  },methods: {
      doLogin () {
          this.$store.commit('setUsername',this.username)
          this.$http.post("/users/login",{
              username: this.username,
              password: this.password
          }).then(res =>{
              let {status , token, payload} = res.data
             if(status == 'success'){
                 this.$store.dispatch('setToken',token)
                 this.$store.dispatch('setUserId',payload)
                 this.$router.push('/index')
             }else{
                 alert('用户名或密码错误')
             }
          })
      }
  },
}
</script>

<style scoped>
.login-form{
    width: 650px;
    background: #cccccc;
    margin: 40px auto;
    padding: 20px 0;
    text-align: center;
}
.login-form p{
    padding: 20px 0;
}

.btn{
    width: 70px;
}
</style>