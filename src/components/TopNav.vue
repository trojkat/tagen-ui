<template>
  <div class="uk-visible@s uk-background-secondary">
    <div class="uk-container uk-container">
      <ul class="uk-subnav uk-subnav-pill uk-flex uk-flex-center" uk-margin v-if="$store.state.user.basicInfo">
          <li><a href="#">Active</a></li>
          <li><a href="#">Item</a></li>
          <li>
              <a href="#">More <span uk-icon="icon: triangle-down"></span></a>
              <div uk-dropdown="mode: click;">
                  <ul class="uk-nav uk-dropdown-nav">
                      <li class="uk-active"><a href="#">Active</a></li>
                      <li><a href="#">Item</a></li>
                      <li class="uk-nav-header">Header</li>
                      <li><a href="#">Item</a></li>
                      <li><a href="#">Item</a></li>
                      <li class="uk-nav-divider"></li>
                      <li><a href="#">Item</a></li>
                  </ul>
              </div>
          </li>
      </ul>
      <ul class="uk-subnav uk-subnav-pill uk-flex uk-flex-center" uk-margin v-if="!$store.state.user.basicInfo">
          <li><a :href="`${$appConfig.tagenUrl}/logowanie/`"><span uk-icon="sign-in"></span> Zaloguj się</a></li>
          <li><a :href="`${$appConfig.tagenUrl}/rejestracja/`"><span uk-icon="users"></span> Zarejestruj się</a></li>
          <li><a :href="`${$appConfig.tagenUrl}/szukaj/`"><span uk-icon="search"></span> Szukaj</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  data: () => ({
    loggedIn: false,
  }),
  async created() {
    await this.$store.dispatch("user/getBasicUserInfo");
  },
};
</script>
