
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Main,Detail } from './pages';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Main}></Route>
      <Route path="/detail/:id" Component={Detail}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
