import './CartItem.scss';

const CartItem = (data) =>{

    return(
        <div className='cart-card'>
            <h2>{data.Name}</h2>
            <p>Price : ${data.Price}</p>
            
        </div>
    )
}

export default CartItem;