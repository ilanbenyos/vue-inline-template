// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
 import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import parent from './App'

Vue.use(Vuetify)

export const bus = new Vue({
  methods:{
    counter(num) {
      this.$emit('addNum', num);
    }
  }
});


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
