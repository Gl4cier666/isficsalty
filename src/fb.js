import firebase from 'firebase/app'
import 'firebase/firestore'

export const saltDb = firebase
.initializeApp({projectId: 'saltracker'})
.firestore()
