import { BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom';
import Nav from './components/Nav';
import Landing from './components/Landing.js';
import Contact from './components/Contact.js';
import MakeProp from './components/MakeProp.js';
import Profile from  './components/Profile.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
      <Router>
        <Nav />        
          <Switch>
              <Route exact path="/" component={Landing} />
              {/* Agregar TODAS las propuestas seccion*/}
              <Route exact path="/crear-propuesta" component={MakeProp} />
              <Route exact path="/perfil/propuestas" component={Profile} />
              <Route exact path="/contacto" component={Contact}/>
          </Switch>
        <Footer avoid={"/contacto"}/>
      </Router>
  );
}

