import { useState } from "react";
import SearchForm from "./components/SearchFrom/SearchForm";
import { SearchContext, Data } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";

export default function App() {
  const [userData, setUserData] = useState<Data>({users:[]});

  return (
    <SearchContext.Provider value={{userData, setUserData}}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
