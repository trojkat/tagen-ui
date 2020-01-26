<template>

  <article class="uk-comment">
    <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
            <img class="uk-comment-avatar" :src="`${$appConfig.tagenUrl}/media/${comment.user.avatar}`" v-if="comment.user.avatar" width="80" height="80" alt="avatar">
            <img class="uk-comment-avatar" src=@/assets/img/avatar.png v-if="!comment.user.avatar" width="80" height="80" alt="avatar">
        </div>
        <div class="uk-width-expand">
            <h4 class="uk-comment-title uk-margin-remove">
              <a class="uk-link-reset" :href="`${$appConfig.tagenUrl}/u/${comment.user.username}/`">{{ comment.user.username }}</a>
            </h4>
            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li><a :href="`${$appConfig.tagenUrl}${comment.objectUrl}`">{{ comment.timeSince }}</a></li>
            </ul>
        </div>
    </header>
    <div class="uk-comment-body">
        <p>{{ comment.comment }}</p>
    </div>
  </article>

</template>

<script>
export default {
  name: "Comment",
  props: ["comment"],
};
</script>
