<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
export default {
  mounted() {
    const firebase = require('firebase')
    const firebaseui = require('firebaseui')
    require('firebaseui/dist/firebaseui.css')

    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID
        // firebase.auth.GithubAuthProvider.PROVIDER_ID,
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID
      ]
    }
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
        measurementId: process.env.measurementId
      }
      firebase.initializeApp(firebaseConfig)
    }

    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)

    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch('user/login', user)
    })
  }
}
</script>
