import { createContext, Dispatch, SetStateAction } from "react";

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    city: string;
  };
}

export interface Data {
  users: UserInterface[];
}

export interface SearchContextType {
  userData: Data;
  setUserData: Dispatch<SetStateAction<Data>>;
}

export const SearchContext = createContext({
  userData: { users: [] },
  setUserData: () => {},
} as SearchContextType);
