import { useNavigate } from 'react-router-dom';
import '../../style/navbar.scss';
const Navbar = () => {
    const nav=useNavigate();
  return (
    <>
        <nav className="navbar">
        <div onClick={()=>nav('/')} className="brand-title">TODO</div>
        <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>
        </nav>
    </>
  )
}

export default Navbar