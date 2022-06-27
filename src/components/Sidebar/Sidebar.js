import { Link, NavLink } from 'react-router-dom'
import './sideBar.scss'
import logoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faYoutube , faGithub} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={logoS} alt="logo" />
      <img className="sub-logo" src={logoSubtitle} alt="logo" />
    </Link>

    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link"  to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
<ul>
  <li>
    <a 
    target="_blank"
    rel="noreferrer"
    href="#"
    ><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /></a>
  </li>
  <li>
    <a 
    target="_blank"
    rel="noreferrer"
    href="#"
    ><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
  </li>
  <li>
    <a 
    target="_blank"
    rel="noreferrer"
    href="#"
    ><FontAwesomeIcon icon={faYoutube} color="#4d4d4e" /></a>
  </li>
</ul>

  </div>
)

export default Sidebar
