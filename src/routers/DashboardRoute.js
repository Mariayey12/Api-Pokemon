import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Add from '../components/Add';
import Home from '../components/Home';
import List from '../components/List';
import NavBars from '../components/NavBars';
import Search from '../components/Search';
import Pokemon from'../components/pagina/Pokemon'
import {CardPokemon } from '../components/cards/CardPokemon';



const DashboardRoute = () => {
    return (
       
             <>
            <NavBars/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/add" element={<Add/>} />
                    <Route path="/list" element={<List/>} />
                    <Route path="/pokemon" element={<Pokemon/>} />
                    <Route path="/cardpokemon" element={<CardPokemon/>} />
                    <Route path="/search" element={<Search/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </>
    
    );
};

export default DashboardRoute;