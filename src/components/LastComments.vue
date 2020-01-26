<template>

  <div class="uk-container uk-container uk-margin-medium">
    <h2>Najnowsze komentarze</h2>
    <div class="uk-background-default uk-padding">
      <span uk-spinner="ratio: 3" v-if="!$store.state.comment.lastComments"></span>
      <ul class="uk-comment-list">
        <li v-for="comment in $store.state.comment.lastComments" :key="comment.id">
          <Comment :comment="comment" />
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import Comment from "@/components/Comment.vue";

export default {
  name: "LastComments",
  components: {
    Comment,
  },
};
</script>
