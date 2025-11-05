import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ListaTarea from './ListaTarea';
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import ItemTarea from "./ItemTarea";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const tareasLocalstorage = JSON.parse(localStorage.getItem('tareasKey')) || [];

  const [tareas, setTareas] = useState(tareasLocalstorage);
  /* console.log(tareas.data); */

  const posteriorValidacion = (data) => {
    setTareas([...tareas, data.tarea]);

    reset();
  };

  useEffect(() => {
    
    localStorage.setItem('tareasKey', JSON.stringify(tareas))
    
  }, [tareas]);


  const borrarTarea = (nombreTarea) => {

    const tareaFiltradas = tareas.filter((ItemTarea) => ItemTarea !== nombreTarea);
    setTareas(tareaFiltradas);
  }

  return (
    <div className="container my-5">
      <Form onSubmit={handleSubmit(posteriorValidacion)}> 
      <Form.Group className="mb-3 d-flex justify-content-between">

        <Form.Control type="text" placeholder="Ingrese una tarea"  {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 2,
                message: "La tarea debe tener como minimo dos caracteres",
              },
              maxLength: {
                value: 50,
                message: "La tarea debe tener como maximo 50 caracteres",
              },
            })} />

        <Button variant="" type="submit">
        ➕
        </Button>
      </Form.Group>

      <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> 
      <Form.Text className="text-danger"> {errors.tarea?.message} </Form.Text> 
      
      
      </Form>

      <ListaTarea tareas={tareas} borrarTarea={borrarTarea}></ListaTarea>

    </div>
  );
}

export default Formulario;