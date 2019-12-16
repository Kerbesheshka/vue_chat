<template>
  <div id="app">
    <header>
      <h1>ЧАТ</h1>
    </header>
    <section>
       <canvas></canvas>
       <ChatFrame :messages='messages' ref='chatframe'/>
       <div id='inputFrame'>
         <Input @send='send' @write='write' />
       </div>
    </section>
    <div id='info'><pre>Enter - отправить</pre></div>
  </div>
</template>

<script>
import ChatFrame from '@/components/ChatFrame'
import Input from "@/components/Input"
import Settings from '@/components/Settings'
import  {Point} from '@/Point.js'
function comet(){
  CometServer().start({dev_id:2778})
  CometServer().subscription("web_chat", function(data){
    th.$set(th.messages,th.messages.length,{message:data.data,notMine:true})
  })
}

export default {
  data(){
    return{
      messages:[
        
      ],
      size:document.documentElement.clientHeight
    }
  },
  methods:{
    send(text){
      this.$set(this.messages,this.messages.length,{message:text,mine:true})
      CometServer().web_pipe_send("web_chat", "message", text)
    },
    write(){
      CometServer().web_pipe_send("web_chat_write", "write")
    }
  },
  components:{
    ChatFrame,
    Input,
    Settings
  },
  mounted(){
    let th = this
    let canvas = document.querySelector('canvas')
    new Point(canvas,5,'#ff9933',0.5)
    $.getScript("CometServerApi.js",function(){
      CometServer().start({dev_id:2778})
      CometServer().subscription("web_chat", function(data){
        th.$set(th.messages,th.messages.length,{message:data.data,notMine:true})
      })
      CometServer().subscription("web_chat_write", function(data){
        th.$refs.chatframe.show()
      })
    })
  },
}
</script>

<style scoped>
  h1{
    font-family: 'Rubik Mono One',sans-serif;
    color:white;
    margin: 0;
    padding: 15px 0px 15px 0px;
  }
  header{
    background-color: #00cc00;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  section{
    height: 100%;
  }
  #inputFrame{
    width:50%;
    min-width: 400px;
    margin: auto;
    padding: 5px 0px 5px 0px;
    background-color: #e6ffe6;
    border:1px solid gray;
    position: relative;
    z-index: 2;
  }
  #info{
    margin-top: 10px;
    text-align: center;
    position: relative;
    z-index: 2;
    min-width: 400px;
  }
  #info pre{
    margin: 0;
    font-family: 'Roboto',sans-serif;
    position: relative;
    z-index: 2;
  }
  canvas{
    position: absolute;
    top: 0;
    z-index: 1;
    display: flex;
  }
</style>
