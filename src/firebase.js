import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBqREWrSXGmSxIKu5n5Zh141MrZAzkF5g0',
  authDomain: 'tick-talk-28e19.firebaseapp.com',
  projectId: 'tick-talk-28e19',
  storageBucket: 'tick-talk-28e19.appspot.com',
  messagingSenderId: '409262883336',
  appId: '1:409262883336:web:d15026a454fa1c337ec7bd'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
