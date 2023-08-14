import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import PortofolioPage from "./pages/PortofolioPage";

function App() {
  return (
    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/experience' Component={ExperiencePage} />
      <Route path='/portofolio' Component={PortofolioPage} />
    </Routes>
  );
}

export default App;
