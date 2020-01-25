<template>
  <div class="uk-container uk-container uk-margin-medium">
    <ul class="uk-subnav uk-subnav-pill uk-padding uk-padding-remove-top">
        <li class="uk-text-bold">Zobacz więcej:</li>
        <li class="uk-active"><a href="#/">Najnowsze</a></li>
        <li v-for="category in $store.state.vod.categories" :key="category.id">
          <a :href="`${$appConfig.tagenUrl}/vod/kategoria/${category.id}/`">{{ category.title }}</a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VodPopularCategories",
};
</script>
