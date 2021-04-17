import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { DataProvider } from './DataContext';
import NavBar from './components/Nav/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import GlobalStyle from './GlobalStyle';
import { AnimatePresence } from 'framer-motion';
import NavBurger from './components/Nav/NavBurger';
import NavMenu from './components/Nav/NavMenu';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const [open, setOpen] = useState(false);
  const menuId = 'main-menu';
  console.log(open);
  return (
    <DataProvider>
      <div className='App'>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AnimatePresence exitBeforeEnter>
            <NavBar />
            <NavBurger open={open} setOpen={setOpen} aria-controls={menuId} />
            <NavMenu open={open} setOpen={setOpen} id={menuId} />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/portfolio' exact component={Portfolio} />
              <Route path='/blogs' exact component={Blogs} />
              <Route path='/contact' exact component={Contact} />
            </Switch>
          </AnimatePresence>
        </ThemeProvider>
      </div>
    </DataProvider>
  );
};

export default App;
