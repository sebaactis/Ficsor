import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav className="navBarStyle navbar navbar-expand-lg">
                <img className="logo" src='../src/multimedy/logo.png' />
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navBarList collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONVOCATORIA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NOTICIAS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">SOBRE NOSOTROS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">TRAYECTORIA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar