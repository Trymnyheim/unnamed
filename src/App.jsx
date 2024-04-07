import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Login';
import Task from './components/Task';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/unnamed/home" element={<Login />} />
          <Route path="/unnamed/task" element={<Task />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;