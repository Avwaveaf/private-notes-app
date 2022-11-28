import { useContext } from "react";
import { NotesContext } from "../contexts/notes-data.context";
import "./search-notes.style.css";

export const SearchNotes = () => {
  const { notesData, setFilteredNotes } = useContext(NotesContext);
  return (
    <div className="search-notes-container">
      <input
        type="search"
        name=""
        onChange={(event) => {
          const filteredNotes = notesData.filter((note) => {
            return note.title
              .toLocaleLowerCase()
              .includes(event.target.value.toLocaleLowerCase());
          });
          setFilteredNotes(filteredNotes);
        }}
        placeholder="search notes"
      />
    </div>
  );
};
