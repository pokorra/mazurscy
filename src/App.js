import React from 'react';
import { HashRouter,  Route, Switch} from 'react-router-dom';
import './scss/main.scss';
import Home from './components/Home';
import Question from './components/Question';
import Final from './components/Final';
import NotFound from './components/NotFound';

function App() {
  return (
    // <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route path='/quiz' component={Question} />
          <Route path='/chapter' component={Final} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    // </div>
  );
}

export default App;
