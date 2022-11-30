import { useContext } from "react";
import { NotesContext } from "../contexts/notes-data.context";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import "./notes-card.style.css";
export const NotesCard = ({ noteData, isOnDetail }) => {
  const { filteredNotes, setNewNote, setSelectedNote } =
    useContext(NotesContext);
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
      <span className="card-title">{noteData.title}</span>
      <span className="card-date">{noteData.createdAt}</span>
      <span className="card-body">{noteData.body}</span>
      <div className="notes-card-bottom">
        <button type="" className="delete-card-button" onClick={deleteHandler}>
          delete
        </button>
        <button
          type=""
          id="archive"
          className="archive-card-button"
          onClick={archiveUpdateHandler}
        >
          {!noteData.archived ? "archive" : "un-archive"}
        </button>
        {!isOnDetail ? (
          <button
            type=""
            onClick={() => {
              setSelectedNote(noteData);
            }}
          >
            <Link to="note-detail">see the detail</Link>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

NotesCard.propTypes = {
  noteData: PropTypes.object,
  isOnDetail: PropTypes.bool,
};
