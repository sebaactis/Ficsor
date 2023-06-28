import React from "react";

const Squares = () => {
    return (
        <div className="d-flex gap-4 squareContainer py-3" id="squareContainer">
            {Array.from({ length: 100 }, (_, i) => (
                <div key={i} className="fs-2 square"></div>
            ))}
        </div>
    );
};

export default Squares;
