import { PropTypes } from "prop-types";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { NotesContext } from "../../components/contexts/notes-data.context";
import { NotesCard } from "../../components/notes-card/notes-card.component";
import "./notes-detail.style.css";

export const NotesDetail = ({ data }) => {
  const { filteredNotes, selectedNote } = useContext(NotesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const detailNote = searchParams.get("note") || "";
  const searchNote = searchParams.get("search") || "";
  const [currentNote, setCurrentNote] = useState({});
  useEffect(() => {
    if (searchNote) {
      const foundNote = filteredNotes.filter(
        (note) => note.id === Number(searchNote)
      );
      setCurrentNote(foundNote[0]);
      setSearchParams({ note: foundNote[0].id });
    }
    if (detailNote) {
      const foundNote = filteredNotes.filter(
        (note) => note.id === Number(detailNote)
      );
      if (foundNote.length) {
        setCurrentNote(foundNote[0]);
        setSearchParams({ note: foundNote[0].id });
      }
    }
    if (selectedNote) {
      setCurrentNote(selectedNote);
      setSearchParams({ note: selectedNote.id });
    }
  }, []);
  return (
    <div className="notes-detail-container">
      {currentNote.id ? (
        <NotesCard noteData={currentNote} isOnDetail={true} />
      ) : (
        <div style={{ marginTop: "300px" }}>not detail need to shown</div>
      )}
    </div>
  );
};

NotesDetail.propTypes = {
  data: PropTypes.object,
};
