import React from "react";
import Card from "./Card";
import { useQuery } from "react-query";

const Home = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    console.log(value);
  };

  const { data, isLoading, isError } = useQuery("hits", () =>
    fetchHits(searchValue || "")
  );

  if (isLoading) return "loading...";
  if (isError) return new Error("Error occurred");
  if (data) console.log(data);

  return (
    <>
      <div className="search-box p-4 rounded-md">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleInputChange}
          className="border-2 w-full px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="Response-box">
        <Card />
      </div>
    </>
  );
};

export default Home;
