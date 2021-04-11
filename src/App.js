import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DataProvider } from './DataContext';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import GlobalStyle from './GlobalStyle';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <DataProvider>
      <div className='App'>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/portfolio' exact component={Portfolio} />
            <Route path='/blogs' exact component={Blogs} />
            <Route path='/contact' exact component={Contact} />
          </Switch>
        </AnimatePresence>
      </div>
    </DataProvider>
  );
};

export default App;
