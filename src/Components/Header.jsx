import { Fragment } from "react";
import logoImg from "../assets/logo.jpg"
const Header = () => {
    return <>
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Food app"/>
                <h1>Food App</h1>
            </div>
            <nav>
                <button className="text-button">Cart</button>
            </nav>
        </header>
    </>
} 

export default Header;