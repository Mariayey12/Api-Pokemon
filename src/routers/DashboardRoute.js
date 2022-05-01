import React from 'react';
import cards  from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import Add from '../components/Add';
import Pokemon from '../components/pagina/Pokemon.js';
import Home from '../components/Home';
import List from '../components/List';
import NavBars from '../components/NavBars';
import Search from '../components/Search';
import { Cards } from '../components/cards/Cards';
import { CardPokemon } from '../components/cards/CardPokemon';



const DashboardRoute = () => {
    return (
       
             <>
            <NavBars/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/add" element={<Add/>} />
                    <Route path="/list" element={<List/>} />
                    <Route path="/cards" element={<CardPokemon/>} />
                    <Route path="/cards" element={<Cards/>} />
                    <Route path="/pokemon" element={<Pokemon/>} />
                    <Route path="/search" element={<Search/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </>
    
    );
};

export default DashboardRoute;