
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Main,Detail,ErrorPage } from './pages';
import { useEffect } from "react";
import { Header } from "./components";

function App() {
  useEffect(()=>{
    console.log('app render');

    return(()=>{console.log('app out')});
  },[])
  
  return (
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" Component={Main}></Route>
      <Route path="/detail/:id" Component={Detail}></Route>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/error" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
