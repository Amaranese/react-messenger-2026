import Messages from "./components/Messages";
import Profile from "./components/Profile";
import './main.scss'
import Contact from "./components/Contact";
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const _id = useSelector((state) => state.application.items._id)
  return (
    <div className='container content'>
        <Routes>
          <Route path="/:_id" element={<Contact/>}/>
          <Route path="/:_id" element={<Messages/>}/>
        </Routes>
        <Profile/>
    </div>
  );
}

export default App;