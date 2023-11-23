import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import Part from "./Part";

const Parts = () => {
  const { data: parts, isLoading } = useQuery("parts", () =>
    fetch("http://localhost:5000/parts").then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl uppercase font-bold text-center my-12 text-secondary">
        parts we provide
      </h2>
      <div className="grid lg:grid-cols-3 gap-x-10 gap-y-16 mb-10">
        {parts?.map((part) => (
          <Part part={part} key={part._id}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
