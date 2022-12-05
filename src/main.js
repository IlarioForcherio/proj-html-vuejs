import Vue from 'vue'
import App from './App.vue'

  /* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  /* import specific icons */
  import { faUserSecret,faQuoteLeft,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
  /*Import icone regular */
  import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'

  /* add icons to the library */
  library.add(faUserSecret,faFaceSmile,faQuoteLeft,faMagnifyingGlass)

 

// https://github.com/sylar9696/live-coding-cl-77/tree/main/37-vue-cli-axios

//ATTENZIONE: se la stessa icona viene importata con due stili diversi ad esempio: regular e solid, non possiamo usare lo stesso nome per le due icone ma dobbiamo //usare un rieticchetamento con "as", il codice diverrà:

  /* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


