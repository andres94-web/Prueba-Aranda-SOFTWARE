import "../scss/Contenedor.scss";
import NavBar from "../components/NavBar1";
import NavBar2 from "../components/NavBar2";
import Menu1 from "../components/Menu1";
import Footer from "../components/Footer";
import Menu2 from "../components/Menu2";

const Contenedor = () => {
  return (
    <>
      <div>
        <NavBar />
        <NavBar2 />
        <div className="middle">
          <div className="middleTitle">Nuevas Recetas</div>
          <div className="contCarrusel">
            <Menu1 />
            <Menu2 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contenedor;
