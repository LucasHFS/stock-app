import React from 'react';

import { Link } from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import editIcon from '../../assets/images/icons/edit.svg';
import transporterProfileIcon from '../../assets/images/icons/truck.svg';
import trashIcon from '../../assets/images/icons/trash.svg';

import './styles.css';
import api from '../../services/api';

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

    function handleDelete(id: string) {
        api.delete(`transporters/${id}`).then(response => {
            alert('Transportadora Excluída');
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
                  
                  <h1>Deseja excluír essa transportadora?</h1>
                  
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
                    <img src={transporterProfileIcon} alt="Lucas Silva"/>
                    <div className="second">
                        <strong>{transporter.name}</strong>
                        <span>{transporter.city_name} - {transporter.city_uf}</span>
                    </div>
                </div>
                <button onClick={() => {submit(transporter.id)}}>
                    <img src={trashIcon} className="delete" alt="Excluir"/>
                </button>
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