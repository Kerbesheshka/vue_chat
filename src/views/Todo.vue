<template>
  <div>
    <h1>{{params}}</h1>
  </div>
</template>
<script>
export default {
    computed:{
        params(){
            return this.$route.params.title
        }
    }
}
</script>
<style>

</style>