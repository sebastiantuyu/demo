import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./pages/Landing.js";
import Contact from "./pages/Contact.js";
import MakeProp from "./pages/MakeProp.js";
import Profile from "./pages/Profile.js";
import AllProposals from "./pages/AllProposals";
import PropViewer from "./components/PropViewer.js";
import Footer from "./components/Footer.js";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/crear-propuesta" component={MakeProp} />
        <Route exact path="/perfil/propuestas" component={Profile} />
        <Route exact path="/propuestas/:id" component={PropViewer} />
        <Route exact path="/all" component={AllProposals} />
      </Switch>
      <Footer avoid={["contacto", "crear-propuesta"]} />
    </Router>
  );
}
