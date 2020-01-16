<template>
  <q-page class="">
  <div class="q-pa-md">
    <q-list 
    separator
    bordered>


      <q-item
       :class="!task.completed ? 'bg-orange-1': 'bg-green-1'"
       v-for="task in tasks"
       :key="task.id"
       @click="task.completed = !task.completed"
       clickable
       tag="label" 
       v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strikethrough' : task.completed}">{{task.name}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column justify-center">
              <q-icon 
          name="event"
          size="18px"
          class="q-mr-xs"
          />
            </div>
            
          <div class="column">
             <q-item-label class="row justify-end" caption>{{task.dueDate}}</q-item-label>
           <small> <q-item-label class="row justify-end" caption>{{task.dueTime}}</q-item-label> </small>
          </div>
         
          </div>
          
        </q-item-section>
       
      </q-item>

 

    </q-list>
  </div>

  </q-page>
</template>

<script>
export default {
  data(){
    return{
      tasks:[
        {
          id:1,
          name: 'go to shop',
          completed:false,
          dueDate: "12-2-2020",
          dueTime: "3:00pm"
        },
        {
          id:2,
          name: 'Get Bananas',
          completed:false,
          dueDate: "5-2-2020",
          dueTime: "9:00am"
        },
        {
          id:3,
          name: 'get apples',
          completed:false,
          dueDate: "4-2-2020",
          dueTime: "5:00pm"
        }
      ]
    }
  }
}
</script>
