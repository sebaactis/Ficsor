import React from "react";
import logowhite from "../assets/images/logowhite.png";
import { useAccContext } from "../context/AccContext";
import NavBar from "./NavBar";

const Footer = () => {
    const { incSize, sizeBtn } = useAccContext();
    return (
        <footer className="footer">
            <div className="footerDiv">
                <section className="d-flex sectionLogo">
                    <div className="logoContactDiv d-flex flex-column justify-content-center">
                        <img className="logowhite" src={logowhite} alt="logo ficsor blanco" />
                        <article className="logoContactoSpace">
                            <p className={`contactoFooterTitle ${incSize ? "fs-5" : ""}`} >Contacto</p>
                            <p className={`contactoFooterMail ${incSize ? "fs-5" : ""}`}>info@ficsor.com.ar</p>
                        </article>

                    </div>
                    <div className="navFooterDiv">
                        <NavBar isNavBar={false} />
                    </div>
                </section>
                <button className={`buttonFooter btn ${incSize ? "btn-lg" : ""}`}> DONACIONES </button>
            </div>

        </footer>
    );
};

export default Footer;
