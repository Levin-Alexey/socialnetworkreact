import classes from '../css/LeftMenu.module.css';
const LeftMenu = () => {
    return <asaid className={classes.left_menu_wrapper}>
        <nav className={classes.left_nav}>
            <ul className={classes.left_menu_item}>
                <li>Profile</li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Setting</li>
            </ul>
        </nav>
    </asaid>
}
export default LeftMenu;