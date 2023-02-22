import Card from "react-bootstrap/Card";
import { FiSend } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";

function FeedsCards(data) {
  return (
    <>
      <Card style={{ width: "30rem", minHeight: window.innerHeight }}>
        <Card.Header className="d-flex justify-content-between">
          <div className="d-flex column">
            <div
              id="canclick"
              className="pe-2"
            >
              <img
                src=""
                alt=""
              />
            </div>
            <div id="icon">
              <h5>{data}</h5>
            </div>
          </div>
          <div id="canclick">
            <BsThreeDots />
          </div>
        </Card.Header>
        <Card.Img
          style={{ height: "37rem" }}
          variant="top"
          src="holder.js/100px180?text=Image cap"
        />
        <Card.Body>
          <Card.Title>
            <div className="d-flex column justify-content-between">
              <div className="d-flex column">
                <div
                  className="me-2"
                  id="icon"
                >
                  <FaRegHeart style={{ fontSize: 26 }} />
                </div>
                <div
                  className="mx-2"
                  id="icon"
                >
                  <RiChat3Line style={{ fontSize: 27 }} />
                </div>
                <div
                  className="mx-2"
                  id="icon"
                >
                  {" "}
                  <FiSend style={{ fontSize: 24 }} />
                </div>
              </div>
              <div id="icon">
                <FaRegBookmark />
              </div>
            </div>
          </Card.Title>
          <div
            className="my-2"
            style={{ fontSize: 15 }}
          >
            Liked by
          </div>
          <Card.Text id="canclick">Captions</Card.Text>
          <div id="canclick">
            <div>comments</div>
            <div>comments</div>
            <div>comments</div>
          </div>
          <div
            className="pt-2"
            id="cantype"
          >
            Add a Comment...
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default FeedsCards;
