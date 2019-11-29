<template>
  <q-card flat squared class="row text-center items-center">
    <!-- <img :src="require('../assets/negative-house.png')" /> -->
    <div class="col">
      <div class="row justify-center text-h1"><span> Brenna Epp </span></div>
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

<style scoped>
img {
  z-index: -100;
  position: fixed;
  top: 0;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 0.5)),
    to(rgba(0, 0, 0, 0))
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
div {
  z-index: 2;
}
</style>
