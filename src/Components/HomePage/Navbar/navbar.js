import React from 'react';
import './_nbar.scss'

function NavigationBar() {
    return (<>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <img src="/images/F.png"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 links">
                            <li className="nav-item">
                                <a className="nav-link active home" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle others" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Courses
                                    <img className="ms-2" src="/images/down-arrow 1.png"/>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link others" href="#">Careers</a>
                            </li>

                        </ul>
                        <ul className="d-flex signInBtn text-center">
                            <button className="signInBtn btn btn-primary border-0 bg-white text-primary">Sign In</button>
                            <button className="btn btn-primary">Sign Up</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>);
}

export default NavigationBar;