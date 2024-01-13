import styles from "./Navigation.module.css";

const Navigation = () => {
    console.log(styles);
    return (
        <nav className={`${styles.navigation} container`}>
            <div className="nav-pic">       
                <img src="./images/nav-pic.jpg" alt="Navigation pic" />
            </div>
            <ul className="icons"> 
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navigation;