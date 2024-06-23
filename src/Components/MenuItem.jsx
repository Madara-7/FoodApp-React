import { useState, useEffect } from "react";
import { Fragment } from "react";
const MenuItem = () => {
  const [meals, setmeals] = useState([]);
  useEffect(() => {
    fetchMeals();
    console.log(meals);
  }, []);
  async function fetchMeals() {
    const response = await fetch("http://localhost:3000/meals");
    if (!response.ok) {
      alert("An error occurred while fetching response.");
      return;
    }
    const food = await response.json();
    setmeals(food);
  }
  return (
    <Fragment>
      <ul id="meals">
        {meals.length > 0 &&
          meals.map((item) => (
            <li key={item.id} className="meal-item">
              <article>
                <img src={`http://localhost:3000/${item.image}`} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p className="meal-item-price">${item.price}</p>
                  <p className="meal-item-description">{item.description}</p>
                </div>
                <p className="meal-item-actions">
                    <button className="button">Add to cart</button>
                </p>
              </article>
            </li>
          ))}
      </ul>
    </Fragment>
  );
};
export default MenuItem;
