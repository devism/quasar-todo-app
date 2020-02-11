import Vue from 'vue';

const state = {
    tasks:{
        'ID1':{
          name: 'go to shop',
          completed:false,
          dueDate: "12-2-2020",
          dueTime: "3:00pm"
        },
        'ID2':{
          name: 'Get Bananas',
          completed:false,
          dueDate: "5-2-2020",
          dueTime: "9:00am"
            
        },
        'ID3':{
          name: 'get apples',
          completed:false,
          dueDate: "4-2-2020",
          dueTime: "5:00pm"
        }
    }

}

const mutations = {
  updateTask(state, payload){
   Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id){
    // console.log('delete id: ', id);
    // delete state.tasks[id];
    Vue.delete(state.tasks, id);
  }
}

const actions = {
  updateTask({commit}, payload){
    commit('updateTask', payload)
  
  },
  deleteTask({commit}, id){
    commit('deleteTask', id)
  }

}
const getters = {
    tasks: (state) => {
        return state.tasks
    } 
}

export default {
    namespaced: true,
    state, 
    mutations,
    actions,
    getters
}