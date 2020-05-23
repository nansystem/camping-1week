<template>
  <div>
    <navi />
    <main>
      <card :recipe="recipe" v-for="(recipe, index) in list" :key="index" />
    </main>
  </div>
</template>

<script>
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
    },
    list() {
      return this.$store.getters['recipe/list']
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('recipe/listAll')
  }
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
