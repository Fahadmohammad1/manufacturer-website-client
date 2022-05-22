import React, { useState } from "react";
import { useQuery } from "react-query";

const Parts = () => {
  //   const [parts, setParts] = useState([]);

  const { data: parts } = useQuery("parts", () =>
    fetch("data.json").then((res) => res.json())
  );
  console.log(parts);

  return (
    <div>
      <h2 className="text-2xl uppercase font-bold text-center">
        parts we provide
      </h2>
    </div>
  );
};

export default Parts;
