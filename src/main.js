import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// Bootstrap Install
import "bootstrap"

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCartShopping)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
