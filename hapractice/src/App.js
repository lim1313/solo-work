import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SideBar from './components/sideBar';
import PicturesAll from './components/picturesAll';
import PicturesShow from './components/picturesShow';
import { useState } from 'react';

function App() {
  const [picUrl, setPicUrl] = useState(['img/img1.png', 'img/img2.jpg']);
  const [pick, setPick] = useState(['img/img1.png']);

  const switchClick = (v) => {
    setPick(v);
  };

  return (
    <>
      <BrowserRouter>
        <SideBar />
        <div>
          <Switch>
            <Route exact path='/'>
              hello
            </Route>
            <Route path='/about'>about</Route>
            <Route path='/picture'>picture</Route>
          </Switch>
        </div>
      </BrowserRouter>
      {picUrl.map((picture) => (
        <PicturesAll switchClick={switchClick} picture={picture} />
      ))}
      <PicturesShow pick={pick} />
    </>
  );
}

export default App;
