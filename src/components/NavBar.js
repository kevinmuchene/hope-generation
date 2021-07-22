import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div id="navo">
      <Link to="/">
        <h4>
          <i>Hope Generation</i>
        </h4>
      </Link>
      <ul className="listItems">
        <Link to="/events">
          <li>Events</li>
        </Link>
        <Link to="/gallery">
          <li>Gallery</li>
        </Link>
        <Link to="/donate">
          <li>Donate</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </div>
  );
};
