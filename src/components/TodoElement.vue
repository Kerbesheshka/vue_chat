<template>
    <li :class='{remove:done}' @click='openTodo'>
        <span id='inputWrapper'>
        <input type='checkbox' @click.stop='done=!done'>
        <strong>{{element.id}}</strong>
        <span id='title'>{{element.title|upper}}</span>
        <button @click.stop='remove'>X</button>
        </span>
    </li>
</template>

<script>

export default {
    data(){
        return{
            done:false
        }
    },
    props:['element'],
    filters:{
        upper(string){
            return string.toUpperCase()
        }
    },
    methods:{
        change(){
            let id = this.element.id
            this.$store.commit('complete',id)
        },
        remove(){
            let id = this.element.id
            this.$store.commit('remove',id-1)
        },
        openTodo(){
            this.$router.push({name:'todo',params:{id:this.element.id,title:this.element.title}})
        }
    }
}
</script>

<style lang='less' scoped>
  li{
      font-family: 'Roboto', sans-serif;
      display: flex;
      justify-content: center;
      border:1px gray solid;
      padding:15px 0px 15px 0px;
      margin:10px 0px 10px 0px;
      user-select: none;
      input[type=checkbox]{
      margin:0;
      margin-right:10px;
      cursor: pointer;
      }
      strong{
      padding: 0px 5px 0px 15px;
      font-size: 20px;
      }
      #inputWrapper{
         #title{
         font-size: 20px;
         }
      }
      button{
      margin-left: 15px;
      border-style: solid;
      background-color:#ff8080;
      cursor: pointer;
      border-radius:8px;
      outline: none;
         &:hover{
         background-color:red;
         }
      }
  }
  .remove{
      text-decoration: line-through;
      background-color: bisque;
  }
</style>