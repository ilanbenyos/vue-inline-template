
<script>


export default {
  
  name: 'child2',
  props: ['names'],

  data() {
    return{
      name:'child2',
      msg:'oren'
    }
  },
  components: {
  }
}
</script>
<style scoped>
  div {
    color:pink;
    border:1px solid pink;
    display:inline-block
  }
</style>