import vegetarianos from "../assets/icons/ic_vegetarian.svg";
import principales from "../assets/icons/ic_main.svg";
import tortas from "../assets/icons/ic_cake.svg";
import rapida from "../assets/icons/ic_fast-food.svg";
import menuNiños from "../assets/icons/ic_kids.svg";
import sopas from "../assets/icons/ic_soup.svg";

const NavBar2 = () => {
  return (
    <>
      <div id="menuHead2" className="menuHeads">
        <div className="tarjetMenu">
          <img
            className="imgMenu"
            src={vegetarianos}
            alt="imagen menu vegetariano"
          />
          <span className="foodMenu">Vegetarianos</span>
        </div>
        <div className="tarjetMenu">
          <img
            className="imgMenu"
            src={principales}
            alt="imagen menu vegetariano"
          />
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
          <img
            className="imgMenu"
            src={menuNiños}
            alt="imagen menu vegetariano"
          />
          <span className="foodMenu">Menú niños</span>
        </div>
        <div className="tarjetMenu">
          <img className="imgMenu" src={sopas} alt="imagen menu vegetariano" />
          <span className="foodMenu">Sopas</span>
        </div>
      </div>
    </>
  );
};

export default NavBar2;
