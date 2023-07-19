import classes from '../css/Footer.module.css';

const Footer = () => {
    return <footer className={classes.footer_wrapper}>
        <ul className={classes.footer_nav_list}>
            <li className="nav_item">HOME</li>
            <li className="nav_item">COMMUNITY</li>
            <li className="nav_item">BLOG</li>
            <li className="nav_item">PAGES</li>
        </ul>
    </footer>
};

export default Footer;