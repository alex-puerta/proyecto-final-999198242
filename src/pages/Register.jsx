import { useState } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"

const Register = () => {
  const { register: registerUser } = useAuth()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("ingresa un correo electronico valido")
      return
    }

    if (password.length < 6) {
      setError("LA contrasena debe contener al menos 6 caracteres")
      return
    }

    setLoading(true)
    const ok = await registerUser({ username, email, password })
    setLoading(false)

    if (ok) {
      setSuccess("Usuario registrado con éxito. Sesión iniciada.")
      setUsername("")
      setEmail("")
      setPassword("")
    }
    else {
      setError("No se pudo registrar el usuario. intente nuevamente")
    }

  }

  return (
    <Layout>
      <h1>Registrate</h1>

      <section>
        <h2>Hola, bienvenido</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label>Correo electrónico:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button>Ingresar</button>
        </form>

        {
          error && <p style={{ color: "red" }}>{error}</p>
        }
        {
          success && <p style={{ color: "green" }}>{success}</p>
        }
      </section>
    </Layout>
  )
}

export { Register }