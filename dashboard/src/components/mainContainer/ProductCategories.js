import React from 'react';

function ProductsCategories() {
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold title-sp">Categorías en Productos</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body bgcat">Producto más Vendido:</div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body bgcat">Producto menos Vendido:</div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body bgcat">Variedad más Vendida:</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold title-sp">Categorías en Usuarios</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                        <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body bgcat">Usuarios con más Compras:</div>  
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body bgcat">Usuarios con menos Compras:</div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body bgcat">Usuarios con menos Compras:</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductsCategories;