// import React from "react";

// function Header() {
//     return(
//         <div class="mt-5 flex justify-center mb-10%">
//         <form>   
//             <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Sugerencia</label>
//             <div class="relative flex items-center">
//                 <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
//                     <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//                     </svg>
//                 </div>
//                 <input type="search" id="sug" class="block w-80 p-2 px-4 ps-10 text-sm text-white bg-gray-900 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Ingrese el peso a cargar"/>
//                 <button type="button" onclick="sugerir()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2">Sugerir</button>
//             </div>
//         </form>
//     </div>
//     );
// }

// export default Header;
import React, { useState } from "react";

function Header({ onSugerir }) {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSugerir = () => {
        onSugerir(inputValue);
    };

    return (
        <div className="mt-5 flex justify-center mb-10%">
            <form>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Sugerencia</label>
                <div className="relative flex items-center">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="sug"
                        className="block w-80 p-2 px-4 ps-10 text-sm text-white bg-gray-900 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ingrese el peso a cargar"
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        onClick={handleSugerir}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
                    >
                        Sugerir
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Header;

