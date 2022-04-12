import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Tests from "./Apicall/Tests";
import Show from "./showpage/Show";

//import {Switch} from "react-router-dom";


function App() {
    return (
        <>
        <Router >
            <Switch>
                <Route path='/' exact component={Tests}/>
                <Route path='/show' exact component={Show}/>
                <Route path="*" element={Tests}/>
            </Switch>
        </Router>
        </>
    );
}

export default App;
