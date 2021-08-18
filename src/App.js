import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>

      <Footer>
        <p>
          Disney+ Clone |{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/doums85/disney-plus-clone">
            Mamadou Seck
          </a>{' '}
        </p>
      </Footer>
    </div>
  );
}


const Footer = styled.footer`
  position: relative;
  margin: 0;
  padding: 75px 0 5px;
  text-align: center;
  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    background: url('/images/home-background.png') center center / cover
    no-repeat fixed;
    z-index: -1;
  }
  a {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    padding: 10px 0 5px;
  }
  `;


  export default App;
