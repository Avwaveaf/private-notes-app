import { NotesCard } from "../notes-card/notes-card.component";
import "./private-notes-app.style.css";
export const PrivateNotesApp = ({ data }) => {
  return (
    <div className="notes-container">
      <h2>Notes list</h2>
      {data.length ? (
        <div className="notes-child-container">
          {data.map((e) => {
            if (!e.archived) {
              return <NotesCard noteData={e} key={e.id} />;
            }
            return "";
          })}
        </div>
      ) : (
        <span className="empty-data">no data found</span>
      )}

      <h2>Archived list</h2>
      {data.length ? (
        <div className="notes-child-container">
          {data.map((e) => {
            if (e.archived) {
              return <NotesCard noteData={e} key={e.id} />;
            }
            return "";
          })}
        </div>
      ) : (
        <span className="empty-data">no data found</span>
      )}
    </div>
  );
};
