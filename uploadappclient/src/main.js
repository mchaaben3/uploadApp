import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//axios config
axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials=true


store.dispatch('auth/me').then(()=>{
    createApp(App).use(store).use(router).mount('#app')

})
