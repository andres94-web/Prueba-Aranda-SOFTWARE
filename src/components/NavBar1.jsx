import "../scss/NavBar1.scss";
import patrocinador from "../assets/Grupo-7610.png";
import vegetarianos from "../assets/icons/ic_vegetarian.svg";
import principales from "../assets/icons/ic_main.svg";
import tortas from "../assets/icons/ic_cake.svg";
import rapida from "../assets/icons/ic_fast-food.svg";
import menuNiños from "../assets/icons/ic_kids.svg";
import sopas from "../assets/icons/ic_soup.svg";

const NavBar = () => {
  return (
    <>
      <div>
        <div className="headform">
          <div className="header">
            <div className="title">
              <span className="text1">
                Recipe<span className="text2">App</span>
              </span>
            </div>
            <div className="menuHead">
              <ul>
                <li className="selected">Home</li>
                <li>Vegetarianos</li>
                <li>Platos Principales</li>
                <li>Tortas</li>
                <li>Comida R&aacute;pida</li>
                <li>Men&uacute; Ni&ntilde;os</li>
                <li>Sopas</li>
              </ul>
            </div>
            <div className="icoHome"></div>
          </div>

          <div className="imgHead">
            <div className="floatText">
              <div className="text1">Recetas</div>
              <div className="text2">para todos</div>
            </div>
          </div>
        </div>
        <div id="menuHead2" className="menuHeads">
          <div className="tarjetMenu">
            <img className="imgMenu" src={vegetarianos} alt="imagen menu vegetariano" />
            <span className="foodMenu">Vegetarianos</span>
          </div>
          <div className="tarjetMenu">
            <img className="imgMenu" src={principales} alt="imagen menu vegetariano" />
            <span className="foodMenu">Principales</span>
          </div>
          <div className="tarjetMenu">
            <img className="imgMenu" src={tortas} alt="imagen menu vegetariano" />
            <span className="foodMenu">Tortas</span>
          </div>
          <div className="tarjetMenu">
            <img className="imgMenu" src={rapida} alt="imagen menu vegetariano" />
            <span className="foodMenu">Rápida</span>
          </div>
          <div className="tarjetMenu">
            <img className="imgMenu" src={menuNiños} alt="imagen menu vegetariano" />
            <span className="foodMenu">Menú niños</span>
          </div>
          <div className="tarjetMenu">
            <img className="imgMenu" src={sopas} alt="imagen menu vegetariano" />
            <span className="foodMenu">Sopas</span>
          </div>

        </div>
        <div className="middle">
          <div className="middleTitle">Nuevas Recetas</div>
          <div className="contCarrusel">
            <ul id="carruselini" className="carrusel">
              {/* <li className="tarjet" onMouseOver={showHover("normal1","hover1")} onMouseOut={showNormal("normal1","hover1")}>
                <div className="plate"></div> continuar en esta parte
              </li> */}
            </ul>
            <ul id="carruselfin" className="carrusel"></ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="textfooter">
          {" "}
          <span>Con el patrocinio de</span>
        </div>
        <img className="imgFooter" src={patrocinador} alt="imagen del patrocinador"/>
      </div>
    </>
  );
};

export default NavBar;
