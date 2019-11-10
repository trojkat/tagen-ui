<template>

  <div id="footer">
    <div class="uk-container uk-container-small uk-text-center">
      <p>
        <a
          href="https://www.facebook.com/tagen.tv"
          class="uk-icon-button uk-margin-small-right"
          uk-icon="facebook"
          title="Facebook"></a>
        <a
          href="https://www.youtube.com/user/tagentv/videos"
          class="uk-icon-button uk-margin-small-right"
          uk-icon="youtube"
          title="YouTube"></a>
        <a
          href="https://twitter.com/tagen_tv"
          class="uk-icon-button"
          uk-icon="twitter"
          title="Twitter"></a>
      </p>
      <p>© 2019 TAGEN.TV - telewizja internetowa dla otwartych umysłów</p>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss">
@import "src/variables.scss";
#footer {
    background: $prime-color;
    padding: 20px 0;
}
</style>
