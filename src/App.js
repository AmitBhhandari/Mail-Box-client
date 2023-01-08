import AuthForm from "./Components/AuthForm";
import TextEditing from "./Components/TextEditing/TextEditing";
import InboxPage from "./Components/InboxPage/InboxPage";
import { Fragment } from "react";

import { Route, Routes, Navigate } from "react-router-dom";
import MessageView from "./Components/InboxPage/MessageView";
import InboxList from "./Components/InboxPage/InboxList";

import SentMessage from "./Components/SendMessage/SendMessage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UpdateMySentItem } from "./store/Mail-thunk";

import { useNavigate } from "react-router-dom";

let loginlocalstore = localStorage.getItem("islogin") === "true";
 

let islogin = localStorage.getItem("islogin") === "true";

function App() {
  const navi = useNavigate();
  const islogin = useSelector((state) => state.auth.islogin);
  const Dispatch = useDispatch();
  useEffect(() => {
    if (islogin) {
      navi("/main/inboxlist");
      console.log(" navi");
    } else {
      navi("/login");
    }
  }, [islogin]);

  const sentItem = useSelector((state) => state.mymail.sentItem);
  useEffect(() => {
    if (sentItem.length > 0) {
      Dispatch(UpdateMySentItem(sentItem));
    }

    console.log(sentItem);
  }, [sentItem]);
  console.log("app", sentItem);
  return(
  <div>
  <Routes>
    <Route path="/login" element={<AuthForm />}></Route>
    <Route path="/main/*" element={<InboxPage />}>
      <Route path="inboxlist" element={<InboxList />} />
      <Route path="text-edit" element={<TextEditing />} />
      <Route path="sentmessage" element={<SentMessage />} />
    </Route>
  
    {loginlocalstore && (
      <Route
        path="/login"
        element={<Navigate replace to="/main/inboxlist" />}
      />
    )}
    {/* <TextEditing></TextEditing> */}
  </Routes>
</div>
);
}

export default App;
