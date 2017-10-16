

<script>

import child1 from './components/child1';
import child2 from './components/child2';
export default {
  
  name: 'parent',
  data() {
    return{
      name:'the parent',
      msg:'yael',
      names:['noam','neta'],
    }
  },
  created(){
      console.log(this.$refs)
  },
  components: {
    child1,
    child2
  }
}
</script>

<style scoped>
#parent{
  padding:5px;
}
div,span {
  color:green;
  border:1px solid green;
  display:block;
  text-align: center;
}
</style>
