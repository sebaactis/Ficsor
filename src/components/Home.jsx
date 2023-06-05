import React from "react";
import { VscColorMode } from "react-icons/vsc";
import instagram from "../icons/instagram.png"
import tiktok from "../icons/tiktok.png"
import facebook from "../icons/facebook.png"

const Home = () => {
    return (
        <>
            <section className="main">
                <h1 className="mainHomeTitle fw-bold">¿Qué es el FiCSor?</h1>
                <div className="mainHome">
                    <div className="row gap-1 justify-content-center">
                        <article className="col-lg-12 col-xl-4">
                            <div className="pContainer">
                                <p className="fs-3">
                                    El FiCSor es el primer festival de cine pensado y organizado por personas sordas en
                                    Argentina, y la primera plataforma de exhibición de películas de temática sorda
                                    nacionales e internacionales en el país. Su objetivo es, a través del cine, defender
                                    y reconocer los derechos sociales, culturales y lingüísticos de la comunidad sorda.
                                </p>
                            </div>
                            <button className="buttonMain">aA</button>
                            <button className="buttonMain">
                                <VscColorMode />
                            </button>
                        </article>
                        <article className="mainVideoButtons col-lg-12 col-xl-7">
                            <div>
                                <video className="video1" controls>
                                    <source src="../.." type="video/mp4" />
                                </video>
                            </div>
                            <div className="buttonVideoContainer">
                                <button className="buttonVideo">Convocatoria</button>
                                <button className="buttonVideo">Donaciones</button>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="sectionFestival">
                <h1 className="titleFestival col-lg-12"> Proxima edicion del festival </h1>
                <article className="nextFestival col-lg-12 col-xs-12">
                    <video className="video2" controls>
                        <source src="movie.mp4" type="video/mp4" />
                    </video>
                    <div className="festivalDescription col-lg-12 col-sm-12">
                        <h1 className="festivalText">
                            {" "}
                            ¡NOS ENCONTRAMOS <br></br>
                            DE NUEVO EN SEPTIEMBRE!
                        </h1>
                        <button className="buttonDescription">MAS INFORMACION</button>
                    </div>
                </article>
            </section>

            <section className="redesContainer d-flex flex-column justify-content-center">
                <h1 className="text-center my-5 text-light fs-3 fw-bold">MANTENETE INFORMADO A TRAVES DE NUESTRAS REDES</h1>
                <article className="row">
                    <div className="col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-end my-3">
                        <a href="/"> <img className="iconSocial" src={facebook} alt="logoFacebook" /> </a>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-center my-3">
                        <a href="/"> <img className="iconSocial" src={tiktok} alt="logoTiktok" /> </a>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-lg-4 d-flex justify-content-center justify-content-lg-start my-3">
                        <a href="/"> <img className="iconSocial" src={instagram} alt="logoInstagram" /> </a>
                    </div>
                </article>
            </section>
        </>
    );
};

export default Home;
