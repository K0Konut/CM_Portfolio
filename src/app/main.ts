import { createApp } from 'vue'

import App from './App.vue'
import { router } from './router'
import '@/design-system/styles/reset.css'
import '@/design-system/styles/tokens.css'
import '@/design-system/styles/base.css'
import '@/design-system/styles/motion.css'

createApp(App).use(router).mount('#app')
