// import React, { useState } from "react";
import { useQuery } from "react-query";
import Part from "./Part";

const Parts = () => {
  //   const [parts, setParts] = useState([]);

  const { data: parts, isLoading } = useQuery("parts", () =>
    fetch("data.json").then((res) => res.json())
  );

  if (isLoading) {
    return <p>please wait</p>;
  }
  console.log(parts);

  return (
    <div>
      <h2 className="text-2xl uppercase font-bold text-center">
        parts we provide
      </h2>
      <div className="grid lg:grid-cols-3 gap-y-10">
        {parts.map((part) => (
          <Part part={part} key={part.id}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
