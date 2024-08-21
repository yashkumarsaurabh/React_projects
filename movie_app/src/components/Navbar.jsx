import { Link } from 'react-router-dom';
import logo from '../logo.jpeg';
import './Navbar.css';

function Navbar() {
    return (
        <div className='nav-bar'>
            <img style={{width: '100px'}} src={logo} alt='logo' />
            <Link className='nav' href='/'>Home</Link>
            <Link className='nav' href='/watchlist'>WatchList</Link>
        </div>
    )
}

export default Navbar;
