<template>
  <div>
    <navFocus />
    <div class="is-5-tablet is-4-desktop is-3-widescreen">
      <form class="box">
        <div class="field">
          <label class="label">レシピタイトル</label>
          <!-- title:{{ title }} memo:{{ memo }} -->
          <div class="control">
            <input
              v-model="title"
              type="text"
              class="input"
              placeholder="レシピタイトル"
            />
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">作り方</label>
          <div class="control">
            <textarea
              v-model="memo"
              class="textarea"
              placeholder="作り方"
            ></textarea>
            <span class="icon is-small is-left">
              <i class="fa fa-lock"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <button @click.prevent="post" class="button is-primary">
            投稿する
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NavFocus from '~/components/NavFocus.vue'

export default {
  components: {
    NavFocus
  },
  computed: {
    recipe() {
      return this.$store.getters['recipe/recipe']
    },
    user() {
      return this.$store.getters['user/user']
    },
    title: {
      get() {
        return this.$store.state.recipe.recipe.title
      },
      set(value) {
        this.$store.commit('recipe/updateTitle', value)
      }
    },
    memo: {
      get() {
        return this.$store.state.recipe.recipe.memo
      },
      set(value) {
        this.$store.commit('recipe/updateMemo', value)
      }
    }
  },
  methods: {
    async post() {
      await this.$store.dispatch('recipe/post', {
        recipe: this.recipe,
        user: this.user
      })
      console.info('after post')
      this.$router.push('/')
    }
  }
}
</script>
