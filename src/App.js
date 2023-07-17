import './App.css';
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import UserContent from "./components/UserContent";
import Footer from "./components/Footer";


const App = () => {
    return (<div className="body">
        <div className="app_wrapper">
            <Header/>
            <LeftMenu/>
            <UserContent/>
            <Footer/>
        </div>
    </div>);
}


export default App;
