import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
const Header= () => {
    const [btnName, setBtnName] = useState("Login");

    useEffect(()=>{
        console.log("user effect called in header");
    });

    console.log("header rendered");
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png" alt="logo" />
            </div>
            <div>
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li>Cart</li>
                        <button className="login-btn" onClick={()=>{
                           setBtnName(btnName === "Login" ? "Logout" : "Login");
                        }
                        }
                        >{btnName}</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Header;