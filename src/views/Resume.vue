<template>
  <q-page>
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

<style lang="scss" scoped></style>
