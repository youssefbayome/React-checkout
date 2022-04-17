import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function Profile({ name, image, bio, profession }) {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 10);
    }, 10);
  }, [count]);
  return (
    <>
      <div className="text-center p-5">
        <span>{("0" + Math.floor((count / 60000) % 100)).slice(-2)}:</span>
        <span>{("0" + Math.floor((count / 1000) % 100)).slice(-2)}:</span>
        <span>{("0" + ((count / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="button">
        <button
          type="submit"
          className="btn btn-primary text-center"
          onClick={() => {
            setToggle(!toggle);
            setCount(0.0);
          }}
        >
          Toggle
        </button>
      </div>

      {toggle && (
        <Card className="profile-card shadow-sm bg-white rounded">
          <Card.Img variant="top" src={image} className="profile-img" />
          <Card.Body className="d-flex flex-column">
            <div className="d-flex mb-2 justify-content-between">
              <Card.Title
                className="mb-0 font-weight-bold"
                style={{ textTransform: "capitalize" }}
              >
                {name}
              </Card.Title>
            </div>
            <Card.Text className="text-secondary">{profession}</Card.Text>
            <Card.Text className="text-secondary">{bio}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
export default Profile;
