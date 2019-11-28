<template>
  <q-card flat class="row justify-start items-start content-start">
 
  <div class="row q-pa-md">
    <q-list bordered separator>

    <q-expansion-item group="items" v-for="(item, index) in items" :key=index clickable v-ripple @click="chosen = item" :label="item.title">
         
         <q-card class="bg-grey-4">
          <q-card-section>
            {{ item.description }} 
          </q-card-section>
         </q-card>
         </q-expansion-item>
    
    </q-list>


  </div>

  </q-card>
</template>

<script>
export default {
  name: "Skills",
  data() {
      return {
          items: [
              {title: "Quasar", description: "Framework of components"},
              {title: "Cordova", description: "Mobile app maker"},
              {title: "Quasar1", description: "Framework of components1"},
              {title: "Cordova1", description: "Mobile app maker1"}
          ],
          chosen: null
      }
  },
  computed: {
      firstList() {
          return this.items.slice(0, this.items.length/2);
      },
      secondList() {
          return this.items.slice(this.items.length/2);
      }
  }
};
</script>

<style lang="scss" scoped>
.chosen-item {
    background-color: azure;
}
.description {
    background-color: azure;
    min-width: 50%;

}
</style>