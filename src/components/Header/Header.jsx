import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <nav className="flex justify-around mt-5 text-5xl font-semibold bg-orange-300 p-2">
                <NavLink className={({isActive}) => isActive ? 'text-teal-500' : ''} to={'/'}>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-teal-500' : ''} to={'/user'}>User</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-teal-500' : ''} to={'/about'}>About</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-teal-500' : ''} to={'/contact'}>Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;