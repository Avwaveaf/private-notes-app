import { useContext, useState } from "react";
import { NotesContext } from "../contexts/notes-data.context";
import "./create-note.style.css";

export const CreateNote = () => {
  const [addNote, setAddNote] = useState({ title: "", body: "" });
  const { filteredNotes, setNewNote } = useContext(NotesContext);
  const titleChangeHandler = (event) => {
    setAddNote(() => {
      return {
        ...addNote,
        title: event.target.value,
      };
    });
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
    setNewNote([
      ...filteredNotes,
      {
        id: filteredNotes.length + 1,
        title: addNote.title,
        body: addNote.body,
        createdAt: new Date(),
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
        <input
          type="text"
          placeholder="title"
          value={addNote.user}
          onChange={(event) => {
            titleChangeHandler(event);
          }}
        />
        <input
          type="text"
          placeholder="body"
          value={addNote.tag}
          onChange={(event) => {
            bodyChangeHandler(event);
          }}
        />
        <button type="submit">Add New Note</button>
      </form>
    </div>
  );
};
