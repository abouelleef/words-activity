import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Practice from "./pages/Practice";
import Rank from "./pages/Rank";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Welcome />} />
        <Route path="practice" element={<Practice />} />
        <Route path="rank" element={<Rank />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
