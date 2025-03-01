import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ProfileCard = () => {
  const { user } = useContext(GlobalContext);
  console.log("from card");

  return (
    <div className="w-full flex items-center justify-start h-auto my-10 p-5">
      <div className="w-full md:w-1/2 rounded-md p-5 shadow-md border">
        <h1 className="text-4xl font-bold mb-4 border-b pb-2">Profile</h1>

        <div className="flex flex-col md:flex-row items-center w-full justify-between mx-auto border p-4">
          <div>
            <img
              className="w-40 h-40 rounded-full object-cover"
              src={user?.image}
              alt="profile"
            />
          </div>
          <div className="mx-2 text-center md:text-left">
            <h2 className="text-xl font-semibold">Description: </h2>
            <p>{user?.bio}</p>
          </div>
        </div>

        <div className="w-75 my-5 flex gap-2">
          <div
            className="w-1/2 flex justify-between px-3 text-lg font-semibold shadow-sm

"
          >
            <span>Followers</span>{" "}
            <span
              className="text-green-500
"
            >
              {user?.followers}
            </span>
          </div>
          <div
            className="w-1/2 flex justify-between px-3 text-lg font-semibold shadow-sm

"
          >
            <span className="">Following</span>{" "}
            <span
              className="text-red-500
"
            >
              {user?.following}
            </span>
          </div>
        </div>

        {/* Key-value details */}
        <div className="content mt-5">
          {Object.entries(user).map(
            ([key, value], index) =>
              key !== "image" &&
              key !== "socialLinks" &&
              key !== "bio" &&
              key !== "followers" &&
              key !== "following" && (
                <div key={index} className="flex justify-between border-b py-3">
                  <span className="font-semibold capitalize">{key}</span>
                  <span className="w-75  p-1">
                    {typeof value === "object" ? JSON.stringify(value) : value}
                  </span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
