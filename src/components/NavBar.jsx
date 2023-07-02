import React from "react";
import NavBarMenu from "./NavBarMenu";
import logo from "../assets/images/logo.png";

const NavBar = () => {
    return (
        <>
            <nav className="navBarStyle navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" id="logo" title="logo de ficsor" href="/">
                        <img className="logo" src={logo} alt="logo de FiCSor" />
                    </a>
                    <button
                        className="navbar-toggler fs-5 togglerMenu"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <NavBarMenu />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
