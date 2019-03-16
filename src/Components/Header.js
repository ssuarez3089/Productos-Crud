import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
                <h1>
                    <Link to={'/'} className="text-dark">
                        Crud - Reac, Redux, Rest PI & Axios
                    </Link>
                </h1>
                <Link to={'/Products/New'} className="btn btn-danger nuevo-post">
                    Add Product &#43;
                </Link>
            </nav>
         );
    }
}
 
export default Header;