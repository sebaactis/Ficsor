import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { NavLink } from "react-router-dom";

const Home = () => {
    const { incSize } = useAccContext();

    return (
        <main>
            <section className="main pb-3">
                <div className="mainHome">
                    <div className="row d-flex justify-content-around">
                        <article className="col-lg-8 col-xl-8 col-md-12 col-xs-12">
                            <div className="pContainer ">
                                <h1 className={`mainHomeTitle fw-bold ${incSize ? "fs-1" : ""}`}>¿Qué es el FiCSor?</h1>
                                <p className={` ${incSize ? "fs-4" : "fs-5"}`}>
                                    El FiCSor es el primer festival de cine pensado y organizado por personas sordas en
                                    Argentina, y la primera plataforma de exhibición de películas de temática sorda
                                    nacionales e internacionales en el país. Su objetivo es, a través del cine, defender
                                    y reconocer los derechos sociales, culturales y lingüísticos de la comunidad sorda.
                                </p>
                            </div>
                            <div className="container buttonsDiv">
                                <div className="buttonVideoContainer d-grid gap-5 d-sm-flex justify-content-sm-center ">
                                    <NavLink to="/convocatoria">
                                        <button className={`convocatoriaBtn btn ${incSize ? "btn-lg" : ""}`}>
                                            CONVOCATORIA
                                        </button>
                                    </NavLink>
                                    <a href="https://cafecito.app/ficsor" target="_blank">
                                        <button className={`donacionesBtn btn ${incSize ? "btn-lg" : ""}`}>
                                            DONACIONES
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="main pb-3">
                <h1 className={`mainHomeTitle fw-bold ${incSize ? "fs-1" : ""}`}>¿Qué es el FiCSor?</h1>
                <div className="mainHome">
                    <div className="row gap-1 justify-content-center w-100">
                        <article className="col-lg-12 col-xl-4 ">
                            <div className="pContainer ">
                                <p className={` ${incSize ? "fs-3" : "fs-4"}`}>
                                    El FiCSor es el primer festival de cine pensado y organizado por personas sordas en
                                    Argentina, y la primera plataforma de exhibición de películas de temática sorda
                                    nacionales e internacionales en el país. Su objetivo es, a través del cine, defender
                                    y reconocer los derechos sociales, culturales y lingüísticos de la comunidad sorda.
                                </p>
                            </div>
                        </article>
                        <article className="mainVideoButtons col-lg-12 col-xl-7 px-0 ">
                            <div className="container px-0">
                                <video className="video1" controls>
                                    <source src="../.." type="video/mp4" />
                                </video>
                                <div className="container px-3 py-3">
                                    <div className="buttonVideoContainer d-grid gap-5 d-sm-flex justify-content-sm-end ">
                                        <button className={`convocatoriaBtn btn ${incSize ? "btn-lg" : ""}`}>
                                            CONVOCATORIA
                                        </button>
                                        <button className={`donacionesBtn btn ${incSize ? "btn-lg" : ""}`}>
                                            DONACIONES
                                        </button>
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
                        <a href="/">
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

            <section className="carouselSection py-4">
                <h2 className={`text-center text-white py-3 my-5 fw-bold ${incSize ? "fs-2" : "fs-3"}`}>
                    Ediciones anteriores
                </h2>
                <div className="container text-center px-0 carouselDiv">
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

            {/* <section className="avalesSection">
                <h2 className={`text-center avalesTitle fw-bold py-5 ${incSize ? "fs-2" : "fs-3"}`}>Nuestros Avales</h2>
                <article className="avalesDiv">
                    <div>
                        <img src={avalIncaa} />
                    </div>
                    <div className="tecnoDiv">
                        <img className="base-image" src={avalTecno} />
                        <img className="hover-image" src={avalTecnoColor} />
                    </div>
                    <div className="d-flex align-items-center gap-5">
                        <div className="espanaDiv">
                            <img className="base-image" src={avalEspana} />
                            <img className="hover-image" src={avalEspanaColor} />
                        </div>
                        <img src={avalIbero} />
                    </div>
                </article>
            </section> */}
            <section className="">
                <h2 className={`text-center avalesTitle fw-bold py-5 ${incSize ? "fs-2" : "fs-3"}`}>Nuestros Avales</h2>

                <article className="container d-grid gap-4 ">
                    <div className="row text-center ">
                        <img src={avalIncaa} />
                    </div>

                    <div className="row text-center">
                        <div className="position-relative">
                            <img className="w-100 position-absolute aval-img-color" src={avalTecnoColor} />
                            <img className="w-100" src={avalTecno} />
                        </div>
                    </div>

                    <div className="row text-center">
                        <div className="col-lg-8 col-sm-12 align-self-center">
                            <div className="position-relative">
                                <img className="w-100 position-absolute aval-img-color" src={avalEspanaColor} />
                                <img className="w-100" src={avalEspana} />
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12">
                            <img src={avalIbero} />
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Home;
