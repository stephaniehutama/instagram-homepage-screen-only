import Card from "react-bootstrap/Card";
import { FiSend } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { BiSmile } from "react-icons/bi";

function FeedsCards({ data }) {
  //   if (!data) return null;
  return (
    <>
      {!data ? (
        <Card
          style={{
            width: "30rem",
            minHeight: window.innerHeight,
            borderRadius: 0,
            fontSize: 15,
          }}
          className="no-border border-bottom"
        >
          <Card.Header
            id="card-header"
            className="d-flex justify-content-between"
            style={{
              backgroundColor: "white",
              height: 70,
              marginTop: 15,
            }}
          >
            <div className="d-flex column align-items-center">
              <div
                id="canclick"
                className="pe-2"
              >
                <img
                  src="https://avatars3.githubusercontent.com/u/25381150?v=4"
                  alt=""
                  width={40}
                  style={{
                    borderRadius: 50,
                    border: 2,
                    outlineColor: "black",
                  }}
                  id="prof-picture"
                />
              </div>
              <div id="icon"></div>
            </div>
            <div
              id="canclick"
              className="d-flex align-items-center"
            >
              <BsThreeDots />
            </div>
          </Card.Header>
          <Card.Img
            style={{
              height: "37rem",
            }}
            variant="top"
            src=""
          />
          <Card.Body className="no-border">
            <Card.Title>
              <div className="d-flex column justify-content-between py-2">
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
              className="mb-2"
              style={{ fontSize: 15 }}
            >
              Liked by
            </div>
            <div className="mb-2">
              <Card.Text
                style={{
                  display: "inline",
                }}
              >
                Caption
              </Card.Text>
            </div>
            <div
              id="canclick"
              className="pb-2"
            >
              <div>comments</div>
              <div>comments</div>
            </div>
            <div className="d-flex justify-content-between align-items-center pb-3">
              <input
                className="form-control no-border"
                placeholder="Add a comment..."
                style={{ fontSize: 14 }}
              />
              <BiSmile id="emoji" />
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Card
          style={{
            width: "30rem",
            minHeight: window.innerHeight,
            borderRadius: 0,
            fontSize: 15,
          }}
          className="no-border border-bottom"
        >
          <Card.Header
            id="card-header"
            className="d-flex justify-content-between"
            style={{ backgroundColor: "white", height: 70, marginTop: 5 }}
          >
            <div className="d-flex column align-items-center">
              <div
                id="canclick"
                className="pe-2"
              >
                <img
                  src={data?.caption?.from?.profile_picture}
                  alt=""
                  width={40}
                  style={{
                    borderRadius: 50,
                    border: 2,
                    outlineColor: "black",
                  }}
                  id="prof-picture"
                />
              </div>
              <div id="icon">
                {data?.caption?.location ? (
                  <div
                    style={{ fontSize: 15 }}
                    className="my-3"
                  >
                    <strong>{data?.caption?.from?.username}</strong>
                    <BsDot />
                    {data.time}
                    <p>{data?.caption?.location}</p>
                  </div>
                ) : (
                  <div>
                    <strong>{data?.caption?.from?.username}</strong>
                    <BsDot />
                    {data.time}
                  </div>
                )}
              </div>
            </div>
            <div
              id="canclick"
              className="d-flex align-items-center"
            >
              <BsThreeDots />
            </div>
          </Card.Header>
          <Card.Img
            style={{ height: "37rem" }}
            variant="top"
            src={data?.images?.url}
          />
          <Card.Body className="no-border">
            <Card.Title>
              <div className="d-flex column justify-content-between py-2">
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
              className="mb-2"
              style={{ fontSize: 15 }}
            >
              {data?.liked_by?.length > 1 ? (
                <div>
                  Liked by <strong id="link">{data?.liked_by[0]}</strong> and{" "}
                  <strong id="link">others</strong>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mb-2">
              <Card.Text
                style={{
                  display: "inline",
                }}
              >
                <strong
                  id="canclick"
                  className="me-1"
                >
                  {data?.caption?.from?.username}
                </strong>
                {data?.caption?.text}
              </Card.Text>
            </div>
            <div
              id="canclick"
              className="pb-2"
            >
              {/* <div>{JSON.stringify(data)}</div> */}
              <div
                id="comment"
                style={{ fontSize: 14 }}
              >
                View all {data?.comment.length - 2} comments
              </div>
              <div>
                <strong>{data?.comment[0].username}</strong>{" "}
                {data?.comment[0].text}
              </div>
              <div>
                <strong>{data?.comment[1].username}</strong>{" "}
                {data?.comment[1].text}
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center pb-3">
              <input
                className="form-control no-border"
                placeholder="Add a comment..."
                style={{ fontSize: 14 }}
              />
              <BiSmile id="emoji" />
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default FeedsCards;
