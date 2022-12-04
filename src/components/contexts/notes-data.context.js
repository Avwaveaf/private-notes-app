import { createContext, useEffect, useState } from "react";
import { initialData } from "../../utils";
import { getActiveNotes } from "../../utils/api";

export const NotesContext = createContext({
  notesData: [],
  setNotesData: () => {},
  filteredNotes: [],
  setFilteredNotes: () => {},
  newNote: [],
  setNewNote: () => {},
  selectedNote: {},
  setSelectedNote: () => {},
});

export const NotesContextProvider = ({ children }) => {
  const [notesData, setNotesData] = useState(initialData);
  const [newNote, setNewNote] = useState(notesData);
  const [filteredNotes, setFilteredNotes] = useState(newNote);
  const [selectedNote, setSelectedNote] = useState({});

  const getNotesData = async () => {
    const { data } = await getActiveNotes();
    console.log(data);
  };
  useEffect(() => {
    getNotesData();
  }, []);

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
    selectedNote,
    setSelectedNote,
  };
  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
