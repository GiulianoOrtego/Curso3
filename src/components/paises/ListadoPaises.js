import React from 'react';
import {Table,Button} from "reactstrap";


class ListadoPaises extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }
    

    render(){
      if(this.props.data === null) {
        return null;
      }
        return(
            <Table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Acciones</th>
                </tr>
              </thead>

            <tbody>

              {this.props.data.map((dato) => (
                <tr key={dato.id}>
                
                  <td>{dato.nombre}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.props.seleccionarPais(dato.id)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger"
                    onClick={() => this.props.eliminarPais(dato)}
                    >Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )
    }
        
}

export default ListadoPaises;