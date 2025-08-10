import { Layout } from "../components/Layout";

const About = () => {
    return(
        <Layout>
            <div className="container py/5">
                <h1 className="text-center mb-4">Sobre Nosotros</h1>
                <p className="lead text-center">
                    Esta página explica de qué trata el proyecto, a quién está dirigido y qué tecnologías usamos.
                </p>
            </div>
        </Layout>
    );
};

export { About };