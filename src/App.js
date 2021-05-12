import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './components/Landing.js';
import Contact from './components/Contact.js';
import MakeProp from './pages/MakeProp.js';
import Profile from  './components/Profile.js';
import Footer from './components/Footer.js';
import PropViewer from './components/PropViewer.js';
import AllProposals from './pages/AllProposals';

export default function App() {
  return (
      <Router>
        <Nav />        
          <Switch>
    {/* OK*/} <Route exact path="/" component={Landing} />
    {/* OK*/} <Route exact path="/contacto" component={Contact}/>
              <Route exact path="/crear-propuesta" component={MakeProp} />
    {/* OK*/} <Route exact path="/perfil/propuestas" component={Profile} />
    {/* OK*/} <Route exact path="/propuestas/:id" component={PropViewer} />
    {/* OK*/} <Route exact path="/all" component={AllProposals} />
          </Switch>
        <Footer avoid={["contacto","crear-propuesta"]}/>
      </Router>
  );
}

