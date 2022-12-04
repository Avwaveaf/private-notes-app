import { useContext, useEffect, useState } from "react";
import "./App.css";
import { NotesContext } from "./components/contexts/notes-data.context";
import { PrivateNotesApp } from "./components/private-notes-app/private-notes-app.component";
import { NavBar } from "./components/nav-bar/nav-bar.component";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { NotesDetail } from "./Routes/notes-detail/notes-detail.component";
import { PageNotFound } from "./Routes/page-notfound/page-notfound.component";
import { Register } from "./Routes/register/register.component";
import { Login } from "./Routes/login/login.component";
import { getUserLogged, putAccessToken } from "./utils/api";
function App() {
  const { filteredNotes } = useContext(NotesContext);
  const [searchParams] = useSearchParams();
  const [authedUser, setAuthedUser] = useState(null);
  const searchNote = searchParams.get("search") || "";

  const filterNotesUrl = filteredNotes.filter((note) => {
    return note.title.toLocaleLowerCase().includes(searchNote);
  });
  const loginSuccessHandler = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(() => {
      return {
        authedUser: data,
      };
    });
  };
  const logOutHandler = () => {
    setAuthedUser(null);
    putAccessToken("");
  };
  useEffect(() => {
    const getUserLoggedfromApi = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(() => {
        return {
          authedUser: data,
        };
      });
    };
    getUserLoggedfromApi();
  }, []);
  console.log(authedUser);
  return (
    <div className="App">
      {authedUser === null ? (
        <Routes>
          <Route
            path="/*"
            element={<Login loginSuccess={loginSuccessHandler} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<NavBar authedUser={authedUser} logOut={logOutHandler} />}
          >
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
      )}
    </div>
  );
}

export default App;
