import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/blogs' exact component={Blogs} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </div>
  );
};

export default App;