<template>
  <h1>Pagina Guardar</h1>
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
      buton: "Guardar",
    };
  },
};
</script>

<style>
</style>