import axios from "axios";

const consultarEstudiante = async (id) => {
    //axios tiene incluido implicitamente un await
    //No hace falta declararlo
    const data = axios.get(`http://localhost:8080/API/v1.0/Matricula/estudiantes/${id}`).then(r => r.data)
    console.log(data);
    return data;
}

const insertar = (body) => {
    const data = axios.post(`http://localhost:8080/API/v1.0/Matricula/estudiantes`, body).then(r => r.data)
    console.log(data)
}

export const consultarEstudianteFachada = (id) => {
    return consultarEstudiante(id);
}
export const insertarFachada = async (body) => {
    await insertar(body);
}



