import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './Components/Pages/Home';
import SignUpPage from './Components/Pages/AccountSection/SignUpPage';
import Login from './Components/Pages/AccountSection/Login';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/signup' exact element={<SignUpPage />}></Route>
            <Route path='/login' exact element={<Login />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
