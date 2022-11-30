import { useContext } from "react";
import "./App.css";
import { NotesContext } from "./components/contexts/notes-data.context";
import { PrivateNotesApp } from "./components/private-notes-app/private-notes-app.component";
import { NavBar } from "./components/nav-bar/nav-bar.component";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { NotesDetail } from "./Routes/notes-detail/notes-detail.component";
import { PageNotFound } from "./Routes/page-notfound/page-notfound.component";
function App() {
  const { filteredNotes } = useContext(NotesContext);
  const [searchParams] = useSearchParams();
  const searchNote = searchParams.get("search") || "";

  const filterNotesUrl = filteredNotes.filter((note) => {
    return note.title.toLocaleLowerCase().includes(searchNote);
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route
            index
            element={
              <PrivateNotesApp
                data={
                  filterNotesUrl.length !== filteredNotes.length
                    ? filterNotesUrl
                    : filteredNotes
                }
              />
            }
          />
          <Route path="note-detail" element={<NotesDetail />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
