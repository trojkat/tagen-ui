<template>

  <div class="uk-container uk-container uk-margin-medium">
    <h2>{{ title }}</h2>
    <span uk-spinner="ratio: 3" v-if="!vodList"></span>
    <div class="uk-clearfix">
      <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-small" uk-height-match="target: > div > .uk-card > .uk-card-body" uk-grid>
        <div v-for="(vod, index) in vodList" :key="vod.title">
          <VodCard :vod="vod" :cls="vodCardClass(index)" />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import VodCard from "@/components/VodCard.vue";

export default {
  name: "VodList",
  props: ["vodList", "title"],
  components: {
    VodCard,
  },
  methods: {
    vodCardClass: (index) => {
      // 9-th vod is needed only in m-view (3 vods per row)
      if (index === 8) {
        return "uk-visible@m uk-hidden@l";
      }
      return "";
    },
  },
};
</script>
