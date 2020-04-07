import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NewTree from './components/NewTree.vue'
import InfiniteTree from './components/InfiniteTree.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.component(NewTree.name, NewTree)
Vue.component(InfiniteTree.name, InfiniteTree)
new Vue({
  render: h => h(App)
}).$mount('#app')
