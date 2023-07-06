import {Route, Router} from'./Router/Router'
import './App.css'
import Root from './pages/Root';
import About from './pages/About';
import User from './pages/User';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={<Root />} />
        <Route path="/about" component={<About/>} />
        <Route path="/user" component={<User />} />
      </Router>
    </div>
  )
}

export default App
