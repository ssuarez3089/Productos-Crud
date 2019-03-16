import React, { Component } from 'react';

//redux
import { connect } from 'react-redux';
import { mostrarProducto, editarProducto } from '../actions/productosActions';


class EditarProducto extends Component {
    state = { 
        nombre: '',
        precio: '',
        error: false
     }

     componentDidMount() {
         const { id } = this.props.match.params;
         this.props.mostrarProducto(id);
     }

     componentWillReceiveProps(nextProps, nextState) {
        const {nombre, precio} = nextProps.producto;
        this.setState({
            nombre,
            precio
        })
     }

     nombreProducto = e => {
        this.setState({nombre: e.target.value})
     }

     precioProducto = e => {
        this.setState({precio: e.target.value})
     }
     ActualizarProducto = e => {
         e.preventDefault();

         const { nombre, precio } = this.state;

         if(nombre === '' || precio === '') {
             this.setState({
                 error: true
             }); return;
         } 
        this.setState({error: false });

        //tomar el id
        const { id } = this.props.match.params;
         
         //primero crear objeto
         const infoProducto = {
             id,
             nombre,
             precio
         }
         //Actualiza el producto actual
         this.props.editarProducto(infoProducto);

         //redireccionar
         this.props.history.push('/');
     }

    render() { 

        const {nombre, precio, error} = this.state;

        return ( 
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center">Edit Product</h2>
                            <form onSubmit={this.ActualizarProducto}>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input defaultValue={nombre} onChange={this.nombreProducto} type="text" className="form-control" placeholder="Titulo" />
                                </div>
                                <div className="form-group">
                                    <label>Product Price</label>
                                    <input defaultValue={precio} onChange={this.precioProducto} type="text" className="form-control" placeholder="Precio" />
                                </div>
                                <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save Changes</button>
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

const mapStateToProps = state => ({
    productos: state.productos.producto
})
 
export default connect(mapStateToProps, {mostrarProducto, editarProducto}) (EditarProducto);