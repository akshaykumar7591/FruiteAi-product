import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="container">
            <div className="title">Fruit.AI</div>
            <div className="subtitle">"Be Healthy!"</div>
            <div className="grid">
                <Link to="/hellochat"><div className="card chat">Chat.</div></Link>
                <Link to="/translator"><div className="card translate">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg" width={90} />
                    
                </div></Link>
                <Link to="/faq"><div className="card faqs">FAQs</div></Link>
                <Link to="/about"><div className="card about">About</div></Link>
            </div>
            <div className="pagination">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
}

export default Home;

