import "./Card.scss";
import cartObject from '../cartObject.js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
    const [count, setCount] = useState(1);
    let navigate = useNavigate();
    let colorArr = item.Colours;
    let sizeArr = item.Sizes;

    const increment = (n) => {
        // count++;
        const newCount = count + n;
        setCount(newCount);
    };
    
    return (
        <div className="card">
            <h1>{item.Name}</h1>
            <img className="card-img" src={item.imgUrl} alt={item.Name} /><br />
            <label>Price : ${item.Price}</label>
            <div>
                <label>Select color: </label>
                <select className="color-div">
                    {colorArr.map((item, i) => (
                        <option key={i} value={item}>{item}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Select size: </label>
                <select className="size-div">
                {sizeArr.map((item, i) => (
                        <option key={i} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Favourite: </label>
                    <input
                        type="radio"
                        id="yes"
                        name="Favourite"
                        value="Yes"
                        defaultChecked
                    />
                    <label>Yes</label>
                    <input type="radio" id="no" name="Favourite" value="No" />
                    <label>No</label>
            </div>
            <div className="count-div">
            <button className="incBtn" onClick={() => increment(-1)}>-</button>
            <p>{count}</p>
            <button className="incBtn" onClick={() => increment(1)}>+</button>
            </div>
            <button className="card-btn" onClick={() => {
                cartObject(item,count);
                navigate("/Cart")}}>
            Add to cart</button>
        </div>
    );
};

export default Card;
