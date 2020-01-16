<template>
  <q-page class="">
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered>


      <q-item
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
          <q-item-label>{{task.name}}</q-item-label>
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
          completed:false
        },
        {
          id:2,
          name: 'Get Bananas',
          completed:false
        },
        {
          id:3,
          name: 'get apples',
          completed:false
        }
      ]
    }
  }
}
</script>
