import Vue from 'vue'
import Vuex from 'vuex'
//import { log } from 'util'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[
      {id:1,title:'пойти в школу',completed:false},
      {id:2,title:'купить пива',completed:false},
      {id:3,title:'погулять с собакой',completed:false},
      {id:4,title:'побегать в зале',completed:false},
    ]
  },
  mutations: {
    add(state,string){
      let list = state.list
      list.push({id:0,title:string,completed:false})
      let newId = 1
      for(let item of list){
        item.id=newId
        newId++
      }
    },
    remove(state,id){
      let list = state.list
      Vue.delete(list,id)
      let newId = 1
      for(let item of list){
        item.id=newId
        newId++
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
