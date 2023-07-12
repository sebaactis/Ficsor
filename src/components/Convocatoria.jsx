import ItemList from "./ItemList";
import { MdError } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";

const Convocatoria = () => {
    return (
        <main>
            <section className="convocatoria">
                <h1 className="fs-3 titleConvocatoria">
                    Convocatoria
                </h1>
                <article className="container convocatoriaBases">
                    <div>
                        <h5 className="titleBases fw-bold">FICSor - 3er Festival Internacional de Cine Sordo de Argentina </h5>
                        <p className="fs-5 parrafoBases fw-bold">BASES Y CONDICIONES</p>
                    </div>
                    <div>
                        <ItemList titulo={"01. LUGAR Y FECHA"} descripcion={"El 3er Festival Internacional de Cine Sordo de Argentina (FICSor) se llevará a cabo del 13 al 18 de septiembre de 2023, en la Ciudad Autónoma de Buenos Aires, Argentina."} />
                    </div>
                    <div>
                        <ItemList titulo={"02. OBJETIVOS"} descripcion={"El FICSor tiene como objetivo principal promover y difundir la cultura y la comunidad Sorda, así como fomentar el acceso de la comunidad a la producción y disfrute del cine. Además, busca concientizar sobre los derechos y la inclusión de las personas Sordas en la sociedad."} />
                    </div>
                    <div>
                        <ItemList titulo={"03. SECCIONES"} descripcion={"El FICSor contará con las siguientes secciones:"} />
                        <article className="seccionesParrafos1">
                            <p className=""><span className="fw-bold">Competencia Oficial de largometrajes:</span> Abierta a películas nacionales e internacionales de cualquier género relacionadas con la cultura e identidad Sorda, con una duración mayor a los 60 minutos. Todas las películas deben contar con subtítulos en español. En caso de que la película no esté subtitulada en español, se requiere enviar el guión con anticipación para que el equipo de traductores pueda evaluar si es posible subtitularla en español.</p>
                        </article>
                        <article className="seccionesParrafos2">
                            <p className=""><span className="fw-bold">Competencia Oficial de mediometrajes: </span>Abierta a películas nacionales e internacionales de cualquier género relacionadas con la cultura e identidad Sorda, con una duración entre 20 y 60 minutos. Todas las películas deben contar con subtítulos en español. En caso de que la película no esté subtitulada en español, se requiere enviar el guión con anticipación para que el equipo de traductores pueda evaluar si es posible subtitularla en español.</p>
                        </article>
                        <article className="seccionesParrafos3">
                            <p className=""><span className="fw-bold">Competencia Oficial de cortometrajes: </span>Abierta a películas nacionales e internacionales de cualquier género relacionadas con la cultura e identidad Sorda, con una duración máxima de 20 minutos (incluyendo títulos). Todas las películas deben contar con subtítulos en español. En caso de que el cortometraje no esté subtitulado en español, se requiere enviar el guión con anticipación para que el equipo de traductores pueda generar los subtítulos correspondientes.</p>
                        </article>
                        <article className="seccionesParrafos4">
                            <p className=""><span className="fw-bold">Proyecciones de cortos de escuelas: </span>Abierta a cortometrajes realizados por estudiantes de escuelas de sordos, con temáticas relacionadas con la comunidad Sorda. No hay restricciones de duración ni idioma. Todas las películas deben contar con subtítulos en español.</p>
                        </article>
                        <article className="seccionesParrafos5">
                            <p className=""><span className="fw-bold">Proyecciones Especiales: </span> Sección dedicada a películas fuera de competencia, tanto nacionales como internacionales, relacionadas con la comunidad Sorda. Todas las películas deben contar con subtítulos en español.</p>
                        </article>
                        <article className="seccionesParrafos6">
                            <p className=""><span className="fw-bold">Actividades complementarias: </span> Talleres, charlas, conferencias y actividades educativas relacionadas con el cine y la comunidad Sorda.</p>
                        </article>
                    </div>
                    <div>
                        <ItemList titulo={"04. ADMISIÓN DE LAS OBRAS"} descripcion={"La convocatoria está abierta a películas de mediometraje, corto y largometraje, nacionales e internacionales, relacionadas con la cultura e identidad Sorda. No se admitirán películas que no estén vinculadas con la cultura e identidad Sorda."} />
                        <p className="itemBasesParrafo fw-bold">
                            En el caso de los mediometrajes, deben tener una duración entre 20 y 60 minutos. Los cortometrajes deben tener una duración máxima de 20 minutos (incluyendo títulos) y los largometrajes deben tener una duración mayor a los 60 minutos. No hay restricciones de idioma original. Todas las películas deben ser presentadas con subtítulos en español. En caso de que la película no esté subtitulada en español, se requiere enviar el guión con anticipación para que el equipo de traductores pueda evaluar si es posible subtitularla en español.
                        </p>
                    </div>
                    <div>
                        <ItemList titulo={"05. INSCRIPCIÓN DE LAS OBRAS"} descripcion={"Las obras podrán inscribirse de las siguientes formas:"} />
                        <ul>
                            <li className="itemBasesParrafo fw-bold"> A través del formulario de Google disponible en el sitio web oficial del FICSor: www.ficsor.com.ar. En el formulario de inscripción, se deberán proporcionar los datos requeridos, adjuntar la película visionada con subtítulos en español y completar la información de contacto.</li>
                            <li className="itemBasesParrafo fw-bold">A través de las plataformas en línea <a href="https://filmmakers.festhome.com/es/festival/festival-internacional-de-cine-sordo-de-argentina" target="_blank">Festhome</a> y FilmFreeway, siguiendo las instrucciones y requerimientos especificados en dichas plataformas.</li>
                        </ul>
                    </div>
                    <div className="seccionAdvertencia">
                        <MdError color={"#C11C70"} className="fs-2" />
                        <p className="seccionAdvertenciaParrafo fw-bold">
                            La fecha límite para la inscripción de las obras es el 1 de agosto de 2023. Las obras recibidas después de esta fecha no serán consideradas para la selección.
                        </p>
                    </div>
                    <div>
                        <ItemList titulo={"06. SELECCIÓN"} descripcion={"El Comité de Selección del FICSor será el encargado de seleccionar las obras que participarán en las diferentes secciones del festival. La decisión del Comité de Selección será final e inapelable. Los seleccionados serán notificados por correo electrónico."} />
                    </div>
                    <div>
                        <ItemList titulo={"07. JURADO Y PREMIOS"} descripcion={"Los participantes en el FICSor aceptan ceder los derechos de proyección de sus obras durante el festival. Las proyecciones podrán tener lugar en salas de cine, espacios culturales o plataformas en línea, siempre en el marco del festival y con el fin de promover las obras y la cultura Sorda."} />
                    </div>
                    <div>
                        <ItemList titulo={"08. DERECHOS DE PROYECCIÓN"} descripcion={"El FICSor tiene como objetivo principal promover y difundir la cultura y la comunidad Sorda, así como fomentar el acceso de la comunidad a la producción y disfrute del cine. Además, busca concientizar sobre los derechos y la inclusión de las personas Sordas en la sociedad."} />
                    </div>
                    <div>
                        <ItemList titulo={"09. ACEPTACIÓN DE LAS BASES"} descripcion={"La participación en el FICSor implica la aceptación total de estas bases y condiciones. Los casos no previstos en estas bases serán resueltos por la organización del festival."} />
                        <p className="itemBasesParrafo fw-bold">
                            Para obtener más información o realizar consultas, comunicarse con el equipo del FICSor a través del correo electrónico info@ficsor.com.ar o visitar la página web www.ficsor.com.ar.
                        </p>
                        <p className="itemBasesParrafo fw-bold">
                            Fecha de publicación de las bases y condiciones: 3 de julio de 2023.
                        </p>
                    </div>
                    <div className="seccionSuerte">
                        <p className="seccionSuerteParrafo fw-bold">
                            ¡Les deseamos mucho éxito a todos los participantes del 3er Festival Internacional de Cine Sordo de Argentina - FICSor!
                        </p>
                    </div>
                </article>
                <div className="container buttonConvocatoriaDiv">

                    <button className="buttonConvocatoria">
                        <AiOutlineDownload color={"white"} className="fs-2" />
                        <p>DESCARGAR CONVOCATORIA</p>
                    </button>
                </div>
            </section>


        </main>
    );
};

export default Convocatoria;
