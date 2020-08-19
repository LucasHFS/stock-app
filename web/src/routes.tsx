import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TransportersIndex from './pages/Transporter/TransporterIndex';
import TransportersCreate from './pages/Transporter/TransporterCreate';
import StoreIndex from './pages/Store/StoreIndex';
import StoreCreate from './pages/Store/StoreCreate';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/transporter" component={TransportersIndex} exact />
            <Route path="/transporter/create" component={TransportersCreate} exact />
            <Route path="/transporter/update" component={TransportersCreate} exact />
            <Route path="/store" component={StoreIndex} exact />
            <Route path="/store/create" component={StoreCreate} exact />
            <Route path="/store/update" component={StoreCreate}  />
        </BrowserRouter>
    );
}

export default Routes;