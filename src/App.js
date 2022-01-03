import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Collection from './Pages/Collection/Collection';
import Nav from "./Components/Nav/Nav";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Cart from './Pages/Cart';

function App() {
    
    return (
        <div className="App">
           <Router>
            <Nav />
               <Routes>
                   <Route path= "/" element={<Home />} />
                   <Route path= "/Sale" element={<Collection />} />
                   <Route path= "/Cart" element={<Cart />} />
                   <Route path= "*" element={<ErrorPage />} />
               </Routes>
           </Router>
        
            
        </div> 
    );
}

export default App;
