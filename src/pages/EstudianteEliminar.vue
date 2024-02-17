<template>
  <h1>Pagina Eliminar</h1>
  <div class="container">
    <div class="formElim">
      <input v-model="id" type="text" placeholder="Imgrese ID" />
      <button @click="eliminar">Eliminar</button>
    </div>
  </div>
</template>

<script>
import { eliminarFachada } from "../helpers/clienteEstudiante.js";
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async eliminar() {
      await eliminarFachada(this.id);
    },
  },
};
</script>

<style>
.formElim {
  text-align: center;
  border-radius: 8px;
  padding: 20px 30px;
}
</style>