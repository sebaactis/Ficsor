import logowhite from "../assets/images/logowhite.png";
import { useAccContext } from "../context/AccContext";
import NavBar from "./NavBar";
import vector from "../assets/images/Vector.png";

const Footer = () => {
    const { incSize } = useAccContext();
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
                <div className="d-flex flex-row-reverse align-items-center rowButtonDiv">
                    <a href="#navBarRow"> <img src={vector} /> </a>
                    <a href="https://cafecito.app/ficsor" target="_blank"><button className={`buttonFooter btn ${incSize ? "btn-lg" : ""}`}> DONACIONES </button></a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
