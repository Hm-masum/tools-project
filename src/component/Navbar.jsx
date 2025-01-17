import {  NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <div className='p-6'>
            <div className='flex items-center justify-between'>
                <img  src={logo} alt="" />
                <button className='bg-slate-200   font-semibold btn'>sort by view</button>
                <button className='bg-red-500 text-white font-semibold btn' >Blog</button> 
            </div>
            <div>
                <div className="navbar-center hidden lg:flex justify-center">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <li><NavLink className={({isActive})=> isActive ? 'bg-red-500 text-white font-semibold' : 'bg-slate-300'} to={'/'} >All</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? 'bg-red-500 text-white font-semibold' : 'bg-slate-300'} to={'/music'}>Music</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? 'bg-red-500 text-white font-semibold' : 'bg-slate-300'} to={'/comedy'}>Comedy</NavLink></li>
                        <li><NavLink className={({isActive})=> isActive ? 'bg-red-500 text-white font-semibold' : 'bg-slate-300'} to={'/drawing'}>Drawing</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
