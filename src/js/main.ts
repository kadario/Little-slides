import { createApp } from 'vue'
import store from '../store'
import App from './App.vue'
import '../scss/base.scss'

const app = createApp(App).use(store).mount('#app')
