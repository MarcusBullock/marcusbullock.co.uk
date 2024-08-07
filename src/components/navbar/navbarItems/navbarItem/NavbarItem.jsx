function NavbarItem({ title, setActiveTabName, className }) {
    return (
        <li className={className} onClick={() => setActiveTabName('ABOUT')}>
            <a href={`#${title}`}>{title}</a>
        </li>
    );
}

export default NavbarItem;
