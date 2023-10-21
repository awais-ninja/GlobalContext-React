import { createContext, useReducer } from "react";

const GlobalContext = createContext(null);

const initState = {
  users: { name: null, age: null, gender: null },
  group: null,
  isdark: false,
};

const globalReducer = (state, action) => {
  if (action.type === "setGState") {
    return { ...state, users: { name: "Namra", age: "44", gender: "f" } };
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
