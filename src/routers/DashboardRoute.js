import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Listar from '../components/Listar';
import NavBars from '../components/NavBars';
import Search from '../components/Search';
import Pokemon from'../components/pagina/Pokemon'
import {Item} from '../components/cards/Item';
import {CardPokemon } from '../components/cards/CardPokemon';
import Agregar from '../components/Agregar';
import Form from '../components/form';


const DashboardRoute = () => {
    return (
       
             <>
            <NavBars/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/add" element={<Agregar/>} />
                    <Route path="/list" element={<Listar/>} />
                    <Route path="/pokemon" element={<Pokemon/>} />
                    <Route path="/cardpokemon" element={<CardPokemon/>} />
                    <Route path="/item" element={<Item />} />
                    <Route path="/form" element={<Form/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </>
    
    );
};

export default DashboardRoute;