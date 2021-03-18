import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import NotFound from './routes/NotFound';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {

  return (
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/game" component={GamePage}/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/contact" component={ContactPage}/>
              <Route component={NotFound}/>
          </Switch>
      </BrowserRouter>
  )


}

export default App;