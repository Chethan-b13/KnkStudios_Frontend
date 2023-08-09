import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Home } from './Components/Pages/Home';
import SignUpPage from './Components/Pages/AccountSection/SignUpPage';
import Login from './Components/Pages/AccountSection/Login';
import Profile from './Components/Pages/Profile/Profile';
import Gallery from './Components/Pages/Gallery/Gallery';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/signup' exact element={<SignUpPage />}></Route>
            <Route path='/login' exact element={<Login />}></Route>
            <Route path='/profile' exact element={<Profile />}></Route>
            <Route path='/gallery' exact element={<Gallery />}></Route>
            <Route path='*' exact element={<h1>404 Not Found</h1>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
