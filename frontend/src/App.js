"use strict";

import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';

import { MovieListView } from './views/MovieListView';
import { MovieDetailView }   from './views/MovieDetailView';
import { MovieFormView }   from './views/MovieFormView';
import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";
import { TAManagementView } from "./views/AdminView/TAManagementView";
import { ApproveTAView } from "./views/AdminView/ApproveTAView";
import { MyOrderView} from "./views/CustomerView/MyOrderView";
import {MyCommentView} from "./views/CustomerView/MyCommentView";
import UserService from "./services/UserService";
import {MyCartView} from "./views/ShoppingView/MyCartView";


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'DiDoo.com',
            routes: [
                { component: TAManagementView , path: '/admin', exact: true},
                { component: ApproveTAView , path: '/admin/approveta', exact: true},
                /*{ render: (props) => {
                        if(UserService.isAuthenticated() && UserService.getCurrentUser().isAdmin) {
                            return (<AdminView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/admin', exact: true},*/
                { component: MovieListView , path: '/', exact: true},
                { component: MyOrderView , path: '/myorder',exact: true},
                { component: MyCommentView , path: '/mycomments',exact: true},

                { component: MovieDetailView , path: '/show/:id'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<MovieFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }} , path: '/edit/:id'},
                { render: (props) => {
                        if(UserService.isAuthenticated()) {
                            return (<MovieFormView {... props} />)
                        }
                        else {
                            return (<Redirect to={'/login'}/>)
                        }}, path: '/add',},
                { component: UserLoginView, path: '/login'},
                { component: UserSignupView, path: '/register'},
                { component: MyCartView, path: '/mycart'}
            ]
        };
    }

    componentDidMount(){
        document.title = this.state.title;
    }

    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        {this.state.routes.map((route, i) => (<Route key={i} {...route}/>) )}
                    </Switch>
                </Router>
            </div>
        );
    }
}