import Order from "./order";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 4;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're happy to wellcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
