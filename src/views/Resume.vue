<template>
  <q-page>
    <div class="row left-panel items-center">
      <q-btn color="dark" icon="arrow_back_ios" @click="$router.push('/')" />
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
  }
};
</script>

<style lang="scss" scoped>
.left-panel {
  height: 100%;
  position: fixed;
  background-color: black;
  z-index: 1000;
}
</style>
