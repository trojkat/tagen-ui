<template>
  <div class="home">
    <div class="uk-container uk-container-small">
        <span uk-spinner="ratio: 3" v-if="loading"></span>
        <ul id="v-for-object" class="demo">
          <li v-for="vod in vods" :key="vod.title">
            {{ vod.title }}
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Home",
  data: () => ({
    loading: true,
    vods: [],
  }),
  methods: {
    async fetchVod() {
      let result;
      try {
        result = await this.$apollo.query({
          query: gql(`
            query {
              vod(first: 10) {
                title,
                category {
                  title,
                  slug
                }
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
  },
  created() {
    this.fetchVod();
  },
};
</script>
