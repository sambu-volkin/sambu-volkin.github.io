import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createI18n } from 'vue-i18n'

import messages from './languages/messages'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    globalInjection: true,
    messages
})

createApp(App).use(i18n).mount('#app')
