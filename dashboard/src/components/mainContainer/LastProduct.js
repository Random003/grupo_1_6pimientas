
import React, {Component } from 'react';


class LastProduct extends Component {
    constructor() {
        super();
        this.state = {
            lastProduct: 0
          };
    }
    /* Funcion para llamar a la API, hacemos una func porq vamos a llamar a varias */



    mostrarProductos = (data)=>{
        console.log(data);
        
      
    } 
    componentDidMount(){
        
        fetch("http://localhost:5001/api/products/lastProduct", { method: "POST"} )
                .then(response => response.json())
                .then(data => {
                        console.log(data)
                        this.setState(
                            {
                                count: 1,
                                lastProduct: data.products
                                
                            }
                        )})

                .catch(error => console.log(error));
        
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold title-sp">Último producto en la Base de Datos</h6>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }} src="images/lasagna.jpg" alt="lasagna" />
                            </div>
                            <p>Descripción del producto</p>
                            {/* <p>{this.state.lastProduct.description}</p> */}
                            <a target="_blank" rel="nofollow" href="/" className="title-sp">Ver detalle de producto</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
        
    }
}

export default LastProduct;