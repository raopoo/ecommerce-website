import "./Header.scss";
import headerImage from "../../Container/Images/girl-shopping.jpg";
import { useNavigate } from "react-router-dom";
const Header = () => {
   
    let navigate = useNavigate();
    return (
        <>
            <div className="headerDiv">
                <h1 className="headerText">The Denim Chemistry</h1>
                <img
                    className="headerImage"
                    src={headerImage}
                    alt="Women carrying shopping bags"
                />
                    <button className="sale-btn" onClick={() => {navigate("/sale")}}>Sale</button>
            </div>
        </>
    );
};

export default Header;
