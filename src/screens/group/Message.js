import React from "react";

export default function Message({ message }) {
  return (
    <div>
      <span style={{ color: "grey" }}>{message.sender.name}</span>
      {" : "}
      <span style={{ color: "green" }}>{message.message}</span>
    </div>
  );
}