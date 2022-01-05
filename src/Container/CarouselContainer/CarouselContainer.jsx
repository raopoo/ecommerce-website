import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CarouselContainer.scss";
import { Link } from "react-router-dom";
import { readAll } from "../../Services/Firebase-util";
import { useState, useEffect } from "react";

const CarouselContainer = () => {
    const [denimData, setDenimData] = useState([]);
    useEffect(() => readAll(setDenimData), []);

    //if (denimData.length > 0) console.log(denimData);

    // const chooseRandom = (arr, num = 1) => {
    //     const res = [];
    //     for(let i = 0; i < num; ){
    //        const random = Math.floor(Math.random() * arr.length);
    //        if(res.indexOf(arr[random]) !== -1){
    //           continue;
    //        };
    //        res.push(arr[random]);
    //        i++;
    //     };
    //     return res;
    //  };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <h2 className="car-txt">Featured items</h2>
            <Carousel
                responsive={responsive}
                autoPlay
                infinite={true}
                transitionDuration={1000}
                className="carousel-div"
            >
                {denimData.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link to={"/product/" + item.id}>
                                <h3>{item.Name}</h3>
                                <img
                                    className="car-img"
                                    src={item.imgUrl}
                                    alt={item.Name}
                                />
                            </Link>
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
};

export default CarouselContainer;

// Used npm package (react-multi-carousel) for carousel
//https://github.com/YIZHUANG/react-multi-carousel/blob/master/stories/index.stories.js - documentation
