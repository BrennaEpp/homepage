<template>
  <q-card flat square>
    <div class="q-pa-xl">
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
    overflow-y: hidden;
}
::v-deep code {
    white-space: pre-wrap;
}
</style>
