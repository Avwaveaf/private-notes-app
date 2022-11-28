import "./notes-card.style.css";
export const NotesCard = ({ noteData }) => {
  return (
    <div className="notes-card-container">
      <span>{noteData.title}</span>
      <span>{noteData.body}</span>
    </div>
  );
};
