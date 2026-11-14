import { Link } from 'react-router-dom'
function Hero() { 
    return (
    <> 
    <section className="hero">
            <img src="/images/mini-macaron.png" alt="" className="deco deco-1"></img>
            <img src="/images/mini-macaron.png" alt="" className="deco deco-2"></img>
            <img src="/images/mini-macaron.png" alt="" className="deco deco-3"></img>
            <img src="/images/mini-macaron.png" alt="" className="deco deco-4"></img>
            <img src="/images/mini-macaron.png" alt="" className="deco deco-5"></img>
            <div className="hero-inner">
                <div className="hero-text">
                    <h1>sprinkle your day</h1>
                    <p>Cheesecakes, macarons and ice cream made every morning. Come for a milkshake, stay for the cake, or order one for your party.</p>
                    <div className="hero-buttons">
                        <Link to="/book" className="btn btn-brown">Book a table</Link>
                        <Link to="/cakes" className="btn btn-outline">Order a cake</Link>
                    </div>
                    
                </div>
                <div className="hero-image">
                    <img src="/images/macroon.png" alt="Three colorful macarons"></img>
                </div>
            
            </div>
        </section>  
        <img src="/images/drip.png" alt="" className="drip"></img>     
        </> 
 ) 
}
export default Hero
