<template>
  <!--<EstudiantePagina />-->
  <h1>Universidad Central del Ecuador</h1>
  <router-view />
</template>

<script>
import EstudiantePagina from "./pages/EstudiantePagina.vue";

export default {
  name: "App",
  components: {
    EstudiantePagina,
  },
};
</script>

<style>
#app {
  margin-top: 50px;
}
</style>