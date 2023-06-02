import React from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navBarStyle navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" id="logo" title="beastlogo" href="/">
                        <img className="logo" src="../src/assets/images/logo.png" alt="logo de FiCSor" />
                    </a>
                    <button
                        className="navbar-toggler fs-1 togglerMenu"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav gap-3" id="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/convocatoria">
                                    CONVOCATORIA
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/noticias">
                                    NOTICIAS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sobrenosotros">
                                    SOBRE NOSOTROS
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/trayectoria">
                                    TRAYECTORIA
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacto">
                                    CONTACTO
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
