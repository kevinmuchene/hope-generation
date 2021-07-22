import { Card } from "react-bootstrap";
import ImageEvent from "./ImageEvent.jpeg";
export const Gallery = () => {
  return (
    <div>
      <div>Gallery</div>
      <div id="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <img style={{ width: "15rem" }} src={ImageEvent} />
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <img style={{ width: "15rem" }} src={ImageEvent} />
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <img style={{ width: "15rem" }} src={ImageEvent} />
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <img style={{ width: "15rem" }} src={ImageEvent} />
          </Card.Body>
        </Card>

        {/* second image group */}

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <img style={{ width: "15rem" }} src={ImageEvent} />
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <img style={{ width: "15rem" }} src={ImageEvent} />
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <img style={{ width: "15rem" }} src={ImageEvent} />
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <img style={{ width: "15rem" }} src={ImageEvent} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
