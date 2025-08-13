/Proyecto Final – Base Proyecto 999198242
/Nombre del proyecto

/Proyecto Final – Extensión de plantilla base para e-commerce con    React y FakeStoreAPI

/Objetivo general

Desarrollar una aplicación web basada en la plantilla provista, agregando funcionalidades técnicas y de presentación, siguiendo las buenas prácticas de desarrollo y entregando un producto funcional, responsivo y coherente visualmente.

/Funcionalidades implementadas

Diseño responsive con breakpoints para Mobile (≤480px), Tablet (≤880px) y Escritorio.

Estilos globales aplicados en styles.css para coherencia visual en todas las páginas.

Grid adaptable para mostrar productos correctamente en todas las resoluciones.

Barra de búsqueda dinámica en Home:

 Filtra productos mientras el usuario escribe.

 Coincidencia parcial (ejemplo: “cam” → “camisa”, “campera”).

 Actualización de resultados sin recargar la página.

Validación de formularios con mensajes UX claros.

Página “Sobre Nosotros” con:

 Descripción del proyecto.

 Público objetivo.

 Tecnologías utilizadas.

Registro de usuarios:

 Conexión al endpoint de la FakeStoreAPI.

 Uso de UserContext con función register().

 Inicio de sesión automático (setUser(true)) tras registro exitoso.

Buenas prácticas:

 Commits descriptivos y consistentes.

 Código organizado por componentes y contextos.

//Instrucciones para ejecutar localmente

1- Clonar repositorio
git clone https://github.com/tu-usuario/proyecto-final-999198242.git

2- Entrar al directorio del proyecto
cd proyecto-final-999198242

3- Instalar dependencias
npm install

4-Ejecutar en entorno de desarrollo:
npm run dev

Abrir en el navegador la URL que aparezca en consola
