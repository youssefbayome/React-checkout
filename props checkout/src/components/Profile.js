import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Profile({ name, image, bio }) {
  return (
    <>
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
          <Card.Text className="text-secondary">{bio}</Card.Text>
        </Card.Body>
      <button
        type="submit"
        className="btn btn-primary d-flex justify-content-center"
        onClick={(e) => {
          e.preventDefault();
          alert("youssef bayoume");
        }}
      >
        alert
      </button>
      </Card>
    </>
  );
}

Profile.defaultProps = {
  name: "user name",
  image: "This user has no image",
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  bio: PropTypes.string,
};
