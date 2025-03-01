import { useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({
    image:
      "https://hazziassets.blr1.digitaloceanspaces.com/profile-photos/1740749080333-man.jpg",
    name: "Asad Ali",
    email: "asad.ali@example.com",
    username: "asad_ali",
    bio: "Passionate software developer and tech enthusiast. Love to build innovative solutions.",
    location: "Dubai, UAE",
    website: "https://asadali.dev",
    joined: "March 2022",
    followers: 1200,
    following: 500,
    socialLinks: {
      twitter: "https://twitter.com/asadali",
      linkedin: "https://linkedin.com/in/asadali",
      github: "https://github.com/asadali",
    },
  });

  const [theme, setTheme] = useState("light");

  return (
    <GlobalContext.Provider value={{ user, setUser, theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
