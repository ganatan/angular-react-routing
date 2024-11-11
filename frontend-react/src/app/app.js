import './app.css';
import React from 'react';
import AppRouting from './app-routing';
import { Link } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.title = 'react-routing';
    this.footerUrl = 'https://www.ganatan.com';
    this.footerLink = 'www.ganatan.com';
  }

  render() {
    return (
      <div className="app">
        <header>
          <section>
            <h1>{this.title}</h1>
          </section>
          <nav>
            <h2>4 Links with Routes</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
            <h3>1 Link with Child Routes</h3>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <h4>Routes Result</h4>
          <AppRouting />
        </main>
        <footer>
          <a href="{ this.footerUrl }">{this.footerLink}</a>
        </footer>
      </div>
    )
  }

}


export default App;
