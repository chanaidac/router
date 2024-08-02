import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from "./components/Landing";

function App() {

  const [users, setUsers] = useState(
    [
      {
        id: "1",
        username: "chan",
        password: '123'
      },
      {
        id: "2",
        username: "aswin",
        password: '123'
      }
    ]
  )

  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login users={users} setUsers={setUsers}></Login>}></Route>
          <Route path="/signup" element={<Signup users={users} setUsers={setUsers}></Signup>}></Route>
          <Route path="/landing" element={<Landing></Landing>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
