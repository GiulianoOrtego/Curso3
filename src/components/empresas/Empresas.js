import React from 'react';
import FormularioEmpresas from './FormularioEmpresas';
import ListadoEmpresas from './ListadoEmpresas';
import {Container} from "reactstrap";





class Empresas extends React.Component{
    
    constructor(props) {
        super(props);
        this.props = props;
        this.state = ({
            data:[],
            empresaseleccionado:null
        })
        this.guardarDatosEmpresas = this.guardarDatosEmpresas.bind(this);
        this.seleccionarEmpresa = this.seleccionarEmpresa.bind(this);
        this.actualizarEmpresa = this.actualizarEmpresa.bind(this);
        this.eliminarEmpresa = this.eliminarEmpresa.bind(this);
    }
    
    componentDidMount(){
        const empresas = JSON.parse(localStorage.getItem('empresas'));
        
        this.setState({
            data : (empresas === null) ? [] : empresas
        })
    }

    
        

    guardarEnLocalStorage(empresas){
        localStorage.setItem('empresas',JSON.stringify(empresas))
    }
    // Cuando das click en guardar en el componente formulario
    guardarDatosEmpresas(empresa){
        this.setState({
            data:[...this.state.data,empresa]
        })
        this.guardarEnLocalStorage(this.state.data)
    }


    /* Cuando das click en editar se selecciona un pais para que 
    los puedas actualizar */

    seleccionarEmpresa(id){
        const empresaSeleccionado = this.state.data.filter(data => data.id === id)
        if(empresaSeleccionado){
            this.setState({
                empresaseleccionado:empresaSeleccionado
            })
        }
    }
    

    /* Cuando das guardar en el formulario envia el pais nuevo y lo guarda en el array 
    del state llamado data */

    actualizarEmpresa(empresa){
        const empresas = this.state.data.map(data => data.id === empresa.id ? empresa : data)
        this.setState({
            data:empresas,
            empresaseleccionado:null
        })
        this.guardarEnLocalStorage(this.state.data)
    }

    /* cuando das click en eliminar */
    eliminarEmpresa(empresa) {
        const empresas = this.state.data.filter(data => data.id !== empresa.id)
        this.setState({
            data:empresas,
            empresasseleccionado:null
        })
        this.guardarEnLocalStorage(this.state.data);
    }

    render(){
        return (
            <div>
                <h1 className="text-center mt-5 mb-2">Empresas</h1>
                <Container>
                <ListadoEmpresas 
                    data={this.state.data}
                    seleccionarEmpresa = {this.seleccionarEmpresa}
                    eliminarEmpresa = {this.eliminarEmpresa}
                />
                <FormularioEmpresas
                 guardarDatosEmpresas = {this.guardarDatosEmpresas}
                 empresaSeleccionado = {this.state.empresaseleccionado}
                 actualizarEmpresa = {this.actualizarEmpresa}
                />
                </Container>
            </div>
        )
    }
}

export default Empresas;