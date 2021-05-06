import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import NavBar from './components/Nav/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
// import Contact from './pages/Contact';
import Admin from './pages/Admin';
import GlobalStyle from './GlobalStyle';
import { AnimatePresence } from 'framer-motion';
import NavBurger from './components/Nav/NavBurger';
import NavMenu from './components/Nav/NavMenu';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Auth/Login';

const App = () => {
  const [open, setOpen] = useState(false);
  const menuId = 'main-menu';

  return (
    <AuthProvider>
      <DataProvider>
        <div className='App'>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AnimatePresence exitBeforeEnter>
              <Router>
                <NavBar />
                <NavBurger open={open} setOpen={setOpen} aria-controls={menuId} />
                <NavMenu open={open} setOpen={setOpen} id={menuId} />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route path='/portfolio' component={Portfolio} />
                  <Route path='/blogs' component={Blogs} />
                  {/* <Route path='/contact' component={Contact} /> */}
                  <PrivateRoute path='/admin' component={Admin} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </Router>
            </AnimatePresence>
          </ThemeProvider>
        </div>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
