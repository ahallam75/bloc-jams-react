import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link to='/' id="Landing-link">Main Page</Link>
            <Link to='/library' id="Library-link">Library</Link>
          </nav>
         <h1 id="title">Bloc Jams</h1>
       </header>
       <main>
         <Route exact path="/" component={Landing} />
         <Route path="/library" component={Library} />
         <Route path="/album/:slug" component={Album} />
       </main>
      </div>
    );
  }
}

export default App;
