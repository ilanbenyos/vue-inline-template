<template>
  <div class="pleeease-click-me" @click="click()">click me
  {{count}}
  </div>
</template>
<script>
import { bus } from '../main'


export default {
  
  name: 'child1',
  props: ['names'],
  data() {
    return{
      name:'child1',
      count:0,
      gState:'gState'
    }
  },
  
  methods:{
    click(){
      this.count++;
      bus.$emit('i-got-clicked', this.count);
    } 
  },
  components: {
  }
}
</script>
<style scoped>
 div{
    width:200px;
    height:50px;
    background-color: blue;
        font-size:30px;

  }
</style>