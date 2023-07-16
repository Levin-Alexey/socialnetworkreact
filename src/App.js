import './App.css';
import Footer from "./components/Footer";
import logo from "./files/images/logoMain.png";

const App = () => {
    return (<div className="app_wrapper">
        <header className="header_main">
            <img className="logoMain" src={logo} alt=""/>
        </header>
        <nav>
            <ul>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Setting</li>
            </ul>
        </nav>
        <section className="main_content">

        </section>
        <Footer/>
    </div>);
}


export default App;
