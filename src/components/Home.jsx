import React from "react";
import { VscColorMode } from "react-icons/vsc";
import { FaCircle } from "react-icons/fa";
import instagram from "../icons/instagram.png"
import tiktok from "../icons/tiktok.png"
import facebook from "../icons/facebook.png"
import Carousel from 'react-bootstrap/Carousel';

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

            <section className="carouselSection p-5">
                <h2 className="text-center text-white py-5 fw-bold">Titulo de seccion</h2>
                <Carousel fade className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-40"
                            src="https://pbs.twimg.com/media/CfyUC7uW8AEz7n6.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-40"
                            src="https://pbs.twimg.com/media/CfyUC7uW8AEz7n6.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-40"
                            src="https://pbs.twimg.com/media/CfyUC7uW8AEz7n6.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Third    slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className="avalesSection">
                <h2 className="fs-3 text-center text-white fw-bold py-5">NUESTROS AVALES</h2>
                <article className="d-flex justify-content-center align-items-center">
                    <FaCircle className="fs-1 text-white mx-3"/>
                    <FaCircle className="fs-1 text-white mx-3"/>
                    <FaCircle className="fs-1 text-white mx-3"/>
                    <FaCircle className="fs-1 text-white mx-3"/>
                </article>
            </section>
        </>
    );
};

export default Home;
