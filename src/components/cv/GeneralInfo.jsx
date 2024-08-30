import React from "react";

export default function GeneralInfo({ info }) {
  return (
    <div>
      <div className="title">General information</div>
      <div>
        <p>
          <span className="subtitle">Name: </span>
          {info.name}
        </p>
      </div>
      <p>
        <span className="subtitle">Email: </span>
        {info.email}
      </p>
      <p>
        <span className="subtitle">Phone number: </span>
        {info.phoneNumber}
      </p>
    </div>
  );
}
