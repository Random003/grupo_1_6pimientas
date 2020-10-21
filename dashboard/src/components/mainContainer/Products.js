import { data } from 'jquery';
import React, {Component } from 'react';


class Products extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            products: 0,
            lastProduct: 0
          };
    }


    componentDidMount(){
        console.log("Me monté!!");
        fetch("http://localhost:5001/api/products/", { method: "POST"} )
                .then(response => response.json())
                .then(data => {
                        console.log(data)
                        this.setState(
                            {
                                count: data.meta.count,
                                products: data.products,
                                lastProduct: 0
                                
                            }
                        )})

                .catch(error => console.log(error));
        
    }

    
    render () {
        return (
            <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Cantidad de Productos en la Base de Datos</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.count}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )
    }
}

export default Products;