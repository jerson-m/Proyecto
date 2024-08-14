// import React from "react";

// function Cards() {
//     return(
//         <div className="flex space-x-8 justify-center">
//         <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 p-4">
//           <a>
//             <img className="rounded-t-lg text-center" src="https://i.pinimg.com/236x/18/61/c7/1861c723f25ddd7d6de3bbda6c65fad7.jpg" alt />
//           </a>
//           <div className="p-5">
//             <a>
//               <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Especificaciones</h5>
//             </a>
//             <p className="mb-1 font-normal text-gray-700 dark:text-black">Matricula: azj189</p>
//             <p className="mb-2 font-normal text-gray-700 dark:text-black">Capacidad: 8000Kg</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-black">Consumo:45 kilómetros - galón</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-black" id="c1">Estado: Disponible</p>
//             <label htmlFor="small-input" className="block mb-1 text-sm font-normal text-gray-700 dark:text-black">Carga</label>
//             <input type="text" id="carga4" className="mb-2 w-full p-2 text-black border border-gray-300 rounded-lg bg-white text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//             <form>
//               <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onclick="verificar()">Cargar</button>
//               <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" onclick="Descargar()">Descargar</button>
//             </form>
//           </div>
//         </div>
      
//         <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 p-4">
//           <a>
//             <img className="rounded-t-lg text-center" src="https://i.pinimg.com/236x/18/61/c7/1861c723f25ddd7d6de3bbda6c65fad7.jpg" alt />
//           </a>
//           <div className="p-5">
//             <a>
//               <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Especificaciones</h5>
//             </a>
//             <p className="mb-1 font-normal text-gray-700 dark:text-black">Matricula: gsj643</p>
//             <p className="mb-2 font-normal text-gray-700 dark:text-black">Capacidad: 23000Kg</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-black">Consumo:30 kilómetros - galón</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-black" id="c2">Estado: Disponible</p>
//             <label htmlFor="small-input" className="block mb-1 text-sm font-normal text-gray-700 dark:text-black">Carga</label>
//             <input type="text" id="carga4" className="mb-2 w-full p-2 text-black border border-gray-300 rounded-lg bg-white text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//             <form>
//               <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onclick="verificarc2()">Cargar</button>
//               <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" onclick="Descargar2()">Descargar</button>
//             </form>
//           </div>
//         </div>
      
//         <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 p-4">
//           <a>
//             <img className="rounded-t-lg text-center" src="https://i.pinimg.com/236x/18/61/c7/1861c723f25ddd7d6de3bbda6c65fad7.jpg" alt />
//           </a>
//           <div className="p-5">
//             <a>
//               <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Especificaciones</h5>
//             </a>
//             <p className="mb-1 font-normal text-gray-700 dark:text-black">Matricula: ljl221</p>
//             <p className="mb-2 font-normal text-gray-700 dark:text-black">Capacidad: 30500Kg</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-black">Consumo:23 kilómetros - galón</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-black" id="c3">Estado: Disponible</p>
//             <label htmlFor="small-input" className="block mb-1 text-sm font-normal text-gray-700 dark:text-black">Carga</label>
//             <input type="text" id="carga4" className="mb-2 w-full p-2 text-black border border-gray-300 rounded-lg bg-white text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//             <form>
//               <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onclick="verificarc3()">Cargar</button>
//               <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" onclick="Descargar3()">Descargar</button>
//             </form>
//           </div>
//         </div>
      
//         <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 p-4">
//           <a>
//             <img className="rounded-t-lg text-center" src="https://i.pinimg.com/236x/18/61/c7/1861c723f25ddd7d6de3bbda6c65fad7.jpg" alt />
//           </a>
//           <div className="p-5">
//             <a>
//               <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Especificaciones</h5>
//             </a>
//             <p className="mb-1 font-normal text-gray-700 dark:text-black">Matricula: akj990</p>
//             <p className="mb-2 font-normal text-gray-700 dark:text-black">Capacidad: 40000Kg</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-black">Consumo:15 kilómetros - galón</p>
//             <p className="mb-3 font-normal text-gray-700 dark:text-black" id="c4">Estado: Disponible</p>
//             <label htmlFor="small-input" className="block mb-1 text-sm font-normal text-gray-700 dark:text-black">Carga</label>
//             <input type="text" id="carga4" className="mb-2 w-full p-2 text-black border border-gray-300 rounded-lg bg-white text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
//             <form>
//               <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onclick="verificarc4()">Cargar</button>
//               <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" onclick="Descargar4()">Descargar</button>
//             </form>
//           </div>
//         </div>
//       </div>
      


//     );
// }

// export default Cards;
import React, { useEffect, useState } from "react";

function Cards({ suggestedWeight }) {
    const [trucks, setTrucks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/trucks")
            .then(response => response.json())
            .then(data => setTrucks(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const filteredTrucks = trucks.filter(truck => truck.capacidad >= suggestedWeight);

    return (
        <div className="flex space-x-8 justify-center">
            {filteredTrucks.length === 0 ? (
                <p className="text-gray-700 dark:text-black">No hay camiones disponibles para esta carga.</p>
            ) : (
                filteredTrucks.map((truck) => (
                    <div key={truck.id} className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700 p-4">
                        <a>
                            <img className="rounded-t-lg text-center" src="https://i.pinimg.com/236x/18/61/c7/1861c723f25ddd7d6de3bbda6c65fad7.jpg" alt="Camión"/>
                        </a>
                        <div className="p-5">
                            <a>
                                <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Especificaciones</h5>
                            </a>
                            <p className="mb-1 font-normal text-gray-700 dark:text-black">Matricula: {truck.matricula}</p>
                            <p className="mb-2 font-normal text-gray-700 dark:text-black">Capacidad: {truck.capacidad}Kg</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black">Consumo: {truck.consumo}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-black">Estado: {truck.estado}</p>
                            <label htmlFor="small-input" className="block mb-1 text-sm font-normal text-gray-700 dark:text-black">Carga</label>
                            <input type="text" id="carga4" className="mb-2 w-full p-2 text-black border border-gray-300 rounded-lg bg-white text-xs focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <form>
                                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Cargar</button>
                                <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">Descargar</button>
                            </form>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cards;

