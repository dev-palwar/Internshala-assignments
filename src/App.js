import React, { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=dev"
        );
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container flex h-[100vh] justify-center">
      <div className="bg-[#f7f7f7] flex h-[30vh] w-[60vh] m-auto items-center justify-evenly border">
        {userData && (
          <>
            <div className="image h-[70%] w-[30%]">
              <img
                src={userData.picture.large}
                alt={`${userData.name.first} ${userData.name.last}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="info">
              <div className="name flex gap-2 text-[23px] font-bold">
                <h1>{userData.name.first}</h1>
                <h1>{userData.name.last}</h1>
              </div>
              <p>Gender: {userData.gender}</p>
              <p>Phone: {userData.phone}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
