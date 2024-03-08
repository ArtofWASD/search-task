import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { SearchContext } from "../SearchResults/SearchContext";
import debounce from "debounce";

const SearchForm = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const { setUserData } = useContext(SearchContext);
  const debounceTime = debounce(setUserData, 500)
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users/search?q=${searchQuery}`
        );
        if (!response.ok) {
          throw new Error("Network error: " + response.statusText);
        }
        const data = await response.json();
        debounceTime(data)
      } catch (error) {
        console.error("Failed to fetch", error);
      }
    };
    fetchData();
  },[setUserData, searchQuery])

  return (
    <div className="searchForm">
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
};
export default SearchForm;
