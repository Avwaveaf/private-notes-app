import { useContext } from "react";
import "./App.css";
import { NotesContext } from "./components/contexts/notes-data.context";
import { PrivateNotesApp } from "./components/private-notes-app/private-notes-app.component";
import { NavBar } from "./components/nav-bar/nav-bar.component";
function App() {
  const { filteredNotes } = useContext(NotesContext);

  return (
    <div className="App">
      <NavBar />
      <PrivateNotesApp data={filteredNotes} />
    </div>
  );
}

export default App;
