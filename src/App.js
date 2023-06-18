
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Archive from './pages/Archive';


function App() {
 

  return (
    <div className="App container">

     <Navbar />

     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/archive" element={<Archive />} />
     </Routes>
    </div>
  );
}

export default App;
