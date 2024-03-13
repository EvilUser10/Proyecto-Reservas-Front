import React, { useEffect, useState } from "react";
import { listHotels, listHotelsByInput } from "../services/HotelService";

function Browser({ onSearch }) {
    const [inputValue, setInputValue] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          onSearch(inputValue); // Llama a la función de búsqueda del padre con el valor del input
        }
      };

    return (
        <div className="container mw-650px input-group my-4">
            <input type="search" className="form-control rounded" placeholder="Encuentra tus hoteles favoritos" aria-label="Search"
                aria-describedby="search-addon"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown} />
            <button id="searchButton"
             type="button"
             className="btn btn-outline-primary"
             data-mdb-ripple-init
             onClick={() => onSearch(inputValue)}>Buscar</button>
        </div>
    )
}

export default Browser