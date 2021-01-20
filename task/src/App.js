import React  from 'react'
import Navbar from "./components/Navbar/Nav";
import People from "./components/SameComponents/People/People";
import Planets from "./components/SameComponents/Planets/Planets";
import Starships from "./components/SameComponents/Starships/Starships";
import Main from './components/Main/Main';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const routes = [
    {
        path: "/main",
        component: Main,
    },
    {
        path: "/people",
        component: People,
    },
    {
        path: "/planets",
        component: Planets
    },
    {
        path: "/starships",
        component: Starships
    }
]

function App() {
  return (
    <Router className="App">
        <Navbar/>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/main"/>}/>
            {routes.map((r, i) => (
                <Route key={i} exact path={r.path} component={r.component}/>
            ))}
        </Switch>
    </Router>
  );
}

export default App;
