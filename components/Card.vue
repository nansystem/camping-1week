<template>
  <nuxt-link to="/recipe/3">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://via.placeholder.com/640x360?text=canned food"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content" style="padding-top:8px;">
        <div class="content">
          <p style="margin-bottom:0px;">{{ recipe.title }}</p>
          <span
            >by {{ recipe.userName !== undefined ? recipe.userName : '' }}</span
          >
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['recipe']
}
</script>
