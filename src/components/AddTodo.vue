<template>
<div>
    <h2>ДОБАВИТЬ ЭЛЕМЕНТ</h2>
    <div id='break'></div>
    <input type='text' v-model.trim='text' @keyup.enter='addTodo'>
    <button @click='addTodo'>ок</button>
</div>
</template>

<script>
//import { log } from 'util'
export default {
    data(){
        return{
            text:''
        }
    },
    methods:{
        addTodo(){
            if(this.text!=''){
               this.$store.commit('add',this.text)
               this.text=''
            }
        }
    }
}
</script>

<style scoped>
div{
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
h2{
    margin:8px 0px 8px 0px;
}
#break{
    width:100%
}
button{
    margin-left:5px;
}
</style>