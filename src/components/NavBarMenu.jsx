import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function NavBarMenu() {
    /** HACER UN ARRAY CON OBJETOS QUE CONTENGAN {title: titulo de menu, url: url del video} */

    const menuArray = [
        {   title: "HOME", 
            url: "./src/videos/Home.mp4", 
            href: "/" },
        {
            title: "CONVOCATORIA",
            url: "./src/videos/Convocatoria.mp4",
            href: "/convocatoria",
        },
        {
            title: "NOTICIAS",
            url: "./src/videos/Noticias.mp4",
            href: "/noticias",
        },
        {
            title: "SOBRE NOSOTROS",
            url: "./src/videos/SobreNosotros.mp4",
            href: "/sobrenosotros",
        },
        {
            title: "TRAYECTORIA",
            url: "./src/videos/Trayectoria.mp4",
            href: "/trayectoria",
        },
        {
            title: "CONTACTO",
            url: "./src/videos/Contacto.mp4",
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
                        <a className="nav-link" href={menu.href}>
                            {menu.title}
                        </a>
                    </OverlayTrigger>
                </li>
            ))}
        </ul>
    );
}

export default NavBarMenu;
