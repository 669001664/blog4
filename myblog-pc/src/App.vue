<template>
  <div id="app">
    <common-header/>
    <router-view/>
  </div>
</template>

<script>
import CommonHeader from './components/Header'
export default {
  components: { CommonHeader },

}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
ul, ol{
    list-style: none;
}

/* 能用样式 */
.container{
    width: 1200px;
    margin: 0 auto;
}
header{
    height: 50px;
    background: #cccccc;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>
