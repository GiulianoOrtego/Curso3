import React from 'react';
import Formulariociudades from './Formulariociudades';
import Listadociudades from './Listadociudades';
import {Container} from "reactstrap";

class Ciudades extends React.Component{
    
    constructor(props) {
        super(props);
        this.props = props;
        this.state = ({
            data:[],
            ciudadesseleccionado:null
        })
        this.guardarDatosCiudades = this.guardarDatosCiudades.bind(this);
        this.seleccionarCiudades = this.seleccionarCiudades.bind(this);
        this.actualizarCiudades = this.actualizarCiudades.bind(this);
        this.eliminarCiudades = this.eliminarCiudades.bind(this);
    }
    
    componentDidMount(){
        const ciudades = JSON.parse(localStorage.getItem('ciudades'));
        
        this.setState({
            data : (ciudades === null) ? [] : ciudades
        })
    }

    
        

    guardarEnLocalStorage(ciudades){
        localStorage.setItem('ciudades',JSON.stringify(ciudades))
    }
    // Cuando das click en guardar en el componente formulario
    guardarDatosCiudades(ciudades){
        this.setState({
            data:[...this.state.data,ciudades]
        })
        this.guardarEnLocalStorage(this.state.data)
    }


    /* Cuando das click en editar se selecciona un ciudad para que 
    los puedas actualizar */

    seleccionarCiudades(id){
        const ciudadesSeleccionado = this.state.data.filter(data => data.id === id)
        if(ciudadesSeleccionado){
            this.setState({
                ciudadesseleccionado:ciudadesSeleccionado
            })
        }
    }
    

    /* Cuando das guardar en el formulario envia el ciudad nuevo y lo guarda en el array 
    del state llamado data */

    actualizarCiudades(Ciudades){
        const ciudades = this.state.data.map(data => data.id === Ciudades.id ? Ciudades : data)
        this.setState({
            data:ciudades,
            ciudadesseleccionado:null
        })
        this.guardarEnLocalStorage(this.state.data)
    }

    /* cuando das click en eliminar */
    eliminarCiudades(Ciudades) {
        const ciudades = this.state.data.filter(data => data.id !== ciudades.id)
        this.setState({
            data:ciudades,
            ciudadesseleccionado:null
        })
        this.guardarEnLocalStorage(this.state.data);
    }

    render(){
        return (
            <div>
                <h1 className="text-center mt-5 mb-2">Ciudades</h1>
                <Container>
                <Listadociudades 
                    data={this.state.data}
                    seleccionarCiudades = {this.seleccionarCiudades}
                    eliminarCiudades = {this.eliminarCiudades}
                />
                <Formulariociudades
                 guardarDatosCiudades = {this.guardarDatosCiudades}
                 ciudadesSeleccionado = {this.state.ciudadesseleccionado}
                 actualizarCiudades = {this.actualizarCiudades}
                />
                </Container>
            </div>
        )
    }
}

export default Ciudades ;