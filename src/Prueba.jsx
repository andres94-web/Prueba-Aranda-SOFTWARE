import { useEffect, useState } from "react";

const Prueba = () => {
  const [Url, setUrl] = useState(
    "https:/www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  const [Item, setItem] = useState();
/*   const [Mostrar, setMostrar] = useState(false); */
  useEffect(() => {
    fetch(Url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.meals);
        setItem(data.meals);
/*         setMostrar(true); */
      });
  }, [Url]);

  return (
    <>
      {!Item
        ? "not found"
        : Item.map((Item) => {
            return (
              <div key={Item.idMeal}>
                <img src={Item.strMealThumb} alt="" />
                <h3>{Item.strMeal}</h3>
              </div>
            );
          })}
    </>
  );
};

export default Prueba;
