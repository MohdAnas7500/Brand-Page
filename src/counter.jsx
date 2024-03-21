import "./counter.css";
export default function counter(){
    return(
        <div>
            <nav className="container">
                <div className="logo">
                    <img src="/public/brand_logo.png" alt="logo" />
                </div>
                <ul>
                    <li href="#">MENU</li>
                    <li href="#">LOCATION</li>
                    <li href="#">ABOUT</li>
                    <li href="#">CONTACT</li>
                </ul>
                <button>Login</button>
            </nav>
        </div>
    );
}