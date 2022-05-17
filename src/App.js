import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ListUserComponent from "./components/ListUserComponent";
import HeaderComponent from "./components/HeaderComponent";
import AddUserComponent from "./components/AddUserComponent";
import MainStatic from "./components/MainStatic";
import indexstyle from './css/indexstyle.css';
import style from './css/style.css';
import regstyle from './css/regstyle.css';


function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className= "">
                    <Switch>
                        <Route exact path = "/registration" component = {ListUserComponent}></Route>
                        <Route path = "/users" component = {ListUserComponent}></Route>
                        <Route path = "/add-user" component = {AddUserComponent} ></Route>
                        <Route path = "/edit-user/:id" component = {AddUserComponent}></Route>
                        <Route path = "/" component = {MainStatic}></Route>
                    </Switch>
                </div>

            </Router>
        </div>
    );
}

export default App;
