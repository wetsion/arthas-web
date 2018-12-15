import Vue from 'vue'
import App from './App.vue'
// import iView from 'iview'
import {Button, Card, Layout, Content, Header, Menu, Drawer, Form, FormItem, Input} from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

// Vue.use(iView)
Vue.component('Button', Button)
Vue.component('Card', Card)
Vue.component('Layout', Layout)
Vue.component('Content', Content)
Vue.component('Header', Header)
Vue.component('Menu', Menu)
Vue.component('Drawer', Drawer)
Vue.component('FormItem', FormItem)
Vue.component('Form', Form)
Vue.component('Input', Input)

new Vue({
  render: h => h(App),
}).$mount('#app')
