<template>

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
                        <li><a href="#/vod"><span class="uk-margin-small-right uk-icon" uk-icon="icon: play-circle"></span> VOD</a></li>
                        <li><a href="#/o-nas"><span class="uk-margin-small-right uk-icon" uk-icon="icon: info"></span> O nas</a></li>
                        <li><a href="#/kontakt"><span class="uk-margin-small-right uk-icon" uk-icon="icon: mail"></span> Kontakt</a></li>
                    </ul>

                </div>
            </div>
          </div>

          <div class="uk-visible@s">
            <ul class="uk-navbar-nav">
                <li>
                    <a href="#/vod">VOD</a>
                </li>
                <li>
                    <a href="#/o-nas">O NAS</a>
                </li>
                <li>
                    <a href="#/kontakt">KONTAKT</a>
                </li>
            </ul>
          </div>

        </div>
    </nav>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TagenNav extends Vue {}
</script>

<style lang="scss">
#main-menu a {
    font-size: 20px;
}
</style>
