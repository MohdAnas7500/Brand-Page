import "./Heros.css";
export default function Heros(){
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="hero-btn">
                        <button>Shope Now</button>
                        <button className="secondary-btn">Category</button>
                    </div>  
                    <div className="shopping">
                        <p>Also Available On</p>
                        <div className="brand-icon">
                            <img src="/public/flipkart.png" alt="flipcart-logo" />
                            <img src="/public/amazon.png" alt="amazon-logo" />
                        </div>
                        </div>      
            </div>
            <div className="hero-img">
                <img src="/public/shoe_image.png" alt="hero-image" />
            </div>
        </main>
    );
}