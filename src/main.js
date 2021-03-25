import { createApp } from 'vue'
import ElementPlus from 'element-plus'; // 引入UI组件库
import 'element-plus/lib/theme-chalk/index.css'; // 引入样式
import App from './App.vue';
import router from './router';



createApp(App).use(ElementPlus).use(router).mount('#app')