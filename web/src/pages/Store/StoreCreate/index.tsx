import React, { useState, FormEvent, useEffect, ChangeEvent } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import api from '../../../services/api';
import axios from 'axios';

import Input from '../../../components/Input';


import warningIcon from '../../../assets/images/icons/warning.svg';

import './styles.css';
import PageHeader from '../../../components/PageHeader';

function StoreController() {
    
    
    useEffect(() => {
        
    }, [])
    
    const history = useHistory();
    
    interface IBGEUFResponse{
        sigla: string;
    }
    
    interface IBGECityResponse{
        nome: string;
    }
    
    const location = useLocation();

    const [headerTitle, setHeaderTitle] = useState('');
    const [isCreate, setIsCreate] = useState(true);

    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [address_number, setAddress_number] = useState('');
    const [address_district, setAddress_district] = useState('');
    
    const [ ufs, setUfs] = useState<string[]>([]);
    const [ cities, setCities] = useState<string[]>([]);
    const [ selectedUf, setSelectedUf] = useState<string>('0');
    const [ selectedCity, setSelectedCity] = useState<string>('0');
    
    function handleCreateStore(e: FormEvent){
        e.preventDefault();
        
        if(isCreate){
            api.post('stores', {
                name,
                cnpj,
                telephone,
                address,
                address_number,
                address_district,
                uf: selectedUf,
                city: selectedCity,
            }).then(() => {
                alert('Cadastro realizado com sucesso!');
                history.push('/store');
            }).catch(error => {
                alert('Erro no cadastro!');
            });
        } else{
            const city_id = location.search.split('=')[1]
            api.put(`stores/${city_id}`, {
                name,
                cnpj,
                telephone,
                address,
                address_number,
                address_district,
                uf: selectedUf,
                city: selectedCity,
            }).then(() => {
                alert('Loja atualizada com sucesso!');
                history.push('/store');
            }).catch(error => {
                alert('Erro na atualização!');
            });
        }
    }
    
    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome').then(response => {
            const ufInitials = response.data.map(uf => uf.sigla)
            setUfs(ufInitials);
        });
    }, []);
    
    useEffect(() => {
        
        if(selectedUf === '0'){
            return;
        }
        
        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios?orderBy=nome`).then(response => {
            const cityNames = response.data.map(city => city.nome)
            setCities(cityNames);
        });
        
    }, [selectedUf]);
    
    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>){
        const uf = event.target.value;
        setSelectedUf(uf);
    }
    
    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>){
        const city = event.target.value;
        setSelectedCity(city);
    }
    
    useEffect(() => {
        const id = location.search.split('=')[1];
        if(id){
            api.get(`stores/${id}`).then(response =>{
                setName(response.data.name);
                setCnpj(response.data.cnpj);
                setTelephone(response.data.telephone);
                setAddress(response.data.address);
                setAddress_number(response.data.address_number);
                setAddress_district(response.data.address_district);
                setSelectedUf(response.data.city_uf);
                setSelectedCity(response.data.city_name);
                setHeaderTitle('Atualizar Loja');
                setIsCreate(false);
            })
            .catch(err => {
                console.log(err);
                alert('Um erro Inesperado ocorreu!');
            });
        } else{
            setIsCreate(true);
            setHeaderTitle('Criar Loja');
        }
    }, []);


    return (
        <div id="page-teacher-form" className="container">
            < PageHeader title={headerTitle}/>
            <main>
                <form onSubmit={handleCreateStore}>
                    <fieldset>
                        <legend>Loja</legend>
                        <Input 
                            name="name" 
                            label="Nome" 
                            value={name} 
                            onChange={(e) => {setName(e.target.value)}}
                            required
                        />
                        <Input 
                            name="cnpj" 
                            label="Cnpj"
                            value={cnpj} 
                            onChange={(e) => {setCnpj(e.target.value)}}
                            required
                            />
                        <Input 
                            name="telephone" 
                            label="Telefone"
                            value={telephone} 
                            onChange={(e) => {setTelephone(e.target.value)}}
                            required
                        />
                        
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>

                                <label htmlFor="uf">Estado (UF)</label>
                                <select 
                                    name="uf" 
                                    id="uf" 
                                    onChange={handleSelectUf} 
                                    value={selectedUf}
                                    required
                                >
                                    <option value="0">Selecione uma UF</option>
                                    {ufs.map(uf => (
                                    <option key={uf} value={uf}>{uf}</option>
                                    ))}
                                </select>

                                <label htmlFor="city">Cidade</label>
                                <select 
                                    name="city"
                                    id="city"
                                    value={selectedCity}
                                    onChange={handleSelectCity}
                                    required
                                >
                                    <option value="0">Selecione uma Cidade</option>
                                    {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>

                        <Input 
                            name="address" 
                            label="Rua"
                            value={address} 
                            required
                            onChange={(e) => {setAddress(e.target.value)}}
                        />

                        <Input 
                            name="address_number" 
                            label="Número"
                            value={address_number} 
                            onChange={(e) => {setAddress_number(e.target.value)}}
                        />

                        <Input 
                            name="address_district" 
                            label="Bairro"
                            value={address_district} 
                            onChange={(e) => {setAddress_district(e.target.value)}}
                        />

                        
                        
                    </fieldset>


                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br/>
                            Preencha todos os dados
                        </p>

                        <button type="submit">
                            Salvar Cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default StoreController;