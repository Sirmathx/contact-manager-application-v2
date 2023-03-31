import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/signUp/SignUp";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Profile from "./components/profile/Profile";
import AddContact from "./components/Contact/AddContact";
import EdithContact from "./components/Contact/EdithContact";
import Settings from "./components/Settings/Settings";
import ChangePassword from "./components/profile/ChangePassword";
import DeleteAccount from "./components/profile/DeleteAccount";
import EditProfie from "./components/profile/EditProfie";

function App() {
  return ( 
  <div className="App">
    <Routes>
       <Route path="/" element={<Home />} />
      <Route path="/signup" element={ <SignUp/>  } />
      <Route path="/login" element={ <Login/>  } />


      <Route path="/profile" element={ <Profile/>  } />
      <Route path="/profile/contact/add" element={ <AddContact/>  } />
      <Route path="/profile/contact/Edith" element={ <EdithContact/>  } />
      <Route path="/profile/Settings" element={ <Settings/>  } />


      <Route path="/profile/password" element={ <ChangePassword/>  } />
      <Route path="/profile/delete-account" element={ <DeleteAccount/>  } />
      <Route path="/profile/edit" element={ <EditProfie/>  } />
      

      <Route path="*" element={<NotFound />} />
    </Routes>
  </div> 
  );
};

export default App;
