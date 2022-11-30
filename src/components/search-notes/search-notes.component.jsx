import { useContext } from "react";
import { NotesContext } from "../contexts/notes-data.context";
import "./search-notes.style.css";
import { useSearchParams } from "react-router-dom";

export const SearchNotes = () => {
  const { notesData, setFilteredNotes } = useContext(NotesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchNote = searchParams.get("search") || "";

  return (
    <div className="search-notes-container">
      <input
        type="search"
        name=""
        value={searchNote}
        onChange={(event) => {
          const filteredNotes = notesData.filter((note) => {
            return note.title
              .toLocaleLowerCase()
              .includes(event.target.value.toLocaleLowerCase());
          });
          setFilteredNotes(filteredNotes);
          const name = event.target.value;
          if ({ name }) {
            setSearchParams({ search: name });
          } else {
            setSearchParams({});
          }
        }}
        placeholder="search notes"
      />
    </div>
  );
};
