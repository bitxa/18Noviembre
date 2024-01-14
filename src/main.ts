import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

//CSS
import 'leaflet/dist/leaflet.css'

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faPlay,
  faPause,
  faCircleInfo,
  faBars,
  faCirclePlay,
  faSquareCheck,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
library.add(
  faPlay,
  faPause,
  faFacebookF,
  faYoutube,
  faTwitter,
  faEnvelope,
  faCircleInfo,
  faBars,
  faCirclePlay,
  faSquareCheck
)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(vuetify)
app.use(VueLazyload)

app.mount('#app')
