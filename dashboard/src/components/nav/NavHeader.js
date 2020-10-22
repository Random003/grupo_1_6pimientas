import React from 'react';

function NavHeader () {
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand navbar-light color-nav-bar topbar mb-4 static-top shadow">

                            
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>


                <ul className="navbar-nav ml-auto">

                
                    <div className="topbar-divider d-none d-sm-block"></div>


                    {/* Base */}
                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 medium" Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>Usuario Administrador</span>
                            <img className="img-profile rounded-circle" src="images/logo.png" width="60" alt=""/>
                        </a>
                    </li>


                    {/* Luis */}
                    {/* <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 medium" Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>Luis Rufino</span>
                            <img className="img-profile rounded-circle" src="images/user-1601127716654.jpg" width="60" alt=""/>
                        </a>
                    </li> */}


                    {/* Gaspar */}
                    {/* <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 medium" Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>Babart</span>
                            <img className="img-profile rounded-circle" src="images/user-1599802507754.jpg" width="60" alt=""/>
                        </a>
                    </li> */}

                    {/* JPablo */}
                    {/* <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                            <span className="mr-2 d-none d-lg-inline text-gray-600 medium" Text style={{fontStyle: 'italic', fontWeight: 'bold'}}>Random</span>
                            <img className="img-profile rounded-circle" src="images/user_3.png" width="60" alt=""/>
                        </a>
                    </li> */}

                </ul>

            </nav>
        </React.Fragment>
    );
}

export default NavHeader;