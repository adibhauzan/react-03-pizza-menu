export default function Order(props: { openHour: number; closeHour: number }) {
  return (
    <div className="order">
      <p>
        We're open until {props.openHour}:00 to {props.closeHour}. come visit us
        or order
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
