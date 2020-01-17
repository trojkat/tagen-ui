<template>
  <div class="home">

    <TvStrip/>
    <VodList :vodList="$store.state.vod.lastVods" title="Najnowsze filmy"/>

  </div>
</template>

<script>
import gql from "graphql-tag";
import { mapState } from "vuex";

import TvStrip from "@/components/TvStrip.vue";
import VodList from "@/components/VodList.vue";

export default {
  name: "Home",
  components: {
    TvStrip,
    VodList,
  },
  async created() {
    await this.$store.dispatch("vod/getRandomVod");
    await this.$store.dispatch("vod/getLastVods");
  },
};
</script>
