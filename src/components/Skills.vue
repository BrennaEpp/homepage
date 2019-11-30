<template>
  <q-card flat>
    <q-card-section align="center">
      <span class="text-h3">Skills</span>
    </q-card-section>
    <q-separator inset />
    <q-card-section class="row q-pa-md q-gutter-lg justify-between">
      <q-list class="col-grow col-7">
        <skills-accordion
          header="Soft skills i.e. why you should hire me"
          :items="skills.softskills"
        />
      </q-list>

      <q-list class="col-grow col-6 col-md-5">
        <skills-accordion header="Languages" :items="skills.languages" />
      </q-list>
      <q-list class="col-grow col-6 col-md-5">
        <skills-accordion header="Tools" :items="skills.tools" />
      </q-list>

      <q-list class="col-grow col-6 col-md-5">
        <skills-accordion header="Frameworks" :items="skills.frameworks" />
      </q-list>

      <q-list class="col-grow col-6 col-md-5">
        <skills-accordion header="Miscellaneous" :items="skills.other" />
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
import { skills } from "../data/data.json";
import SkillsAccordion from "./SkillsAccordion.vue";

export default {
  name: "Skills",
  components: {
    SkillsAccordion
  },
  data() {
    return {
      skills: skills
    };
  }
};
</script>
