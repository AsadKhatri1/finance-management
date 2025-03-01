import React, { useContext } from "react";
import List from "../components/List";
import { GlobalContext } from "../context/GlobalContext";

const Notification = () => {
  const { notifications } = useContext(GlobalContext);
  return (
    <div>
      <List notifications={notifications} />
    </div>
  );
};

export default Notification;
