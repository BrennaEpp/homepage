<template>
  <q-page class="text-white">
    <div class="content">
      <p class="text-h1 curved-start">Sorry</p>
      <p class="text-h4">Nothing here</p>
      <q-btn color="accent" style="width:200px;" @click="$router.go(-1)">
        Go back
      </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Error404",
  mounted() {
    document.title = "404 | BE";
  }
};
</script>

<style scoped lang="scss">
.q-page {
  height: 100%;
  width: 100%;
  //TO-DO: colour pick an appropriate colour
  background: #502f1c url("../assets/sad-kitty.jpg") no-repeat left top scroll;
  background-size: cover;
}
.content {
  position: absolute;
  top: 38%;
  right: 20%;
}
.curved-start {
  // to visually line up curved letters
  margin-left: -100px;
}
</style>
