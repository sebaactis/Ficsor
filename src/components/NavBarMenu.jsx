import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function NavBarMenu() {
    /** HACER UN ARRAY CON OBJETOS QUE CONTENGAN {title: titulo de menu, url: url del video} */

    const menuArray = [
        { title: "HOME", url: "https://drive.google.com/file/d/1hbB63Ehk5yc1YwuCg8XOkrt2lAJdHleR/preview", href: "/" },
        {
            title: "CONVOCATORIA",
            url: "https://drive.google.com/file/d/1hbB63Ehk5yc1YwuCg8XOkrt2lAJdHleR/preview",
            href: "/convocatoria",
        },
        {
            title: "NOTICIAS",
            url: "https://drive.google.com/file/d/1hbB63Ehk5yc1YwuCg8XOkrt2lAJdHleR/preview",
            href: "/noticias",
        },
        {
            title: "SOBRE NOSOTROS",
            url: "https://drive.google.com/file/d/1hbB63Ehk5yc1YwuCg8XOkrt2lAJdHleR/preview",
            href: "/sobrenosotros",
        },
        {
            title: "TRAYECTORIA",
            url: "https://drive.google.com/file/d/1hbB63Ehk5yc1YwuCg8XOkrt2lAJdHleR/preview",
            href: "/trayectoria",
        },
        {
            title: "CONTACTO",
            url: "https://drive.google.com/file/d/1hbB63Ehk5yc1YwuCg8XOkrt2lAJdHleR/preview",
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
                                <iframe src={menu.url} width="279" height="216" allow="autoplay"></iframe>
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
