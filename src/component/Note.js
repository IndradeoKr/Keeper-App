import React from "react";
import note from "../notes";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

let Main = note.map((note) => (
  <Note key={note.key} title={note.title} content={note.content} />
));

export default Main;
