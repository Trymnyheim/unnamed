import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Login from './components/Login';
import Task from './components/Task';

function App() {
  let component;
  switch (window.location.pathname) {
    case "/trymhnyheim/home":
      component = <Login />
      break
    case "/trymhnyheim/task":
        component = <Task />
        break
  }
  return <div>
    <Menu />
    {component}
  </div>
}

export default App
