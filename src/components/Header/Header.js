import { Link } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';

import './Header.css';

const Header = () => {
    const { user } = useAuthContext();

    let guestNavigation = (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link to="/register" className="button">Register</Link>
        </div>
    );

    let userNavigation = (
        <div id="user">
            <span>Welcome, {user.email}</span>
            <Link className="button" to="/user-details">User Details</Link>
            <Link className="button" to="/my-projects">My projects</Link>
            <Link className="button" to="/create">Add project</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/dashboard">Dashboard</Link>

                    {user.token
                        ? userNavigation
                        : guestNavigation
                    }
                </section>
            </nav>
        </header>
    );
}

export default Header;