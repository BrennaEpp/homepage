<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <transition :name="transitionName">
        <router-view class="transition-page" />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutDefault",
  data() {
    return {
      transitionName: null
    };
  },
  mounted() {
    document.title = "Brenna Epp";
  },
  watch: {
    $route(to, from) {
      if (to.name === "home" && from.name === "resume") {
        this.transitionName = "slide-right";
      } else if (from.name === "home" && to.name === "resume") {
        this.transitionName = "slide-left";
      }
    }
  }
};
</script>

<style>
.transition-page {
  position: absolute;
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
