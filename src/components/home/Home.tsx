const Home = () => {
  return (
    <div>
      <div className="bg-emerald-600 text-white text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-x-4 gap-y-1">
          <span>
            <i className="fas fa-truck mr-1"></i>
            Envío Gratis en pedidos superiores a $50
          </span>
          <span className="hidden sm:inline">
            <i className="fas fa-undo-alt mr-1"></i> Devoluciones Fáciles en 30
            días
          </span>
          <span className="hidden md:inline">
            <i className="fas fa-headset mr-1"></i> Soporte al Cliente 24/7
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
