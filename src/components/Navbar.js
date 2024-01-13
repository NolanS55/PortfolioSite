import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './css/NavBar.css'

const NavBar = () => {
    const location = useLocation();
    console.log(location.pathname);

    return ( 
    <nav className='navbar' style={{backgroundColor : 'black'}}>
        <div className='links'>
            <Link className='link' style={(location.pathname === "/") ? {color : '#F2751A'} : {color : 'white'} } to="/">HOME</Link>
            <Link className='link' style={(location.pathname === "/projects") ? {color : '#F2751A'} : {color : 'white'} } to="/projects">PROJECTS</Link>
            <Link className='link' style={(location.pathname === "/about") ? {color : '#F2751A'} : {color : 'white'} } to="/about" >ABOUT ME</Link>
            <Link className='link' style={(location.pathname === "/resume") ? {color : '#F2751A'} : {color : 'white'} } to="/resume" >RESUME</Link>
        </div>
    </nav> );
}
 
export default NavBar;