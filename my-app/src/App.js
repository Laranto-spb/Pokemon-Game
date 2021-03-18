import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';
import AboutPage from "./routes/AboutPage";
import ContactPage from "./routes/ContactPage";
import NotFound from './routes/NotFound';
import MenuHeader from "./components/MenuHeader";
import {useRouteMatch, Route, Switch} from "react-router-dom";
import cn from 'classnames';
import s from './App.module.css';
import Footer from "./components/Footer";

const App = () => {
    const match = useRouteMatch('/');
    return (
        <Switch>
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact}/>
                    <div className={cn(s.wrap, {[s.isHome]: match.isExact})}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    <Footer/>
                </>

            </Route>

        </Switch>
    )


}

export default App;