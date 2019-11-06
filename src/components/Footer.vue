<template>

  <div id="footer">
    <div class="uk-container uk-container-small">
      <p class="uk-text-center">© 2019 TAGEN.TV - telewizja internetowa dla otwartych umysłów </p>
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
