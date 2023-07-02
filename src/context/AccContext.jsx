import React, { useState, useContext } from "react";

const AccContext = React.createContext([]);

export const useAccContext = () => useContext(AccContext);

const AccProvider = ({ children }) => {
    const [incSize, setIncSize] = useState(false);

    const sizeBtn = () => {
        setIncSize(!incSize);
        console.log(incSize);
    };

    return <AccContext.Provider value={{ incSize, sizeBtn }}>{children}</AccContext.Provider>;
};

export default AccProvider;
