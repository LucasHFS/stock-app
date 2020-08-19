import React from 'react';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import editIcon from '../../assets/images/icons/edit.svg';
import storeProfileIcon from '../../assets/images/icons/store-alt.svg';
import trashIcon from '../../assets/images/icons/trash.svg';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

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

    const history = useHistory();

    function handleDelete(id: string) {
        api.delete(`stores/${id}`).then(response => {
            alert('Loja Excluída');
        }).catch(err => {
            console.log(err);
            alert('Um erro inesperado ocorreu');
        })
    }

    const submit = (id: string) => {
        confirmAlert({
            customUI: ({ onClose }) => {
              return (
                <div className='custom-ui'>
                  
                  <h1>Deseja excluír essa loja?</h1>

                  
                  <div>
                    <button
                        onClick={() => {
                            handleDelete(id);
                        onClose();
                        }}
                    >
                        Sim
                    </button>
                    <button onClick={onClose}>Não</button>
                  </div>
                </div>
              );
            }
          });
      };

    return (
        <article className="teacher-item">
            <header>
                <div className="first">
                    <img src={storeProfileIcon} alt="Lucas Silva"/>
                    <div className="second">
                        <strong>{store.name}</strong>
                        <span>{store.city_name} - {store.city_uf}</span>
                    </div>
                </div>
                <button onClick={() => {submit(store.id)}}>
                    <img src={trashIcon} className="delete" alt="Excluir"/>
                </button>
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