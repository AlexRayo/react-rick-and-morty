import React from 'react';

const SearchBar = ({query, setQuery}) => {
    return (
        <div>
            <input className="form-control my-5 search-bar mx-auto" placeholder="Type some name to find more about it..." type="text" value={query} onChange={(event) => setQuery(event.target.value)}/>
        </div>
    );
}

export default SearchBar;

//Other way to do the same
// import React, {useState} from 'react';

// const SearchBar = ({setQuery}) => {
//     const [text, setText] = useState('');
//     function onChange(q){
//         setText(q)
//         setQuery(q)
//     }
    
//     return (
//         <div>
//             <input className="form-control my-5" placeholder="Type some name to find more about it..." type="text" value={text} onChange={(e) => onChange(e.target.value)}/>
//         </div>
//     );
// }

// export default SearchBar;