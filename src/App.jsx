import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
/* import "./App.css"; */
import "./scss/main.scss";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Convocatoria from "./components/Convocatoria.jsx";
import Noticias from "./components/Noticias.jsx";
import SobreNosotros from "./components/SobreNosotros.jsx";
import Trayectoria from "./components/Trayectoria.jsx";
import Contacto from "./components/Contacto.jsx";
import Home from "./components/Home.jsx";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/convocatoria" element={<Convocatoria />} />
                <Route exact path="/noticias" element={<Noticias />} />
                <Route exact path="/sobrenosotros" element={<SobreNosotros />} />
                <Route exact path="/trayectoria" element={<Trayectoria />} />
                <Route exact path="/contacto" element={<Contacto />} />
                <Route exact path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
