import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
   <img  className='w-40' src={logo} alt="" />
    <p>UVX Systems<br/>Providing reliable tech since 2018</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
  <Link className="link link-hover" to='/about'>  About us</Link>
  <Link className="link link-hover" to='/contact'> Contact</Link>
  <Link className="link link-hover" to='/policy'> Policy</Link>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;