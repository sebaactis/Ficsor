import React from "react";
import logowhite from "../assets/images/logowhite.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="d-flex justify-content-around align-items-center">
                <img className="logowhite" src={logowhite} alt="logo ficsor blanco" />
                <button className="buttonFooter"> DONACIONES </button>
            </div>
        </footer>
    )

        ;
};

export default Footer;
