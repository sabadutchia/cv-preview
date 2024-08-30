import React from "react";

export default function Education({ info }) {
  return (
    <div>
      <div className="title">Educational experience</div>
      <p>
        <span className="subtitle">School name: </span>
        {info.school}
      </p>
      <p>
        <span className="subtitle">Title: </span>
        {info.title}
      </p>
      <p>
        <span className="subtitle">Date: </span>
        {info.date}
      </p>
    </div>
  );
}
