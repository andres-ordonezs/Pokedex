const IMAGE_URL_BASE = "https://deckofcardsapi.com/static/img";

function Card({n, s}) {
  return (
    <div className="Card">
      <img src={`${IMAGE_URL_BASE}/${n}${s}.png`} />
    </div>
  );
}

export default Card;
