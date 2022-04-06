import React from "react";

function Fullname() {
  const fullName = {
    firstName: "youssef",
    lastName: "bayoume",
  };
  const adress = {
    street: "ahmad fakhry",
    city: "naser city",
  };

  return (
    <div className="full-name">
      <h1>{`${fullName.firstName}${fullName.lastName}`}</h1>
      <p>
        {adress.street},{adress.city}
      </p>
    </div>
  );
}
export default Fullname;
