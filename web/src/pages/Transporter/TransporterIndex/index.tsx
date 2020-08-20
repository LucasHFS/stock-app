import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import TransporterItem from '../../../components/TransporterItem';
import PageHeader from '../../../components/PageHeader';



import './styles.css';

function StoreIndex() {
    const [transporters, setTransporters] = useState([]);

    useEffect(() => {
        api.get('transporters').then(response => {
            setTransporters(response.data)
        }).catch(error => {
            console.log(error)
            alert('Um erro inesperado ocorreu!');
        });
        
    }, [transporters])

    return (
        <div id="page-transporter-list" className="container">
            <PageHeader title="Transportadoras" redirectPage='transporter' buttonWords="Cadastrar" />
            <main>
                {transporters.map(store => (
                    <TransporterItem transporter={store} />
                ))}
            </main>
        </div>
    )
}

export default StoreIndex;