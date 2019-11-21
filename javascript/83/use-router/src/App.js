import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import ContactUs from './ContactUs';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter >
      <div>
        <h1>PCS Amazing App</h1>
        <Navbar />
        <hr />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route render={() => <h1 style={{ color: 'red' }}>No such page. Please try again</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
