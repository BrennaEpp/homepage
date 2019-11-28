<template>
  <q-card flat>
    <div class="row left-panel items-center">
      <q-btn color="dark" icon="arrow_back_ios" />
    </div>
    <q-card-section class="q-pa-xl">
      <prism :code="code" />
    </q-card-section>
  </q-card>
</template>

<script>
import { resume } from "../data.json";
import Prism from "vue-prismjs";
import "../styles/prism-resume.css";

export default {
  name: "ResumeAsCode",
  components: {
    Prism
  },
  data() {
    return {
      code: resume
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
