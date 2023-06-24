import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './Components/Pages/Home';
import Dummy from './Components/Pages/Dummy';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/meow' exact element={<Dummy />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
