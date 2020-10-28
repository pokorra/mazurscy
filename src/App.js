import React, {useState} from 'react';
import { HashRouter,  Route, Switch} from 'react-router-dom';
import './scss/main.scss';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Final from './components/Final';
import NotFound from './components/NotFound';


function App() {

  const [score, setScore] = useState(0);

  return (
    // <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route path='/quiz' component={()=> <Quiz setScore={setScore} score={score} />} />
          <Route path='/final' component={()=> <Final setScore={setScore} score={score}/>} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    // </div>
  );
}

export default App;
