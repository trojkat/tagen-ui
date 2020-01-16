<template>

  <div :class="`tv-strip uk-align-center uk-background-cover strip-${season()}-${timeOfDay()}`">
    <video
      src="//stream.tagen.tv/2014/1/natura-zdrowia-cz-3.mp4"
      poster="https://static.tagen.tv/media/vod_img/232_2.jpg"
      class="uk-margin-auto"
      controls
      uk-video="autoplay: false"></video>
  </div>

</template>

<script>
export default {
  name: "TvStrip",
  methods: {
    season: () => {
      const now = new Date();
      const year = now.getFullYear();
      const springStart = new Date(year, 3, 20);
      const summerStart = new Date(year, 6, 21);
      const fallStart = new Date(year, 9, 22);
      const winterStart = new Date(year, 12, 21);
      if (now < springStart) {
        return "winter";
      }
      if (now < summerStart) {
        return "spring";
      }
      if (now < fallStart) {
        return "summer";
      }
      if (now < winterStart) {
        return "fall";
      }
      return "winter";
    },
    timeOfDay: () => {
      const now = new Date();
      const hour = now.getHours();
      if (hour >= 5 && hour < 10) {
        return "morning";
      }
      if (hour >= 10 && hour < 16) {
        return "noon";
      }
      if (hour >= 16 && hour < 20) {
        return "evening";
      }
      return "night";
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../variables.scss";
  $seasons: winter spring summer fall;
  $timeOfDay: morning noon evening night;

  .tv-strip {
    text-align: center;
    border-bottom: 5px solid $prime-color;
    background-color: #000;

    video {
      padding: 10px 0;
    }

  }

  @each $season in $seasons {
    @each $time in $timeOfDay {
      .strip-#{$season}-#{$time} {
        background-image: url("../assets/img/seasons/#{$season}/#{$time}-wide.jpg");
      }
    }
  }

</style>
