import React from "react";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
  //   const { user, setUser } = useContext(GlobalContext);
  //   useEffect(() => {
  //     setUser({
  //       ...user,
  //       name: "loggedin Asad",
  //     });
  //     console.log(user);
  //   }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
