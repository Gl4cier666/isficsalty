import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


Vue.use(firestorePlugin)
firebase.initializeApp({
  projectId: 'saltracker',
  databaseURL: 'https://saltracker.firebaseio.com'
})
export const db = firebase.firestore()
 