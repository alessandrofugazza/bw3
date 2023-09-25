import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProfilePage from "./component/ProfilePage";
import TopBar from "./component/TopBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import BioProfile from "./component/BioProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path={"/:id?"} element={<ProfilePage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
