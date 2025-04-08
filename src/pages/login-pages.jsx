import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');


    //agregar useState para los mensajes de login completado, y login invalido
    const navigate = useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: username, password: password })
            };
            const response = await fetch('https://carros-electricos.wiremockapi.cloud/auth', requestOptions)
                .then(response => response.json());
            
            if (response.errors && response.errors.length > 0) {
                //ERROR POR EL LIMITE DE INTENTOS PROFESOR
                alert(response.errors[0]); 
                //return; 
            }

            navigate('/lista-carros');           
            
            
        }
        catch(error){
            console.log(error);
            alert("Error al intentar hacer login");
        }
    }

return <>
            <form class="max-w-sm mx-auto" onSubmit={handleLogin}>
                <h1 class="text-2xl font-semibold text-gray-900 mb-5">Sign in</h1>
            <div class="mb-5">
                <label for="username" class="block mb-2 text-pretty font-semibold text-sm  text-gray-900 ">User Name</label>
                <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="johndoe" required />
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-pretty font-semibold text-sm text-gray-900 ">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      " placeholder="*********" required />
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">SIGN IN</button>
            </form>
    </>
};
export default Login;