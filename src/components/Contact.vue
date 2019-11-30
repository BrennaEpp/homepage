<template>
  <q-card flat squared>
    <q-card-section align="center">
      <span class="text-h3 in-front">Contact</span>
    </q-card-section>
    <q-separator inset />
    <q-card-section class="in-front" align="center">
      <div class="col">
        <q-btn
          flat
          color="primary"
          icon="mail"
          label="BrennaNatashaEpp@gmail.com"
          type="a"
          href="mailto:brennanatashaepp@gmail.com"
        />
      </div>
      <div class="col">
        <q-btn
          flat
          color="primary"
          icon="fab fa-linkedin"
          label="LinkedIn"
          type="a"
          href="https://www.linkedin.com/in/brenna-epp-1b9b82140"
        />
        <q-btn
          flat
          color="primary"
          icon="fab fa-github"
          label="GitHub"
          type="a"
          href="https://github.com/BrennaEpp"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      text: 2
    };
  }
};
</script>

<style scoped>
.in-front {
  position: relative;
  z-index: 1000;
}
</style>
