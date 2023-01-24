import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import RGB from './components/RBG/RGB';
import NotFound from './components/NotFound';

function App() {
  return (
    <main className="App">
      <Header />
      <Switch>
        <Route path="/RGB/:R/:G/:B" component={RGB} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
