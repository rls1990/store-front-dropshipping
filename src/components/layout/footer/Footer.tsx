const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-12 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-4">MiTienda</h4>
          <p className="text-balance">
            Tu destino online para encontrar productos de calidad con envío
            rápido y excelente atención al cliente.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Sobre Nosotros</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Nuestra Historia
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Misión y Visión
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Únete a Nuestro Equipo
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Atención al Cliente</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Contacto
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Envíos y Devoluciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-150">
                Política de Privacidad
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Síguenos</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-150"
            >
              <i className="fab fa-facebook-square text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-150"
            >
              <i className="fab fa-twitter-square text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-150"
            >
              <i className="fab fa-instagram-square text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-150"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8 border-t border-gray-700 pt-8">
        &copy; 2025 MiTienda. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
