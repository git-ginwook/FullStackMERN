// import data
import stores from './data/stores.js';
import items from './data/items.js';

// import CSS style
import './App.css';

// import dependenciees
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import components
import Navigation from './components/nav.js';

// import pages
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import StoresPage from './pages/StorePage';

function App() {  

  return (
    <div className="App">
      <Router>
        {/* header with page title and a brief description */}
        <header className="App-header">
          <h1>Grocery Online</h1>
          <p>Order your groceries online</p>
        </header>
        
        {/* page navigation component */}
        <Navigation />
        
        {/* import different pages passing parameters as needed */}
        <main>
          <article className="App-article">
            <Route path="/" exact><HomePage /></Route>
            <Route path="/stores"><StoresPage stores={stores} /></Route>
            <Route path="/order"><OrderPage items={items} /></Route>
          </article>
        </main>

        {/* footer with a copyright statement */}
        <footer>
          <p><cite>&copy; 2022 GinWook Lee</cite></p>
        </footer>

      </Router>
    </div>
  );
}

export default App;
