import "./Nav.scss";
import { Link } from "react-router-dom";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";



const Nav = () => {
    
    return (
        <>
            <nav className="nav">
                <Link to = "/" className="nav-links">Home</Link>
                <Link to = "/Sale" className="nav-links">Collection</Link>
                <Link to = "/Cart" className="nav-links"><ShoppingCartIcon /></Link>    
            </nav>        
        </>
    );
};

export default Nav;
