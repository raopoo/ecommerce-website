import "./Product.scss";
import Card from '../../Components/Card'
import { useParams } from "react-router-dom";
import { readAll } from "../../Services/Firebase-util";
import { useState, useEffect } from "react";

const Product = () =>{
    
    const [denimData, setDenimData] = useState([]);
    useEffect(() => readAll(setDenimData), []);
    //console.log(denimData);
    const params = useParams();

    if(denimData.length < 1) return <h1>Product does not exsist</h1>

    const newProduct = denimData.find((item) => item.id === params.id);
    
    return(
        <div className='product-page'>
            <h1>Product Information</h1>

            <Card item ={newProduct}  />
        </div>
    )
}

export default Product;