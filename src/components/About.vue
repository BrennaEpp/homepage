<template>
  <q-card flat squared>
    top 1
    <p v-for="n in 5" :key="n">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
      praesentium molestias a adipisci, dolore vitae odit, quidem consequatur
      optio voluptates asperiores pariatur eos numquam rerum delectus commodi
      perferendis voluptate?
    </p>
  </q-card>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      tab: null,
      navHeight: 0,
      sticky: false
    };
  }
};
</script>
