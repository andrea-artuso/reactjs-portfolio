import {
  Route,
  BrowserRouter,
  Switch
} from 'react-router-dom'

//Import STYLES
import './App.css';

//Import COMPONENTS
import Homepage from './pages/Homepage/Homepage'
import Projects from './pages/Projects/Projects'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;