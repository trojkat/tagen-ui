<template>
  <div class="home">

    <TvStrip/>
    <CalligarisBook/>
    <VodList :vodList="$store.state.vod.lastVods" title="Najnowsze filmy"/>
    <VodPopularCategories/>
    <ShopBaner/>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapState } from "vuex";

import CalligarisBook from "@/components/CalligarisBook.vue";
import ShopBaner from "@/components/ShopBaner.vue";
import TvStrip from "@/components/TvStrip.vue";
import VodList from "@/components/VodList.vue";
import VodPopularCategories from "@/components/VodPopularCategories.vue";

export default {
  name: "Home",
  components: {
    CalligarisBook,
    ShopBaner,
    TvStrip,
    VodList,
    VodPopularCategories,
  },
  async created() {
    await this.$store.dispatch("vod/getRandomVod");
    await this.$store.dispatch("vod/getLastVods");
    await this.$store.dispatch("vod/getCategories");
  },
};
</script>
