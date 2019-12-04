<template>
  <q-card flat squared class="row background-tint text-center items-center">
    <!-- <img :src="require('../assets/negative-house.png')" /> -->
    <div class="col">
      <div class="q-my-md row justify-center text-h1">
        <span> Brenna Epp </span>
      </div>
      <div class="row justify-center text-h2">
        <span class="text-primary">
          Computer Scientist
        </span>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {
  name: "TitleCard",
  data() {
    return {
      tab: null,
      navHeight: 0,
      sticky: false
    };
  }
};
</script>

<style lang="stylus" scoped>

div {
  z-index: 2;
}

.q-card {
  height: 100%;
  width: 100%;
  // TO-DO: colour pick an appropriate colour
  background: url("../assets/circuits.png") no-repeat left top scroll;
  background-size: auto !important;
}
</style>
