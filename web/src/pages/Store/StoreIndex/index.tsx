import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import StoreItem from '../../../components/StoreItem';
import PageHeader from '../../../components/PageHeader';


import './styles.css';

function Stores() {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        api.get('stores').then(response => {
            setStores(response.data)
        }).catch(error => {
            console.log(error)
            alert('Um erro inesperado ocorreu!');
        });
        
    }, [stores])

    return (
        <div id="page-store-list" className="container">
            <PageHeader title="Lojas" redirectPage="store" buttonWords="Nova Loja" />
            <main>
                {stores.map(store => (
                    <StoreItem store={store} />
                ))}
            </main>
        </div>
    )
}

export default Stores;