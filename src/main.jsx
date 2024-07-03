import ReactDOM from "react-dom/client";
import App from "./components/App";
import "modern-normalize";
import "./index.css";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  </Provider>
);
