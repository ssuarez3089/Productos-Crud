import React, { Component } from 'react';
import Producto from './Producto';

//redux
import { connect } from 'react-redux';

//llamar o importar el action donde tiene el contenido de la api
import { mostrarProductos } from '../actions/productosActions';

class Productos extends Component {

    componentDidMount() {
        this.props.mostrarProductos();
    }

    render() { 

        const { productos } = this.props;


        return ( 
            <React.Fragment>
                <h2 className="text-center my-5">Products List</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <ul>
                            {productos.map(producto => (
                                <Producto 
                                    key={producto.id}
                                    info={producto}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}

//el state
const mapStateToProps = state => ({
    productos: state.productos.productos
})
 
export default connect(mapStateToProps, { mostrarProductos })(Productos);