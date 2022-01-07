import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Sidebar from './Components/Sidebar';

function App() {
  return ( <div className='App'>
    <Sidebar />
  </div>
    
  );
}

export default App;
