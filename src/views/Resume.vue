<template>
  <q-page v-touch-swipe.mouse.right="onSwipe">
    <q-btn class="aria" type="a" href="/">Go to homepage</q-btn>
    <div
      aria-hidden="true"
      class="row left-panel items-center justify-center q-pa-md"
      v-ripple
      clickable
      @click="$router.push('/')"
    >
      <q-icon name="navigate_before" style="font-size: 2rem;" />
    </div>
    <ResumeAsCode />
  </q-page>
</template>

<script>
import ResumeAsCode from "../components/ResumeAsCode.vue";

export default {
  name: "Resume",

  components: {
    ResumeAsCode
  },
  mounted() {
    document.title = "Resume | Brenna Epp";
  },
  data() {
    return {
      tab: null,
      navHeight: 0,
      sticky: false
    };
  },
  methods: {
    onSwipe() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../styles/quasar.variables'

.left-panel {
  height: 100%;
  position: fixed;
  background-color: alpha($dark, 0.3);
  z-index: 1000;
}
.aria {
    left:-999px;
    position:absolute;
}
</style>
