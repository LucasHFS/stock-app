import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import landingImg from '../../assets/images/landing.png';

import storeIcon from '../../assets/images/icons/store.svg';
import transporterIcon from '../../assets/images/icons/truck-moving.svg';


function Landing() {

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <h1>Stock.io</h1>
                </div>

                <img 
                    src={landingImg} 
                    alt="Plataforma de Estudos" 
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/store" className="stores">
                        <img src={storeIcon} alt="Lojas"/>
                        Lojas
                    </Link>

                    <Link to="/transporter" className="transporters">
                        <img src={transporterIcon} alt="Transportadoras"/>
                        Transportadoras
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default Landing;