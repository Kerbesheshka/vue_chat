<template>
  <div>
    <AddTodo/>
    <hr>
    <TodoList :todo='todo'/>
  </div>
</template>
<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  name:'app',
  components:{
    TodoList,
    AddTodo
  },
  computed:{
    todo(){
      return this.$store.state.list
    }
  },
  created:function(){
    
  }
}
</script>
<style>

</style>