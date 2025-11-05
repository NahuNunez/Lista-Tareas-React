import { ListGroup,Button } from "react-bootstrap"

const ItemTarea = ({tarea, borrarTarea}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between" >
        {tarea}{" "}
        <Button variant="secondary" onClick={() => borrarTarea(tarea)}>❌</Button>
      </ListGroup.Item>
    </div>
  )
}

export default ItemTarea
