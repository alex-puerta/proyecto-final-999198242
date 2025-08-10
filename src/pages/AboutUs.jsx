import { Layout } from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h1 className="text-center mb-4">Sobre Nosotros</h1>

        <section className="mb-5">
            <h2 className="h4">¿De qué trata el proyecto?</h2>
            <p className="mb-0">
                Es una tienda virtual de ejemplo que permite practicar conceptos clave de desarrollo frontend:
                creación de una SPA con React, enrutado con React Router, manejo de estado y contexto para
                autenticación, consumo de la FakeStoreAPI y aplicación de diseño responsive con Bootstrap.
            </p>
        </section>

        <section className="mb-5">
          <h2 className="h4">¿A quién está dirigido?</h2>
          <p className="mb-0">
                Está pensado para estudiantes y desarrolladores que deseen reforzar sus habilidades en
                JavaScript y React, así como para quienes quieran comprender el flujo completo de una
                aplicación web, desde la obtención de datos externos hasta la gestión de la interfaz de usuario.
            </p>
        </section>

        <section>
            <h2 className="h4">Tecnologías y enfoques usados</h2>
            <p className="mb-0">
                El proyecto fue desarrollado con React y Vite para un entorno rápido y modular.  
                Se utilizó React Router DOM para el manejo de rutas, Context API para la autenticación,  
                Bootstrap para el diseño responsive y la FakeStoreAPI como fuente de datos.  
                Además, se aplicaron buenas prácticas de organización de componentes y manejo de estado.
            </p>
        </section>
      </div>
    </Layout>
  );
};

export { About };