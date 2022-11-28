import { createContext, useState } from "react";
import { initialData } from "../../utils";

export const NotesContext = createContext({
  notesData: [],
  setNotesData: () => {},
});

export const NotesContextProvider = ({ children }) => {
  const [notesData, setNotesData] = useState(initialData);

  const value = { notesData, setNotesData };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
