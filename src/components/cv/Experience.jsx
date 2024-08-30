import React from "react";

export default function Experience({ info }) {
  return (
    <div>
      <div className="title">Practical experience</div>
      <p>
        <span className="subtitle">Company name: </span>
        {info.companyName}
      </p>
      <p>
        <span className="subtitle">Position: </span>
        {info.position}
      </p>
      <p>
        <span className="subtitle">Responsabilities: </span>
        {info.responsabilities}
      </p>
      <p>
        <span className="subtitle">Date from: </span>
        {info.dateFrom}
      </p>
      <p>
        <span className="subtitle">Date until: </span>
        {info.dateUntil}
      </p>
    </div>
  );
}
