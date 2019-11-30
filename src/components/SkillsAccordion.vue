<template>
  <div>
    <q-item-label header class="text-dark">{{ header }}</q-item-label>
    <q-expansion-item
      expand-separator
      class="text-accent"
      dense
      :group="header"
      v-for="(item, index) in items"
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
  </div>
</template>

<script>
export default {
  name: "SkillsAccordion",
  data() {
    return {
      chosen: null
    };
  },
  props: {
    items: Array,
    header: String
  }
  // TO-DO: make accordions ARIA-complacent:
  // https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html
};
</script>
