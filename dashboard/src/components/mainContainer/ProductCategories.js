import React from 'react';

function ProductsCategories() {
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold title-sp">Categorías de productos</h6>
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
                                    <div className="card-body bgcat">Producto menos vendido:</div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body bgcat">Categoría más vendida:</div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body bgcat">Usuario con más compras:</div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body bgcat">Usuarios con mayores compras</div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card bg-info text-white shadow">
                                    <div className="card-body bgcat">Usuarios con menos compras</div>
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