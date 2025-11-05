import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
      <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ingrese una tarea" />
        <Button variant="" type="submit">
        ➕
        </Button>
      </Form.Group>

      <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>

    </div>
  );
}

export default Formulario;