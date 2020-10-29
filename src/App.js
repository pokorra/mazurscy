import React, {useState} from 'react';
import { HashRouter,  Route, Switch} from 'react-router-dom';
import './scss/main.scss';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Final from './components/Final';
import NotFound from './components/NotFound';


function App() {

  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);
  const [isFinished, setFinished] = useState(false);

  return (
    // <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route path='/quiz' component={()=> <Quiz setScore={setScore} score={score} number={number} setNumber={setNumber} isFinished={isFinished} setFinished={setFinished}/>} />
          <Route path='/final' component={()=> <Final setScore={setScore} score={score} setFinished={setFinished}/>} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    // </div>
  );
}

export default App;
