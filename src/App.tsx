import "./index.css";

interface Pizzas {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
}

const pizzaData: Pizzas[] = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas: Pizzas[] = pizzaData;
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            {pizzas.map((pizza) => (
                <Pizza key={pizza.name} {...pizza} />
            ))}
        </main>
    );
}

function Pizza({ name, ingredients, price, photoName, soldOut }: Pizzas) {
    return (
        <div className="pizza">
            <img src={photoName} alt="" />
            <h2>{name}</h2>
            <p>{ingredients}</p>
            <span>{price}</span>
            <p>{soldOut}</p>
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    isOpen ? alert("we're currently open !") : alert("Sorry We're closed");
    console.log(isOpen);
    return <footer className="footer">{new Date().toLocaleTimeString()}</footer>;
}

export default function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}
