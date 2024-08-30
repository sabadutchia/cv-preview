import { useState } from "react";
import "./App.css";
import BaseButton from "./components/BaseButton";
import CvDisplayComponent from "./components/cv/CvDisplayComponent";
import FormComponent from "./components/form/FormComponent";
import "./styles/styles.css";

function App() {
  const [info, setInfo] = useState({
    generalInfo: { name: "", email: "", phoneNumber: "" },
    education: { school: "", title: "", date: "" },
    experience: {
      companyName: "",
      position: "",
      responsabilities: "",
      dateFrom: "",
      dateUntil: "",
    },
  });

  const [cvInfo, setCvInfo] = useState({ ...info });
  const [showCv, setShowCv] = useState(false);

  const submit = () => {
    setCvInfo({ ...info });
    setShowCv(true);
  };

  const edit = () => {
    setShowCv(false);
    setInfo({ ...info });
  };

  return (
    <>
      <div className="d-flex">
        {!showCv ? (
          <FormComponent info={info} setInfo={setInfo} />
        ) : (
          <CvDisplayComponent info={cvInfo}></CvDisplayComponent>
        )}
      </div>
      {!showCv ? (
        <BaseButton action={submit}></BaseButton>
      ) : (
        <BaseButton text="Edit" action={edit}></BaseButton>
      )}
    </>
  );
}

export default App;
