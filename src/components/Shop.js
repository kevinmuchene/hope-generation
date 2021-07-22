import { Card } from "react-bootstrap";
import Cap from "./cap.jpg";
import Tshirt from "./tshirts.jpg";

export const Shop = () => {
  return (
    <div id="shop">
      <Card style={{ width: "47rem" }}>
        <Card.Body>
          <img style={{ width: "43rem" }} src={Tshirt} />
        </Card.Body>
      </Card>

      <Card style={{ width: "47rem" }}>
        <Card.Body>
          <img style={{ width: "43rem" }} src={Cap} />
        </Card.Body>
      </Card>
    </div>
  );
};
