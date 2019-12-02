<template>
  <q-card flat squared>
    <q-card-section align="center">
      <span class="text-h3">Some random sketches</span>
    </q-card-section>
    <q-separator inset />
    <q-card-section>
      <q-card-section align="center">
        <span class="text-dark"
          >some of these are based off of characters I did not create</span
        >
      </q-card-section>
      <q-carousel
        control-color="dark"
        height="37rem"
        arrows
        animated
        v-model="slide"
        swipeable
        infinite
        :autoplay="8000"
        transition-prev="slide-right"
        transition-next="slide-left"
      >
        <q-carousel-slide v-for="index in 10" :name="index" :key="index">
          <q-card flat>
            <img :src="require(`@/statics/arts/${index}.jpg`)" />
          </q-card>
        </q-carousel-slide>
      </q-carousel>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "ArtDisplay",
  data() {
    return {
      slide: 1
    };
  }
};
</script>
