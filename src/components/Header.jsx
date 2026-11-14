import { NavLink, Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src="/images/logo.png" alt="Sprinkly Shop" />
        </Link>
        <div className="nav-links">
          <NavLink to="/" end className="btn">Home</NavLink>
          <NavLink to="/menu" className="btn">Menu</NavLink>
          <NavLink to="/sign-in" className="btn">Sign in</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header