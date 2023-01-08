import AuthForm from "./Components/AuthForm";
import TextEditing from "./Components/TextEditing/TextEditing";
import InboxPage from "./Components/InboxPage/InboxPage";
import { Fragment } from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import MessageView from "./Components/InboxPage/MessageView";
import InboxList from "./Components/InboxPage/InboxList";


let islogin = localStorage.getItem("islogin") === "true";

function App() {
  return
      <div>
      <Routes>
        <Route path="/login" element={<AuthForm />}></Route>
        <Route path="/main/*" element={<InboxPage />}>
          <Route path="inboxlist" element={<InboxList />} />
          <Route path="text-edit" element={<TextEditing />} />
        </Route>
        {islogin && (
          <Route path="/login" element={<Navigate replace to="main" />} />
        )}
        {/* <TextEditing></TextEditing> */}
      </Routes>
      
    </div>
  
}

export default App;
