<template>
  <q-page>
    <TitleCard ref="home" />

    <q-toolbar ref="nav" class="bg-accent  q-px-xl">
      <q-tabs v-model="tab" stretch align="center">
        <q-tab name="home" label="Home" @click="scrollTo('home')" />
        <q-tab name="about" label="About" @click="scrollTo('about')" />
        <q-tab name="skills" label="Skills" @click="scrollTo('skills')" />
        <q-tab name="contact" label="Contact" @click="scrollTo('contact')" />
        <q-tab name="tab3" label="Resume in code" />
      </q-tabs>
    </q-toolbar>
    <About ref="about" />
    <Skills ref="skills" />
    <Contact ref="contact" />
  </q-page>
</template>

<script>
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Skills from "../components/Skills.vue";
import TitleCard from "../components/TitleCard.vue";

export default {
  name: "Home",

  components: {
    About,
    Contact,
    Skills,
    TitleCard
  },
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
