import React from "react";

export default function BaseButton({ text = "Submit", action }) {
  return <button onClick={action}>{text}</button>;
}
