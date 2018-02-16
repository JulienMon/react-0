import React from "react";

export default function List(props) {
  const firstNames = [
    "Julien",
    "Kevin",
    "Lucas",
    "Renaud",
    "Aurelien",
    "Cono",
    "Jerome",
    "Nicolas",
    "Fabien",
    "Greg",
    "Yacine"
  ];

  return (
    <ul>
      {firstNames.map((firstname, index) => <li key={index}>{firstname}</li>)}
    </ul>
  );
}
