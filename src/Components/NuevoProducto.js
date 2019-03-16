import React, { Component } from 'react';

//redux
import { connect } from 'react-redux';
import { agregarProducto } from '../actions/productosActions';


class NuevoProducto extends Component {
    state = { 
        nombre: '',
        precio: '',
        error: false
     }

     nombreProducto = e => {
        this.setState({nombre: e.target.value})
     }

     precioProducto = e => {
        this.setState({precio: e.target.value})
     }
     NuevoProducto = e => {
         e.preventDefault();

         const { nombre, precio } = this.state;

         if(nombre === '' || precio === '') {
             this.setState({
                 error: true
             }); return;
         } 
        this.setState({error: false })
         
         //primero crear objeto
         const infoProducto = {
             nombre,
             precio
         }
         //crear nuevo producto
         this.props.agregarProducto(infoProducto);

         //redireccionar
         this.props.history.push('/');
     }

    render() { 

        const {error} = this.state;

        return ( 
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Add New Product</h2>
                            <form onSubmit={this.NuevoProducto}>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input onChange={this.nombreProducto} type="text" className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Product Price</label>
                                    <input onChange={this.precioProducto} type="text" className="form-control" placeholder="Precio" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                            </form>
                                {error ? <div className="font-weight-bold alert alert-danger text-center mt-4">
                                    All fields are required
                                    </div>

                                    : ''
                                }
                        </div>
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default connect(null, {agregarProducto}) (NuevoProducto);