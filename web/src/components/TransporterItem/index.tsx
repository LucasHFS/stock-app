import React from 'react';

import editIcon from '../../assets/images/icons/edit.svg';
import storeProfileIcon from '../../assets/images/icons/store-alt.svg';

import './styles.css';

function TransporterItem() {
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
                <button type="button">
                    <img src={editIcon} alt="Whatsapp" />
                    Editar
                </button>
            </footer>
        </article>
    );
}

export default TransporterItem;