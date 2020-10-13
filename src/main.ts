import { createApp } from 'vue'
import App from './App.vue'

console.log('App', App)
const app = createApp(App)
console.log('app options', (app as any).$options)
app.mount('#app')
