import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth";
import Uislice from "./Uivisible";
import MailSlice from "./MailSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    uiauth: Uislice.reducer,
    mail: MailSlice.reducer,
  },
});
export default Store;