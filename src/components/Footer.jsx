import logowhite from "../assets/images/logowhite.png";
import { useAccContext } from "../context/AccContext";
import NavBar from "./NavBar";
import vector from "../assets/images/Vector.png";

const Footer = () => {
    const { incSize } = useAccContext();
    return (
        <footer className="footer">
            <div className="footerDiv d-xs-block d-md-flex sectionLogo justify-content-between px-5">
                <section className="d-flex sectionLogo justify-content-between mb-5">
                    <div className="logoContactDiv d-flex flex-column justify-content-center">
                        <img className="logowhite" src={logowhite} alt="logo ficsor blanco" />
                        <article className="logoContactoSpace">
                            <p className={`contactoFooterTitle ${incSize ? "fs-5" : ""}`}>Contacto</p>
                            <p className={`contactoFooterMail ${incSize ? "fs-5" : ""}`}>info@ficsor.com.ar</p>
                        </article>
                    </div>
                    <div className="navFooterDiv">
                        <NavBar isNavBar={false} />
                    </div>
                </section>
                <div className="d-flex align-items-center rowButtonDiv gap-5">
                    <div className="w-100">
                        <a href="https://cafecito.app/ficsor" target="_blank" className="w-100">
                            <button className={`buttonFooter btn py-3 px-4 w-100 ${incSize ? "btn-lg" : ""}`}>
                                {" "}
                                DONACIONES{" "}
                            </button>
                        </a>
                    </div>
                    <div className="d-sm-flex d-none">
                        <a href="#navBarRow">
                            {" "}
                            <img className=" " src={vector} />{" "}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
