import { AiOutlineDownload } from "react-icons/ai";
import { useAccContext } from "../context/AccContext";
import { IoIosArrowForward } from "react-icons/io";

const Convocatoria = () => {

    const { incSize } = useAccContext();

    return (
        <main>
            <section className="convocatoria">
                <div className="titleConvocatoriaDiv">
                    <IoIosArrowForward className="fs-2 arrow" color="#75AA43" />
                    <h1 className={`titleConvocatoria fw-bold ${incSize ? "fs-2" : "fs-3"}`}>
                        Convocatoria
                    </h1>
                </div>

                <article className="container convocatoriaBases">
                    <div>
                        <h5 className={`titleBases fw-bold ${incSize ? "fs-4" : "fs-5"}`}>FICSor - 3er Festival Internacional de Cine Sordo de Argentina </h5>
                        <p className={`parrafoBases fw-bold ${incSize ? "fs-4" : "fs-5"}`}>BASES Y CONDICIONES PARA EL TERCER FESTIVAL INTERNACIONAL DE CINE SORDO DE ARGENTINA</p>
                    </div>

                    <div>
                        <h5 className={`titleBases my-4 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>CAPITULO I - DEL OBJETO</h5>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">01.</span> Considerando el acuerdo marco celebrado entre EL FESTIVAL INTERNACIONAL DE CINE SORDO DE ARGENTINA (en adelante denominado “FICSOR”), y LOS REALIZADORES DE OBRAS PRESENTANTES (en adelante denominado “REALIZADORES”), llaman a participar de la “CONVOCATORIA DE OBRAS POSTULANTES” (en adelante denominado la “CONVOCATORIA”) a productores/as y realizadores/ras nacionales e internacionales.</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">02.</span> La presente CONVOCATORIA está destinada a presentar audiovisuales de corto, medio y largometraje, nacionales e internacionales, relacionados con la cultura e identidad Sorda. No se admitirán audiovisuales que no estén vinculados con la cultura e identidad Sorda. No habrá restricciones de idioma original. Todos los audiovisuales deberán ser presentados con subtítulos en español para la realización del FICSOR que trata sobre la cultura e identidad de personas sordas que viven en cualquier país (en adelante denominado el “AUDIOVISUAL"), de acuerdo a las exigencias de calidad y formato del mercado internacional y conforme lo establecido en las presentes BASES Y CONDICIONES (en adelante denominadas las "BASES Y CONDICIONES").</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}><span className="fw-bold p-1"> 03.</span>  El FICSOR estará compuesta por las siguientes secciones: </p>
                        <article className="seccionesParrafos1">

                            <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}><span className="fw-bold">a. Competencia Oficial de largometrajes:</span> Abierta a audiovisuales nacionales e internacionales de cualquier género relacionados con la cultura e identidad Sorda, con una duración mayor a los 60 minutos. Todos los audiovisuales deben contar con subtítulos en español.</p>
                        </article>
                        <article className="seccionesParrafos2">
                            <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}><span className="fw-bold">b. Competencia Oficial de mediometrajes: </span>Abierta a audiovisuales nacionales e internacionales de cualquier género relacionados con la cultura e identidad Sorda, con una duración entre 20 y 60 minutos. Todos los audiovisuales deben contar con subtítulos en español.</p>
                        </article>
                        <article className="seccionesParrafos3">
                            <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}><span className="fw-bold">c. Competencia Oficial de cortometrajes: </span>Abierta a audiovisuales nacionales e internacionales de cualquier género relacionados con la cultura e identidad Sorda, con una duración máxima de 20 minutos (incluyendo títulos). Todos los audiovisuales deben contar con subtítulos en español.</p>
                        </article>
                        <article className="seccionesParrafos4">
                            <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}><span className="fw-bold">d. Proyecciones de cortos de escuelas: </span>Abierta a audiovisuales realizados por estudiantes sordos de escuela primaria y secundaria, con temáticas relacionadas con la comunidad Sorda. No hay restricciones de duración ni idioma. Todos los audiovisuales deben contar con subtítulos en español.</p>
                        </article>
                        <article className="seccionesParrafos5">
                            <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}><span className="fw-bold">e. Proyecciones Especiales: </span> Sección dedicada a audiovisuales fuera de competencia, tanto nacionales como internacionales, relacionados con la comunidad Sorda. Todos los audiovisuales deben contar con subtítulos en español.</p>
                        </article>
                        <article className="seccionesParrafos6">
                            <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}><span className="fw-bold">f. Actividades complementarias: </span> Talleres, charlas, conferencias y actividades educativas relacionadas con el cine y la comunidad Sorda.</p>
                        </article>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">04.</span> El FICSOR se llevará a cabo del 13 al 18 de septiembre de 2023.</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">05.</span> El FICSOR se desarrollará en la Ciudad Autónoma de Buenos Aires, Argentina.</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">06.</span> El AUDIOVISUAL de LA CONVOCATORIA deberá ser obra original o en adaptaciones o derivaciones de una obra preexistente, debiendo en todos los casos el REALIZADOR acreditar fehacientemente la tenencia legal de los derechos necesarios para la realización de la obra objeto del AUDIOVISUAL, y de acuerdo a las presentes BASES Y CONDICIONES.</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">07.</span> Para la realización de la obra objeto del FICSOR en cuestión, quien es REALIZADOR, deberá poseer todos los derechos para el uso del AUDIOVISUAL sin límite temporal, geográfico ni de medios de exhibición o encontrarse facultado para poder ceder los mismos en dichas condiciones de uso.</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">08.</span> El soporte de registro de la obra a presentarse deberá ser, no de forma excluyente, sino preferentemente lo siguiente: las resoluciones son 1920 x 1080 ó 1280 x 720 pixels, los formatos Quicktime mov ó mpg4 ó h264 y códecs mpg4 ó h264. Se aceptará cualquier tipo de formato de video, dándose una sugerencia a lo mencionado anteriormente. Los subtítulos podrán estar sobreimpresos o entregarse en formato srt.</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">09.</span> La mera presentación del AUDIOVISUAL por parte del REALIZADOR importa el conocimiento y aceptación por parte del mismo, de todos los términos de las presentes BASES Y CONDICIONES.</p>
                    </div>
                    <div>
                        <h5 className={`titleBases my-4 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>CAPÍTULO II - DE LA CONVOCATORIA</h5>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">10.</span> El propósito del llamado a FICSOR es promover y difundir la cultura y la comunidad Sorda, así como fomentar el acceso de la comunidad a la producción y disfrute del cine. Además, busca concientizar sobre los derechos y la inclusión de las personas Sordas en la sociedad al mismo tiempo que generar contenidos de interés público para ser exhibidos en medios audiovisuales. El REALIZADOR podrá ser PERSONA HUMANA o PERSONA JURÍDICA.</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">11.</span> Fíjese la apertura de la CONVOCATORIA desde la fecha de publicación de la presente y como cierre del mismo para realizar presentaciones a la CONVOCATORIA el día 01 de agosto de 2023 a las 23:59 horas. Los AUDIOVISUALES deberán presentarse única y exclusivamente mediante las vías abajo especificadas. No se aceptarán inscripciones presentadas fuera del plazo establecido por las presentes BASES Y CONDICIONES. Una vez finalizado el plazo para realizar presentaciones a la presente CONVOCATORIA, se realizará un proceso de admisión, y aquellos AUDIOVISUALES que tuvieran errores de presentación, previa comunicación del FICSOR a través de la plataforma <a href="">www.ficsor.com.ar</a> , contarán con un período de CINCO (5) días hábiles para la corrección de los mismos. En caso de no rectificarse los errores respectivos, la presentación se considerará no admitida de pleno derecho. Se aclara asimismo que las presentes BASES Y CONDICIONES podrán ser consultadas en la página web <a href="">www.ficsor.com.ar</a></p>
                    </div>
                    <div>
                        <h5 className={`titleBases my-4 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>CAPÍTULO III - DE LA INSCRIPCIÓN A LOS AUDIOVISUALES</h5>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">12.</span> Los AUDIOVISUALES se podrán inscribir de las siguientes formas:</p>
                        <ul>
                            <li className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> A través del formulario de Google disponible en el sitio web oficial del FICSor: <a href="">www.ficsor.com.ar</a>. En el formulario de inscripción, se deberán proporcionar los datos requeridos, link de descarga o visionado de la película con subtítulos en español y completar la información de contacto.</li>
                            <li className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> A través de las plataformas en línea <a href="">Festhome</a> y <a href="">FilmFreeway</a>, siguiendo las instrucciones y requerimientos especificados en dichas plataformas.  </li>
                            <li className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> A través de correo postal en un pendrive con la película con subtítulos en español, junto al formulario de inscripción en formato PDF (disponible para su descarga en www.ficsor.com.ar) enviado a Avenida Bernardino Rivadavia 6015. Piso 12. Departamento “C”. Barrio de Caballito. Ciudad Autónoma de Buenos Aires. Argentina. Código postal 1406.</li>
                        </ul>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">13.</span> La fecha límite para la inscripción de las obras es el 1 de agosto de 2023. Las obras recibidas después de esta fecha no serán consideradas para la selección.</p>
                    </div>
                    <div>
                        <h5 className={`titleBases my-4 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>CAPÍTULO IV - DE LA SELECCIÓN DE AUDIOVISUALES</h5>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">14.</span> El Comité de Selección del FICSOR será el encargado de seleccionar y programar los AUDIOVISUALES que participarán en las diferentes secciones del festival. Una vez seleccionado el AUDIOVISUAL no podrá ser retirado del programa. La decisión del Comité de Selección será final e inapelable. Los AUDIOVISUALES seleccionados serán notificados a sus REALIZADORES por correo electrónico.</p>
                    </div>
                    <div>
                        <h5 className={`titleBases my-4 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>CAPÍTULO V - DEL JURADO</h5>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">15.</span> El Jurado del FICSOR estará compuesto por reconocidos profesionales del cine y la comunidad Sorda. El Jurado será el encargado de otorgar los premios a las mejores obras en cada categoría.</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">16.</span> El FICSOR nombrará un Jurado que estará conformado por TRES (3) miembros de cada categoría de la competencia oficial de largometrajes, mediometrajes y cortometrajes, quienes deberán ser personalidades de reconocida trayectoria en la actividad audiovisual y/o cultural de la comunidad Sorda y quienes tendrán a su cargo la elección de las mejores obras en cada categoría, considerando todos los presentados correctamente a la CONVOCATORIA.</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">17.</span> El Jurado tendrá a su cargo la selección de los mejores AUDIOVISUALES evaluando y calificaándolos según los siguientes criterios y puntajes:</p>
                        <ul>
                            <li className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> A- Originalidad y creatividad del AUDIOVISUAL. </li>
                            <li className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> B- Aporte a la visibilidad de la temática abordada por el FESTIVAL.</li>
                            <li className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> C - Calidad de la confección del AUDIOVISUAL.</li>
                        </ul>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">18.</span> Los premios serán anunciados por el Jurado durante la ceremonia de clausura del FESTIVAL.</p>
                    </div>
                    <div>
                        <h5 className={`titleBases my-4 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>CAPÍTULO VI - DE LOS DERECHOS DE EXHIBICIÓN</h5>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">19.</span> Los derechos patrimoniales y de propiedad intelectual de las obras serán de exclusiva propiedad del REALIZADOR de la CONVOCATORIA, sin perjuicio de lo cual se ceden al FICSOR durante la celebración del FICSOR y posteriormente a la misma los derechos no exclusivos de exhibición de la obra para la utilización de una imagen fija y/o un fragmento del audiovisual presentado para fines de difusión.</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">20.</span> Los derechos cedidos a favor del FICSOR se explotarán por el tiempo que se celebra el FICSOR y posteriormente. EL REALIZADOR, por su sola inscripción en la CONVOCATORIA, renuncia a realizar cualquier reclamo vinculado con la cesión de derechos antedicha.</p>
                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">21.</span> Las proyecciones podrán tener lugar en salas de cine, espacios culturales, plataformas en línea y en cualquier medio de exhibición que el FICSOR estime pertinente, sin exclusividad, siempre en el marco del FICSOR y con el fin de promover las obras y la cultura Sorda.</p>

                    </div>
                    <div>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">22.</span> El FICSOR desde la fecha del respectivo contrato de instrumentación del AUDIOVISUAL se reserva el derecho de exhibición, no exclusivo en muestras, festivales o cualquier otra actividad de difusión en todo momento durante el plazo de la celebración.</p>

                    </div>
                    <div>
                        <h5 className={`titleBases my-4 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>CAPÍTULO VII - CELEBRACIÓN SIN FINES DE LUCRO</h5>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">23.</span> El FICSOR se celebrará sin fines de lucro, por ende, los REALIZADORES y/o los AUDIOVISUALES presentados no percibirán algún tipo de pago y/o honorarios por lo cual no podrán hacer reclamos.</p>
                    </div>
                    <div>
                        <h5 className={`titleBases my-4 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>CAPÍTULO VIII - DE LA ACEPTACIÓN DE BASES Y CONDICIONES</h5>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">24.</span> El envío de AUDIOVISUAL al FICSOR y del formulario de inscripción implica el conocimiento y la aceptación total de estas BASES Y CONDICIONES. Los casos no previstos en estas BASES Y CONDICIONES serán resueltos por la organización del FICSOR. La preselección y/o selección de los AUDIOVISUALES, no implica la obligación de exhibición por parte del FICSOR.</p>
                    </div>
                    <div>
                        <h5 className={`titleBases my-4 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>CAPÍTULO IX - DE LA MODIFICACION DE BASES Y CONDICIONES</h5>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">25.</span> Las BASES Y CONDICIONES podrán ser modificadas sin previo aviso.</p>
                    </div>
                    <div>
                        <h5 className={`titleBases my-4 fw-bold ${incSize ? "fs-4" : "fs-5"}`}>CAPÍTULO X - DE LA COMUNICACIÓN CON FICSOR</h5>
                        <p className={`itemBasesParrafo fw-bold ${incSize ? "fs-5" : "fs-6"}`}> <span className="fw-bold p-1">26.</span> Para obtener más información o realizar consultas, podrán comunicarse con el equipo del FICSOR a través del correo electrónico <span className="infoSpan"> info@ficsor.com.ar</span> o visitar la página web <a href="">www.ficsor.com.ar</a>.</p>
                    </div>
                </article>
                <div className="container buttonConvocatoriaDiv">
                    <a className="linksButtons" href="https://docs.google.com/file/d/1jRAB5h8fL49O8vASVpLHyBlDKPmSfJ8f/edit?filetype=msword" target="_blank">
                        <button className="buttonConvocatoria2">
                            <AiOutlineDownload color={"#C11C70"} className="fs-2" />
                            <p>DESCARGAR</p>
                        </button>
                    </a>
                    <a className="linksButtons" href="https://docs.google.com/forms/d/e/1FAIpQLSdR-OjAscJ236LUDLOhkRQ46DpLmdyqz2c2UVGnW-zdDPKclg/viewform" target="_blank">
                        <button className="buttonConvocatoria">
                            <p>COMPLETAR FORMULARIO</p>
                        </button>
                    </a>

                </div>
            </section>


        </main>
    );
};

export default Convocatoria;
