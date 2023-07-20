import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState } from "react";

import { useAccContext } from "../context/AccContext";
import instagram from "../assets/images/instagram.png";
import tiktok from "../assets/images/tiktok.png";
import facebook from "../assets/images/facebook.png";
import Squares from "./Squares";
import maskImg from "../assets/images/maskImg.png";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import avalIncaa from "../assets/images/avalIncaa.png";
import avalTecno from "../assets/images/avalTecno.png";
import avalEspana from "../assets/images/avalEspana.png";
import avalIbero from "../assets/images/avalIbero.png";
import avalTecnoColor from "../assets/images/avalTecnoColor.png";
import avalEspanaColor from "../assets/images/avalEspanaColor.png";
import guimaraes from "../assets/images/guimaraes.png";
import CaretDownFill from "../icons/CaretDownFill";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavLink } from "react-router-dom";

const Home = () => {
    const { incSize } = useAccContext();

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleWrapper = () => {
        setIsExpanded((prevState) => !prevState);
    };

    return (
        <main className="py-0">
            <section className="main pb-3">
                <div className="spacer"></div>
                <div className="mainHome">
                    <div className="row justify-content-around w-100">
                        <article className="col-lg-12 col-xl-4 mb-4">
                            <div className="pContainer">
                                <h1 className={`mainHomeTitle fw-bold mb-4 text-start ${incSize ? "fs-1" : ""}`}>
                                    ¿Qué es el FiCSor?
                                </h1>
                                <p className={` ${incSize ? "fs-3" : "fs-5"}`}>
                                    El Festival Internacional de Cine Sordo de Argentina (FICSOR) es el primer festival
                                    de cine pensado y organizado por personas Sordas y oyentes en Argentina. Tiene como
                                    objetivo promover el cine realizado por y para personas Sordas, así como dar a
                                    conocer la cultura y la identidad Sorda.
                                </p>
                                <div
                                    id="wrapper"
                                    className={`wrapper ${incSize ? "fs-3" : "fs-5"} ${isExpanded ? "expanded" : "collapsed"
                                        }`}
                                    style={{ height: isExpanded ? "auto" : 0, overflow: "hidden" }}
                                >
                                    <p>
                                        El FICSOR presenta una selección de películas de temática Sorda nacionales e
                                        internacionales, así como talleres, conferencias y otras actividades culturales.
                                        El festival también cuenta con una sección competitiva, en la que se premian las
                                        mejores películas en las categorías de cortometrajes, mediometrajes y
                                        largometrajes.
                                    </p>

                                    <p>
                                        El FICSOR es un evento importante para la comunidad Sorda de Argentina y de todo
                                        el mundo. Es una oportunidad para que las personas Sordas puedan ver películas
                                        que reflejen sus experiencias y su cultura, y para que puedan aprender más sobre
                                        la comunidad Sorda. El festival también es una oportunidad para que las personas
                                        oyentes puedan conocer la cultura Sorda y aprender sobre la lengua de señas.
                                    </p>

                                    <p>
                                        El FICSOR es un evento que celebra la diversidad y la inclusión. Es una
                                        oportunidad para que las personas Sordas puedan compartir su arte y su cultura
                                        con el mundo, y para que las personas oyentes puedan aprender más sobre la
                                        comunidad Sorda.
                                    </p>
                                </div>
                                <button
                                    onClick={toggleWrapper}
                                    id="btn-masinfo"
                                    className="fs-5 badge rounded-pill masInfoBtn d-flex"
                                >
                                    {isExpanded ? "Menos Info" : "Más Info"}
                                    <div className={`px-2 ${isExpanded ? "rotate" : " "}`}>
                                        <CaretDownFill />
                                    </div>
                                </button>
                            </div>
                        </article>
                        <article className="mainVideoButtons col-lg-12 col-xl-7 px-0 justify-content-start">
                            <div className="videoContainer px-0">
                                <iframe
                                    src="https://www.youtube.com/embed/PE2qlsxz43A"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                    className="video1"
                                ></iframe>
                                <div className="container px-1 py-3">
                                    <div className="buttonVideoContainer d-grid gap-5 d-sm-flex justify-content-sm-end ">
                                        <NavLink to="/convocatoria">
                                            <button className={`convocatoriaBtn w-100 ${incSize ? "btn-lg" : ""}`}>
                                                CONVOCATORIA
                                            </button>
                                        </NavLink>
                                        <a href="https://cafecito.app/ficsor" target="_blank">
                                            <button className={`donacionesBtn w-100 ${incSize ? "btn-lg" : ""}`}>
                                                DONACIONES
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="sectionFestival">
                <div className="pb-4 mb-3">
                    <div className="pt-4 pb-5">
                        <Squares />
                    </div>
                    <div className="container py-5 px-0">
                        <article className="nextFestival col-lg-12 col-xs-12">
                            <div className="titleFestivalDiv">
                                <IoIosArrowForward className="fs-2 arrow" color="white" />
                                <h1 className={`titleFestival ${incSize ? "fs-3" : "fs-4"}`}>
                                    Próxima edición del festival
                                </h1>
                            </div>
                            <img className="imgMask" src={maskImg} />
                        </article>
                    </div>
                    <div className="pb-5">
                        <Squares />
                    </div>
                </div>
            </section>

            <section className="redesContainer d-flex flex-column justify-content-center pb-4">
                <h1 className={`text-center my-5 text-light fw-bold px-3 ${incSize ? "fs-2" : "fs-3"}`}>
                    Mantenete informado a través de nuestras redes sociales
                </h1>
                <article className="row">
                    <div className="col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-end my-3">
                        <a href="https://www.instagram.com/ficsor.arg/?hl=es" target="_blank">
                            <img className="iconSocial" src={instagram} alt="logoInstagram" />{" "}
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-center my-3">
                        <a href="https://www.tiktok.com/@ficsor.arg?_t=8e8So0Dwti2&_r=1" target="_blank">
                            {" "}
                            <img className="iconSocial" src={tiktok} alt="logoTiktok" />{" "}
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-start my-3">
                        <a href="https://www.facebook.com/festivalcinesordoarg/?locale=es_LA" target="_blank">
                            {" "}
                            <img className="iconSocial" src={facebook} alt="logoFacebook" />{" "}
                        </a>
                    </div>
                </article>
            </section>

            <section className="carouselSection py-4 px-0">
                <h2 className={`text-center text-white py-3 my-5 fw-bold ${incSize ? "fs-2" : "fs-3"}`}>
                    Ediciones anteriores
                </h2>
                <div className="container text-center carouselDiv px-0">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={40}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img src={slide1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="imgSlides" src={slide2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="imgSlides" src={slide3} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="imgSlides" src={slide4} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="avalesSection container pb-4">
                <h2 className={`text-center avalesTitle fw-bold py-5 ${incSize ? "fs-2" : "fs-3"}`}>Nuestros Avales</h2>

                <article className="container d-grid gap-5">
                    <div className="row text-center ">
                        <img className="incaa" src={avalIncaa} />
                    </div>

                    <div className="row text-center">
                        <div className="position-relative">
                            <img className="position-absolute aval-img-color" src={avalTecnoColor} />
                            <img className="aval-img-nocolor" src={avalTecno} />
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-lg-6 col-sm-12 align-self-center mb-3">
                            <div className="espanaDiv position-relative">
                                <img className="position-absolute aval-img-color" src={avalEspanaColor} />
                                <img className="aval-img-nocolor" src={avalEspana} />
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-12">
                            <img className="ibero" src={avalIbero} />
                        </div>

                        <div className="col-lg-3 col-sm-12">
                            <img className="ibero" src={guimaraes} />
                        </div>
                    </div>

                    
                </article>
            </section>
        </main>
    );
};

export default Home;