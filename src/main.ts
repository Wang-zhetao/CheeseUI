import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router'
import one from './components/one.vue'
import ha from './components/ha.vue'


const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: one },
        { path: '/xx', component: ha }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
