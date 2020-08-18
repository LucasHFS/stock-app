import React from 'react';

import editIcon from '../../assets/images/icons/edit.svg';
import storeProfileIcon from '../../assets/images/icons/store-alt.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function StoreItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src={storeProfileIcon} alt="Lucas Silva"/>
                <div>
                    <strong>Lucas's Store</strong>
                    <span>Anápolis - GO</span>
                </div>
            </header>

            <p><b>CNPJ:</b> <strong>34.186.342/0001-60</strong></p>
            <p><b>Endereço:</b> <strong>Rua a Lote X, </strong></p>
            <footer>
                <p>
                    <b>Telefone:</b>
                    <strong>(62) 99332-8319</strong>
                </p>
                <Link to="/store/create">
                    <img src={editIcon} alt="Whatsapp" />
                    Editar
                </Link>
            </footer>
        </article>
    );
}

export default StoreItem;