"use strict";

import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';

import { MovieListView } from './views/MovieListView';
import { MovieDetailView }   from './views/MovieDetailView';
import { MovieFormView }   from './views/MovieFormView';
import { UserLoginView } from "./views/UserLoginView";
import { UserSignupView } from "./views/UserSignupView";
import { TAManagementView } from "./views/AdminView/TAManagementView";
import { WtaManagementView } from "./views/AdminView/WtaManagementView";
import { ApproveTAView } from "./views/TaView/ApproveTAView";
import { MyOrderView } from "./views/CustomerView/MyOrderView";
import { MyCommentView } from "./views/CustomerView/MyCommentView";
import UserService from "./services/UserService";
import { MyCartView } from "./views/ShoppingView/MyCartView";
import { VisitorManagementView } from "./views/AdminView/VisitorManagementView";
import { AttractionCreateView } from "./views/AdminView/AttractionCreateView";
import { ReportChartView } from "./views/TaView/ReportChartView";
import { ManageTAView } from "./views/TaView/ManageTAView";
import { ManageInventoryView } from "./views/AdminView/ManageInventoryView";
import {AttractionFormView} from "./views/AdminView/AttractionFormView";
import {SearchPageView} from "./views/SearchView/SearchPageView";
import {SearchResultView} from "./views/SearchView/SearchResultView";
import {CasualLookView} from "./views/SearchView/CasualLookView";
import ShoppingService from "./services/ShoppingService";
import {AttractionDetailView} from "./views/SearchView/AttractionDetailView";
import {AddCommentView} from "./views/CustomerView/AddCommentView";


export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: 'DiDoo.com',
            routes: [
                { component: SearchPageView ,  path: '/',exact:true},
                { component: SearchResultView , path: '/searchresult',exact:true},
                { component: CasualLookView, path: '/casuallook',exact: true},
                { component: AttractionDetailView , path: '/attraction/:id'},
                { component: TAManagementView , path: '/admin', exact: true},
                { component: WtaManagementView , path: '/admin/unapproved', exact: true},
                { component: AttractionFormView , path: '/edit/:attractionId', exact: true},
                { component: AttractionCreateView , path: '/add', exact: true},
                { component: ApproveTAView , path: '/ta', exact: true},
                /*{ component: VisitorManagementView , path: '/admin/managevisitor', exact: true},*/
                { component: ReportChartView , path: '/admin/report', exact: true},
                /*{ component: ManageTAView , path: '/ta', exact: true},*/
                { component: ManageInventoryView , path: '/admin/inventory', exact: true},

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
                { component: AddCommentView ,path:'/mycomments/addcomments/:attractionId',exact:true},
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