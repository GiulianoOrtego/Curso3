import React,{Fragment} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Paises from './components/paises/Paises'
import {Switch, Route, Link} from "react-router-dom";
import Ciudades from './components/ciudades/Ciudades'
import Empresas from './components/empresas/Empresas'
import Puestos from './components/puestos/Puestos'




class App extends React.Component {
  
  render(){
    return (
      <Fragment>
        
        <Link to="/"  className= "btn btn-dark">
          Menu
          </Link>

        <Link to="/empresas"  className= "btn btn-dark">
          Empresas
        </Link>
        <Link to="/puestos"  className= "btn btn-dark">
          Puestos
        </Link><Link to="/ciudades"  className= "btn btn-dark">
          Ciudades
        </Link><Link to="/paises" className= "btn btn-dark">
          Paises
        </Link>

        <Switch>
              
              <Route path="/paises" component={Paises}/>
              <Route path="/ciudades" component={Ciudades}/>
              <Route path="/empresas" component={Empresas}/>
              <Route path="/puestos" component={Puestos}/>
        </Switch>
      </Fragment>
    )
  }
}
export default App;
