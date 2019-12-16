<template>
<ul>
  <TodoElement v-for='c of todo' :element='c' :key='c.id'/>
</ul>
</template>

<script>
import TodoElement from '@/components/TodoElement'
export default {
    props:['todo'],
    components:{
      TodoElement
    }
}
</script>

<style scoped>
ul{
    list-style: none;
    padding:0;
}
</style>