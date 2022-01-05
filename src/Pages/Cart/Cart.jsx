import './Cart.scss';
import CartItem from '../../Components/CartItem/CartItem';

const Cart =(order) =>{

    return(
        <>
            <h1>Items in cart</h1>
            <CartItem data={order} />
        </>
    )
}

export default Cart;
