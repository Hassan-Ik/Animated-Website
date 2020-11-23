import { Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Redirect to="/"></Redirect>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
