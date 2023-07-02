import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import home from "../videos/Home.webm";
import convocatoria from "../videos/Convocatoria.webm";
import noticias from "../videos/Noticias.webm";
import sobreNosotros from "../videos/SobreNosotros.webm";
import trayectoria from "../videos/Trayectoria.webm";
import contacto from "../videos/Contacto.webm";
import { useAccContext } from "../context/AccContext";

function NavBarMenu() {
    const { incSize, sizeBtn } = useAccContext();

    const menuArray = [
        { title: "HOME", url: home, href: "/" },
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
            title: "SOBRE NOSOTROS",
            url: sobreNosotros,
            href: "/sobrenosotros",
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

    // <iframe src="https://drive.google.com/file/d/1hbB63Ehk5yc1YwuCg8XOkrt2lAJdHleR/preview" width="640" height="480" allow="autoplay"></iframe>

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
                                <video className=".popoverVideo" src={menu.url} width="200" autoPlay></video>
                            </Popover>
                        }
                    >
                        <a className={`nav-link ${incSize ? "fs-5" : ""}`} href={menu.href}>
                            {menu.title}
                        </a>
                    </OverlayTrigger>
                </li>
            ))}
        </ul>
    );
}

export default NavBarMenu;
