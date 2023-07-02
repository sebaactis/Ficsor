import React from "react";
import logowhite from "../assets/images/logowhite.png";
import { useAccContext } from "../context/AccContext";

const Footer = () => {
    const { incSize, sizeBtn } = useAccContext();
    return (
        <footer className="footer">
            <div className="d-flex justify-content-around align-items-center">
                <img className="logowhite" src={logowhite} alt="logo ficsor blanco" />
                <button className={`buttonFooter btn ${incSize ? "btn-lg" : ""}`}> DONACIONES </button>
            </div>
        </footer>
    );
};

export default Footer;
