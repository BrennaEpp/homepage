<template>
  <q-page>
    <TitleCard ref="home" />

    <div class="mask-hover">
      <span class="circuits">MASK1</span>
      <button id="work" type="button" name="Hover">MASK1</button>
    
    </div>

    <q-toolbar ref="nav" class="bg-accent  q-px-xl">
      <q-tabs v-model="tab" stretch align="center">
       
         <div class="mask-hover">
          <q-tab name="home"  @click="scrollTo('home')">
            <div class="q-tab__label circuits">Home</div>
           
          </q-tab>
          <button class="q-tab__label">HOME</button>
    </div>

        <q-tab name="about" label="About" @click="scrollTo('about')" >
          <span class="circuits">Home</span>
        </q-tab>

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
.q-tab {
      width: 125px;
    height: 50px;
}
@mixin button($bcolor, $url, $x1, $y1, $bor, $col) {
  background: $bcolor;
  -webkit-mask: url($url);
  mask: url($url);
  -webkit-mask-size: $x1 $y1;
  mask-size: $x1 $y1;
  border: $bor;
  color: $col;
}

.mask-hover {
  // position: relative;
  // overflow: hidden;
  transition: 0.5s;
      width: 125px;
    // height: 50px;

  button {
    font-weight: 300;
    width: 125px;
    height: 50px;

    @include button(
      rgb(243, 166, 0),
     "../assets/circuits.png",
      2300%,
      100%,
      none,
      #fff
    );
    cursor: pointer;
    -webkit-animation: fade-out 0.7s steps(22) forwards;
    animation: fade-out 2.7s steps(22) forwards;

    &:hover {
      -webkit-animation: fade-in 0.7s steps(22) forwards;
      animation: fade-in 2.7s steps(22) forwards;
    }
  }
}
.q-tab__content {
    width: 125px;
    height: 50px;
}
.circuits {
        width: 100%;

  // margin: 0;
  // padding: 0;
  // box-sizing: border-box;
  position: absolute;
  // color: #000;
  // text-align: center;
  // width: 101%;
  // font-family: "Lato", sans-serif;
  font-weight: 300;
  // position: absolute;
  // font-size: 20px;
  // margin-top: 12px;
  // overflow: hidden;
}

@-webkit-keyframes fade-in {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@keyframes fade-in {
  from {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }

  to {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
}

@-webkit-keyframes fade-out {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}

@keyframes fade-out {
  from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }

  to {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
}

.q-tabs {
  width: 100%;
}
.sticky {
  position: fixed;
  top: 0;
  z-index: 2000;
}
</style>
