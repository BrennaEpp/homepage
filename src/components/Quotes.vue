<template>
  <div>
    <div class="row justify-end">
      <q-icon class="quote-indicator" size="5.6rem" name="fas fa-quote-right" />
    </div>
    <!-- <q-card-section align="center">
      <span class="text-h5 in-front">Quotes I find inspiring</span>
    </q-card-section> -->
    <!-- <q-separator inset /> -->
    <!-- <q-card-section primary> -->
    <q-carousel
      class="q-px-xl"
      control-color="dark"
      style="height: 100%;"
      arrows
      animated
      v-model="slide"
      swipeable
      infinite
      :autoplay="7500"
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide
        v-for="(quote, index) in quotes"
        :name="index"
        :key="index"
      >
        <q-card style="white-space: pre-wrap;">
          <div class="q-px-xl q-pt-lg q-pb-md">{{ quote.quote }}</div>
          <div class="q-px-xl q-pb-md text-right text-bold text-italic">
            {{ quote.author }}
          </div>
        </q-card>
      </q-carousel-slide>
    </q-carousel>
    <!-- </q-card-section> -->
  </div>
</template>

<script>
import { quotes } from "../data/data.json";

export default {
  name: "Quotes",
  data() {
    return {
      slide: 1,
      quotes: quotes
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/quasar.variables'
.quote-indicator {
    position: relative;
    right: 33px;
    top: 26px
    z-index: 6000;
    height: 0px;
    color: $dark;
    opacity: .5;
}
>>> .q-panel.scroll {
  overflow: hidden;
}
</style>
