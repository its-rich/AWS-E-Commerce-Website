import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import NavBar from './components/NavBar.js';
import './styles/styles.css';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Switch>
                <Route path="/" component={Home} exact/>
            </Switch>
        </div>
    );
}

export default App;
