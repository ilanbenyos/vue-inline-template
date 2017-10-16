// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import parent from './App'

new Vue({
  el: '#app',
  data() {
    return{
      name:'APP',
      msg:'sara'
    }
  },
  components: { parent },
  
})
