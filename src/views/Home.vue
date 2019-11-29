<template>
  <q-page>
    <TitleCard ref="home" />

    <q-toolbar ref="nav" class="bg-accent q-px-xl">
      <q-tabs v-model="tab" stretch align="center">
        <q-tab name="home" label="Home" @click="scrollTo('home')" />
        <q-tab name="about" label="About" @click="scrollTo('about')" />
        <q-tab name="skills" label="Skills" @click="scrollTo('skills')" />
        <q-tab name="contact" label="Contact" @click="scrollTo('contact')" />
        <q-tab
          name="resume"
          label="Resume in code"
          @click="$router.push({ name: 'resume' })"
        />
      </q-tabs>
    </q-toolbar>
    <div class="main-content">
      <About ref="about" class="q-pa-xl" />
      <Skills ref="skills" class="q-pa-xl greyed" />
      <Contact ref="contact" class="q-pa-xl" />
    </div>
    <img :src="require('../assets/negative-house.png')" />
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
      // TO-DO: link tab selected to scroll area
      setTimeout(() => {
        if (
          !this.sticky &&
          window.scrollY > window.innerHeight - this.navHeight
        ) {
          this.$refs.nav.$el.classList.add("sticky");
          this.sticky = true;
        } else if (
          this.sticky &&
          window.scrollY < window.innerHeight - this.navHeight
        ) {
          this.$refs.nav.$el.classList.remove("sticky");
          this.sticky = false;
        }
      }, 50);
    },
    scrollTo(ref) {
      this.$refs[ref].$el.scrollIntoView();
      scrollBy(0, -this.navHeight);

      if (
        !this.sticky &&
        window.scrollY > window.innerHeight - this.navHeight
      ) {
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
  z-index: 22000;
}
.main-content {
  max-width: 800px;
  margin: auto;
}
.greyed {
  background-color: whitesmoke;
}
img {
  margin: auto;
  z-index: 1;
  position: absolute;
  bottom: -560px;
  right: 0;

  opacity: 50%;
}
</style>
