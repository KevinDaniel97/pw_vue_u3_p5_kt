<template>
  <div class="container">
    <div class="formulario">
      <h1>Componente Estudiante</h1>
      <div class="consultar">
        <input v-model="id" type="text" placeholder="Imgrese ID" />
        <div class="boton">
          <button @click="consultarPorId">Consultar</button>
        </div>
      </div>
      <div class="insertar">
        <p type="Nombre: ">
          <input v-model="nombre" type="text" placeholder="Nombre" />
        </p>
        <p type="Apellido: ">
          <input v-model="apellido" type="text" placeholder="Apellido" />
        </p>
        <p type="Género: ">
          <input v-model="genero" type="text" placeholder="Genero" />
        </p>
        <p type="Fecha de nacimiento: ">
          <input v-model="fechaNacimiento" type="datetime-local" />
        </p>
        <p type="Dirección: "><input v-model="direccion" type="text" /></p>
        <p type="Edad: "><input v-model="edad" type="text" /></p>
        <p type="Correo electrónico: ">
          <input v-model="correo" type="text" />
        </p>
        <p type="Facultad: "><input v-model="facultad" type="text" /></p>
        <p type="Carrera: "><input v-model="carrera" type="text" /></p>
        <div class="boton">
          <button @click="insertar">Insertar</button>
          <button @click="actualizar">Actualizar</button>
          <button @click="eliminar">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  consultarEstudianteFachada,
  insertarFachada,
  actualizarFachada,
  eliminarFachada,
} from "../helpers/clienteEstudiante.js";

export default {
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      genero: null,
      fechaNacimiento: null,
      direccion: null,
      edad: null,
      correo: null,
      facultad: null,
      carrera: null,
    };
  },
  methods: {
    async consultarPorId() {
      const data = await consultarEstudianteFachada(this.id);
      console.log("desde componente");
      console.log(data);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.genero = data.genero;
      this.fechaNacimiento = data.fechaNacimiento;
      this.direccion = data.direccion;
      this.correo = data.correo;
      this.edad = data.edad;
      this.facultad = data.facultad;
      this.carrera = data.carrera;
    },
    async insertar() {
      const estuBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        direccion: this.direccion,
        edad: this.edad,
        correo: this.correo,
        facultad: this.facultad,
        carrera: this.carrera,
      };

      await insertarFachada(estuBody);
    },
    async actualizar() {
      const body = {
        nombre: this.nombre,
        apellido: this.apellido,
        genero: this.genero,
        fechaNacimiento: this.fechaNacimiento,
        direccion: this.direccion,
        edad: this.edad,
        correo: this.correo,
        facultad: this.facultad,
        carrera: this.carrera,
      };

      await actualizarFachada(this.id, body);
    },
    async eliminar() {
      await eliminarFachada(this.id);
    },
  },
};
</script>
<style>
body {
  background-color: #59abe3;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
}

.form {
  width: 340px;
  height: 450px;
  background-color: #eecfcf;
  border-radius: 8px;
  padding: 20px 30px;
  box-shadow: 0 0 40px -10px #868181;
}

p:before {
  content: attr(type);
  display: block;
  margin: 5px 2px;
  font-size: 14px;
  color: #5a5a5a;
  justify-content: left;
  align-items: left;
}

input {
  width: 100%;
  border-radius: 5px;
  border-bottom: 1px #ffffff;
  background: rgb(235, 213, 213);
  color: rgb(0, 0, 0);
}

input:focus {
  border-bottom: 3px solid #78788c;
}
label {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
p {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-bottom: 2px solid #bebed2;
}
button {
  align-items: center;
  border-radius: 5px;
  padding: 7px;
  font-size: 14px;
  background: #8bb5dd;
  margin-top: 10px;
}
h1 {
  padding-bottom: 15px;
  color: #00268f;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.boton {
  text-align: center;
}
</style>