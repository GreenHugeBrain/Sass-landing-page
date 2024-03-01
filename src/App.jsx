import logo from './assets/images/Wallet logo.png'
import onescreen from './assets/images/Product image 1280px.png'
import screen from './assets/images/Screenshot.png'
import Logos from './components/Logos/Logos'
import Services from './components/Services/Services'
import footerimg from './assets/images/User Feedback 1280px.png'
import gif from './assets/images/GIF.png'
import './App.css';

function App() {
  return (
    <div className="App-header">
      <header >
        <nav>
          <img src={logo} alt="" />
          <div className='buttons'>
            <button className='Signup'>Sign Up</button>
            <button className='Login'>Log in</button>
          </div>
        </nav>
      </header>

      <main>
        <div className='hero-container'>
          <div className='texts'>
            <h1>
              SaaS Landing Page Template
            </h1>
            <p>
              This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
            </p>
            <button className='getstarted'>Get started</button>
          </div>
          <img src={screen} alt="screenshot" />
        </div>
        <div className='images'>
          <Logos />
          <img className='onescreen' src={onescreen} alt="" />
        </div>
        <Services />
        <footer>
          <img src={footerimg} alt="" />
          <div className='footer-hero'>
            <div className='footer-hero-text'>
            <p className='questions'>Questions?
              Let’s talk </p>
            <p className='contact-text'>Contact us through our 24/7 live chat. We’re always happy to help!</p>
            <button className='getstarted'>Get started</button>
            </div>
            <img src={gif} alt="gif" />
          </div>
          <div className='last-footer-part'>
  <form className="contact-form">
    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Your Email" />
    <textarea placeholder="Your Message"></textarea>
    <button type="submit">Submit</button>
  </form>
</div>

        </footer>
      </main>
    </div>
  );
}

export default App;
