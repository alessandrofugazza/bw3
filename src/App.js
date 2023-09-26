import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./component/ProfilePage";
import TopBar from "./component/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import ExpPage from "./component/ExpPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path={"/:id?"} element={<ProfilePage />} />
          <Route path={"/experience"} element={<ExpPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
