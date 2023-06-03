import React from "react";
import { VscColorMode } from "react-icons/vsc";

const Home = () => {
    return (
        <>
            <section className="main">
                <h1 className="mainHomeTitle fw-bold">¿Qué es el FiCSor?</h1>

                {/* <div className="mainHome">
                    <article>
                        <p className="fs-3">
                            El FiCSor es el primer festival de cine pensado y organizado por personas sordas en
                            Argentina, y la primera plataforma de exhibición de películas de temática sorda nacionales e
                            internacionales en el país. Su objetivo es, a través del cine, defender y reconocer los
                            derechos sociales, culturales y lingüísticos de la comunidad sorda.
                        </p>
                        <button className="buttonMain">aA</button>
                        <button className="buttonMain">
                            <VscColorMode />
                        </button>
                    </article>
                    <article className="mainVideoButtons">
                        <video width="650" height="450" controls>
                            <source src="movie.mp4" type="video/mp4" />
                        </video>
                        <div className="buttonVideoContainer">
                            <button className="buttonVideo">Convocatoria</button>
                            <button className="buttonVideo">Donaciones</button>
                        </div>
                    </article>
                </div> */}

                <div className="mainHome">
                    <div className="row">
                        <article className="col-md-12 col-lg-5">
                            <p className="fs-3">
                                El FiCSor es el primer festival de cine pensado y organizado por personas sordas en
                                Argentina, y la primera plataforma de exhibición de películas de temática sorda
                                nacionales e internacionales en el país. Su objetivo es, a través del cine, defender y
                                reconocer los derechos sociales, culturales y lingüísticos de la comunidad sorda.
                            </p>
                            <button className="buttonMain">aA</button>
                            <button className="buttonMain">
                                <VscColorMode />
                            </button>
                        </article>
                        <article className="mainVideoButtons col-md-12 col-lg-7">
                            <div>
                                <video width="650" height="450" controls>
                                    <source src="movie.mp4" type="video/mp4" />
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
                <h1 className="titleFestival"> Proxima edicion del festival </h1>
                <article className="nextFestival">
                    <video width="650" height="450" controls>
                        <source src="movie.mp4" type="video/mp4" />
                    </video>
                    <div className="festivalDescription">
                        <h1 className="festivalText">
                            {" "}
                            ¡NOS ENCONTRAMOS <br></br>
                            DE NUEVO EN SEPTIEMBRE!
                        </h1>
                        <button className="buttonDescription">MAS INFORMACION</button>
                    </div>
                </article>
            </section>
        </>
    );
};

export default Home;
