import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className='navBar'>
            <ul className='links'>
                <li><Link className='link' to='/'>Home</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar;