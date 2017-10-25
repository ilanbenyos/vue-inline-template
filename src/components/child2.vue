<template>
  <div class="pleeease-click-me" >{{count}}</div>
</template>
<script>

import { bus } from '../main.js'
export default {
  
  name: 'child2',
  props: ['names'],

  data() {
    return{
      name:'child2',
      count:0,
    }
  },
  mounted(){
    console.log('bus',bus)
    bus.$on('i-got-clicked', clickCount => {
      this.count ++ 
});
  },
  methods:{
    
  },
  components: {
  }
}
</script>
<style scoped>
  div{
    width:200px;
    height:50px;
    background-color: red;
    font-size:30px;
  }
</style>