import React from "react";

import { VscColorMode } from "react-icons/vsc";
import { FaCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { useAccContext } from "../context/AccContext";
import instagram from "../icons/instagram.png";
import tiktok from "../icons/tiktok.png";
import facebook from "../icons/facebook.png";
import Squares from "./Squares";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
    const { incSize, sizeBtn } = useAccContext();

    //  {` ${incSize ? "" : ""}`}

    return (
        <>
            <section className="main pb-3">
                <h1 className={`mainHomeTitle fw-bold ${incSize ? "fs-1" : ""}`}>¿Qué es el FiCSor?</h1>
                <div className="mainHome">
                    <div className="row gap-1 justify-content-center">
                        <article className="col-lg-12 col-xl-4">
                            <div className="pContainer">
                                <p className={`${incSize ? "fs-3" : "fs-4"}`}>
                                    El FiCSor es el primer festival de cine pensado y organizado por personas sordas en
                                    Argentina, y la primera plataforma de exhibición de películas de temática sorda
                                    nacionales e internacionales en el país. Su objetivo es, a través del cine, defender
                                    y reconocer los derechos sociales, culturales y lingüísticos de la comunidad sorda.
                                </p>
                                <div className="d-flex gap-5">
                                    <button
                                        className={` buttonMain ${incSize ? "buttonMainOn" : ""}`}
                                        onClick={sizeBtn}
                                    >
                                        <span className="fs-4">A</span>
                                        <span className="fs-1">A</span>
                                    </button>
                                    <button className="buttonMain fs-1">
                                        <VscColorMode />
                                    </button>
                                </div>
                            </div>
                        </article>
                        <article className="mainVideoButtons col-lg-12 col-xl-7">
                            <div>
                                <video className="video1" controls>
                                    <source src="../.." type="video/mp4" />
                                </video>
                                <div className="container px-2">
                                    <div className="buttonVideoContainer justify-content-end">
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
                    <div className="container py-5">
                        <h1 className={`titleFestival col-lg-12 ${incSize ? "fs-2" : "fs-3"}`}>
                            Proxima edicion del festival
                        </h1>
                        <article className="nextFestival col-lg-12 col-xs-12">
                            <video className="video2" controls>
                                <source src="movie.mp4" type="video/mp4" />
                            </video>
                            <div className="festivalDescription col-lg-12 col-sm-12">
                                <h1 className={` festivalText ${incSize ? "fs-3" : ""}`}>
                                    ¡NOS ENCONTRAMOS <br></br>
                                    DE NUEVO EN SEPTIEMBRE!
                                </h1>
                                <button className={`buttonDescription btn ${incSize ? "btn-lg" : ""}`}>
                                    MAS INFORMACION
                                </button>
                            </div>
                        </article>
                    </div>
                    <div className="pb-5">
                        <Squares />
                    </div>
                </div>
            </section>

            <section className="redesContainer d-flex flex-column justify-content-center pb-4">
                <h1 className={`text-center my-5 text-light fw-bold ${incSize ? "fs-2" : "fs-3"}`}>
                    MANTENETE INFORMADO A TRAVES DE NUESTRAS REDES
                </h1>
                <article className="row">
                    <div className="col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-end my-3">
                        <a href="/">
                            {" "}
                            <img className="iconSocial" src={facebook} alt="logoFacebook" />{" "}
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-center my-3">
                        <a href="/">
                            {" "}
                            <img className="iconSocial" src={tiktok} alt="logoTiktok" />{" "}
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-start my-3">
                        <a href="/">
                            {" "}
                            <img className="iconSocial" src={instagram} alt="logoInstagram" />{" "}
                        </a>
                    </div>
                </article>
            </section>

            <section className="carouselSection p-5">
                <h2 className={`text-center text-white py-5 fw-bold ${incSize ? "fs-2" : "fs-3"}`}>
                    Titulo de seccion
                </h2>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <img src="https://pbs.twimg.com/media/CfyUC7uW8AEz7n6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://pbs.twimg.com/media/CfyUC7uW8AEz7n6.jpg" />{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://pbs.twimg.com/media/CfyUC7uW8AEz7n6.jpg" />{" "}
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://pbs.twimg.com/media/CfyUC7uW8AEz7n6.jpg" />{" "}
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className="avalesSection">
                <h2 className={`text-center text-white fw-bold py-5 ${incSize ? "fs-2" : "fs-3"}`}>NUESTROS AVALES</h2>
                <article className="d-flex justify-content-center align-items-center">
                    <FaCircle className="fs-1 text-white mx-3" />
                    <FaCircle className="fs-1 text-white mx-3" />
                    <FaCircle className="fs-1 text-white mx-3" />
                    <FaCircle className="fs-1 text-white mx-3" />
                </article>
            </section>
        </>
    );
};

export default Home;
