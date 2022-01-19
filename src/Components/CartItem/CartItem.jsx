import "./CartItem.scss";
import { useEffect, useState } from "react";
import { readCart, deleteItem } from "../../Services/Firebase-util";

const CartItem = () => {
    const [cartData, setCartData] = useState([]);

    const findCartData = async () => {
        await readCart(setCartData);
    }

    useEffect(() => findCartData(), []);
    
//Using a seperate function for reading cart data as page needs to be refreshed after the items are deleted from the cart

    const deleteHandler = (id) =>{
        deleteItem(id);
        findCartData();
    }

    return (
        <div className="cart-grid">
            {cartData.map((item) => (
                <div key={item.id} className="cart-card">
                    <h2>{item.Name}</h2>
                    <p className="text">Price : ${item.Price}</p>
                    <p className="text">Quantity : {item.Quantity}</p>
                    <button className="delete-btn" onClick={() => deleteHandler(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
