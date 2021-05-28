import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Table, Button, Container } from 'reactstrap';
import { AddModal } from '../components/AddModal';
import { EditModal } from '../components/EditModal';
import { getData, postData } from '../jobs/puestosJobs'


export class MainView extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    data: [],
    withError: false,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      puesto: "",
      empresa: "",
      ciudad: "",
      pais: "", 
    },
  };
  this.editar = this.editar.bind(this)
  this.insertar = this.insertar.bind(this)
  }
 
  
  componentDidMount(){
    getData().then(res => this.setState({
      data: res
    }))
  }

  
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: !this.state.modalActualizar,
    });
  };
 
  
  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: !this.state.modalInsertar,
    });
  };
 
  
  cerrarModal = () => {
    this.setState({ 
        modalActualizar: false,
        modalInsertar: false,
    });
  };

  
  editar = (dato) => {
    var arreglo = this.state.data;
    let registro = arreglo.find(reg => reg.id === dato.id)
    let pos = arreglo.indexOf(registro)
    arreglo[pos] = dato
    this.setState({ data: arreglo, modalActualizar: false });
  };
  
  eliminar = (dato) => {
    var opcion = window.confirm(" deseas eliminar "+dato.puesto+"");
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.forEach((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
      var lista2=this.state.data;
      var contador2=1;
      lista2.forEach((registro) => {
        registro.id=contador2;
        contador2++;
      })
      this.setState({data: lista2});
    }
  };
  
  insertar= (position)=>{
   
  let job = {position: this.state.position,
    description: this.state.description,
    organizationId: this.state.place}
    console.log(job)                              
    postData(job).then(res => this.setState({
    data: [...this.state.data, job]
    }))
    
    this.setState({ modalInsertar: false});
  }

  render(){
    return(
      <>
      <Container className="body-puestos">
        <h1>Listado de Puestos</h1> 
        {this.state.withError && <p>Error de conexion</p>}
        <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear Puestos</Button>
        <br/><br/>
        { 
          this.state.modalInsertar 
          ? <AddModal 
                cerrarModal={this.cerrarModal} 
                insertarPuesto = {this.insertar}
                data={this.state.data}
            /> 
          : null }
        <Table className="table table-striped table-success aling-middle">
          <thead>
            <tr>
                <th>Id</th>
                <th>Puesto</th>
                <th>Empresa</th>
                <th>Descripcion</th>               
                <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((dato,index)=>(
              <tr key={index}>
                <td>{dato.id}</td>
                <td>{dato.position}</td>
                <td>{dato.organization.name}</td>
                <td>{dato.description}</td>
                
                <td>
                <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}>
                      Editar
                </Button>{" "}
                <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
          { 
          this.state.modalActualizar 
          ? <EditModal 
                cerrarModal={this.cerrarModal} 
                actualizar = {this.editar}
                data={this.state.form}
            /> 
          : null }
        </Table>
      </Container>  
      </>
    );
  }
}

