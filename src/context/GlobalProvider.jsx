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
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "message",
      title: "New Message",
      content: "You have a new message from John Doe.",
      timestamp: "2025-03-01T14:30:00Z",
      read: false,
    },
    {
      id: 2,
      type: "order",
      title: "Order Shipped",
      content: "Your order #12345 has been shipped and is on the way!",
      timestamp: "2025-03-01T12:00:00Z",
      read: true,
    },
    {
      id: 3,
      type: "alert",
      title: "Security Alert",
      content:
        "A login attempt was detected from a new device. If this wasn't you, please review your security settings.",
      timestamp: "2025-02-29T20:45:00Z",
      read: false,
    },
    {
      id: 4,
      type: "follow",
      title: "New Follower",
      content: "Jane Smith started following you.",
      timestamp: "2025-02-28T18:10:00Z",
      read: false,
    },
    {
      id: 5,
      type: "reminder",
      title: "Event Reminder",
      content:
        "Don't forget: Your meeting with the product team is scheduled for tomorrow at 10 AM.",
      timestamp: "2025-02-27T09:00:00Z",
      read: true,
    },
    {
      id: 6,
      type: "comment",
      title: "New Comment",
      content:
        "Mike commented on your post: 'Great insights, really enjoyed your article!'",
      timestamp: "2025-02-26T15:30:00Z",
      read: false,
    },
    {
      id: 7,
      type: "like",
      title: "New Like",
      content: "Sarah liked your recent post.",
      timestamp: "2025-02-25T11:20:00Z",
      read: false,
    },
  ]);

  const [theme, setTheme] = useState("light");

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
        notifications,
        setNotifications,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
