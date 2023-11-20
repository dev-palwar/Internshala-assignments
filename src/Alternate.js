import React, { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=dev");
        const data = await response.json();

        console.log("Random User Data:", data);
        setUserData(data.results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      {userData && (
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-center">
            <div className="image h-32 w-32 overflow-hidden rounded-full">
              <img
                src={userData.picture.large}
                alt={`${userData.name.first} ${userData.name.last}`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold">
              {userData.name.first} {userData.name.last}
            </h1>
            <p className="text-gray-600">Gender: {userData.gender}</p>
            <p className="text-gray-600">Phone: {userData.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;