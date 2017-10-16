
<script>


export default {
  
  name: 'child1',
  props: ['names'],
  data() {
    return{
      name:'child1',
      msg:'dani'
    }
  },
  components: {
  }
}
</script>
<style scoped>
  div {
    color:red;
    border:1px solid red;
    display:inline-block;
  }
</style>