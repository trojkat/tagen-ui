<template>
    <VodList :vodList="$store.state.vod.lastVods" title="Biblioteka Vod"/>
</template>

<script>
import VodList from "@/components/VodList.vue";

export default {
  name: "Vod",
  components: {
    VodList,
  },
};
</script>
