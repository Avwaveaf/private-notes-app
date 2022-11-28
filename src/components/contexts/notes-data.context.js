import { createContext, useState } from "react";
import { initialData } from "../../utils";

export const NotesContext = createContext({
  notesData: [],
  setNotesData: () => {},
  filteredNotes: [],
  setFilteredNotes: () => {},
});

export const NotesContextProvider = ({ children }) => {
  const [notesData, setNotesData] = useState(initialData);
  const [filteredNotes, setFilteredNotes] = useState(notesData);

  const value = { notesData, setNotesData, setFilteredNotes, filteredNotes };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
