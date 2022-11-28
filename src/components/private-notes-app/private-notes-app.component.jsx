import { NotesCard } from "../notes-card/notes-card.component";
import "./private-notes-app.style.css";
export const PrivateNotesApp = ({ data }) => {
  return (
    <div className="notes-container">
      {data.map((e) => {
        return <NotesCard noteData={e} key={e.id} />;
      })}
    </div>
  );
};
