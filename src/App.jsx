import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Login from './components/Login';
import Task from './components/Task';

function App() {
  let component;
  switch (window.location.pathname) {
    case "/unnamed/home":
      component = <Login />
      break
    case "/unnamed/task":
        component = <Task />
        break
  }
  return <div>
    <Menu />
    {component}
  </div>
}

export default App
