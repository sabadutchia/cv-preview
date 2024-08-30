import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";

export default function CvDisplayComponent({ info }) {
  return (
    <div>
      <GeneralInfo info={info.generalInfo}></GeneralInfo>
      <hr />
      <Education info={info.education}></Education>
      <hr />
      <Experience info={info.experience}></Experience>
    </div>
  );
}
