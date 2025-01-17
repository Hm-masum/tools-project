import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div><img src={logo} alt="" /></div>
                <div><button>sort by view</button></div>
                <div><button>Blog</button></div>
                <div></div>
            </div>
            <div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/'}>All</Link></li>
                        <li><Link to={'/'}>All</Link></li>
                        <li><Link to={'/'}>All</Link></li>
                        <li><Link to={'/'}>All</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;