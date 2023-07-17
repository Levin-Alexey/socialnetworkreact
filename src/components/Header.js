const Header = () => {
    return <header className="header_wrapper">
        <nav className="header_nav">
            <ul className="nav_list">
                <li className="nav_item">HOME</li>
                <li className="nav_item">COMMUNITY</li>
                <li className="nav_item">BLOG</li>
                <li className="nav_item">PAGES</li>
            </ul>
        </nav>
        <div className="nav_search"></div>
        <div className="nav_icon"></div>
        <div className="nav_user_avatar"></div>
    </header>
}
export default Header;