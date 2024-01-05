import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../pages/Guidelines.css'

function Guidelines
() {
  return (
    <div className="Guidelines">

        <Header className="Title" />

        <Navbar className="Menu" />

        <section className="guideBody">
            
            <h1>Guidelines</h1>
    
            <p>Here are the guidelines for this fan club:</p>
            
            <ul class="list-none">
                <li>Be kind</li>
                <li>Be respectful</li>
                <li>Be yourself</li>
                <li>Be happy</li>
                <li>Be pink</li>
                <li>Most Importantly: NO disliking pink</li>
                
            </ul>
        
        </section>

        <Footer className="Footer" />

        
    </div>
  )
}

export default Guidelines