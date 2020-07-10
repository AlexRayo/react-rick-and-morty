import React from 'react';
import CharItem from './CharItem.js'

const CharactersGrid = ({chars, isLoading}) => {
    return isLoading ?  (       
        <h2 className="text-center text-center display-1">LOADING...</h2>
    ) 
    : ( chars ? (
        <div className="col col-12 d-flex flex-wrap">
        {chars.map((char)=>
            <CharItem key={char.id} char={char}></CharItem>
        )}            
        </div>
        ): (
        <h2 className="text-center">The character doesn't exist :/</h2>
        ) 
    );
}

export default CharactersGrid;
