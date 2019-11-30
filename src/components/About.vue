<template>
  <q-card flat squared>
    <q-card-section align="center">
      <span class="text-h3">About</span>
    </q-card-section>
    <q-separator inset />
    <q-card-section>
      {{ text }}
    </q-card-section>
  </q-card>
</template>

<script>
import about from "raw-loader!../data/about.txt";
export default {
  name: "About",
  data() {
    return {
      text: about
    };
  }
};
</script>
