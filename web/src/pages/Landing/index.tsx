import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';


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
                <Link to="/study" className="study">
                    <img src={studyIcon} alt="Estudar"/>
                    Estudar
                </Link>

                <Link to="/give-classes" className="give-classes">
                    <img src={giveClassesIcon} alt="Dar Aulas"/>
                    Dar Aulas 
                </Link>
            </div>

        </div>

        </div>
    );
}

export default Landing;