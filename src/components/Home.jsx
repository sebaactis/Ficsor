import React from 'react'
import NavBar from './NavBar.jsx'
import { VscColorMode } from "react-icons/vsc";

const Home = () => {
    return (
        <>
            <NavBar />
            <section className="main">
                <h1 className="mainHomeTitle">¿Que es el FicSor?</h1>
                <div className="mainHome">
                    <article>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nulla exercitationem veritatis, ad, vel consectetur accusantium omnis quaerat consequuntur eligendi qui temporibus eos quos debitis unde mollitia ut! Vitae, omnis!
                            Molestiae veritatis minima, dicta rerum in adipisci facere! Perferendis tempora maiores expedita hic non maxime blanditiis autem, sint deleniti impedit fugit laudantium praesentium, excepturi nemo provident nobis sit? Corporis, cupiditate.
                            Dolores aliquam minus quasi incidunt quibusdam vitae laboriosam recusandae aspernatur amet voluptate dolor, voluptatibus consequuntur consectetur iure quidem rem qui esse quod voluptatum? Exercitationem neque repellat officia quidem iure totam!
                            Iure possimus minima aspernatur quam quae atque odio error obcaecati. Delectus ullam eveniet omnis in natus? Voluptate veritatis saepe laborum earum eaque, perspiciatis officia ut aperiam quod hic ipsa laboriosam.
                            Sapiente qui nemo facilis! Nam neque nobis quod odit nesciunt saepe est porro atque natus, cum repudiandae fugiat expedita, veniam deserunt animi aspernatur aperiam magni quas sequi aliquid quis maiores.
                        </p>
                        <button className="buttonMain">aA</button>
                        <button className="buttonMain"><VscColorMode /></button>
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
                </div>
            </section>
        </>

    )
}

export default Home