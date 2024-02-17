<template>
  <h1>Pagina Consultar</h1>
  <Estudiante :txt-buton="buton" />
</template>

<script>
import Estudiante from "../components/Estudiante.vue";
export default {
  created() {
    console.log(this.$router);
    console.log(this.$router.params.id)
    console.log(this.$router.query)
    console.log(this.$router.id)
    console.log(this.$router.edad)


  },
  methods: {
    consultar() {

    }
  },

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

<style></style>