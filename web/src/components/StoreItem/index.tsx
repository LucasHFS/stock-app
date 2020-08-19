import React from 'react';

import editIcon from '../../assets/images/icons/edit.svg';
import storeProfileIcon from '../../assets/images/icons/store-alt.svg';

import './styles.css';
import { Link } from 'react-router-dom';

interface StoreItem {
    store: {
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

const  StoreItem:React.FC<StoreItem> =  ({ store }) => {
    return (
        <article className="teacher-item">
            <header>
                <img src={storeProfileIcon} alt="Lucas Silva"/>
                <div>
                    <strong>{store.name}</strong>
                    <span>{store.city_name} - {store.city_uf}</span>
                </div>
            </header>

            <p><b>CNPJ:</b> <strong>{store.cnpj}</strong></p>
            <p><b>Endereço:</b> <strong>{store.address} {store.address_number ? 'n° ' + store.address_number : null} {store.address_district} </strong></p>
            <footer>
                <p>
                    <b>Telefone:</b>
                    <strong>{store.telephone}</strong>
                </p>
                <Link to={`/store/update?id=${store.id}`} >
                    <img src={editIcon} alt="Editar" />
                    Editar
                </Link>
            </footer>
        </article>
    );
}

export default StoreItem;