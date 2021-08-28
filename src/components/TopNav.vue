<template>
  <div class="uk-visible@s uk-background-secondary">
    <div class="uk-container uk-container">
      <ul class="uk-subnav uk-subnav-pill uk-flex uk-flex-center" uk-margin v-if="!$store.state.user.basicInfo">
          <li></li>
          <li><a :href="`${$appConfig.tagenUrl}/logowanie/`"><span uk-icon="sign-in"></span> Zaloguj się</a></li>
          <li><a :href="`${$appConfig.tagenUrl}/rejestracja/`"><span uk-icon="users"></span> Zarejestruj się</a></li>
          <li><a :href="`${$appConfig.tagenUrl}/szukaj/`"><span uk-icon="search"></span> Szukaj</a></li>
      </ul>
      <ul class="uk-subnav uk-subnav-pill uk-flex uk-flex-center" uk-margin v-if="$store.state.user.basicInfo">
          <li>
              <a href="#"><span uk-icon="user"></span> {{ $store.state.user.basicInfo.username }} <span uk-icon="triangle-down"></span></a>
              <div class="uk-navbar-dropdown" uk-dropdown="mode: click">
                  <ul class="uk-nav uk-dropdown-nav">
                      <li><a :href="`${$appConfig.tagenUrl}/u/${$store.state.user.basicInfo.username}/`"><span uk-icon="user"></span> Pokaż profil</a></li>
                      <li><a :href="`${$appConfig.tagenUrl}/u/edycja-profilu/`"><span uk-icon="cog"></span> Edytuj profil</a></li>
                      <li><a :href="`${$appConfig.tagenUrl}/wyloguj/`"><span uk-icon="sign-out"></span> Wyloguj</a></li>
                  </ul>
              </div>
          </li>
          <li><a :href="`${$appConfig.tagenUrl}/wiadomosci/inbox/`"><span uk-icon="mail"></span> Wiadomości</a></li>
          <li><a :href="`${$appConfig.tagenUrl}/szukaj/`"><span uk-icon="search"></span> Szukaj</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  async created() {
    await this.$store.dispatch("user/getBasicUserInfo");
  },
};
</script>
