import React from 'react';
import { Form, Button, Container, FormGroup } from 'reactstrap'
import { getCiudad, getData, getEmpresa, postEmpresa } from '../jobs/puestosJobs'

export class AddEmpresas extends React.Component {
  constructor(){      
    super();
      this.state = {
      data: [],
      organizations:[],
      places: [],     
      newEmpresa: '',
      newplaceId:'',
      newCiudad: '',
    };
  }

  componentDidMount(){
    getEmpresa().then(res => this.setState({
        data: res
    }))
    
    getCiudad().then(res => this.setState({
        places: res
    }))

     
  }
  
  addEmpresa = () => {
     let data = {name: this.state.newEmpresa, placeId:this.state.newplaceId}
    postEmpresa(data).then(res => this.setState({
      data: [...this.state.data, res]
  }))
  
  }

  handleNewEmpresa = (e) => {
    this.setState({
        newEmpresa: e.target.value
    })
  }

  handleNewCiudad = (e) => {
    this.setState({
        newplaceId: e.target.value
    })
  }

  
  render() {
    return (
        <Container className="body-empresas">
                <h3>Ingrese Empresa</h3>
            <Form>
              <FormGroup>
                <label>Empresa: </label>{" "}
                <input type="text" value={this.state.newEmpresa} onChange={(e) => this.handleNewEmpresa(e)}/>
              </FormGroup>
             <FormGroup>
                <label>Ciudad:</label>
                <select className="custom-select" name="pais" onChange={(e) => this.handleNewCiudad(e)}>
                  <option value=''>Ciudad</option>
                   { 
                    this.state.places.map((dato, index) => (
                      <option key={index+1} value={dato.id}>{dato.name}</option>
                    ))
                   } 
                </select>
              </FormGroup>        
              <Button color="primary" onClick={this.addEmpresa}>Insertar</Button>
            </Form>
        <ul>
        
           {
            this.state.data.map((dato,index) => (              
                 <li key={index}>                 
                  {"ID: "} {dato.id}                
                  {" Empresa: "} {dato.name}
                  {" - ID Ciudad: "} {dato.placeId}
                 </li>
            ))
           }  
        </ul>
        </Container>
    )
  }
}
