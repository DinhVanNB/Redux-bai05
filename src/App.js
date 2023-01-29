import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/User";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default App;