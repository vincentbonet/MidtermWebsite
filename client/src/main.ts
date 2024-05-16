import './assets/style.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Oruga from '@oruga-ui/oruga-next'
import Toaster from 'vue-toastification'

const app = createApp(App)
app
    .use(router)
    .use(Toaster, {})
    .use(Oruga)

app.mount('#app')