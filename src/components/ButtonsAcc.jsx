import React from 'react'
import { useAccContext } from '../context/AccContext';
import { VscColorMode } from "react-icons/vsc";

const ButtonsAcc = () => {

    const { incSize, sizeBtn, contrast, contrastBtn } = useAccContext();

    return (
        <div className="flotante">

            <div className="buttonsAcc d-flex gap-3">
                <button
                    className={` buttonMain ${incSize ? "buttonMainOn" : ""}`}
                    onClick={sizeBtn}
                >
                    <span className="fs-5">A</span>
                    <span className="fs-2">A</span>
                </button>
                <button
                    className={` buttonMain fs-2 ${contrast ? "buttonMainOn" : ""}`}
                    onClick={contrastBtn}
                >
                    <VscColorMode />
                </button>
            </div>
            <button
                className={`
                            navbar-toggler togglerMenu 
                            ${incSize ? "fs-2" : "fs-5"} 
                            ${contrast ? "togglerContrast" : ""}
                            `}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavbar"
            >
                <span
                    className={`
                            navbar-toggler-icon
                            ${contrast ? "togglerContrast" : ""}
                            `}
                ></span>
            </button>

        </div>
    )
}

export default ButtonsAcc