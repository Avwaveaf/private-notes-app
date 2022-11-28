import { useContext } from "react";
import "./App.css";
import { NotesContext } from "./components/contexts/notes-data.context";
import { PrivateNotesApp } from "./components/private-notes-app/private-notes-app.component";
import { SearchNotes } from "./components/search-notes/search-notes.component";

function App() {
  const { filteredNotes } = useContext(NotesContext);
  return (
    <div className="App">
      <SearchNotes />
      <PrivateNotesApp data={filteredNotes} />
    </div>
  );
}

export default App;
