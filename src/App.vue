<template>
  <div id="app">
    <h1 @click='toHome'>Awesome ToDo Application</h1>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods:{
    toHome(){
      this.$router.push({name:'home'})
    }
  }
}
</script>
<style>
  h1{
    font-family: 'Roboto', sans-serif;
    text-align: center;
    user-select: none;
  }
</style>
