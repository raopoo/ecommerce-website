import Card from "../../Components/Card/Card";
import { readAll, read } from "../../Services/Firebase-util";
import { useState, useEffect } from "react";

import CarouselContainer from "../../Container/CarouselContainer/CarouselContainer";
import GridContainer from "../../Container/GridContainer/GridContainer";

const Collection = () => {
    // let id = "o3U5GS2IqhVAESlqIAZM";

    // const [denimData, setDenimData] = useState([]);
    // useEffect(() => readAll(setDenimData),[]);

    // if(denimData.length > 0) console.log(denimData);

    return (
        <>
            
            <CarouselContainer />
            <GridContainer />
        </>
    );
};

export default Collection;
