import { useContext } from "react";
import { SearchContext, SearchContextType } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";

import "./style.css";

export function SearchResults() {
  const { userData } = useContext<SearchContextType>(SearchContext);
  return userData.users.length > 0 ? (
    <div className="usersList">
      {userData.users.map((user) => (
        <UserCard {...user} key={user.id} />
      ))}
    </div>
  ) : (
    <>
      <div className="usersList-no_result">
        <p>Users with such name does not found!</p>
      </div>
    </>
  );
}
