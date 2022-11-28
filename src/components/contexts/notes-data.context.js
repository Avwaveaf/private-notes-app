import { createContext, useEffect, useState } from "react";
import { initialData } from "../../utils";

export const NotesContext = createContext({
  notesData: [],
  setNotesData: () => {},
  filteredNotes: [],
  setFilteredNotes: () => {},
  newNote: [],
  setNewNote: () => {},
});

export const NotesContextProvider = ({ children }) => {
  const [notesData, setNotesData] = useState(initialData);
  const [newNote, setNewNote] = useState(notesData);
  const [filteredNotes, setFilteredNotes] = useState(newNote);

  useEffect(() => {
    setNotesData(newNote);
  }, [newNote]);

  useEffect(() => {
    setFilteredNotes(notesData);
  }, [notesData]);

  const value = {
    notesData,
    setNotesData,
    setFilteredNotes,
    filteredNotes,
    newNote,
    setNewNote,

  };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
