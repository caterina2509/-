import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold">LV Transfer</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>Главная</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">Услуги</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link">Галерея</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Контакты</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
