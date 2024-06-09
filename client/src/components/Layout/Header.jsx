import{Link} from 'react-router-dom';
import logo from '../../assets/logo.png';
import Layout from './Layout';
const Header = () => {
    const navLinks=<>
    
    <li className='font-semibold'><Link to='/'>Home</Link></li>
    <li className='font-semibold'><Link>Category</Link></li>
    <li className='font-semibold'><Link to='/register'>Register</Link></li>
   <li className='font-semibold'><Link to='/login'>Login</Link></li>
   <li className='font-semibold'><Link>cart(0)</Link></li>
    </>
    return (
        <Layout title={"login-UVX systems"}>
        <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              
              {navLinks}

            </ul>
          </div>
        <img className='w-32' src={logo} alt="" />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
       
      </div>
      </Layout>
    );
};

export default Header;