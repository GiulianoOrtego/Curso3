import React,{Fragment} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Paises from './components/paises/Paises'
import {Switch, Route } from "react-router-dom";
import Ciudades from './components/ciudades/Ciudades'
import Empresas from './components/empresas/Empresas'



class App extends React.Component {
  
  render(){
    return (
      <Fragment>
        <Switch>
            <Route path="/paises" component={Paises}/>
            <Route path="/ciudades" component={Ciudades}/>
            <Route path="/empresas" component={Empresas}/>
          </Switch>
      </Fragment>
    )
  }
}
export default App;
