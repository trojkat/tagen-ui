<template>

  <div :class="`uk-card uk-card-small uk-card-default uk-box-shadow-hover-xlarge uk-margin-small ${cls}`">
    <div class="uk-card-media-top">
      <a :href="`${$appConfig.tagenUrl}${vod.url}`">
        <img :src="`${$appConfig.tagenUrl}${vod.coverUrl}`">
      </a>
    </div>
    <div class="uk-card-body">
      <div class="uk-text-meta">{{ vod.category.title }}</div>
      <div class="uk-text-bold uk-text-uppercase">
        {{ vod.title }} <span class="uk-badge uk-background-primary">PRO</span>
      </div>
    </div>
    <div class="uk-card-footer uk-text-meta">
      <div class="uk-flex uk-flex-center">
        <div>{{ new Date(vod.insertDate).toLocaleDateString() }}</div>
        <div class="uk-padding-small uk-padding-remove-vertical"><span uk-icon="icon: clock; ratio: 0.8"></span> {{ vod.time }}</div>
        <div><span uk-icon="icon: comment; ratio: 0.8"></span> {{ vod.commentsCounter }}</div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "VodCard",
  props: ["vod", "cls"],
};
</script>
