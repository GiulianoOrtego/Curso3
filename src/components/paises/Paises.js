import React from 'react';
import Formulario from './Formulario';
import ListadoPaises from './ListadoPaises';
import {Container} from "reactstrap";

class Paises extends React.Component{
    
    constructor(props) {
        super(props);
        this.props = props;
        this.state = ({
            data:[],
            paisseleccionado:null
        })
        this.guardarDatosPaises = this.guardarDatosPaises.bind(this);
        this.seleccionarPais = this.seleccionarPais.bind(this);
        this.actualizarPais = this.actualizarPais.bind(this);
        this.eliminarPais = this.eliminarPais.bind(this);
    }
    
    componentDidMount(){
        const paises = JSON.parse(localStorage.getItem('paises'));
        
        this.setState({
            data : (paises === null) ? [] : paises
        })
    }

    
        

    guardarEnLocalStorage(paises){
        localStorage.setItem('paises',JSON.stringify(paises))
    }
    // Cuando das click en guardar en el componente formulario
    guardarDatosPaises(pais){
        this.setState({
            data:[...this.state.data,pais]
        })
        this.guardarEnLocalStorage(this.state.data)
    }


    /* Cuando das click en editar se selecciona un pais para que 
    los puedas actualizar */

    seleccionarPais(id){
        const paisSeleccionado = this.state.data.filter(data => data.id === id)
        if(paisSeleccionado){
            this.setState({
                paisseleccionado:paisSeleccionado
            })
        }
    }
    

    /* Cuando das guardar en el formulario envia el pais nuevo y lo guarda en el array 
    del state llamado data */

    actualizarPais(pais){
        const paises = this.state.data.map(data => data.id === pais.id ? pais : data)
        this.setState({
            data:paises,
            paisseleccionado:null
        })
        this.guardarEnLocalStorage(this.state.data)
    }

    /* cuando das click en eliminar */
    eliminarPais(pais) {
        const paises = this.state.data.filter(data => data.id !== pais.id)
        this.setState({
            data:paises,
            paisseleccionado:null
        })
        this.guardarEnLocalStorage(this.state.data);
    }

    render(){
        return (
            <div>
                <h1 className="text-center mt-5 mb-2">Paises</h1>
                <Container>
                <ListadoPaises 
                    data={this.state.data}
                    seleccionarPais = {this.seleccionarPais}
                    eliminarPais = {this.eliminarPais}
                />
                <Formulario
                 guardarDatosPaises = {this.guardarDatosPaises}
                 paisSeleccionado = {this.state.paisseleccionado}
                 actualizarPais = {this.actualizarPais}
                />
                </Container>
            </div>
        )
    }
}

export default Paises;