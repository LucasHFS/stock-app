import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import plusIcon from '../../assets/images/icons/plus.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
    buttonWords?: string;
    redirectPage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    const history = useHistory();
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <a onClick={() => {history.goBack()}}>
                    <img src={backIcon} alt="Voltar"/>
                </a>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <h1>Stock.io</h1>
                </Link>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                
                {
                    props.buttonWords ? 
                    <Link to={`/${props.redirectPage}/create`} >
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