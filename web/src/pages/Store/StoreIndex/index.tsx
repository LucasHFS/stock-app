import React from 'react';

import StoreItem from '../../../components/StoreItem';
import PageHeader from '../../../components/PageHeader';


import './styles.css';

function Stores() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Lojas" buttonWords="Nova Loja" />
            <main>
                <StoreItem />
                <StoreItem />
                <StoreItem />
                <StoreItem />
            </main>
        </div>
    )
}

export default Stores;