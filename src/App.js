import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './Components/Pages/Home';
import SignUpPage from './Components/Pages/AccountSection/SignUpPage';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/signup' exact element={<SignUpPage />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
