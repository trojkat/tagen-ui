<template>

  <div class="uk-background-default">
    <div class="uk-container uk-container">

      <nav id="main-menu" class="uk-margin" uk-navbar>

          <div class="uk-navbar-left">
              <a class="uk-navbar-item uk-logo" href="#/">
                <img src="@/assets/img/logo-vertical.png" title="TAGEN.TV" alt="TAGEN.TV">
              </a>
          </div>

          <div class="uk-navbar-right">

            <div class="uk-hidden@s">
              <button class="uk-button uk-button-default" type="button" uk-toggle="target: #mobile-menu"><span uk-navbar-toggle-icon></span></button>
              <div id="mobile-menu" uk-offcanvas="flip: true; overlay: true">
                  <div class="uk-offcanvas-bar">
                      <button class="uk-offcanvas-close" type="button" uk-close></button>
                      <ul class="uk-nav uk-nav-primary">
                          <li class="uk-nav-header">PRZEJDŹ DO</li>
                          <li><a href="#/"><span class="uk-margin-small-right uk-icon" uk-icon="icon: play-circle"></span> Start</a></li>
                          <li><a :href="`${$appConfig.tagenUrl}/vod/`"><span class="uk-margin-small-right uk-icon" uk-icon="icon: play-circle"></span> VOD</a></li>
                          <li><a :href="`${$appConfig.tagenUrl}/projekty/`"><span class="uk-margin-small-right uk-icon" uk-icon="icon: play-circle"></span> Projekty</a></li>
                          <li><a :href="`${$appConfig.tagenUrl}/o-nas/`"><span class="uk-margin-small-right uk-icon" uk-icon="icon: info"></span> O nas</a></li>
                          <li><a :href="`${$appConfig.tagenUrl}/kontakt/`"><span class="uk-margin-small-right uk-icon" uk-icon="icon: mail"></span> Kontakt</a></li>
                      </ul>

                  </div>
              </div>
            </div>

            <div class="uk-visible@s">
              <ul class="uk-navbar-nav">
                  <li>
                      <a :href="`${$appConfig.tagenUrl}/vod/`">VOD</a>
                  </li>
                  <li>
                      <a :href="`${$appConfig.tagenUrl}/projekty/`">Projekty</a>
                  </li>
                  <li>
                      <a :href="`${$appConfig.tagenUrl}/o-nas/`">O NAS</a>
                  </li>
                  <li>
                      <a :href="`${$appConfig.tagenUrl}/kontakt/`">KONTAKT</a>
                  </li>
              </ul>
            </div>

          </div>
      </nav>
    </div>
  </div>

</template>

<script>
export default {
  name: "TagenNav",
};
</script>

<style lang="scss">
#main-menu a {
    font-size: 20px;
}
</style>
