import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup} from 'reactstrap';
import { postData, getEmpresa } from '../jobs/puestosJobs'

export class AddModal extends React.Component {
  constructor(props){
      
      super(props)
      this.props = props
      this.handleChange = this.handleChange.bind(this);
      this.insertarPuesto = this.insertarPuesto.bind(this);
      this.state={
          id:Date.now(),
          position: "",
          description: "",                   
          data: [],
          organizations: [],
          
      }      
  };

  componentDidMount() {

    getEmpresa().then(res => this.setState({
      organizations: res
    }))
    
	}
  

  handleChange (e){
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    
    })
  }

  handleSelectCountry = (e) => {
		e.preventDefault();
		this.setState({
			pais: JSON.parse(e.target.value),
      
		});  
  }
  
  handleNewEmpresa = (e) => {
		e.preventDefault();
		this.setState({
			place: JSON.parse(e.target.value),
      
		});  
  }

  handleSelectCity = (e) => {
		e.preventDefault();
		this.setState({
			place: JSON.parse(e.target.value),
      
		});  
  }

  insertarPuesto(){
   this.props.insertarPuesto(this.state);
   let job = {position: this.state.position,
               description: this.state.description,
               organizationId: this.state.place}
               alert("aca esta el objeto creado")                              
   postData(job).then(res => this.setState({
    data: [...this.state.data, job]
    
    }))
    this.setState({ cerrarModal: false});
    alert("modal cerrado")                              

  }
  
  render(){
    return(
        <>
        <Modal isOpen="true">
          <ModalHeader>
           <div><h3>Ingrese Puesto</h3></div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>
                Lugar: 
              </label>
              <input
                className="form-control" name="lugar" type="text" onChange={this.handleChange}/>
            </FormGroup>            
            
            <FormGroup>
                <label>Empresa:</label>
                <select className="custom-select" name="empresa" onChange={(e) => this.handleNewEmpresa(e)}>
                  <option value=''>Empresa</option>
                   { 
                    this.state.organizations.map((organization, index) => (
                      <option key={index+1} value={organization.id}>{organization.name}</option>
                    ))
                   } 
                </select>
              </FormGroup> 
            
            <FormGroup>
              <label>
                Detalles: 
              </label>
              <input className="form-control" name="detalles" type="text" onChange={this.handleChange} />
            </FormGroup>
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.insertarPuesto}>
              Insertar
            </Button>
            <Button className="btn btn-danger" onClick={this.props.cerrarModal}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
        </>
    )
  }
}  
