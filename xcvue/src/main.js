import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import SlideShow from './components/SlideShow'
import axios from 'axios'

// 引入Element组件库
import {DatePicker} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(DatePicker);


axios.defaults.baseURL = "/";
Vue.prototype.axios = axios;

Vue.config.productionTip = false

Vue.component("my-header",MyHeader)
Vue.component("my-footer", MyFooter);
Vue.component("slide-show", SlideShow);



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
