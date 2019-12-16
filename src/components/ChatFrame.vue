<template>
    <div id='frame'>
        <section>
            <Message v-for='(mess,name) of messages' :key='name' :message='mess'></Message>
        </section>
        <div id='writing'>печатает...</div>
    </div>
</template>

<script>
import Message from '@/components/Message'
import { log } from 'util'
export default {
    props:['messages'],
    data(){
        return{
            going:false,
            count:0
        }
    },
    components:{
        Message,
    },
    methods:{
        show(){
            let th = this
            this.count++
            let frame = document.querySelector('#frame').getBoundingClientRect()
            let text = document.querySelector('#writing')
            text.style.top = frame.bottom-text.getBoundingClientRect().height+'px'
            text.style.display = 'block'
            setTimeout(function(){
               if(th.count==0){
                   text.style.display = 'none'
               }else{
                   th.count--
                   if(th.count==0){text.style.display = 'none'}
               }
            },1000)
        }
    },
    mounted(){

    },
    watch:{

    }
}
</script>

<style scoped>
    #frame{
        width:50%;
        min-width: 400px;
        background-color: white;
        margin:auto;
        min-height: 70vh;
        max-height: 70vh;
        margin-top: 40px;
        border: 1px solid gray;
        border-bottom: none;
        overflow: auto;
        position: relative;
        z-index: 2;
    }
    section{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .wrapMessage:last-child{
        margin-bottom:20px;
    }
    #writing{
        position: fixed;
        display: none;
        font-family: 'Roboto',sans-serif;
        text-align: center;
        width: 50%;
        min-width:400px; 
    }
</style>