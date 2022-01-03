import "./GridContainer.scss";

import { readAll } from "../../Services/Firebase-util";
import { useState, useEffect } from "react";

const GridContainer = () => {
    const [denimData, setDenimData] = useState([]);
    useEffect(() => readAll(setDenimData), []);

    if (denimData.length > 0) console.log(denimData);

    return (
        <>
            <h3 className="grid-txt">Denim Collection</h3>
            <div className="grid-class">
            {denimData.map((item) => {
                return (
                    
                        <div>
                            <h3>{item.Name}</h3>
                            <img
                                className="grid-img"
                                src={item.imgUrl}
                                alt={item.Name}
                            />
                        </div>
                    
                );
            })}
            </div>
        </>
    );
};

export default GridContainer;
