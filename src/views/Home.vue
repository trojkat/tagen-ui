<template>
  <div class="home">
    <TvStrip/>
    <CalligarisBook/>
    <VodList :vodList="$store.state.vod.lastVods" title="Najnowsze filmy"/>
    <VodPopularCategories/>
    <ShopBaner/>
    <VodList :vodList="$store.state.vod.topRated" rating="true" title="Najwyżej oceniane"/>
    <VodList :vodList="$store.state.vod.topViewed" position="true" title="Najczęściej oglądane"/>
    <LastComments/>
    <Patronite/>
  </div>
</template>

<script>
import CalligarisBook from "@/components/CalligarisBook.vue";
import LastComments from "@/components/LastComments.vue";
import Patronite from "@/components/Patronite.vue";
import ShopBaner from "@/components/ShopBaner.vue";
import TvStrip from "@/components/TvStrip.vue";
import VodList from "@/components/VodList.vue";
import VodPopularCategories from "@/components/VodPopularCategories.vue";

export default {
  name: "Home",
  components: {
    CalligarisBook,
    LastComments,
    Patronite,
    ShopBaner,
    TvStrip,
    VodList,
    VodPopularCategories,
  },
  async created() {
    await this.$store.dispatch("vod/getRandomVod");
    await this.$store.dispatch("vod/getLastVods");
    await this.$store.dispatch("vod/getCategories");
    await this.$store.dispatch("vod/getTopViewed");
    await this.$store.dispatch("vod/getTopRated");
    await this.$store.dispatch("comment/getLastComments");
  },
};
</script>
