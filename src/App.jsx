import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import TaskList from './components/TaskList';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="unnamed/home" />
          <Route path="unnamed/task" element={<TaskList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
