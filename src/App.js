import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import RGB from './components/RBG/RGB.js';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/RGB/:R/:G/:B" component={Header} />
      </Switch>

      <RGB />
    </main>
  );
}

export default App;
