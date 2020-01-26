<template>

  <div :class="`uk-card uk-card-small uk-card-default uk-box-shadow-hover-xlarge uk-margin-small ${cls}`">
    <div class="uk-card-media-top">
      <a :href="`${$appConfig.tagenUrl}${vod.url}`">
        <img :src="`${$appConfig.staticUrl}${vod.coverUrl}`">
      </a>
    </div>
    <div class="uk-card-body">
      <div class="uk-text-meta">{{ vod.category.title }}</div>
      <div class="uk-text-bold uk-text-uppercase">
        {{ vod.title }} <span class="uk-badge uk-background-primary" v-if="vod.proOnly">PRO</span>
      </div>
    </div>
    <div class="uk-card-footer uk-text-meta">
      <div class="uk-flex uk-flex-center">
        <div>{{ new Date(vod.insertDate).toLocaleDateString() }}</div>
        <div class="uk-padding-small uk-padding-remove-vertical" v-if="!position && !rating"><span uk-icon="icon: clock; ratio: 0.8"></span> {{ vod.time }}</div>
        <div v-if="!position && !rating"><span uk-icon="icon: comment; ratio: 0.8"></span> {{ vod.commentsCounter }}</div>
        <div class="uk-padding-small uk-padding-remove-vertical" v-if="position"><span uk-icon="icon: play-circle; ratio: 0.8"></span> {{ index + 1 }}</div>
        <div class="uk-padding-small uk-padding-remove-vertical" v-if="rating"><span uk-icon="icon: star; ratio: 0.8"></span> {{ vod.rating }}</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "VodCard",
  props: ["vod", "cls", "position", "rating", "index"],
};
</script>
