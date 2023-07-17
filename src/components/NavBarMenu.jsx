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

function NavBarMenu({ isNavBar }) {
    const { incSize } = useAccContext();
    const isMobile = useMediaQuery({ query: "(max-width: 987px)" })


    const menuArray = [
        { title: "HOME", url: home, href: "/" },
        {
            title: "QUIENES SOMOS",
            url: sobreNosotros,
            href: "/sobrenosotros",
        },
        {
            title: "CONVOCATORIA",
            url: convocatoria,
            href: "/convocatoria",
        },
        {
            title: "NOTICIAS",
            url: noticias,
            href: "/noticias",
        },

        {
            title: "TRAYECTORIA",
            url: trayectoria,
            href: "/trayectoria",
        },
        {
            title: "CONTACTO",
            url: contacto,
            href: "/contacto",
        },
    ];


    if (isMobile || !isNavBar) {
        return (
            <ul className="navbar-nav gap-1 navFooter" id="navbar-nav" >
                {menuArray.map((menu) => (

                    <li className="nav-item" key={menu.title}>
                        <a className={`nav-link ${incSize ? "fs-5" : ""}`} href={menu.href}>
                            {menu.title}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <ul className="navbar-nav gap-1" id="navbar-nav" >
            {
                menuArray.map((menu) => (
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
                ))
            }
        </ul>
    )
}
export default NavBarMenu;
