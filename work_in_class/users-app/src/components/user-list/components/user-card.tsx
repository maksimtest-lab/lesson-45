import type { User } from "../../../types/user";
import React from "react";
import "./user-card.css";

interface UserCardProps {
  user: User
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <img className="user-card-image" src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
      <h3 className="user-card-title"> {user.name.first} {user.name.last}</h3>
      <p className="user-card-email">{user.email}</p>
      <p className="user-card-city">{user.location.country}</p>
    </div>
  );
};
