import './Cart.scss';
import CartItem from '../../Components/CartItem/CartItem';

const Cart =(order) =>{

    return(
        <div className='cart'>
            <h1 className='header-text'>Items in cart</h1>
            <CartItem />
        </div>
    )
}

export default Cart;
