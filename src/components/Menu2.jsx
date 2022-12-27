import ojigeo from "../assets/images/Ojingeo-muchim.png";
import ojigeo1 from "../assets/images/Ojingeo-muchim-1.png";
import ojigeo5 from "../assets/images/Ojingeo-muchim-5.png";
import cherry from "../assets/images/cherry.png";
import estrellas from "../assets/icons/ic_star.svg";
import favoritos from "../assets/icons/ic-favorite.svg";

const Menu2 = () => {
  return (
    <>
      <ul id="carruselfin" className="carrusel">
        <li className="tarjet">
          <div className="plate">
            <img
              className="imgMenuTama"
              src={ojigeo5}
              alt="imagen del plato de comida"
            />
          </div>
          <div id="normall" className="normalTarjet">
            <div className="textFood">
              <span className="food">Ojigeo</span>{" "}
              <span className="foodDesc">Muchim</span>
            </div>
            <div className="score">
              <img className="star" src={estrellas} alt="puntuacion" />{" "}
              <span>5.0</span>
              <img className="heart" src={favoritos} alt="favoritos" />
            </div>
          </div>
        </li>
        <li className="tarjet">
          <div className="plate">
            <img
              className="imgMenuTama"
              src={ojigeo}
              alt="imagen del plato de comida"
            />
          </div>
          <div id="normall" className="normalTarjet">
            <div className="textFood">
              <span className="food">Cola</span>{" "}
              <span className="foodDesc">Chicken</span>
            </div>
            <div className="score">
              <img className="star" src={estrellas} alt="puntuacion" />{" "}
              <span>5.0</span>
              <img className="heart" src={favoritos} alt="favoritos" />
            </div>
          </div>
        </li>
        <li className="tarjet">
          <div className="plate">
            <img
              className="imgMenuTama"
              src={ojigeo1}
              alt="imagen del plato de comida"
            />
          </div>
          <div id="normall" className="normalTarjet">
            <div className="textFood">
              <span className="food">Roasted</span>{" "}
              <span className="foodDesc">Carrot</span>
            </div>
            <div className="score">
              <img className="star" src={estrellas} alt="puntuacion" />{" "}
              <span>4.5</span>
              <img className="heart" src={favoritos} alt="favoritos" />
            </div>
          </div>
        </li>
        <li className="tarjet">
          <div className="plate">
            <img
              className="imgMenuTama"
              src={cherry}
              alt="imagen del plato de comida"
            />
          </div>
          <div id="normall" className="normalTarjet">
            <div className="textFood">
              <span className="food">Sweet</span>{" "}
              <span className="foodDesc">Cherries</span>
            </div>
            <div className="score">
              <img className="star" src={estrellas} alt="puntuacion" />{" "}
              <span>4.0</span>
              <img className="heart" src={favoritos} alt="favoritos" />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Menu2;
