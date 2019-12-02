<template>
  <q-page>
    <TitleCard ref="home" />

    <q-toolbar ref="nav" class="bg-accent q-px-xl">
      <q-tabs v-model="tab" stretch align="center">
        <q-tab
          v-for="tab in tabs"
          :key="tab"
          :name="tab"
          :label="tab"
          @click="smoothScroll(tab)"
        />
        <q-tab
          name="resume"
          label="Resume in code"
          @click="$router.push({ name: 'resume' })"
        />
      </q-tabs>
    </q-toolbar>
    <div class="main-content">
      <About ref="about" class="q-px-xl q-pt-xl" />
      <Quotes class="q-pt-md q-pb-xl" />
      <Skills ref="skills" class="q-pa-xl greyed" />
      <ArtDisplay ref="sketches" class="q-pa-xl" />
      <Contact ref="contact" class="q-pa-xl" />
    </div>
    <img :src="require('../assets/negative-house.png')" />
  </q-page>
</template>

<script>
import About from "../components/About.vue";
import ArtDisplay from "../components/ArtDisplay.vue";
import Contact from "../components/Contact.vue";
import Quotes from "../components/Quotes.vue";
import Skills from "../components/Skills.vue";
import TitleCard from "../components/TitleCard.vue";
import { smoothScroll } from "../utils/smoothScroll";

export default {
  name: "Home",
  components: {
    About,
    ArtDisplay,
    Contact,
    Quotes,
    Skills,
    TitleCard
  },
  data() {
    return {
      tabs: ["home", "about", "skills", "sketches", "contact"],
      tab: null,
      navHeight: 0,
      sticky: false
    };
  },
  mounted() {
    this.navHeight = this.$refs.nav.$el.offsetHeight;

    this.$refs.home.$el.style.height =
      window.innerHeight - this.navHeight + "px";

    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    handleWindowResize() {
      this.$refs.home.$el.style.height =
        window.innerHeight - this.navHeight + "px";
      this.navHeight = this.$refs.nav.$el.offsetHeight;
    },
    handleScroll() {
      setTimeout(() => {
        if (
          !this.sticky &&
          window.scrollY > window.innerHeight - this.navHeight / 2
        ) {
          this.$refs.nav.$el.classList.add("sticky");
          this.sticky = true;
        } else if (
          this.sticky &&
          window.scrollY < window.innerHeight - this.navHeight / 2
        ) {
          this.$refs.nav.$el.classList.remove("sticky");
          this.sticky = false;
        }
        this.linkSelectedTabToScrollPos();
      }, 50);
    },
    linkSelectedTabToScrollPos() {
      for (let tab of this.tabs) {
        if (
          this.$refs[tab] &&
          window.scrollY > this.$refs[tab].$el.offsetTop - 250
        ) {
          this.tab = tab;
        } else {
          break;
        }
      }
    },
    smoothScroll(ref) {
      var el = this.$refs[ref].$el;
      if (!el) {
        return;
      }

      let offset = 0;
      // TO-DO: there's some kinks here; look into them
      if (!this.sticky) {
        offset = -this.navHeight;
      }

      smoothScroll(el, offset);
    }
  }
};
</script>

<style scoped>
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
  opacity: 0.5;
}
</style>
