import React from 'react';
import FormularioPuestos from './FormularioPuestos';
import ListadoPuestos from './ListadoPuestos';
import {Container} from "reactstrap";

class Puestos extends React.Component{
    
    constructor(props) {
        super(props);
        this.props = props;
        this.state = ({
            data:[],
            puestoseleccionado:null
        })
        this.guardarDatosPuestos = this.guardarDatosPuestos.bind(this);
        this.seleccionarPuesto = this.seleccionarPuesto.bind(this);
        this.actualizarPuesto = this.actualizarPuesto.bind(this);
        this.eliminarPuesto = this.eliminarPuesto.bind(this);
    }
    
    componentDidMount(){
        const puestos = JSON.parse(localStorage.getItem('puestos'));
        
        this.setState({
            data : (puestos === null) ? [] : puestos
        })
    }

    
        

    guardarEnLocalStorage(puestos){
        localStorage.setItem('puestos',JSON.stringify(puestos))
    }
    // Cuando das click en guardar en el componente formulario
    guardarDatosPuestos(puesto){
        this.setState({
            data:[...this.state.data,puesto]
        })
        this.guardarEnLocalStorage(this.state.data)
    }


    /* Cuando das click en editar se selecciona un pais para que 
    los puedas actualizar */

    seleccionarPuesto(id){
        const puestoSeleccionado = this.state.data.filter(data => data.id === id)
        if(puestoSeleccionado){
            this.setState({
                puestoseleccionado:puestoSeleccionado
            })
        }
    }
    

    /* Cuando das guardar en el formulario envia el pais nuevo y lo guarda en el array 
    del state llamado data */

    actualizarPuesto(puesto){
        const puestos = this.state.data.map(data => data.id === puesto.id ? puesto : data)
        this.setState({
            data:puestos,
            puestoseleccionado:null
        })
        this.guardarEnLocalStorage(this.state.data)
    }

    /* cuando das click en eliminar */
    eliminarPuesto(puesto) {
        const puestos = this.state.data.filter(data => data.id !== puesto.id)
        this.setState({
            data:puestos,
            puestoseleccionado:null
        })
        this.guardarEnLocalStorage(this.state.data);
    }

    render(){
        return (
            <div>
                <h1 className="text-center mt-5 mb-2">Puestos</h1>
                <Container>
                <ListadoPuestos 
                    data={this.state.data}
                    seleccionarPuesto = {this.seleccionarPuesto}
                    eliminarPuesto = {this.eliminarPuesto}
                />
                <FormularioPuestos
                 guardarDatosPuestos = {this.guardarDatosPuestos}
                 puestoSeleccionado = {this.state.puestoseleccionado}
                 actualizarPuesto = {this.actualizarPuesto}
                />
                </Container>
            </div>
        )
    }
}

export default Puestos;