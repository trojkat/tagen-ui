<template>

  <div id="footer">
    <div class="uk-container uk-container-small">

      <div class="uk-child-width-1-1@s uk-child-width-1-2@m uk-child-width-1-3@l uk-grid-small" uk-grid>
        <div>
          <h5>Zobacz też</h5>
          <ul class="uk-list uk-link-text">
              <li><a :href="`${$appConfig.tagenUrl}/o-nas/`">O nas</a></li>
              <li><a :href="`${$appConfig.tagenUrl}/o-nas/reklama/`">Reklama</a></li>
              <li><a :href="`${$appConfig.tagenUrl}/o-nas/logo/`">Loga</a></li>
              <li><a :href="`${$appConfig.tagenUrl}/o-nas/widgety/`">Widgety</a></li>
              <li><a :href="`${$appConfig.tagenUrl}/vod/tag/`">Chmura tagów</a></li>
              <li><a :href="`${$appConfig.tagenUrl}/vod/serie/`">Servie filmowe</a></li>
          </ul>
        </div>
        <div>
          <h5>Użytkownicy</h5>
          <ul class="uk-list uk-link-text">
              <li><a :href="`${$appConfig.tagenUrl}/projekty/`">Projekty</a></li>
              <li><a :href="`${$appConfig.tagenUrl}/mapa/`">Mapa</a></li>
              <li><a :href="`${$appConfig.tagenUrl}/typy-kont/`">Typy kont</a></li>
          </ul>
        </div>
        <div>
          <h5>Online: {{ $store.state.user.onlineUsers.length }}</h5>
          <span v-for="onlineUser in $store.state.user.onlineUsers" :key="onlineUser.username">
            <a :href="`${$appConfig.tagenUrl}/u/${onlineUser.username}/`">
              <img :src="`${$appConfig.staticUrl}${onlineUser.avatar}`" :title="onlineUser.username" :alt="onlineUser.username" />
            </a>&nbsp;
          </span>
        </div>
      </div>

      <p class="uk-text-center">
        <a
          href="https://www.facebook.com/tagen.tv"
          class="uk-icon-button uk-margin-small-right"
          uk-icon="facebook"
          title="Facebook"></a>
        <a
          href="https://www.youtube.com/user/tagentv/videos"
          class="uk-icon-button uk-margin-small-right"
          uk-icon="youtube"
          title="YouTube"></a>
        <a
          href="https://twitter.com/tagen_tv"
          class="uk-icon-button"
          uk-icon="twitter"
          title="Twitter"></a>
      </p>
      <p class="uk-text-center">© 2019 TAGEN.TV - telewizja internetowa dla otwartych umysłów</p>

    </div>
  </div>

</template>

<script>
export default {
  name: "Footer",
  async created() {
    await this.$store.dispatch("user/getOnlineUsers");
  },
};
</script>

<style lang="scss">
@import "src/variables.scss";
#footer {
    background: $prime-color;
    padding: 20px 0;
}
</style>
