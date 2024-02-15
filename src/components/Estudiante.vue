<template>
  <h1>Componente Estudiante</h1>
  <input v-model="id" type="text" />
  <button @click="consultarPorId">consultar</button>
  <input v-model="nombre" type="text" />
  <input v-model="apellido" type="text" />
  <button @click="insertar">insertar</button>
</template>

<script>
import {
  consultarEstudianteFachada,
  insertarFachada,
} from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log("desde componente");
      console.log(data);
      this.nombre = data.nombre;
    },
    async insertar() {
      const estuBody = {
        nombre: "Dani",
        apellido: this.apellido,
        genero: "M",
        fechaNacimiento: null,
        direccion: null,
        edad: 25,
        correo: "daniel@gmail",
        facultad: "Ciencias Aplicadas",
        carrera: "computacion",
      };

      await insertarFachada(estuBody);
    },
  },
};
</script>
<style>
</style>