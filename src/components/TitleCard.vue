<template>
  <q-card flat squared class="row justify-center items-center">
    <div class="col">
    <div class="row text-h1"> Brenna Epp </div>
    <div class="row text-h2"> Computer Scientist</div>
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
