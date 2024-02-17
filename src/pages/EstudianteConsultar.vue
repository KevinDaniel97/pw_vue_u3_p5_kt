<template>
  <h1>Pagina Consultar</h1>
  <Estudiante :txt-buton="buton" />
</template>

<script>
import Estudiante from "../components/Estudiante.vue";
export default {
  components: {
    Estudiante,
  },
  data() {
    return {
      buton: "Consultar",
    };
  },
};
</script>

<style>
</style>