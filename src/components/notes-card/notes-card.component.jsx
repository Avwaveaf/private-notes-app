import { useContext } from "react";
import { NotesContext } from "../contexts/notes-data.context";
import "./notes-card.style.css";
export const NotesCard = ({ noteData }) => {
  const { filteredNotes, setNewNote } = useContext(NotesContext);
  const datas = filteredNotes;
  const deleteHandler = () => {
    const index = filteredNotes.findIndex((e) => e.id === noteData.id);
    datas.splice(index, 1);
    setNewNote(datas.map((e) => e));
  };
  const archiveUpdateHandler = () => {
    const index = filteredNotes.findIndex((e) => e.id === noteData.id);
    datas.splice(index, 1, { ...noteData, archived: !noteData.archived });
    setNewNote(datas.map((e) => e));
  };
  return (
    <div className="notes-card-container">
      <span>{noteData.title}</span>
      <span>{noteData.body}</span>
      <div className="notes-card-bottom">
        <button type="" onClick={deleteHandler}>
          delete
        </button>
        <button type="" onClick={archiveUpdateHandler}>
          {!noteData.archived ? "archive" : "un-archive"}
        </button>
      </div>
    </div>
  );
};
