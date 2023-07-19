import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import home from "../videos/Home.webm";
import convocatoria from "../videos/Convocatoria.webm";
import noticias from "../videos/Noticias.webm";
import sobreNosotros from "../videos/SobreNosotros.webm";
import trayectoria from "../videos/Trayectoria.webm";
import contacto from "../videos/Contacto.webm";
import { useAccContext } from "../context/AccContext";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function NavBarMenu({ isNavBar }) {
    const { incSize } = useAccContext();
    const isMobile = useMediaQuery({ query: "(max-width: 987px)" });

    const handleSnackBar = () => {
        toast.error("Esta sección aún no se encuentra disponible. Podrás verla próximamente.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const menuArray = [
        {
            title: "INICIO",
            url: home,
            href: "/",
        },
        {
            title: "QUIÉNES SOMOS",
            url: sobreNosotros,
            href: "/sobrenosotros",
        },
        {
            title: "CONVOCATORIA",
            url: convocatoria,
            href: "/convocatoria",
        },
    ];

    if (isMobile || !isNavBar) {
        return (
            <ul className="navbar-nav gap-1 navFooter" id="navbar-nav">
                {menuArray.map((menu) => (
                    <li className="nav-item" key={menu.title}>
                        <a className={`nav-link ${incSize ? "fs-5" : ""}`} href={menu.href}>
                            {menu.title}
                        </a>
                    </li>
                ))}
                <li className="nav-item d-none">
                    <a onClick={handleSnackBar} className={`nav-link ${incSize ? "fs-5" : ""}`}>
                        NOTICIAS
                    </a>
                </li>
                <li className="nav-item d-none">
                    <a onClick={handleSnackBar} className={`nav-link ${incSize ? "fs-5" : ""}`}>
                        TRAYECTORIA
                    </a>
                </li>

                <li className="nav-item d-none">
                    <a onClick={handleSnackBar} className={`nav-link ${incSize ? "fs-5" : ""}`} to="/contacto">
                        CONTACTO
                    </a>
                </li>
            </ul>
        );
    }

    return (
        <ul className="navbar-nav gap-1" id="navbar-nav">
            {menuArray.map((menu) => (
                <li className="nav-item" key={menu.title}>
                    <OverlayTrigger
                        trigger="hover"
                        key={menu.title}
                        placement="bottom"
                        overlay={
                            <Popover id={menu.title}>
                                <video src={menu.url} width="200" autoPlay></video>
                            </Popover>
                        }
                    >
                        <NavLink className={`nav-link ${incSize ? "fs-5" : ""}`} to={menu.href}>
                            {menu.title}
                        </NavLink>
                    </OverlayTrigger>
                </li>
            ))}

            <li className="nav-item">
                <OverlayTrigger
                    trigger="hover"
                    key="NOTICIAS"
                    placement="bottom"
                    overlay={
                        <Popover id="NOTICIAS">
                            <video src={noticias} width="200" autoPlay></video>
                        </Popover>
                    }
                >
                    <a onClick={handleSnackBar} className={`nav-link ${incSize ? "fs-5" : ""}`}>
                        NOTICIAS
                    </a>
                </OverlayTrigger>
            </li>
            <li className="nav-item">
                <OverlayTrigger
                    trigger="hover"
                    key="Trayectoria"
                    placement="bottom"
                    overlay={
                        <Popover id="Trayectoria">
                            <video src={trayectoria} width="200" autoPlay></video>
                        </Popover>
                    }
                >
                    <a onClick={handleSnackBar} className={`nav-link ${incSize ? "fs-5" : ""}`}>
                        TRAYECTORIA
                    </a>
                </OverlayTrigger>
            </li>

            <li className="nav-item">
                <OverlayTrigger
                    trigger="hover"
                    key="contacto"
                    placement="bottom"
                    overlay={
                        <Popover id="contacto">
                            <video src={contacto} width="200" autoPlay></video>
                        </Popover>
                    }
                >
                    <a onClick={handleSnackBar} className={`nav-link ${incSize ? "fs-5" : ""}`}>
                        CONTACTO
                    </a>
                </OverlayTrigger>
                <ToastContainer />
            </li>
        </ul>
    );
}
export default NavBarMenu;
