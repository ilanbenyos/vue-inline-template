<template>
<div class="container">  5
    </div>
  </v-app>
  
  </div>
</template>
<script>


export default {
  
  name: 'child5',
  props: ['names'],
  data() {
    return{
      name:'child5',
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
 
</style>