<template>
    <div>
           <child1 id=""> </child1>
           <child2 id=""> </child2>
      </div>
</template>

<script>
import child1 from './components/child1'
import child2 from './components/child2'


 
export default {
  
  name: 'parent',
  data() {
    return{
      show:false,
      after:false
    }
  },
  created(){
      console.log('show',this.show)
  },
methods:{
  clicked(){
    (this.show)?this.close():this.open();
  },
  clickedDelay(){
    (this.show)?this.closeDelay():this.openDelay();
  },
  openDelay(){
    var that=this;
    this.after=true;
    setTimeout(function() {
      that.show = true;
    }, 1000);
  },
  closeDelay(){
    var that=this;
    this.show=false;
    setTimeout(function() {
      that.after = false;
    }, 1000);
  },
  close(){
      this.show=false;
      this.after=false;
  },
  open(){
    this.show = true;
    this.after=true;
  },
},
components: { child1, child2},

}
</script>

<style scoped>
.red{
  width:100px;
  height:30px;
  background-color: red;
}
.green{
  width:100px;
  height:30px;
  background-color: green;
}
.blue{
  width:230px;
  height:130px;
  background-color: blue;
}
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
/*===============================*/
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(100px);
  opacity: 0;
}

</style>
