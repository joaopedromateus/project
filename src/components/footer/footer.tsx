import logo from '../../images/softlogo.png';

const Footer = () => {
  return (
    <footer className="h-full min-h-[300px] flex items-center justify-center py-16">
      <div className="flex flex-col items-center justify-between h-full max-w-screen-xl gap-10 mx-auto text-white lg:flex-row lg:items-start">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between pr-10">
            <img src={logo} alt="Logo da Softplan" className="w-full h-40" />
          </div>
          <p>Sapiens Parque - Av. Luiz Boiteux Piazza, 1302 - lote 87/89</p>
          <p>Cachoeira do Bom Jesus, Florianópolis - SC, 88056-000</p>
        </div>
        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#">
                <span>Quem Somos</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Ética e Conduta</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-white">Trabalhe Conosco</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-white">Contato</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-white">Aviso de Privacidade</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="#">
            <li>
              <a href="#">
                <span className="text-white">E-books</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-white">Institucional</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-white">Materiais Ricos</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="text-white">Podcast Together In Tech</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
