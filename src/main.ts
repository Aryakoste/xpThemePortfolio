import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faAngular, faReact, faVuejs, faJava, faJs, faHtml5, faCss3, faNode } from  '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faAngular, faReact, faVuejs, faJava, faJs, faHtml5, faCss3, faNode)

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
