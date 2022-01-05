import "./Card.scss";
import Cart from "../../Pages/Cart"
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
    let navigate = useNavigate();
    let colorArr = item.Colours;
    let sizeArr = item.Sizes;
    
    let cartObject = (callback) =>{
        let cartItem = {
            Name : item.Name,
            Quantity: 1,
            Price: item.Price
        }
        callback(cartItem);
    }
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
            <button className="card-btn" onClick={() => {
                cartObject(Cart);
                navigate("/Cart")}}>
            Add to cart</button>
        </div>
    );
};

export default Card;
