import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Myinfo from './components/myinfo';
import Nav from './components/nav';
import Home from './components/home';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function App({ httpService }) {
  const [login, setLogin] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  let history = useHistory();

  const isLogin = (data) => {
    setLogin(data);
    if (data) {
      history.push('/myinfo');
    } else {
      history.push('/login');
    }
  };

  const accessTokenHandler = (data) => {
    setAccessToken(data);
  };

  // const createAccessToken = (data) => {
  //   setAccessToken(data);
  // };

  return (
    <>
      <Nav login={login} />
      <Switch>
        <Route exact path='/'>
          <Home login={login} />
        </Route>
        <Route path='/login'>
          <Login
            httpService={httpService}
            isLogin={isLogin}
            // createAccessToken={createAccessToken}
            accessTokenHandler={accessTokenHandler}
          />
        </Route>
        <Route path='/signup'>
          <Signup httpService={httpService} />
        </Route>
        <Route path='/myinfo'>
          <Myinfo
            accessToken={accessToken}
            httpService={httpService}
            accessTokenHandler={accessTokenHandler}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
