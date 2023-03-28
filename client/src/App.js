import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/signUp/SignUp";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";

function App() {
  return ( 
  <div className="App">
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/signup" element={ <SignUp/>  } />
      <Route path="/login" element={ <Login/>  } />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </div> 
  );
}

export default App;
