import Header from './../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './../components/Footer';
import { Helmet } from "react-helmet";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Layout = ({title,description,keywords,author}) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header />
            <div className='min-h-[70vh]'>
                <Outlet />
            </div>
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default Layout;
