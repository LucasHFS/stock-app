import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Transporters from './pages/Transporter';
import StoreIndex from './pages/Store/StoreIndex';
import StoreCreate from './pages/Store/StoreCreate';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />
            <Route path="/transporter" component={Transporters} exact />
            <Route path="/store" component={StoreIndex} exact />
            <Route path="/store/create" component={StoreCreate} exact />
        </BrowserRouter>
    );
}

export default Routes;