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
            

        </div>
    )
}

export default ButtonsAcc