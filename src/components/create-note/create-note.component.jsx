import { useContext, useState } from "react";
import { NotesContext } from "../contexts/notes-data.context";
import "./create-note.style.css";

export const CreateNote = () => {
  const [addNote, setAddNote] = useState({ title: "", body: "" });
  const { filteredNotes, setNewNote } = useContext(NotesContext);
  const [limit, setLimit] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const titleChangeHandler = (event) => {
    if (event.target.value.length <= 30) {
      setLimit(false);

      setCharCount(event.target.value.length);
      setAddNote(() => {
        return {
          ...addNote,
          title: event.target.value,
        };
      });
    } else {
      setLimit(true);
      setAddNote(() => {
        return {
          ...addNote,
          title: addNote.title,
        };
      });
    }
  };
  const bodyChangeHandler = (event) => {
    setAddNote(() => {
      return {
        ...addNote,
        body: event.target.value,
      };
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const date = new Date();
    const currDate =
      date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    setNewNote([
      ...filteredNotes,
      {
        id: filteredNotes.length + 1,
        title: addNote.title,
        body: addNote.body,
        createdAt: currDate,
        archived: false,
      },
    ]);
  };

  return (
    <div className="create-new-note-form-container">
      <form
        className="notes-input"
        onSubmit={(event) => {
          onSubmitHandler(event);
        }}
      >
        <span>Character limit :{30 - charCount} </span>
        <div className={`title-input-container ${limit ? "over-limit" : ""}`}>
          <input
            type="text"
            placeholder="set your note title here..."
            value={addNote.title}
            onChange={(event) => {
              titleChangeHandler(event);
            }}
          />
        </div>
        <div className="body-input-container">
          <textarea
            type="text"
            placeholder="write your note content here..."
            value={addNote.body}
            onChange={(event) => {
              bodyChangeHandler(event);
            }}
          />
        </div>
        <div className="submit-button-container">
          <button type="submit">Add New Note</button>
        </div>
      </form>
    </div>
  );
};
