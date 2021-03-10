import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      {/* Home */}
      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/search'>
            <SearchPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
      
        {/* Banner -> search page */}
          {/* Search */}
        {/* Cards */}
        {/* Footer */}

      {/* Search Page */}
        {/* Header */}
        {/* ... */}
    </div>
  );
}

export default App;
