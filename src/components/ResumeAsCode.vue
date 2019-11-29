<template>
  <q-card flat>
    <q-card-section class="q-pa-xl">
      <prism lang="javascript" :code="code" />
    </q-card-section>
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
