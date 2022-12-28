import { useState, useEffect } from "react";
import portion from "../assets/icons/ic_portion.svg";
import time from "../assets/icons/ic_time.svg";
import chef from "../assets/icons/ic_chef.svg";
/* import ojigeo from "../assets/images/Ojingeo-muchim.png";
import ojigeo1 from "../assets/images/Ojingeo-muchim-1.png";
import ojigeo5 from "../assets/images/Ojingeo-muchim-5.png";
import cherry from "../assets/images/cherry.png"; */
import estrellas from "../assets/icons/ic_star.svg";
import favoritos from "../assets/icons/ic-favorite.svg";

const Menu1 = () => {
  const [Url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [Item, setItem] = useState();

  /* primer elemento */
  const [isVisible1, setIsVisible1] = useState(false);
  const [visible1, setVisible1] = useState(true);
  /* segundo elemento */
/*   const [isVisible2, setIsVisible2] = useState(false);
  const [visible2, setVisible2] = useState(true); */
  /* tercer elemento */
/*   const [isVisible3, setIsVisible3] = useState(false);
  const [visible3, setVisible3] = useState(true); */
  /* cuarto elemento */
/*   const [isVisible4, setIsVisible4] = useState(false);
  const [visible4, setVisible4] = useState(true); */

  useEffect(() => {
    fetch(Url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
        /*         setMostrar(true); */
      });
  }, [Url]);

  if (Url != "https:/www.themealdb.com/api/json/v1/1/search.php?f=a") {
    setUrl("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
  }

  /* primer elemento */
  const handleMouseOver1 = () => {
    setIsVisible1(true);
    setVisible1(false);
  };

  const handleMouseOut1 = () => {
    setIsVisible1(false);
    setVisible1(true);
  };

  /* segundo elemento */
/*   const handleMouseOver2 = () => {
    setIsVisible2(true);
    setVisible2(false);
  }; */

/*   const handleMouseOut2 = () => {
    setIsVisible2(false);
    setVisible2(true);
  }; */

  /* tercer elemento */
/*   const handleMouseOver3 = () => {
    setIsVisible3(true);
    setVisible3(false);
  }; */

/*   const handleMouseOut3 = () => {
    setIsVisible3(false);
    setVisible3(true);
  }; */

  /* cuarto elemento */
/*   const handleMouseOver4 = () => {
    setIsVisible4(true);
    setVisible4(false);
  }; */

/*   const handleMouseOut4 = () => {
    setIsVisible4(false);
    setVisible4(true);
  }; */
  
  return (
    <>
      <ul id="carruselini" className="carrusel">
        {!Item
          ? "not found"
          : Item.map((Item) => {
              return (
                <li
                  key={Item.idMeal}
                  className="tarjet"
                  onMouseOver={handleMouseOver1}
                  onMouseOut={handleMouseOut1}
                >
                  <div className="plate">
                    <img
                      className="imgMenuTama"
                      src={Item.strMealThumb}
                      alt={Item.strMeal}
                    />
                  </div>
                  <div>
                    {visible1 && (
                      <div id="normall" className="normalTArjet">
                        <div className="textFood">
                          <span className="food">{Item.strMeal}</span>{" "}
                          <span className="foodDesc">{Item.strArea}</span>
                        </div>
                        <div>
                          <div className="score">
                            <img
                              className="star"
                              src={estrellas}
                              alt="puntuacion"
                            />{" "}
                            <span>5.0</span>
                            <img
                              className="heart"
                              src={favoritos}
                              alt="favoritos"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    {isVisible1 && (
                      <div id="hover1" className="divhover">
                        <div className="hoverTarjet">
                          <div className="descriptionHover">
                            <img
                              className="imgHover"
                              src={portion}
                              alt="porcion"
                            />
                            <span className="titTextHover">
                              Tamaño de la porción
                            </span>
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
                            <img className="imgHover" src={chef} alt="chef" />
                            <span className="titTextHover">Dificultad</span>
                            <span className="textHover">facil</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}

        {/*         <li
          className="tarjet"
          onMouseOver={handleMouseOver2}
          onMouseOut={handleMouseOut2}
        >
          <div className="plate">
            <img
              className="imgMenuTama"
              src={ojigeo}
              alt="imagen del plato de comida"
            />
          </div>
          <div>
            {visible2 && (
              <div id="normall" className="normalTArjet">
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
            )}
          </div>

          <div>
            {isVisible2 && (
              <div id="hover1" className="divhover">
                <div className="hoverTarjet">
                  <div className="descriptionHover">
                    <img className="imgHover" src={portion} alt="porcion" />
                    <span className="titTextHover">Tamaño de la porción</span>
                    <span className="textHover">4 raciones</span>
                  </div>
                  <div className="descriptionHover">
                    <img className="imgHover" src={time} alt="tiempo" />
                    <span className="titTextHover">Tiempo de preparación</span>
                    <span className="textHover">10 minutos</span>
                  </div>
                  <div className="descriptionHover">
                    <img className="imgHover" src={chef} alt="chef" />
                    <span className="titTextHover">Dificultad</span>
                    <span className="textHover">facil</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>
        <li
          className="tarjet"
          onMouseOver={handleMouseOver3}
          onMouseOut={handleMouseOut3}
        >
          <div className="plate">
            <img
              className="imgMenuTama"
              src={ojigeo1}
              alt="imagen del plato de comida"
            />
          </div>
          <div>
            {visible3 && (
              <div id="normall" className="normalTArjet">
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
            )}
          </div>

          <div>
            {isVisible3 && (
              <div id="hover1" className="divhover">
                <div className="hoverTarjet">
                  <div className="descriptionHover">
                    <img className="imgHover" src={portion} alt="porcion" />
                    <span className="titTextHover">Tamaño de la porción</span>
                    <span className="textHover">4 raciones</span>
                  </div>
                  <div className="descriptionHover">
                    <img className="imgHover" src={time} alt="tiempo" />
                    <span className="titTextHover">Tiempo de preparación</span>
                    <span className="textHover">10 minutos</span>
                  </div>
                  <div className="descriptionHover">
                    <img className="imgHover" src={chef} alt="chef" />
                    <span className="titTextHover">Dificultad</span>
                    <span className="textHover">facil</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>
        <li
          className="tarjet"
          onMouseOver={handleMouseOver4}
          onMouseOut={handleMouseOut4}
        >
          <div className="plate">
            <img
              className="imgMenuTama"
              src={cherry}
              alt="imagen del plato de comida"
            />
          </div>
          <div>
            {visible4 && (
              <div id="normall" className="normalTArjet">
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
            )}
          </div>

          <div>
            {isVisible4 && (
              <div id="hover1" className="divhover">
                <div className="hoverTarjet">
                  <div className="descriptionHover">
                    <img className="imgHover" src={portion} alt="porcion" />
                    <span className="titTextHover">Tamaño de la porción</span>
                    <span className="textHover">4 raciones</span>
                  </div>
                  <div className="descriptionHover">
                    <img className="imgHover" src={time} alt="tiempo" />
                    <span className="titTextHover">Tiempo de preparación</span>
                    <span className="textHover">10 minutos</span>
                  </div>
                  <div className="descriptionHover">
                    <img className="imgHover" src={chef} alt="chef" />
                    <span className="titTextHover">Dificultad</span>
                    <span className="textHover">facil</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li> */}
      </ul>
    </>
  );
};

export default Menu1;
