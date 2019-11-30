<template>
  <q-card flat squared class="row text-center items-center">
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

<style lang="stylus"  scoped>

div {
  z-index: 2;
}

.q-card {
  height: 100%;
  width: 100%;
  background: url("../assets/circuits.png") no-repeat center top local;
  background-size: cover;
}
</style>
