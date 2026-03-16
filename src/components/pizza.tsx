import type { Pizzas } from "../interfaces/pizzas";

export default function Pizza({
  name,
  ingredients,
  price,
  photoName,
  soldOut,
}: Pizzas) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div className="">
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold Out" : price}</span>
      </div>
    </li>
  );
}
