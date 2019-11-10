<template>

  <div :class="`uk-card uk-card-small uk-card-default uk-box-shadow-hover-xlarge uk-margin-small ${cls}`">
    <div class="uk-card-media-top">
      <img :src="`${tagenUrl}${vod.coverUrl}`">
    </div>
    <div class="uk-card-body">
      {{ vod.title }}
    </div>
    <div class="uk-card-footer uk-text-meta">
      {{ vod.time }}
    </div>
  </div>

</template>

<script>
export default {
  name: "VodCard",
  props: ["vod", "cls"],
  data: () => ({
    tagenUrl: process.env.VUE_APP_TAGEN_URL,
  }),
};
</script>
