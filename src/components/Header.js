import classes from '../css/Header.module.css';
import {Link, NavLink} from "react-router-dom";


const Header = () => {
    return (

        <header className={classes.header_wrapper}>
        <nav className={classes.header_nav}>
            <ul className={classes.nav_list}>

                <li className={classes.nav_item}><NavLink to="/">HOME</NavLink></li>
                <li className={classes.nav_item}>PROFILE</li>
                <li className={classes.nav_item}><NavLink to="/dialogs">MESSAGE</NavLink></li>
                <li className={classes.nav_item}>COMMUNITY</li>
                <li className={classes.nav_item}>BLOG</li>
                <li className={classes.nav_item}>PAGES</li>

            </ul>
        </nav>
        <div className={classes.nav_search}></div>
        <div className={classes.nav_icon}></div>
        <div className={classes.nav_user_avatar}></div>
    </header>
        )
}
export default Header;