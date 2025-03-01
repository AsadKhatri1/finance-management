import React, { useContext } from "react";
import ProfileCard from "../components/ProfileCard";
import { GlobalContext } from "../context/GlobalContext";

const Profile = () => {
  const { user } = useContext(GlobalContext);
  return (
    <div>
      <ProfileCard />
    </div>
  );
};

export default Profile;
