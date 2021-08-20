import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Day from './components/day';
import DayList from './components/dayList';
import Emptypage from './components/emptypage';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <DayList />
          </Route>
          <Route path='/day/:day'>
            <Day />
          </Route>
          <Route>
            <Emptypage />
          </Route>
          {/* 앞에 있는 조건이 모두 만족하지 않으면 emptypage가 보여짐 */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
