import './App.css';
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import UserContent from "./components/UserContent";
import Footer from "./components/Footer";
import Dialogs from "./components/Dialogs";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="body">
                <div className="app_wrapper">
                    <Header/>
                    <LeftMenu/>
                    <div className="app_wrapper_content">
                        <Routes>
                            <Route path="/dialogs" element={<Dialogs/>}></Route>
                            <Route path="/" element={<UserContent/>}></Route>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
