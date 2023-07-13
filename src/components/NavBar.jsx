import React from "react";
import NavBarMenu from "./NavBarMenu";
import logo from "../assets/images/logo.png";
import { useAccContext } from "../context/AccContext";
import { VscColorMode } from "react-icons/vsc";

const NavBar = ({ isNavBar }) => {

    const { incSize, sizeBtn, contrast, contrastBtn } = useAccContext();

    if (isNavBar) {
        return (
            <>
                <nav className={`navBarStyle navbar navbar-expand-lg ${contrast ? "bg-dark" : ""}`}>
                    <div className="container-fluid">
                        <a className="navbar-brand" id="logo" title="logo de ficsor" href="/">
                            <img className="logo" src={logo} alt="logo de FiCSor" />
                        </a>
                        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                            <NavBarMenu isNavBar={isNavBar} />
                        </div>
                    </div>
                </nav>
            </>
        );
    }

    return (
        <>
            <nav className={`navBarStyle navbar navbar-expand-lg ${contrast ? "bg-dark" : ""}`}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <NavBarMenu isNavBar={isNavBar} />
                    </div>
                </div>
            </nav>
        </>
    )



};

export default NavBar;
