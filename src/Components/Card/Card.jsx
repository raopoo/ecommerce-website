import "./Card.scss";
import jacket from "../../Container/Images/Jackets.jpg";
const Card = () => {
    return (
        <div className="card">
            <h1>Name</h1>
            <img src={jacket} alt="Model wears a blue jacket" />
            <div>
                <label>Select color: </label>
                <select>
                    <option>Blue</option>
                    <option>Black</option>
                    <option>White</option>
                </select>
            </div>
            <div>
                <label>Select size: </label>
                <select>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                </select>
            </div>
           
            <div>
            <label>Favourite: </label>
                <input type="radio" id="fav_yes" name="fav_yes" value="Yes" checked />
                <label>Yes</label> 
                <input type="radio" id="fav_no" name="fav_no" value="No" />
                <label>No</label>
                
            </div>
        </div>
    );
};

export default Card;
