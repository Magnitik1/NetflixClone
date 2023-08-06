import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={props.MainPage}/>
        <Route path="/Authorization" element={props.Authorization}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
