import React from 'react';
import {Button,FormGroup,Alert} from "reactstrap";

class Formulariociudades extends React.Component{

  constructor(props) {
    super(props);
    this.props = props;
    
  }

  /* Cambia la ciudad seleccioando de acuerdo si se dio click en editar */
  componentDidUpdate(prevProps){
    if(this.props.ciudadesSeleccionado !== prevProps.ciudadesSeleccionado) {
      if(this.props.ciudadesSeleccionado !== null ){
        this.setState({form: this.props.ciudadesSeleccionado[0]})
      }
      
    }
  }

  state = {
    form: {
      id: Date.now(),
      nombre: "",
    },
    error:false
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  insertar= ()=>{
    const {nombre} = this.state.form;
    if(nombre.trim() === '') {
      this.setState({
        error:true
      })
      return;
    }

    /* Si diste en editar entonces es actualizar*/
    if(this.props.ciudadesSeleccionado === null)
    {
      this.props.guardarDatosCiudades(this.state.form)
    }
    /* Sino agregar */
    else {
      this.props.actualizarCiudades(this.state.form)
    }
    this.setState(({
      form: {
        id: Date.now(),
        nombre: "",
      },
      error:false
    }))
  }
render(){
        return (
            <div className="mt-5">
                
           <div><h3>Registro</h3></div>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            
            <Button
              color="primary"
              onClick={() => this.insertar(this.state.form)}
            >
              Guardar
            </Button>
          {
            (this.state.error) ? <Alert color="danger" className="mt-5">Todos los campos son obligatorios</Alert> : null
          }
          
          </div>
        )
    }
}

export default Formulariociudades;