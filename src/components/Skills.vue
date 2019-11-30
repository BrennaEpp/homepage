<template>
  <q-card flat>
    <q-card-section align="center">
      <span class="text-h3">Skills</span>
    </q-card-section>
    <q-separator inset />
    <q-card-section class="row q-pa-md q-gutter-lg justify-between">
      <q-list class="col-grow col-7">
        <q-item-label header class="text-dark"
          >Soft skills a.k.a why you should hire me</q-item-label
        >
        <q-expansion-item
          expand-separator
          class="text-accent"
          dense
          group="skills.softskills"
          v-for="(item, index) in skills.softskills"
          :key="index"
          clickable
          @click="chosen = item"
          :label="item.title"
          :aria-expanded="chosen === item"
          role="button"
        >
          <q-card class="text-black bg-grey-12">
            <q-card-section>
              <p>{{ item.description }}</p>
              <p>{{ item.details }}</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <q-list class="col-grow col-6 col-md-5">
        <q-item-label header class="text-dark">Languages</q-item-label>
        <q-expansion-item
          expand-separator
          class="text-accent"
          dense
          group="skills.languages"
          v-for="(item, index) in skills.languages"
          :key="index"
          clickable
          @click="chosen = item"
          :label="item.title"
          :aria-expanded="chosen === item"
          role="button"
        >
          <q-card class="text-black bg-grey-12">
            <q-card-section>
              <p>{{ item.description }}</p>
              <p>{{ item.details }}</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <q-list class="col-grow col-6 col-md-5">
        <q-item-label header class="text-dark">Frameworks</q-item-label>
        <q-expansion-item
          expand-separator
          class="text-accent"
          dense
          group="skills.tools"
          v-for="(item, index) in skills.tools"
          :key="index"
          clickable
          @click="chosen = item"
          :label="item.title"
          :aria-expanded="chosen === item"
          role="button"
        >
          <q-card class="text-black bg-grey-12">
            <q-card-section>
              <p>{{ item.description }}</p>
              <p>{{ item.details }}</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <q-list class="col-grow col-6 col-md-5">
        <q-item-label header class="text-dark">Tools</q-item-label>
        <q-expansion-item
          expand-separator
          class="text-accent"
          dense
          group="skills.frameworks"
          v-for="(item, index) in skills.frameworks"
          :key="index"
          clickable
          @click="chosen = item"
          :label="item.title"
          :aria-expanded="chosen === item"
          role="button"
        >
          <q-card class="text-black bg-grey-12">
            <q-card-section>
              <p>{{ item.description }}</p>
              <p>{{ item.details }}</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <q-list class="col-grow col-6 col-md-5">
        <q-item-label header class="text-dark">Miscellaneous</q-item-label>
        <q-expansion-item
          expand-separator
          class="text-accent"
          dense
          group="skills.other"
          v-for="(item, index) in skills.other"
          :key="index"
          clickable
          @click="chosen = item"
          :label="item.title"
          :aria-expanded="chosen === item"
          role="button"
        >
          <q-card class="text-black bg-grey-12">
            <q-card-section>
              <p>{{ item.description }}</p>
              <p>{{ item.details }}</p>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
import { skills } from "../data/data.json";

export default {
  name: "Skills",
  data() {
    return {
      skills: skills,
      chosen: null
    };
  }
  // TO-DO: separate accordion into component
  // TO-DO: make accordions ARIA-complacent:
  // https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html
};
</script>
