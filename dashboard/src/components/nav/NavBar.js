import React from 'react';

function NavBar () {
    return(
        <React.Fragment>
            <ul className="navbar-nav color-pp  sidebar sidebar-dark accordion" id="accordionSidebar">

        
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon">
                    <i className="fas fa-chart-line"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Seis Pimientas</div>
                </a>
    
            
                <hr className="sidebar-divider my-0"/>
    
            
                <li className="nav-item active">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
                </li>
    
            
                <hr className="sidebar-divider"/>
    
            
                <div className="sidebar-heading">Acciones</div>
    
                
                <li className="nav-item">
                <a className="nav-link collapsed" href="/">
                    <i className="fas fa-fw fa-folder"></i>
                    <span>Paginas</span>
                </a>
                </li>
    
            
                <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Gráficos</span></a>
                </li>
    
            
                <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Tablas</span></a>
                </li>
    
            
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
        </React.Fragment>
    );
}

export default NavBar;