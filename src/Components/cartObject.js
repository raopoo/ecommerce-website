import { createCart } from '../Services/Firebase-util';

    const addItemToCart = (data) =>{
        createCart(data);
    }

    const cartObject = (item,count) =>{
        let cartItem = {
            Name : item.Name,
            Quantity: count,
            Price: item.Price,
        }

        addItemToCart(cartItem);
        
    }

    export default cartObject;