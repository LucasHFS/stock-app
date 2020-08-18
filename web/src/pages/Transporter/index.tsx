import React from 'react';

import TransporterItem from '../../components/TransporterItem';
import PageHeader from '../../components/PageHeader';


import './styles.css';

function Transporters() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Transportadoras" buttonWords="Cadastrar" />
            <main>
                <TransporterItem />
                <TransporterItem />
                <TransporterItem />
                <TransporterItem />
            </main>
        </div>
    )
}

export default Transporters;