import React from 'react';

function LastProduct() {
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
                        <a target="_blank" rel="nofollow" href="/" className="title-sp">Ver detalle de producto</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default LastProduct;