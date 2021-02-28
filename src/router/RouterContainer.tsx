import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Signin from '../pages/Signin/Signin';
import Signup from '../pages/Signup/Signup';

const RouterContainer = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </BrowserRouter>
  );
};
export default RouterContainer;
