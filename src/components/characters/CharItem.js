import React from 'react';

const CharItem = ({char}) => {
    return (
        <div className="mt-4 col-12 col-sm-6 col-md-4 col-lg-3 px-2 px-md-0 mx-auto align-self-end overflow-hidden">

            <div className="position-relative m-0 m-md-2">

            <h4 className="text-center align-self-end bg-purple-700 text-white">{char.name}</h4>

                <div className="w-100 h-100 bg-purple-700 position-absolute opacity-0 opacity-hover-09 text-white d-flex justify-content-center align-items-center transition">
                    <ul>
                        <li><b>Status:</b> {char.status}</li>
                        <li><b>Species:</b> {char.species}</li>
                        <li><b>Gender:</b> {char.gender}</li>
                        <li><b>Origin:</b> {char.origin.name}</li>
                        <li><b>Location:</b> {char.location.name}</li>
                        {char.type ? <li><b>Type:</b> {char.type}</li>:''}
                    </ul>
                </div>
                <div><img src={char.image} width="100%" alt="img" loading="lazy"></img></div>                  
                
            </div>
            
        </div>
    );
}

export default CharItem;
