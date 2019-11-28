<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page>
        <q-card ref="home">
          sd
        </q-card>

        <q-toolbar ref="nav" class="bg-accent  q-px-xl">
          <q-tabs v-model="tab" stretch align="center">
            <q-tab name="tab1" label="Tab 1" @click="scrollTo('about')" />
            <q-tab name="tab2" label="Tab 2" @click="scrollTo('tab2')" />
            <q-tab name="tab3" label="Tab 3" @click="scrollTo('tab3')" />
          </q-tabs>
        </q-toolbar>
        <q-card tabindex="-1" flat squared ref="about">
          top 1
          <p v-for="n in 5" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil
            praesentium molestias a adipisci, dolore vitae odit, quidem
            consequatur optio voluptates asperiores pariatur eos numquam rerum
            delectus commodi perferendis voluptate?
          </p>
        </q-card>
        <q-card tabindex="-1" flat squared ref="tab2">
          <div ref="tab2Top"></div>
          seeeeee
          <p v-for="n in 30" :key="n">
            dfgsd
          </p>
        </q-card>

        <q-card tabindex="-1" flat squared ref="tab3">
          top 3
          <p v-for="n in 30" :key="n">
            tab3
          </p>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "LayoutDefault",

  // components: {
  //   HelloWorld
  // },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    this.$refs.home.$el.style.height =
      window.innerHeight - this.$refs.nav.$el.offsetHeight + "px";
    window.addEventListener("resize", this.handleWindowResize);

    this.navHeight = this.$refs.nav.$el.offsetHeight;
  },
  data() {
    return {
      tab: null,
      navHeight: 0,
      sticky: false
    };
  },
  computed: {},
  methods: {
    handleWindowResize() {
      this.$refs.home.$el.style.height =
        window.innerHeight - this.navHeight + "px";
    },
    handleScroll() {
      setTimeout(() => {
        if (!this.sticky && window.scrollY > window.innerHeight - 100) {
          this.$refs.nav.$el.classList.add("sticky");
          this.sticky = true;
        } else if (this.sticky && window.scrollY < window.innerHeight - 100) {
          this.$refs.nav.$el.classList.remove("sticky");
          this.sticky = false;
        }
      }, 50);
    },
    scrollTo(ref) {
      this.$refs[ref].$el.scrollIntoView();
      scrollBy(0, -this.navHeight);

      if (!this.sticky && window.scrollY > window.innerHeight - 100) {
        this.$refs.nav.$el.classList.add("sticky");
        this.sticky = true;
        scrollBy(0, -this.navHeight);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.q-tabs {
  width: 100%;
}
.sticky {
  position: fixed;
  top: 0;
  z-index: 2000;
}
</style>
