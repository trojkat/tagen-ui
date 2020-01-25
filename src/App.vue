<template>
  <div id="app">
    <TopNav/>
    <TagenNav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

import Footer from "@/components/Footer.vue";
import TagenNav from "@/components/TagenNav.vue";
import TopNav from "@/components/TopNav.vue";

UIkit.use(Icons);

export default {
  name: "home",
  components: {
    TopNav,
    TagenNav,
    Footer,
  },
};
</script>

<style lang="scss">
@import "variables.scss";
@import "../node_modules/uikit/src/scss/variables-theme.scss";
@import "../node_modules/uikit/src/scss/mixins-theme.scss";
@import "../node_modules/uikit/src/scss/uikit-theme.scss";
html, body {
  background: $prime-color;
}
#app {
  background: #F8F8F0;
}
</style>
