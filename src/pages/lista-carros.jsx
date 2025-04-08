import Navbar from "../components/Navbar";
import { useState } from "react";

const ListaCarros = () => {
    const [showCars, setShowCars] = useState(false);

    const DataCarros = async (e) => {
        e.preventDefault();
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ Authentication: '123456dfdfdf545f45d4f5d4fd1f11d' })
            };
            const response = await fetch('https://carros-electricos.wiremockapi.cloud/carros', requestOptions)
                .then(response => response.json());

            if (response.errors && response.errors.length > 0) {
                //ACA TAMBIEN SALE ERROR POR EL LIMITE DE SOLICITUD PROFE
                alert(response.errors[0]);
            } else {
                setShowCars(!showCars);
            }
        }
        catch (error) {
            alert("Error a listar los carros");
        }
    }

    return (
        <>
            <h2 class="text-pretty text-gray-400 font-serif text-center p-11 text-5xl ">Listado de carros</h2>
            <div class="flex justify-center mb-8">
                <button
                    onClick={DataCarros}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                    Mostrar Carros
                </button>
            </div>
            
                <div class="grid grid-cols-3 gap-4 p-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://preview.redd.it/2025-drivers-official-profile-headshots-v0-6mpmwlh7bgne1.jpg?width=640&crop=smart&auto=webp&s=31c6f7d224231029109630dd68e28054510d9a20" alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Placa: XYZ-124</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Conductor: Emilio Perez</p>
                        </div>
                    </a>

                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://preview.redd.it/2025-drivers-official-profile-headshots-v0-gp5v6cf6bgne1.jpg?width=640&crop=smart&auto=webp&s=e1f358ddca5dad327d1f0ecfd32f98a79cbe2f12" alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Placa: XYZ-SD4</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Conductor: Juan Hernandez</p>
                        </div>
                    </a>

                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://i.redd.it/2025-drivers-official-profile-headshots-v0-ag4569e8bgne1.jpg?width=840&format=pjpg&auto=webp&s=221bf6dba46ca645b77748c7579e66d9413922ce" alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Placa: XYZ-RED</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Conductor: Rosa Maria</p>
                        </div>
                    </a>

                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://i.redd.it/2025-drivers-official-profile-headshots-v0-xn66ojg9bgne1.jpg?width=840&format=pjpg&auto=webp&s=391fdfc8640df487fb5488e9c4c7111b0d285ec5" alt=""/>
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Placa: XYZ-XVD</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Conductor: Mariano Diaz</p>
                        </div>
                    </a>

                </div>
            
        </>
    );
};

export default ListaCarros;
