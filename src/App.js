import React, { Component } from 'react';
import Header from './Components/Header';
import Productos from './Components/Productos';
import NuevoProducto from './Components/NuevoProducto';
import EditarProducto from './Components/EditarProducto';

//importando la ruta de la aplicacion
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
              <Header />
                <div className="container">
                   <Switch>
                      <Route exact path="/" component={Productos} />
                      <Route exact path="/Products/New" component={NuevoProducto} />
                      <Route exact path="/Products/Edit/:id" component={EditarProducto} />
                  </Switch>
                </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
