import { Footer } from "./Footer"
import { Header } from "./Header"

const Layout = (props) => {
  return (
  <div className={`app-shell ${props.background || ""}`}>
    <Header />
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
)
}

export { Layout }