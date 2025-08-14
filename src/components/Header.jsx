import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"

const Header = () => {
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <header>
      <nav className="container d-flex align-items-center justify-content-between" style={{ padding: "10px 16px" }}>

        <span className="site-logo">UTN Tienda</span>

        <ul>
          {/* Links visibles para todos */}
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>

          {/* Links según estado de autenticación */}
          {user ? (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/registrate">Registrate</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export { Header }