<template>
  <!--<EstudiantePagina />-->
  <h1>Universidad Central del Ecuador</h1>
  <NavBar />
  <router-view />
</template>

<script>
import EstudiantePagina from "./pages/EstudiantePagina.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    EstudiantePagina,
    NavBar
  },
};
</script>

<style>
#app {
  margin-top: 50px;
}
</style>