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
    // tasks:[
    //     {
    //       id:1,
    //       name: 'go to shop',
    //       completed:false,
    //       dueDate: "12-2-2020",
    //       dueTime: "3:00pm"
    //     },
    //     {
    //       id:2,
    //       name: 'Get Bananas',
    //       completed:false,
    //       dueDate: "5-2-2020",
    //       dueTime: "9:00am"
    //     },
    //     {
    //       id:3,
    //       name: 'get apples',
    //       completed:false,
    //       dueDate: "4-2-2020",
    //       dueTime: "5:00pm"
    //     }
    //   ]
}

const mutations = {

}

const actions = {

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