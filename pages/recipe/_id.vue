<template>
  <div>
    <navi />
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
          <p style="margin-bottom:0px;">ツナマヨ</p>
          <span>by nancy</span>
        </div>
        <div class="content foodstuff">
          <h4>材料</h4>
          <dl style="margin-bottom:0;">
            <dt>ツナ缶</dt>
            <dd>1缶</dd>
          </dl>
          <dl style="margin-bottom:0;">
            <dt>マヨネーズ</dt>
            <dd>好きなだけ</dd>
          </dl>
        </div>
        <div class="content">
          <h4>作り方</h4>
          <p>ツナ缶にマヨネーズいれるだけ。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.foodstuff dl,
dt,
dd {
  margin: 0;
  padding: 0;
}

.foodstuff dl {
  background-color: #fff;
  border-top: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  display: flex;
  flex-wrap: wrap;
}
.foodstuff dt {
  background-color: #fbfbfb;
  font-weight: bold;
}
.foodstuff dt {
  padding: 8px;
  width: 70%;
  box-sizing: border-box;
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
.foodstuff dd {
  padding: 8px;
  width: 30%;
  margin: 0;
  box-sizing: border-box;
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
}
</style>

<script>
import Navi from '~/components/Nav.vue'

export default {
  components: {
    Navi
  }
}
</script>
