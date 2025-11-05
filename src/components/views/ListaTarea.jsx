import  ListGroup  from "react-bootstrap"
import ItemTarea from "./ItemTarea"

const ListaTarea = ({tareas, borrarTarea}) => {
  return (
    <div>
      <ListGroup className="mt-5">
       {
        tareas.map((tarea, index) => <ItemTarea key={index} tarea={tarea} borrarTarea={borrarTarea}/>)
       }
      </ListGroup>
    </div>
  )
}

export default ListaTarea
