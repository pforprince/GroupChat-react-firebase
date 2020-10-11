import firebase from 'firebase'

const firebaseApp = firebase.initializeApp( {
        apiKey: "AIzaSyBsylxOWuUbq6RbUBTy7rZaxp7698MEVww",
        authDomain: "fb-messenger-clone-3728e.firebaseapp.com",
        databaseURL: "https://fb-messenger-clone-3728e.firebaseio.com",
        projectId: "fb-messenger-clone-3728e",
        storageBucket: "fb-messenger-clone-3728e.appspot.com",
        messagingSenderId: "777556927533",
        appId: "1:777556927533:web:4d43aa4f001f340f8784a4"
      
})

export default firebaseApp.firestore();