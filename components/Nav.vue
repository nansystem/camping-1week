<template>
  <nav class="navbar is-fixed" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <nuxt-link to="/">缶プ飯</nuxt-link>
      </div>
      <div v-if="isLogin" class="navbar-item">
        <nuxt-link class="button is-primary" to="/login">
          <strong>レシピ投稿</strong>
        </nuxt-link>
      </div>
      <div v-else class="navbar-item">
        <nuxt-link class="button is-primary" to="/login">
          <strong>ログイン</strong>
        </nuxt-link>
      </div>
      <div
        v-if="isLogin"
        v-on:click="changeBurgerVisibillity"
        v-bind:class="{ 'is-active': burgerVisibillity }"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div>
      <!-- <div class="navbar-burger" data-target="navMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </div> -->
    </div>
    <div
      id="navMenu"
      :class="{ 'is-active': burgerVisibillity }"
      class="navbar-menu"
    >
      <div class="navbar-end">
        <div class="navbar-item">
          <a @click="logout">ログアウト</a>
        </div>
      </div>
      <!--
-->
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { burgerVisibillity: false }
  },
  computed: {
    isLogin() {
      return this.$store.getters['user/isLogin']
    }
  },
  mounted() {
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
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      const firebase = require('firebase')
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('ログアウトしました')
        })
      this.burgerVisibillity = false
    },
    changeBurgerVisibillity() {
      this.burgerVisibillity = !this.burgerVisibillity
    }
  }
}
</script>
