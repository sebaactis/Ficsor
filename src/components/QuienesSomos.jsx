import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useAccContext } from "../context/AccContext";
import equipo from "../assets/images/equipo.png";

const SobreNosotros = () => {
    const { incSize } = useAccContext();

    return (
        <main>
            <section className="quienesSomos">
                <div className="titleQuienesSomosDiv">
                    <IoIosArrowForward className="fs-2 arrow" color="#75AA43" />
                    <h1 className={`titleQuienesSomos fw-bold ${incSize ? "fs-2" : "fs-3"}`}>Quiénes Somos</h1>
                </div>

                <article className="container equipoArticle">
                    <div>
                        <h5 className={`titleEquipo fw-bold ${incSize ? "fs-4" : "fs-5"}`}>Presentación del equipo </h5>
                        <p className={`parrafoEquipo fw-bold ${incSize ? "fs-4" : "fs-5"}`}>FICSOR 2023</p>
                        <img className="imgEquipo" src={equipo} />
                    </div>

                    <div>
                        <h5 className={`titleEquipo my-3 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                            Dirección General y CEO
                        </h5>
                        <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Federico Sykes</p>
                    </div>

                    <div>
                        <h5 className={`titleEquipo my-3 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>Producción General </h5>
                        <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Luar Pepe</p>
                        <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Row Propato</p>
                        <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Alexis Fasolari</p>
                        <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>
                            Marisol Belén Illanes Quiroga
                        </p>
                        <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Mariana Rosselli</p>
                    </div>

                    <div className="separador"></div>

                    <div>
                        <article className="areasGrid row">
                            <div className="col-lg-4 col-xs-12">
                                <h5 className={`titleEquipo fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                                    Área Comunicación{" "}
                                </h5>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Row Propato</p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Leonela Carpanetto</p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Ayito Cabrera</p>

                                <h5 className={`titleEquipo fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                                    Área Intérpretes LSA-E{" "}
                                </h5>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Bárbara Di Pasquo</p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>
                                    María Cecilia Fernández
                                </p>

                                <h5 className={`titleEquipo fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                                    Área Escuelas de Sordos{" "}
                                </h5>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Carina Palacio</p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>
                                    Sabrina López Ortiz 
                                </p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Marita Varela </p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Laura Cabral </p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Micaela Covezzoli </p>

                                <h5 className={`titleEquipo fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                                    Área Traducción Audiovisual{" "}
                                </h5>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>
                                    Maive Carone Fernández 
                                </p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Martin Chamarro </p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Alejandra Tolj </p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Diana Poti </p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Diana Calfa </p>
                                <p className={`parrafoNamesEquipo  ${incSize ? "fs-5" : "fs-6"}`}>Rocío Sileo </p>
                            </div>

                            <div className="col-lg-4 col-xs-12">
                                <h5 className={`titleEquipo2 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                                    Responsable de INCAA{" "}
                                </h5>
                                <p className={`parrafoNamesEquipo2 ${incSize ? "fs-5" : "fs-6"}`}>Mariana Rosselli</p>

                                <h5 className={`titleEquipo2 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                                    Responsable Tecnópolis{" "}
                                </h5>
                                <p className={`parrafoNamesEquipo2 ${incSize ? "fs-5" : "fs-6"}`}>Alexis Fasolari</p>

                                <h5 className={`titleEquipo2 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                                    Responsable Casa <br></br>del Bicentenario{" "}
                                </h5>
                                <p className={`parrafoNamesEquipo2 ${incSize ? "fs-5" : "fs-6"}`}>Row Propato</p>

                                <h5 className={`titleEquipo2 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                                    Responsable Institucionales<br></br> y General{" "}
                                </h5>
                                <p className={`parrafoNamesEquipo2 ${incSize ? "fs-5" : "fs-6"}`}>Luar Pepe</p>
                                <p className={`parrafoNamesEquipo2 ${incSize ? "fs-5" : "fs-6"}`}>Federico Sykes</p>
                            </div>
                            <div className="col-lg-4 col-xs-12">
                                <h5 className={`titleEquipo2 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                                    Área Diseño Gráfico{" "}
                                </h5>
                                <p className={`parrafoNamesEquipo2 ${incSize ? "fs-5" : "fs-6"}`}>Studio Flova</p>

                                <h5 className={`titleEquipo2 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                                    Área Diseño UX/UI - Alumnos Coderhouse{" "}
                                </h5>
                                <p className={`parrafoNamesEquipo2 ${incSize ? "fs-5" : "fs-6"}`}>Jennifer Assaad</p>
                                <p className={`parrafoNamesEquipo2 ${incSize ? "fs-5" : "fs-6"}`}>Camila Beaux</p>

                                <h5 className={`titleEquipo2 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>
                                    Área Desarrollo - Alumnos Coderhouse{" "}
                                </h5>
                                <p className={`parrafoNamesEquipo2 ${incSize ? "fs-5" : "fs-6"}`}>Sebastián Actis</p>
                                <p className={`parrafoNamesEquipo2 ${incSize ? "fs-5" : "fs-6"}`}>Mauricio Encina</p>
                                 
                                <h5 className={`titleEquipo2 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>Área Legal </h5>
                                <p className={`parrafoNamesEquipo2 ${incSize ? "fs-5" : "fs-6"}`}>Carolina Uslenghi</p>
                            </div>
                        </article>

                        <div className="separador"></div>

                        <article className="mailsGrid row">
                            <div className="col-lg-6 col-xs-12">
                                <h5 className="titleMails fw-bold">Mails Institucionales</h5>

                                <p className="parrafoMails mt-3">
                                    {" "}
                                    <span className="fw-bold">Información General:</span> info@ficsor.com.ar{" "}
                                </p>
                                <p className="parrafoMails">
                                    {" "}
                                    <span className="fw-bold">Producción General:</span> produccion@ficsor.com.ar{" "}
                                </p>
                                <p className="parrafoMails">
                                    {" "}
                                    <span className="fw-bold">Dirección General:</span> direccion@ficsor.com.ar{" "}
                                </p>
                                <p className="parrafoMails mt-5">
                                    {" "}
                                    <span className="fw-bold">Interpretes FiCSor:</span> interpretes@ficsor.com.ar{" "}
                                </p>
                                <p className="parrafoMails">
                                    {" "}
                                    <span className="fw-bold">Traducción Audiovisual:</span> tav@ficsor.com.ar{" "}
                                </p>
                            </div>
                            <div className="col-lg-6 col-xs-12 ">
                                <p className="parrafoMails">
                                    {" "}
                                    <span className="fw-bold">Comunicación:</span> comunicacion@ficsor.com.ar{" "}
                                </p>
                                <p className="parrafoMails">
                                    {" "}
                                    <span className="fw-bold">Donaciones:</span> donaciones@ficsor.com.ar{" "}
                                </p>
                                <p className="parrafoMails mt-5">
                                    {" "}
                                    <span className="fw-bold">Escuelas:</span> escuelas@ficsor.com.ar //<br></br>{" "}
                                    escuelasficsor@gmail.com{" "}
                                </p>
                                <p className="parrafoMails mt-5">
                                    {" "}
                                    <span className="fw-bold">Diseño:</span> diseño@ficsor.com.ar{" "}
                                </p>
                            </div>
                        </article>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default SobreNosotros;
