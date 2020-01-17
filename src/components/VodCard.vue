<template>

  <div :class="`uk-card uk-card-small uk-card-default uk-box-shadow-hover-xlarge uk-margin-small ${cls}`">
    <div class="uk-card-media-top">
      <a :href="`${$appConfig.tagenUrl}${vod.url}`">
        <img :src="`${$appConfig.tagenUrl}${vod.coverUrl}`">
      </a>
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
};
</script>
