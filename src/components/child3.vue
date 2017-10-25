<template>
<div class="container">   
  <v-app id="inspire">
    <div class="text-xs-center">
      <v-menu transition="scale-transition">
        <v-btn dark color="primary" slot="activator">Scale Transition</v-btn>
        <v-list>
          <v-list-tile v-for="n in ttt" :key="n.name" @click="">
            <v-list-tile-title v-text="'Item ' + n.name +' / '+ n.txt"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </div>
  </v-app>
  
  </div>
</template>
<script>


export default {
  
  name: 'child3',
  props: ['names'],
  data() {
    return{
      name:'child3',
      ttt:[{name:'111',txt:'yyyyyyyyyyyyyyy'},
      {name:'222',txt:'hhhhhhhhhhhhhhhhh'},
      {name:'333',txt:'jjjjjjjjjjjjjj'},
      {name:'444',txt:'ddddddddddddddddd'},
      {name:'555',txt:'hhhhhhhhhhhhh'},     
      ]
    }
  },
  methods:{
    clicked(){
        console.log('clicked')
    }  
  },
  components: {
  }
}
</script>
<style >
 .application{
   min-height:0;
 }
</style>