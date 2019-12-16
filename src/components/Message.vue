<template>
    <div class='wrapMessage'>
        <p class='userName'>аноним</p>
        <div id='messageBox' :class='{mine:message.mine,notMine:message.notMine}' v-html="parse()"></div>
    </div>
</template>

<script>
export default {
    props:['message'],
    computed:{

    },
    mounted(){
        document.querySelector('.wrapMessage:last-child').scrollIntoView()
    },
    methods:{
        parse(){
            let str = this.message.message
            for(let i=1;i<9;i++){
              while(str.indexOf(';s'+i+'#')!=-1){
                  str = str.split(';s'+i+'#')
                  switch(i){
                      case 1:
                          str = str.join('<img src=https://i.smiles2k.net/aiwan_smiles/yu.gif border=0>')
                          break
                      case 2:
                          str = str.join('<img src=https://i.smiles2k.net/aiwan_smiles/yes2.gif border=0>')
                          break
                      case 3:
                          str = str.join('<img src=https://i.smiles2k.net/aiwan_smiles/yes.gif border=0>')
                          break
                      case 4:
                          str = str.join('<img src=https://i.smiles2k.net/aiwan_smiles/yahoo.gif border=0>')
                          break
                      case 5:
                          str = str.join('<img src=https://i.smiles2k.net/aiwan_smiles/wizard.gif border=0>')
                          break
                      case 6:
                          str = str.join('<img src=https://i.smiles2k.net/aiwan_smiles/wink.gif border=0>')
                          break
                      case 7:
                          str = str.join('<img src=https://i.smiles2k.net/aiwan_smiles/wacko.gif border=0>')
                          break
                      case 8:
                          str = str.join('<img src=https://i.smiles2k.net/aiwan_smiles/vinsent.gif border=0>')
                          break
                  }
              }
            }
            return str
        },
    },
}
</script>

<style scoped>
   .userName{
       margin: 7px 0px 0px 7px;
       font-family: 'Roboto',sans-serif;
   }
   .wrapMessage{
       max-width: 70%;
   }
   .mine{
       background-color: #99ddff;
       display: inline-block;
       margin:2px 0px 0px 7px;
       padding:7px 7px 7px 7px;
       font-family: 'Roboto',sans-serif;
       border-radius: 5px;
       overflow-wrap: break-word;
       font-size: 25px;
       align-items: center;
       max-width: 100%;
   }
   .notMine{
       background-color: #99ff99;
       display: inline-block;
       margin:2px 0px 0px 7px;
       padding:7px 7px 7px 7px;
       font-family: 'Roboto',sans-serif;
       border-radius: 5px;
       overflow-wrap: break-word;
       font-size: 25px;
       align-items: center;
       max-width: 100%;
   }
</style>