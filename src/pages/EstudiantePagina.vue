<template>
  <!--<h1>Pagina Estudainte</h1>-->
  <h1>Universidad Central</h1>
  <Estudiante />
</template>

<script>
import Estudiante from "../components/Estudiante.vue";

export default {
  components: {
    Estudiante,
  },
};
</script>
<style>
h1 {
  padding-bottom: 15px;
  color: #00268f;
  text-align: center;
}
</style>