import {Routes,Route } from "react-router-dom";
import Home from './Home/Home.jsx';
import Board from "./Home/Board.jsx";
import Content from "./Home/Content.jsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/board' element={<Board/>}></Route>
      <Route path='/board/:id' element={<Content/>}></Route>
    </Routes>
  );
}

export default App;
