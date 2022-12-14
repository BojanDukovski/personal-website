import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-transparent fixed-top">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar"
                         aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Bojan Dukovski</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/aboutMe">About Me</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <a className="navbar-brand" href="/">Bojan Dukovski</a>
                </div>
            </nav>
        </div>
    )
};

export default header;