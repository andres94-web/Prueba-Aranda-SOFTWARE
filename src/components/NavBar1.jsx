import "../scss/NavBar1.scss";
import patrocinador from "../assets/Grupo-7610.png";
import vegetarianos from "../assets/icons/ic_vegetarian.svg";
import principales from "../assets/icons/ic_main.svg";
import tortas from "../assets/icons/ic_cake.svg";
import rapida from "../assets/icons/ic_fast-food.svg";
import menuNiños from "../assets/icons/ic_kids.svg";
import sopas from "../assets/icons/ic_soup.svg";
import ojigeo from "../assets/Ojingeo-muchim.png";
import ojigeo1 from "../assets/Ojingeo-muchim-1.png";
import ojigeo5 from "../assets/Ojingeo-muchim-5.png";
import cherry from "../assets/cherry.png";
import estrellas from "../assets/icons/ic_star.svg";
import favoritos from "../assets/icons/ic-favorite.svg";
import portion from "../assets/icons/ic_portion.svg";
import time from "../assets/icons/ic_time.svg";

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
            <img
              className="imgMenu"
              src={tortas}
              alt="imagen menu vegetariano"
            />
            <span className="foodMenu">Tortas</span>
          </div>
          <div className="tarjetMenu">
            <img
              className="imgMenu"
              src={rapida}
              alt="imagen menu vegetariano"
            />
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
            <img
              className="imgMenu"
              src={sopas}
              alt="imagen menu vegetariano"
            />
            <span className="foodMenu">Sopas</span>
          </div>
        </div>
        <div className="middle">
          <div className="middleTitle">Nuevas Recetas</div>
          <div className="contCarrusel">
            <ul id="carruselini" className="carrusel">
              <li
                className="tarjet" /* onMouseOver={showHover("normal1","hover1")} onMouseOut={showNormal("normal1","hover1")} */
              >
                <div className="plate">
                  <img
                    className="imgMenuTama"
                    src={ojigeo5}
                    alt="imagen del plato de comida"
                  />
                </div>
                <div id="normall" className="normalTArjet">
                  <div className="textFood">
                    <span className="food">Ojingeo</span>{" "}
                    <span className="foodDesc">Muchim</span>
                  </div>
                  <div className="score">
                    <img className="start" src={estrellas} alt="puntuacion" />{" "}
                    <span>5.0</span>
                    <img className="heart" src={favoritos} alt="favoritos" />
                  </div>
                </div>
                <div id="hover1" className="divhover" hidden>
                  <div className="hoverTarjet">
                    <div className="descriptionHover">
                      <img className="imgHover" src={portion} alt="porcion" />
                      <span className="titTextHover">Tamaño de la porción</span>
                      <span className="textHover">4 raciones</span>
                    </div>
                    <div className="descriptionHover">
                      <img className="imgHover" src={time} alt="tiempo" />
                      <span className="titTextHover">
                        Tiempo de preparación
                      </span>
                      <span className="textHover">10 minutos</span>
                    </div>
                    <div className="descriptionHover">
                      <img
                        className="imgHover"
                        src="assets/icons/ic_chef.svg"
                        alt=""
                      />
                      <span className="titTextHover">Dificultad</span>
                      <span className="textHover">facil</span>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="tarjet" /* onMouseOver={showHover("normal2","hover2")} onMouseOut={showNormal("normal2","hover2")} */
              >
                <div className="plate">
                  <img
                    className="imgMenuTama"
                    src={ojigeo}
                    alt="imagen del plato de comida"
                  />
                </div>
                <div id="normall" className="normalTArjet">
                  <div className="textFood">
                    <span className="food">Cola</span>{" "}
                    <span className="foodDesc">Chicken</span>
                  </div>
                  <div className="score">
                    <img className="start" src={estrellas} alt="puntuacion" />{" "}
                    <span>5.0</span>
                    <img className="heart" src={favoritos} alt="favoritos" />
                  </div>
                </div>
                <div id="hover1" className="divhover" hidden>
                  <div className="hoverTarjet">
                    <div className="descriptionHover">
                      <img className="imgHover" src={portion} alt="porcion" />
                      <span className="titTextHover">Tamaño de la porción</span>
                      <span className="textHover">4 raciones</span>
                    </div>
                    <div className="descriptionHover">
                      <img className="imgHover" src={time} alt="tiempo" />
                      <span className="titTextHover">
                        Tiempo de preparación
                      </span>
                      <span className="textHover">10 minutos</span>
                    </div>
                    <div className="descriptionHover">
                      <img
                        className="imgHover"
                        src="assets/icons/ic_chef.svg"
                        alt=""
                      />
                      <span className="titTextHover">Dificultad</span>
                      <span className="textHover">facil</span>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="tarjet" /* onMouseOver={showHover("normal3","hover3")} onMouseOut={showNormal("normal3","hover3")} */
              >
                <div className="plate">
                  <img
                    className="imgMenuTama"
                    src={ojigeo1}
                    alt="imagen del plato de comida"
                  />
                </div>
                <div id="normall" className="normalTArjet">
                  <div className="textFood">
                    <span className="food">Roasted</span>{" "}
                    <span className="foodDesc">Carrot</span>
                  </div>
                  <div className="score">
                    <img className="start" src={estrellas} alt="puntuacion" />{" "}
                    <span>4.5</span>
                    <img className="heart" src={favoritos} alt="favoritos" />
                  </div>
                </div>
                <div id="hover1" className="divhover" hidden>
                  <div className="hoverTarjet">
                    <div className="descriptionHover">
                      <img className="imgHover" src={portion} alt="porcion" />
                      <span className="titTextHover">Tamaño de la porción</span>
                      <span className="textHover">4 raciones</span>
                    </div>
                    <div className="descriptionHover">
                      <img className="imgHover" src={time} alt="tiempo" />
                      <span className="titTextHover">
                        Tiempo de preparación
                      </span>
                      <span className="textHover">10 minutos</span>
                    </div>
                    <div className="descriptionHover">
                      <img
                        className="imgHover"
                        src="assets/icons/ic_chef.svg"
                        alt=""
                      />
                      <span className="titTextHover">Dificultad</span>
                      <span className="textHover">facil</span>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className="tarjet" /* onMouseOver={showHover("normal4","hover4")} onMouseOut={showNormal("normal4","hover4")} */
              >
                <div className="plate">
                  <img
                    className="imgMenuTama"
                    src={cherry}
                    alt="imagen del plato de comida"
                  />
                </div>
                <div id="normall" className="normalTArjet">
                  <div className="textFood">
                    <span className="food">Sweet</span>{" "}
                    <span className="foodDesc">Cherries</span>
                  </div>
                  <div className="score">
                    <img className="start" src={estrellas} alt="puntuacion" />{" "}
                    <span>4.0</span>
                    <img className="heart" src={favoritos} alt="favoritos" />
                  </div>
                </div>
                <div id="hover1" className="divhover" hidden>
                  <div className="hoverTarjet">
                    <div className="descriptionHover">
                      <img className="imgHover" src={portion} alt="porcion" />
                      <span className="titTextHover">Tamaño de la porción</span>
                      <span className="textHover">4 raciones</span>
                    </div>
                    <div className="descriptionHover">
                      <img className="imgHover" src={time} alt="tiempo" />
                      <span className="titTextHover">
                        Tiempo de preparación
                      </span>
                      <span className="textHover">10 minutos</span>
                    </div>
                    <div className="descriptionHover">
                      <img
                        className="imgHover"
                        src="assets/icons/ic_chef.svg"
                        alt=""
                      />
                      <span className="titTextHover">Dificultad</span>
                      <span className="textHover">facil</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul id="carruselfin" className="carrusel">
              <li className="tarjet">
                <div
                  className="plate" /* style="background-image:url(./assets/Ojingeo-muchim-5.png)" */
                ></div>
                <div id="normall" className="normalTarjet">
                  <div className="textFood">
                    <span className="food">Ojigeo</span>{" "}
                    <span className="foodDesc">Muchim</span>
                  </div>
                  <div className="score">
                    <img className="start" src={estrellas} alt="puntuacion" />{" "}
                    <span>5.0</span>
                    <img className="heart" src={favoritos} alt="favoritos" />
                  </div>
                </div>
              </li>
              <li className="tarjet">
                <div
                  className="plate" /* style="background-image:url(./assets/Ojingeo-muchim-5.png)" */
                ></div>
                <div id="normall" className="normalTarjet">
                  <div className="textFood">
                    <span className="food">Cola</span>{" "}
                    <span className="foodDesc">Chicken</span>
                  </div>
                  <div className="score">
                    <img className="start" src={estrellas} alt="puntuacion" />{" "}
                    <span>5.0</span>
                    <img className="heart" src={favoritos} alt="favoritos" />
                  </div>
                </div>
              </li>
              <li className="tarjet">
                <div
                  className="plate" /* style="background-image:url(./assets/Ojingeo-muchim-5.png)" */
                ></div>
                <div id="normall" className="normalTarjet">
                  <div className="textFood">
                    <span className="food">Roasted</span>{" "}
                    <span className="foodDesc">Carrot</span>
                  </div>
                  <div className="score">
                    <img className="start" src={estrellas} alt="puntuacion" />{" "}
                    <span>4.5</span>
                    <img className="heart" src={favoritos} alt="favoritos" />
                  </div>
                </div>
              </li>
              <li className="tarjet">
                <div
                  className="plate" /* style="background-image:url(./assets/Ojingeo-muchim-5.png)" */
                ></div>
                <div id="normall" className="normalTarjet">
                  <div className="textFood">
                    <span className="food">Sweet</span>{" "}
                    <span className="foodDesc">Cherries</span>
                  </div>
                  <div className="score">
                    <img className="start" src={estrellas} alt="puntuacion" />{" "}
                    <span>4.0</span>
                    <img className="heart" src={favoritos} alt="favoritos" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="textfooter">
          {" "}
          <span>Con el patrocinio de</span>
        </div>
        <img
          className="imgFooter"
          src={patrocinador}
          alt="imagen del patrocinador"
        />
      </div>
    </>
  );
};

export default NavBar;
