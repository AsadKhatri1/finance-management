import React from "react";
import { GlobalContext } from "../context/GlobalContext";

const List = ({ notifications }) => {
  return (
    <div className="max-w-md mx-auto mt-5">
      <h2 className="text-xl font-bold mb-3 mx-2">Notifications</h2>
      <div className="space-y-3 mx-2 mb-5">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border rounded-lg shadow-sm ${
                notification.read ? "bg-gray-100" : "bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold">{notification.title}</h3>
              <p className="text-sm text-gray-600">{notification.content}</p>
              <span className="text-xs text-gray-400">
                {new Date(notification.timestamp).toLocaleString()}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No notifications available.</p>
        )}
      </div>
    </div>
  );
};

export default List;
