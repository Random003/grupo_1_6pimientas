import React from 'react';

function Users() {
    return (
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de Usuarios</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">38</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-user-check fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Users;