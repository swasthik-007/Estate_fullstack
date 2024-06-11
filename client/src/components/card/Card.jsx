import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  const handleChatClick = () => {
    // Navigate to the chat screen for the selected user
    // You can use react-router-dom's Link or useHistory for navigation
    history.push(`/chat/${item.userId}`);
  };
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon" onClick={handleChatClick}>
              <Link to={`/chat/${item.userId}`}>
                <img src="/chat.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
