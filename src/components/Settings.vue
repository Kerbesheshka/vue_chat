<template>
    <div>
        <div id='settings' @click='open'>настройки</div>
        <div id=settingsFrame>
           <div class='setting'>шрифт</div>
           <div class='setting'>тема</div>
           <div class='setting'>шарики</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            opened:false,
        }
    },
    methods:{
      open(){
       if(this.opened==false){
           let button = document.querySelector('#settings')
           let frame = document.querySelector('#settingsFrame')
           frame.style.display='flex'
           for(let i = 0;i<10;i++){
              frame.style.left=button.getBoundingClientRect().left+'px'
              frame.style.bottom=document.documentElement.clientHeight-button.getBoundingClientRect().top+'px'
           }
           window.addEventListener('resize',function(){
              frame.style.left=button.getBoundingClientRect().left+'px'
              frame.style.bottom=document.documentElement.clientHeight-button.getBoundingClientRect().top+'px'
           })
           this.opened=true
        }else{
           
        }
      }
    }
}
</script>

<style scoped>
  #settingsFrame{
    display: none;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    z-index: 2;
  }
  .setting{
    background-color: aquamarine;
    display: inline-block;
    font-family: 'Roboto',sans-serif;
    width:90px;
    user-select: none;
    cursor: pointer;
    width: 150px;
    font-size: 20px;
  }
  .setting:hover{
      background-color: #00ffaa;
  }
  #settings{
    display: inline-block;
    margin: 5px 0px 0px 0px;
    position: relative;
    z-index: 2;
    font-family: 'Roboto',sans-serif;
    font-size: 25px;
    padding:5px 0px 5px 0px;
    user-select: none;
    cursor: pointer;
    width: 150px;
  }
  #settings:hover{
    background-color: aquamarine;
    box-shadow: 0px 0px 8px 2px gray;
  }
</style>