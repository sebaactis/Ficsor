import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import home from "../videos/Home.mp4"
import convocatoria from "../videos/Convocatoria.mp4"
import noticias from "../videos/Noticias.mp4"
import sobreNosotros from "../videos/SobreNosotros.mp4"
import trayectoria from "../videos/Trayectoria.mp4"
import contacto from "../videos/Contacto.mp4"
import { Link } from "react-router-dom";

function NavBarMenu() {
    /** HACER UN ARRAY CON OBJETOS QUE CONTENGAN {title: titulo de menu, url: url del video} */

    const menuArray = [
        {   title: "HOME", 
            url: home, 
            href: "/" },
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
                                <video src={menu.url} width="200" height="200" autoPlay></video>
                            </Popover>  
                        }
                    >
                        <Link className="nav-link" to={menu.href}>{menu.title}</Link>
                    </OverlayTrigger>
                </li>
            ))}
        </ul>
    );
}

export default NavBarMenu;
