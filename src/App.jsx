import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Login';
import Task from './components/Task';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route path="/unnamed/home" component={Login} />
          <Route path="/unnamed/task" component={Task} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
