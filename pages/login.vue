<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  mounted() {
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
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>
