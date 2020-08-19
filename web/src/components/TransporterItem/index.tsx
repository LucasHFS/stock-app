import React from 'react';

import { Link } from 'react-router-dom';

import editIcon from '../../assets/images/icons/edit.svg';
import transporterProfileIcon from '../../assets/images/icons/truck.svg';

import './styles.css';

interface TransporterItem {
    transporter: {
        id: string;
        name: string;
        cnpj: string;
        telephone: string;
        city_name: string;
        city_uf: string;
        address: string;
        address_number?: string;
        address_district?: string;
    }
}

const  TransporterItem:React.FC<TransporterItem> =  ({ transporter }) => {

    return (
        <article className="teacher-item">
            <header>
                <img src={transporterProfileIcon} alt="Lucas Silva"/>
                <div>
                    <strong>{transporter.name}</strong>
                    <span>{transporter.city_name} - {transporter.city_uf}</span>
                </div>
            </header>

            <p><b>CNPJ:</b> <strong>{transporter.cnpj}</strong></p>
            <p><b>Endereço:</b> <strong>{transporter.address} {transporter.address_number ? 'n° ' + transporter.address_number : null} {transporter.address_district} </strong></p>
            <footer>
                <p>
                    <b>Telefone:</b>
                    <strong>{transporter.telephone}</strong>
                </p>
                <Link to={`/transporter/update?id=${transporter.id}`} >
                    <img src={editIcon} alt="Editar" />
                    Editar
                </Link>
            </footer>
        </article>
    );
}

export default TransporterItem;