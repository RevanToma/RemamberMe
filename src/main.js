import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialogVue from './components/UI/BaseDialog.vue'
app.component('base-card', BaseCard)
app.component('base-dialog', BaseDialogVue)
app.component('base-button', BaseButton)
app.mount('#app')
