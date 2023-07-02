import React, { useState, useContext } from "react";

const AccContext = React.createContext([]);

export const useAccContext = () => useContext(AccContext);

const AccProvider = ({ children }) => {
    const [incSize, setIncSize] = useState(false);
    const sizeBtn = () => {
        setIncSize(!incSize);
    };

    const [contrast, setContrast] = useState(false);
    const contrastBtn = () => {
        setContrast(!contrast);

        const bodyElement = document.getElementsByTagName("body")[0];

        bodyElement.style.filter = !contrast ? `contrast(135%)` : `contrast(100%)`;

        console.log(bodyElement);
    };

    return <AccContext.Provider value={{ incSize, sizeBtn, contrast, contrastBtn }}>{children}</AccContext.Provider>;
};

export default AccProvider;
