<template>
  <div>
    <navi />
    <main>
      <card />
      <card />
      <card />
    </main>
  </div>
</template>

<script>
// import firebase from '@/plugins/firebase'
// import Logo from '~/components/Logo.vue'
import Card from '~/components/Card.vue'
import Navi from '~/components/Nav.vue'

export default {
  components: {
    Card,
    Navi
  },
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    },
    displayName() {
      return this.$store.getters['user/displayName']
    }
  },
  mounted() {
    console.info("index.vue mounted process.env.apiKey:", process.env.apiKey)
    const firebase = require('firebase')

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

    firebase.auth().onAuthStateChanged(user => {
      this.$store.dispatch('user/login', user)
    })
  }
  // mounted: function() {
  //   firebase.auth().onAuthStateChanged(user => {
  //     console.log(user)
  //     if (user) {
  //       this.isLogin = true
  //       this.userData = user
  //     } else {
  //       this.isLogin = false
  //       this.userData = null
  //     }
  //   })
  // },
  // methods: {
  //   twitterLogin: function() {
  //     firebase
  //       .auth()
  //       .signInWithRedirect(new firebase.auth.TwitterAuthProvider())
  //   }
  // }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
