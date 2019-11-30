<template>
  <q-card flat square>
    <div class="q-py-xl q-pl-xl">
      <prism lang="javascript" :code="code" />
    </div>
  </q-card>
</template>

<script>
import resume from "raw-loader!../data/resume.txt";
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

<style lang="stylus" scoped>
@import '../styles/quasar.variables'

.q-card {
    background-color: $code-bkg;
}
</style>
