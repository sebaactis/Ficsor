import React from "react";
import NavBarMenu from "./NavBarMenu";
import logo from "../assets/images/logo.png";
import { useAccContext } from "../context/AccContext";
import { VscColorMode } from "react-icons/vsc";

const NavBar = () => {

    const { incSize, sizeBtn, contrast, contrastBtn } = useAccContext();

    return (
        <>
            <nav className={`navBarStyle navbar navbar-expand-lg ${contrast ? "bg-dark" : ""}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" id="logo" title="logo de ficsor" href="/">
                        <img className="logo" src={logo} alt="logo de FiCSor" />
                    </a>
                    <div className="buttonsAcc d-flex gap-3">
                        <button
                            className={` buttonMain ${incSize ? "buttonMainOn" : ""}`}
                            onClick={sizeBtn}
                        >
                            <span className="fs-5">A</span>
                            <span className="fs-2">A</span>
                        </button>
                        <button
                            className={` buttonMain fs-2 ${contrast ? "buttonMainOn" : ""}`}
                            onClick={contrastBtn}
                        >
                            <VscColorMode />
                        </button>
                    </div>
                    <button
                        className={`
                        navbar-toggler togglerMenu 
                        ${incSize ? "fs-2" : "fs-5"} 
                        ${contrast ? "togglerContrast" : ""}
                        `}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar"
                    >
                        <span
                            className={`
                        navbar-toggler-icon
                        ${contrast ? "togglerContrast" : ""}
                        `}
                        ></span>
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
