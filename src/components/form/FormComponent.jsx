import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";

export default function FormComponent({ info, setInfo }) {
  return (
    <section>
      <GeneralInfo
        sectionInformation={info.generalInfo}
        setSectionInformation={(newInfo) =>
          setInfo({ ...info, generalInfo: newInfo })
        }
      ></GeneralInfo>
      <hr />
      <Education
        sectionInformation={info.education}
        setSectionInformation={(newInfo) =>
          setInfo({ ...info, education: newInfo })
        }
      ></Education>
      <hr />
      <Experience
        sectionInformation={info.experience}
        setSectionInformation={(newInfo) =>
          setInfo({ ...info, experience: newInfo })
        }
      ></Experience>
    </section>
  );
}
