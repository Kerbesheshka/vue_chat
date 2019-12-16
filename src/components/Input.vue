<template>
    <div id='Frame'>
        <div id='imgWrapper'>
           <img src='@/assets/smile_logo.png' id='logo' @click='openSmiles'>
        </div>
        <div id='smilesFrame'>
            <img src=https://i.smiles2k.net/aiwan_smiles/yu.gif border=0 @click='choseSmile(1)'>
            <img src=https://i.smiles2k.net/aiwan_smiles/yes2.gif border=0 @click='choseSmile(2)'>
            <img src=https://i.smiles2k.net/aiwan_smiles/yes.gif border=0 @click='choseSmile(3)'>
            <img src=https://i.smiles2k.net/aiwan_smiles/yahoo.gif border=0 @click='choseSmile(4)'>
            <img src=https://i.smiles2k.net/aiwan_smiles/wizard.gif border=0 @click='choseSmile(5)'>
            <img src=https://i.smiles2k.net/aiwan_smiles/wink.gif border=0 @click='choseSmile(6)'>
            <img src=https://i.smiles2k.net/aiwan_smiles/wacko.gif border=0 @click='choseSmile(7)'>
            <img src=https://i.smiles2k.net/aiwan_smiles/vinsent.gif border=0 @click='choseSmile(8)'>
        </div>
        <textarea id='input' v-model.trim='text' @input='write' autofocus @keydown.enter.exact.prevent='send' placeholder="Введите сообщение..."></textarea>
        <button id='sendButton' @click='send'> отправить</button>
    </div>
</template>

<script>
//import { log } from 'util'
export default {
    data(){
        return{
            brtext:``,
            text:``,
            opened:false,
        }
    },
    methods:{
        write(){
            this.$emit('write')
        },
        send(){
            if(this.text!=''){
                this.$emit('send',this.text)
                this.text=''
            }else{
                this.text=''
            }
        },
        ctrl(){
            if(this.text!=''){
               this.brtext+=this.text+'<br/>'
               this.text=this.text+'\n'
            }
        },
        openSmiles(){
            if(this.opened){
                let fr = document.querySelector('#smilesFrame')
                fr.style.display='none'
                this.opened=false
            }else{
                let fr = document.querySelector('#smilesFrame')
                let ifr = document.querySelector('#Frame')
                fr.style.bottom=ifr.getBoundingClientRect().height+12+'px'
                fr.style.left='0px'
                fr.style.display='block'
                this.opened=true
            }
        },
        choseSmile(num){
            this.text=this.text+';s'+num+'#'
            document.querySelector('#input').focus()
        },
    },
    mounted(){
        let th = this
        window.addEventListener('resize',function(){
            th.opened=false
            document.querySelector('#smilesFrame').style.display='none'
        })
    }
}
</script>

<style scoped>
    #smilesFrame{
        display: none;
        width:200px;
        height: 250px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 0px 7px 3px #cccccc; 
        position: absolute;
    }
    #imgWrapper{
        display: flex;
        align-items: center;
    }
    #logo{
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border-radius: 50%;
    }
    #logo:hover{
        background-color: #b3ffb3;
    }
    #input{
        background-color: white;
        width:93% !important;
        height: 50px !important;
        border: 1px solid #b3cccc;
        border-radius: 5px;
        overflow: auto;
        font-family: 'Roboto',sans-serif;
        padding: 4px 4px 4px 4px;
        resize:none;
    }
    #Frame{
        width:90%;
        display: flex;
        justify-content: center;
        align-items: stretch;
        margin: auto;
        position: relative;
        z-index: 2;
    }
    button{
        margin-left: 5px;
        background-color: #b3e6ff;
        outline: none;
        border: none;
        border-radius: 5px;
        font-family: 'Roboto',sans-serif;
        cursor: pointer;
    }
    button:hover{
        background-color: #80d4ff;
    }
</style>