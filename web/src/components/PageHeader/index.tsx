import React from 'react';

import { Link } from 'react-router-dom';

import plusIcon from '../../assets/images/icons/plus.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
    buttonWords?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <h1>Stock.io</h1>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                
                {
                    props.buttonWords ? 
                    <Link to="/store/create" >
                        <img src={plusIcon} alt="add New"/>
                        {props.buttonWords}
                    </Link>
                 : null
                }
                
            </div>

        </header>
    );
}

export default PageHeader;