<template>
  <div class="home">

    <TvStrip/>

    <div class="uk-container uk-container uk-margin-medium">
      <span uk-spinner="ratio: 3" v-if="loading"></span>
      <div class="uk-clearfix">
        <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small" uk-height-match="target: > div > .uk-card > .uk-card-body" uk-grid>
          <div v-for="(vod, index) in vods" :key="vod.title">
            <VodCard :vod="vod" :cls="vodCardClass(index)" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import gql from "graphql-tag";

import TvStrip from "@/components/TvStrip.vue";
import VodCard from "@/components/VodCard.vue";

export default {
  name: "Home",
  data: () => ({
    loading: true,
    vods: [],
    tagenUrl: process.env.VUE_APP_TAGEN_URL,
  }),
  components: {
    TvStrip,
    VodCard,
  },
  methods: {
    async fetchVod() {
      let result;
      try {
        result = await this.$apollo.query({
          query: gql(`
            query {
              vod(first: 9) {
                title,
                url,
                time,
                category {
                  title,
                  slug
                },
                coverUrl,
              }
            }
          `),
        });
      } catch (error) {
        return;
      }
      this.vods = result.data.vod;
      this.loading = false;
    },
    vodCardClass: (index) => {
      // 9-th vod is needed only in m-view (3 vods per row)
      if (index === 8) {
        return "uk-visible@m uk-hidden@l";
      }
      return "";
    },
  },
  created() {
    this.fetchVod();
  },
};
</script>
